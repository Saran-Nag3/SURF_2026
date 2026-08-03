// Design Value Scraper — main thread (sandbox)
// Produces a deterministic, deduplicated EXISTENCE catalog of raw stored
// values found in the current selection (or page). No frequency, no inference,
// no network, no model calls. Each row asserts only that a value EXISTS.

/** A single existence fact. The seven fields together form the dedupe key. */
interface Row {
  category: string;     // e.g. "Color", "Typography"
  property: string;     // the Figma property the value came from
  value: string;        // the stored value, faithfully encoded
  value_type: string;   // COLOR | FLOAT | INT | STRING | ENUM | BOOL | MIXED | NULL
  unit: string;         // px | percent | deg | AUTO | "" — Figma's own unit
  role: string;         // fill | stroke | effect | "" — where the value lives
  token: string;        // bound variable/style name if any, else ""
}

const COLUMNS: (keyof Row)[] = [
  "category", "property", "value", "value_type", "unit", "role", "token",
];

const seen = new Set<string>();
const rows: Row[] = [];

/** Push a row only if this exact value has not been recorded yet. */
function add(r: Partial<Row> & Pick<Row, "category" | "property" | "value">): void {
  const full: Row = {
    category: r.category,
    property: r.property,
    value: r.value,
    value_type: r.value_type ?? "STRING",
    unit: r.unit ?? "",
    role: r.role ?? "",
    token: r.token ?? "",
  };
  const key = COLUMNS.map((c) => full[c]).join("\u0001");
  if (seen.has(key)) return;
  seen.add(key);
  rows.push(full);
}

const isMixed = (v: unknown): boolean => v === figma.mixed;

/** Trim IEEE float dust without changing the stored value's meaning. */
function num(n: number): string {
  return String(parseFloat(n.toFixed(4)));
}

function hex(c: RGB | RGBA): string {
  const to = (x: number) => Math.round(x * 255).toString(16).padStart(2, "0");
  return ("#" + to(c.r) + to(c.g) + to(c.b)).toUpperCase();
}

// --- Best-effort, never-throwing token/style name resolution -----------------
// Resolving an id to a name is a deterministic lookup of a stored fact, not
// inference. If the host only exposes async variants, we degrade silently and
// still record the raw value (just without the token name).

function variableName(id: string): string {
  try {
    const v = figma.variables.getVariableById(id);
    return v ? v.name : "";
  } catch (_e) {
    return "";
  }
}

function styleName(id: string): string {
  try {
    const s = figma.getStyleById(id);
    return s ? s.name : "";
  } catch (_e) {
    return "";
  }
}

// =============================================================================
// Extractors — each reads ONLY stored properties and adds existence rows.
// =============================================================================

function extractColors(n: SceneNode): void {
  const paintGroups: Array<{ paints: unknown; role: string; bind?: string }> = [];
  if ("fills" in n && !isMixed(n.fills)) {
    paintGroups.push({ paints: n.fills, role: "fill", bind: "fills" });
  }
  if ("strokes" in n && Array.isArray((n as GeometryMixin).strokes)) {
    paintGroups.push({ paints: (n as GeometryMixin).strokes, role: "stroke", bind: "strokes" });
  }

  for (const g of paintGroups) {
    const paints = g.paints as readonly Paint[];
    if (!Array.isArray(paints)) continue;

    // Variable bindings on this paint array, aligned by index when present.
    let aliases: VariableAlias[] = [];
    const bv = (n as SceneNode & { boundVariables?: Record<string, unknown> }).boundVariables;
    if (g.bind && bv && bv[g.bind]) aliases = bv[g.bind] as VariableAlias[];

    paints.forEach((p, i) => {
      const tok = aliases[i] ? variableName(aliases[i].id) : "";
      if (p.type === "SOLID") {
        add({ category: "Color", property: "color", value: hex(p.color), value_type: "COLOR", role: g.role, token: tok });
        if (p.opacity !== undefined && p.opacity < 1) {
          add({ category: "Color", property: "colorOpacity", value: num(p.opacity), value_type: "FLOAT", role: g.role });
        }
      } else if (p.type.startsWith("GRADIENT")) {
        const gp = p as GradientPaint;
        add({ category: "Color", property: "gradientType", value: gp.type, value_type: "ENUM", role: g.role, token: tok });
        gp.gradientStops.forEach((s) => {
          add({ category: "Color", property: "gradientStopColor", value: hex(s.color), value_type: "COLOR", role: g.role });
          if (s.color.a < 1) add({ category: "Color", property: "gradientStopAlpha", value: num(s.color.a), value_type: "FLOAT", role: g.role });
        });
      } else if (p.type === "IMAGE") {
        const ip = p as ImagePaint;
        if (ip.imageHash) add({ category: "Color", property: "imageHash", value: ip.imageHash, value_type: "STRING", role: g.role });
        if (ip.scaleMode) add({ category: "Color", property: "imageScaleMode", value: ip.scaleMode, value_type: "ENUM", role: g.role });
      }
    });
  }
}

