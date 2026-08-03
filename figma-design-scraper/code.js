"use strict";
// Design Value Scraper — main thread (sandbox)
// Produces a deterministic, deduplicated EXISTENCE catalog of raw stored
// values found in the current selection (or page). No frequency, no inference,
// no network, no model calls. Each row asserts only that a value EXISTS.
const COLUMNS = [
    "category", "property", "value", "value_type", "unit", "role", "token",
];
const seen = new Set();
const rows = [];
/** Push a row only if this exact value has not been recorded yet. */
function add(r) {
    var _a, _b, _c, _d;
    const full = {
        category: r.category,
        property: r.property,
        value: r.value,
        value_type: (_a = r.value_type) !== null && _a !== void 0 ? _a : "STRING",
        unit: (_b = r.unit) !== null && _b !== void 0 ? _b : "",
        role: (_c = r.role) !== null && _c !== void 0 ? _c : "",
        token: (_d = r.token) !== null && _d !== void 0 ? _d : "",
    };
    const key = COLUMNS.map((c) => full[c]).join("\u0001");
    if (seen.has(key))
        return;
    seen.add(key);
    rows.push(full);
}
const isMixed = (v) => v === figma.mixed;
/** Trim IEEE float dust without changing the stored value's meaning. */
function num(n) {
    return String(parseFloat(n.toFixed(4)));
}
function hex(c) {
    const to = (x) => Math.round(x * 255).toString(16).padStart(2, "0");
    return ("#" + to(c.r) + to(c.g) + to(c.b)).toUpperCase();
}
// --- Best-effort, never-throwing token/style name resolution -----------------
// Resolving an id to a name is a deterministic lookup of a stored fact, not
// inference. If the host only exposes async variants, we degrade silently and
// still record the raw value (just without the token name).
function variableName(id) {
    try {
        const v = figma.variables.getVariableById(id);
        return v ? v.name : "";
    }
    catch (_e) {
        return "";
    }
}
function styleName(id) {
    try {
        const s = figma.getStyleById(id);
        return s ? s.name : "";
    }
    catch (_e) {
        return "";
    }
}
// =============================================================================
// Extractors — each reads ONLY stored properties and adds existence rows.
// =============================================================================
function extractColors(n) {
    const paintGroups = [];
    if ("fills" in n && !isMixed(n.fills)) {
        paintGroups.push({ paints: n.fills, role: "fill", bind: "fills" });
    }
    if ("strokes" in n && Array.isArray(n.strokes)) {
        paintGroups.push({ paints: n.strokes, role: "stroke", bind: "strokes" });
    }
    for (const g of paintGroups) {
        const paints = g.paints;
        if (!Array.isArray(paints))
            continue;
        // Variable bindings on this paint array, aligned by index when present.
        let aliases = [];
        const bv = n.boundVariables;
        if (g.bind && bv && bv[g.bind])
            aliases = bv[g.bind];
        paints.forEach((p, i) => {
            const tok = aliases[i] ? variableName(aliases[i].id) : "";
            if (p.type === "SOLID") {
                add({ category: "Color", property: "color", value: hex(p.color), value_type: "COLOR", role: g.role, token: tok });
                if (p.opacity !== undefined && p.opacity < 1) {
                    add({ category: "Color", property: "colorOpacity", value: num(p.opacity), value_type: "FLOAT", role: g.role });
                }
            }
            else if (p.type.startsWith("GRADIENT")) {
                const gp = p;
                add({ category: "Color", property: "gradientType", value: gp.type, value_type: "ENUM", role: g.role, token: tok });
                gp.gradientStops.forEach((s) => {
                    add({ category: "Color", property: "gradientStopColor", value: hex(s.color), value_type: "COLOR", role: g.role });
                    if (s.color.a < 1)
                        add({ category: "Color", property: "gradientStopAlpha", value: num(s.color.a), value_type: "FLOAT", role: g.role });
                });
            }
            else if (p.type === "IMAGE") {
                const ip = p;
                if (ip.imageHash)
                    add({ category: "Color", property: "imageHash", value: ip.imageHash, value_type: "STRING", role: g.role });
                if (ip.scaleMode)
                    add({ category: "Color", property: "imageScaleMode", value: ip.scaleMode, value_type: "ENUM", role: g.role });
            }
        });
    }
}
function extractStrokeGeometry(n) {
    const g = n;
    if (!("strokes" in n) || !Array.isArray(g.strokes) || g.strokes.length === 0)
        return;
    if ("strokeWeight" in n && !isMixed(n.strokeWeight)) {
        add({ category: "Stroke", property: "strokeWeight", value: num(n.strokeWeight), value_type: "FLOAT", unit: "px" });
    }
    if ("strokeAlign" in n)
        add({ category: "Stroke", property: "strokeAlign", value: String(n.strokeAlign), value_type: "ENUM" });
    if (g.dashPattern && g.dashPattern.length)
        add({ category: "Stroke", property: "dashPattern", value: g.dashPattern.map(num).join(","), value_type: "STRING", unit: "px" });
    if (g.strokeCap && !isMixed(g.strokeCap))
        add({ category: "Stroke", property: "strokeCap", value: String(g.strokeCap), value_type: "ENUM" });
    if (g.strokeJoin && !isMixed(g.strokeJoin))
        add({ category: "Stroke", property: "strokeJoin", value: String(g.strokeJoin), value_type: "ENUM" });
}
function extractRadius(n) {
    if (!("cornerRadius" in n))
        return;
    const cr = n.cornerRadius;
    if (!isMixed(cr)) {
        add({ category: "Radius", property: "cornerRadius", value: num(cr), value_type: "FLOAT", unit: "px" });
        return;
    }
    // Mixed corners: read each corner faithfully rather than collapsing to one.
    const corners = ["topLeftRadius", "topRightRadius", "bottomRightRadius", "bottomLeftRadius"];
    for (const c of corners) {
        const v = n[c];
        if (typeof v === "number")
            add({ category: "Radius", property: c, value: num(v), value_type: "FLOAT", unit: "px" });
    }
}
function extractEffects(n) {
    if (!("effects" in n))
        return;
    const effects = n.effects;
    if (!Array.isArray(effects))
        return;
    for (const e of effects) {
        add({ category: "Effects", property: "effectType", value: e.type, value_type: "ENUM" });
        if ("radius" in e)
            add({ category: "Effects", property: "effectRadius", value: num(e.radius), value_type: "FLOAT", unit: "px", role: e.type });
        if ("spread" in e && typeof e.spread === "number")
            add({ category: "Effects", property: "effectSpread", value: num(e.spread), value_type: "FLOAT", unit: "px", role: e.type });
        if ("offset" in e && e.offset) {
            add({ category: "Effects", property: "effectOffsetX", value: num(e.offset.x), value_type: "FLOAT", unit: "px", role: e.type });
            add({ category: "Effects", property: "effectOffsetY", value: num(e.offset.y), value_type: "FLOAT", unit: "px", role: e.type });
        }
        if ("color" in e && e.color)
            add({ category: "Color", property: "color", value: hex(e.color), value_type: "COLOR", role: "effect" });
    }
}
function extractOpacityBlend(n) {
    if ("opacity" in n)
        add({ category: "OpacityBlend", property: "opacity", value: num(n.opacity), value_type: "FLOAT" });
    if ("blendMode" in n)
        add({ category: "OpacityBlend", property: "blendMode", value: String(n.blendMode), value_type: "ENUM" });
    if ("isMask" in n)
        add({ category: "OpacityBlend", property: "isMask", value: String(n.isMask), value_type: "BOOL" });
}
function extractLayout(n) {
    const f = n;
    if ("layoutMode" in n) {
        add({ category: "Layout", property: "layoutMode", value: String(f.layoutMode), value_type: "ENUM" });
        if (f.layoutMode !== "NONE") {
            if (typeof f.itemSpacing === "number")
                add({ category: "Layout", property: "itemSpacing", value: num(f.itemSpacing), value_type: "FLOAT", unit: "px" });
            if (typeof f.counterAxisSpacing === "number")
                add({ category: "Layout", property: "counterAxisSpacing", value: num(f.counterAxisSpacing), value_type: "FLOAT", unit: "px" });
            ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"].forEach((p) => {
                const v = f[p];
                if (typeof v === "number")
                    add({ category: "Layout", property: p, value: num(v), value_type: "FLOAT", unit: "px" });
            });
            if (f.primaryAxisAlignItems)
                add({ category: "Layout", property: "primaryAxisAlignItems", value: String(f.primaryAxisAlignItems), value_type: "ENUM" });
            if (f.counterAxisAlignItems)
                add({ category: "Layout", property: "counterAxisAlignItems", value: String(f.counterAxisAlignItems), value_type: "ENUM" });
            if (f.layoutWrap)
                add({ category: "Layout", property: "layoutWrap", value: String(f.layoutWrap), value_type: "ENUM" });
        }
    }
    ["layoutSizingHorizontal", "layoutSizingVertical", "layoutAlign"].forEach((p) => {
        if (p in n)
            add({ category: "Layout", property: p, value: String(n[p]), value_type: "ENUM" });
    });
    if ("layoutGrow" in n)
        add({ category: "Layout", property: "layoutGrow", value: num(n.layoutGrow), value_type: "FLOAT" });
}
function extractConstraints(n) {
    if (!("constraints" in n))
        return;
    const c = n.constraints;
    if (!c)
        return;
    add({ category: "Constraints", property: "horizontal", value: c.horizontal, value_type: "ENUM" });
    add({ category: "Constraints", property: "vertical", value: c.vertical, value_type: "ENUM" });
}
function extractDimensions(n) {
    if ("width" in n)
        add({ category: "Dimensions", property: "width", value: num(n.width), value_type: "FLOAT", unit: "px" });
    if ("height" in n)
        add({ category: "Dimensions", property: "height", value: num(n.height), value_type: "FLOAT", unit: "px" });
    if ("rotation" in n && typeof n.rotation === "number") {
        add({ category: "Dimensions", property: "rotation", value: num(n.rotation), value_type: "FLOAT", unit: "deg" });
    }
}
function lineHeightRow(lh) {
    if (lh.unit === "AUTO")
        add({ category: "Typography", property: "lineHeight", value: "AUTO", value_type: "ENUM", unit: "AUTO" });
    else
        add({ category: "Typography", property: "lineHeight", value: num(lh.value), value_type: "FLOAT", unit: lh.unit === "PIXELS" ? "px" : "percent" });
}
function letterSpacingRow(ls) {
    add({ category: "Typography", property: "letterSpacing", value: num(ls.value), value_type: "FLOAT", unit: ls.unit === "PIXELS" ? "px" : "percent" });
}
function extractTypography(n) {
    if (n.type !== "TEXT")
        return;
    const t = n;
    // Segment-aware: captures every distinct value even inside mixed-style text.
    let segments = [];
    try {
        segments = t.getStyledTextSegments([
            "fontName", "fontSize", "lineHeight", "letterSpacing",
            "textCase", "textDecoration", "fills", "fillStyleId", "textStyleId",
        ]);
    }
    catch (_e) {
        segments = [];
    }
    for (const s of segments) {
        if (s.fontName) {
            add({ category: "Typography", property: "fontFamily", value: s.fontName.family, value_type: "STRING" });
            add({ category: "Typography", property: "fontStyle", value: s.fontName.style, value_type: "STRING" });
        }
        if (typeof s.fontSize === "number")
            add({ category: "Typography", property: "fontSize", value: num(s.fontSize), value_type: "FLOAT", unit: "px" });
        if (s.lineHeight)
            lineHeightRow(s.lineHeight);
        if (s.letterSpacing)
            letterSpacingRow(s.letterSpacing);
        if (s.textCase)
            add({ category: "Typography", property: "textCase", value: String(s.textCase), value_type: "ENUM" });
        if (s.textDecoration)
            add({ category: "Typography", property: "textDecoration", value: String(s.textDecoration), value_type: "ENUM" });
        if (Array.isArray(s.fills)) {
            for (const p of s.fills)
                if (p.type === "SOLID")
                    add({ category: "Color", property: "color", value: hex(p.color), value_type: "COLOR", role: "text" });
        }
        if (s.textStyleId && typeof s.textStyleId === "string") {
            const nm = styleName(s.textStyleId);
            if (nm)
                add({ category: "Token", property: "style:text", value: nm, value_type: "STRING", role: "text" });
        }
    }
    if ("textAlignHorizontal" in t)
        add({ category: "Typography", property: "textAlignHorizontal", value: String(t.textAlignHorizontal), value_type: "ENUM" });
    if ("textAlignVertical" in t)
        add({ category: "Typography", property: "textAlignVertical", value: String(t.textAlignVertical), value_type: "ENUM" });
    if (typeof t.paragraphSpacing === "number")
        add({ category: "Typography", property: "paragraphSpacing", value: num(t.paragraphSpacing), value_type: "FLOAT", unit: "px" });
    if (typeof t.paragraphIndent === "number")
        add({ category: "Typography", property: "paragraphIndent", value: num(t.paragraphIndent), value_type: "FLOAT", unit: "px" });
}
function extractTokens(n) {
    // Catalog of every distinct token/style reference that EXISTS in the design.
    const bv = n.boundVariables;
    if (bv) {
        for (const field of Object.keys(bv)) {
            const entry = bv[field];
            const aliases = Array.isArray(entry) ? entry : [entry];
            for (const a of aliases) {
                if (a && a.id) {
                    const nm = variableName(a.id);
                    if (nm)
                        add({ category: "Token", property: "variable", value: nm, value_type: "STRING", role: field });
                }
            }
        }
    }
    const styleFields = [
        ["fillStyleId", "fill"], ["strokeStyleId", "stroke"],
        ["effectStyleId", "effect"], ["textStyleId", "text"], ["gridStyleId", "grid"],
    ];
    for (const [prop, role] of styleFields) {
        if (prop in n) {
            const id = n[prop];
            if (typeof id === "string" && id) {
                const nm = styleName(id);
                if (nm)
                    add({ category: "Token", property: "style", value: nm, value_type: "STRING", role });
            }
        }
    }
}
function extractStructure(n) {
    add({ category: "Structure", property: "nodeType", value: n.type, value_type: "ENUM" });
}
const EXTRACTORS = [
    extractStructure, extractColors, extractStrokeGeometry, extractRadius,
    extractEffects, extractOpacityBlend, extractLayout, extractConstraints,
    extractDimensions, extractTypography, extractTokens,
];
// =============================================================================
// Traversal + output
// =============================================================================
function collectNodes(scope) {
    const sel = figma.currentPage.selection;
    const roots = scope === "selection" && sel.length ? sel : figma.currentPage.children;
    const out = [];
    const walk = (n) => {
        out.push(n);
        if ("children" in n)
            for (const c of n.children)
                walk(c);
    };
    for (const r of roots)
        walk(r);
    return out;
}
function sortRows() {
    rows.sort((a, b) => {
        for (const c of COLUMNS) {
            const cmp = a[c].localeCompare(b[c], "en", { numeric: true });
            if (cmp !== 0)
                return cmp;
        }
        return 0;
    });
}
function run(scope) {
    seen.clear();
    rows.length = 0;
    const nodes = collectNodes(scope);
    for (const n of nodes) {
        for (const ex of EXTRACTORS) {
            try {
                ex(n);
            }
            catch (_e) { /* never let one node abort the scrape */ }
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
figma.ui.onmessage = (msg) => {
    if (msg.type === "run")
        run(msg.scope || "selection");
    else if (msg.type === "close")
        figma.closePlugin();
};