function extractStrokeGeometry(n: SceneNode): void {
  const g = n as GeometryMixin & { dashPattern?: readonly number[]; strokeCap?: unknown; strokeJoin?: unknown };
  if (!("strokes" in n) || !Array.isArray(g.strokes) || g.strokes.length === 0) return;

  if ("strokeWeight" in n && !isMixed((n as { strokeWeight: unknown }).strokeWeight)) {
    add({ category: "Stroke", property: "strokeWeight", value: num((n as { strokeWeight: number }).strokeWeight), value_type: "FLOAT", unit: "px" });
  }
  if ("strokeAlign" in n) add({ category: "Stroke", property: "strokeAlign", value: String((n as { strokeAlign: string }).strokeAlign), value_type: "ENUM" });
  if (g.dashPattern && g.dashPattern.length) add({ category: "Stroke", property: "dashPattern", value: g.dashPattern.map(num).join(","), value_type: "STRING", unit: "px" });
  if (g.strokeCap && !isMixed(g.strokeCap)) add({ category: "Stroke", property: "strokeCap", value: String(g.strokeCap), value_type: "ENUM" });
  if (g.strokeJoin && !isMixed(g.strokeJoin)) add({ category: "Stroke", property: "strokeJoin", value: String(g.strokeJoin), value_type: "ENUM" });
}

function extractRadius(n: SceneNode): void {
  if (!("cornerRadius" in n)) return;
  const cr = (n as { cornerRadius: number | typeof figma.mixed }).cornerRadius;
  if (!isMixed(cr)) {
    add({ category: "Radius", property: "cornerRadius", value: num(cr as number), value_type: "FLOAT", unit: "px" });
    return;
  }
  // Mixed corners: read each corner faithfully rather than collapsing to one.
  const corners: (keyof typeof n)[] = ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"] as never;
  for (const c of corners) {
    const v = (n as unknown as Record<string, unknown>)[c as string];
    if (typeof v === "number") add({ category: "Radius", property: c as string, value: num(v), value_type: "FLOAT", unit: "px" });
  }
}

function extractEffects(n: SceneNode): void {
  if (!("effects" in n)) return;
  const effects = (n as BlendMixin).effects;
  if (!Array.isArray(effects)) return;
  for (const e of effects) {
    add({ category: "Effects", property: "effectType", value: e.type, value_type: "ENUM" });
    if ("radius" in e) add({ category: "Effects", property: "effectRadius", value: num(e.radius), value_type: "FLOAT", unit: "px", role: e.type });
    if ("spread" in e && typeof e.spread === "number") add({ category: "Effects", property: "effectSpread", value: num(e.spread), value_type: "FLOAT", unit: "px", role: e.type });
    if ("offset" in e && e.offset) {
      add({ category: "Effects", property: "effectOffsetX", value: num(e.offset.x), value_type: "FLOAT", unit: "px", role: e.type });
      add({ category: "Effects", property: "effectOffsetY", value: num(e.offset.y), value_type: "FLOAT", unit: "px", role: e.type });
    }
    if ("color" in e && e.color) add({ category: "Color", property: "color", value: hex(e.color), value_type: "COLOR", role: "effect" });
  }
}

function extractOpacityBlend(n: SceneNode): void {
  if ("opacity" in n) add({ category: "OpacityBlend", property: "opacity", value: num((n as BlendMixin).opacity), value_type: "FLOAT" });
  if ("blendMode" in n) add({ category: "OpacityBlend", property: "blendMode", value: String((n as BlendMixin).blendMode), value_type: "ENUM" });
  if ("isMask" in n) add({ category: "OpacityBlend", property: "isMask", value: String((n as BlendMixin).isMask), value_type: "BOOL" });
}

function extractLayout(n: SceneNode): void {
  const f = n as Partial<BaseFrameMixin> & Partial<AutoLayoutChildrenMixin>;
  if ("layoutMode" in n) {
    add({ category: "Layout", property: "layoutMode", value: String(f.layoutMode), value_type: "ENUM" });
    if (f.layoutMode !== "NONE") {
      if (typeof f.itemSpacing === "number") add({ category: "Layout", property: "itemSpacing", value: num(f.itemSpacing), value_type: "FLOAT", unit: "px" });
      if (typeof f.counterAxisSpacing === "number") add({ category: "Layout", property: "counterAxisSpacing", value: num(f.counterAxisSpacing), value_type: "FLOAT", unit: "px" });
      (["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"] as const).forEach((p) => {
        const v = (f as unknown as Record<string, unknown>)[p];
        if (typeof v === "number") add({ category: "Layout", property: p, value: num(v), value_type: "FLOAT", unit: "px" });
      });
      if (f.primaryAxisAlignItems) add({ category: "Layout", property: "primaryAxisAlignItems", value: String(f.primaryAxisAlignItems), value_type: "ENUM" });
      if (f.counterAxisAlignItems) add({ category: "Layout", property: "counterAxisAlignItems", value: String(f.counterAxisAlignItems), value_type: "ENUM" });
      if (f.layoutWrap) add({ category: "Layout", property: "layoutWrap", value: String(f.layoutWrap), value_type: "ENUM" });
    }
  }
  (["layoutSizingHorizontal", "layoutSizingVertical", "layoutAlign"] as const).forEach((p) => {
    if (p in n) add({ category: "Layout", property: p, value: String((n as unknown as Record<string, unknown>)[p]), value_type: "ENUM" });
  });
  if ("layoutGrow" in n) add({ category: "Layout", property: "layoutGrow", value: num((n as { layoutGrow: number }).layoutGrow), value_type: "FLOAT" });
}

function extractConstraints(n: SceneNode): void {
  if (!("constraints" in n)) return;
  const c = (n as ConstraintMixin).constraints;
  if (!c) return;
  add({ category: "Constraints", property: "horizontal", value: c.horizontal, value_type: "ENUM" });
  add({ category: "Constraints", property: "vertical", value: c.vertical, value_type: "ENUM" });
}

function extractDimensions(n: SceneNode): void {
  if ("width" in n) add({ category: "Dimensions", property: "width", value: num(n.width), value_type: "FLOAT", unit: "px" });
  if ("height" in n) add({ category: "Dimensions", property: "height", value: num(n.height), value_type: "FLOAT", unit: "px" });
  if ("rotation" in n && typeof (n as LayoutMixin).rotation === "number") {
    add({ category: "Dimensions", property: "rotation", value: num((n as LayoutMixin).rotation), value_type: "FLOAT", unit: "deg" });
  }
}

function lineHeightRow(lh: LineHeight): void {
  if (lh.unit === "AUTO") add({ category: "Typography", property: "lineHeight", value: "AUTO", value_type: "ENUM", unit: "AUTO" });
  else add({ category: "Typography", property: "lineHeight", value: num(lh.value), value_type: "FLOAT", unit: lh.unit === "PIXELS" ? "px" : "percent" });
}

function letterSpacingRow(ls: LetterSpacing): void {
  add({ category: "Typography", property: "letterSpacing", value: num(ls.value), value_type: "FLOAT", unit: ls.unit === "PIXELS" ? "px" : "percent" });
}

function extractTypography(n: SceneNode): void {
  if (n.type !== "TEXT") return;
  const t = n as TextNode;

  // Segment-aware: captures every distinct value even inside mixed-style text.
  let segments: StyledTextSegment[] = [];
  try {
    segments = t.getStyledTextSegments([
      "fontName", "fontSize", "lineHeight", "letterSpacing",
      "textCase", "textDecoration", "fills", "fillStyleId", "textStyleId",
    ]) as unknown as StyledTextSegment[];
  } catch (_e) {
    segments = [];
  }

  for (const s of segments) {
    if (s.fontName) {
      add({ category: "Typography", property: "fontFamily", value: s.fontName.family, value_type: "STRING" });
      add({ category: "Typography", property: "fontStyle", value: s.fontName.style, value_type: "STRING" });
    }
    if (typeof s.fontSize === "number") add({ category: "Typography", property: "fontSize", value: num(s.fontSize), value_type: "FLOAT", unit: "px" });
    if (s.lineHeight) lineHeightRow(s.lineHeight);
    if (s.letterSpacing) letterSpacingRow(s.letterSpacing);
    if (s.textCase) add({ category: "Typography", property: "textCase", value: String(s.textCase), value_type: "ENUM" });
    if (s.textDecoration) add({ category: "Typography", property: "textDecoration", value: String(s.textDecoration), value_type: "ENUM" });
    if (Array.isArray(s.fills)) {
      for (const p of s.fills) if (p.type === "SOLID") add({ category: "Color", property: "color", value: hex(p.color), value_type: "COLOR", role: "text" });
    }
    if (s.textStyleId && typeof s.textStyleId === "string") {
      const nm = styleName(s.textStyleId);
      if (nm) add({ category: "Token", property: "style:text", value: nm, value_type: "STRING", role: "text" });
    }
  }

  if ("textAlignHorizontal" in t) add({ category: "Typography", property: "textAlignHorizontal", value: String(t.textAlignHorizontal), value_type: "ENUM" });
  if ("textAlignVertical" in t) add({ category: "Typography", property: "textAlignVertical", value: String(t.textAlignVertical), value_type: "ENUM" });
  if (typeof t.paragraphSpacing === "number") add({ category: "Typography", property: "paragraphSpacing", value: num(t.paragraphSpacing), value_type: "FLOAT", unit: "px" });
  if (typeof t.paragraphIndent === "number") add({ category: "Typography", property: "paragraphIndent", value: num(t.paragraphIndent), value_type: "FLOAT", unit: "px" });
}

function extractTokens(n: SceneNode): void {
  // Catalog of every distinct token/style reference that EXISTS in the design.
  const bv = (n as SceneNode & { boundVariables?: Record<string, unknown> }).boundVariables;
  if (bv) {
    for (const field of Object.keys(bv)) {
      const entry = bv[field];
      const aliases: VariableAlias[] = Array.isArray(entry) ? (entry as VariableAlias[]) : [entry as VariableAlias];
      for (const a of aliases) {
        if (a && a.id) {
          const nm = variableName(a.id);
          if (nm) add({ category: "Token", property: "variable", value: nm, value_type: "STRING", role: field });
        }
      }
    }
  }
  const styleFields: Array<[string, string]> = [
    ["fillStyleId", "fill"], ["strokeStyleId", "stroke"],
    ["effectStyleId", "effect"], ["textStyleId", "text"], ["gridStyleId", "grid"],
  ];
  for (const [prop, role] of styleFields) {
    if (prop in n) {
      const id = (n as unknown as Record<string, unknown>)[prop];
      if (typeof id === "string" && id) {
        const nm = styleName(id);
        if (nm) add({ category: "Token", property: "style", value: nm, value_type: "STRING", role });
      }
    }
  }
}

function extractStructure(n: SceneNode): void {
  add({ category: "Structure", property: "nodeType", value: n.type, value_type: "ENUM" });
}

const EXTRACTORS: Array<(n: SceneNode) => void> = [
  extractStructure, extractColors, extractStrokeGeometry, extractRadius,
  extractEffects, extractOpacityBlend, extractLayout, extractConstraints,
  extractDimensions, extractTypography, extractTokens,
];

// =============================================================================
// Traversal + output
// =============================================================================

function collectNodes(scope: string): SceneNode[] {
  const sel = figma.currentPage.selection;
  const roots: readonly SceneNode[] =
    scope === "selection" && sel.length ? sel : figma.currentPage.children;
  const out: SceneNode[] = [];
  const walk = (n: SceneNode): void => {
    out.push(n);
    if ("children" in n) for (const c of (n as ChildrenMixin).children) walk(c as SceneNode);
  };
  for (const r of roots) walk(r);
  return out;
}

function sortRows(): void {
  rows.sort((a, b) => {
    for (const c of COLUMNS) {
      const cmp = a[c].localeCompare(b[c], "en", { numeric: true });
      if (cmp !== 0) return cmp;
    }
    return 0;
  });
}

function run(scope: string): void {
  seen.clear();
  rows.length = 0;
  const nodes = collectNodes(scope);
  for (const n of nodes) {
    for (const ex of EXTRACTORS) {
      try { ex(n); } catch (_e) { /* never let one node abort the scrape */ }
    }
  }
  sortRows();
  figma.ui.postMessage({
    type: "result",
    columns: COLUMNS,
    rows,
    fileName: figma.root.name,
    nodeCount: nodes.length,
    scope: scope === "selection" && figma.currentPage.selection.length ? "selection" : "page",
  });
}

figma.showUI(__html__, { width: 340, height: 420, themeColors: true });

figma.ui.onmessage = (msg: { type: string; scope?: string }): void => {
  if (msg.type === "run") run(msg.scope || "selection");
  else if (msg.type === "close") figma.closePlugin();
};
