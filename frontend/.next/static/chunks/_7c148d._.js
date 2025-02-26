(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_7c148d._.js", {

"[project]/components/ui/ImageGrid.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "grid": "ImageGrid-module__ZytFXG__grid",
  "image": "ImageGrid-module__ZytFXG__image",
  "imageWrapper": "ImageGrid-module__ZytFXG__imageWrapper",
  "zoomed": "ImageGrid-module__ZytFXG__zoomed",
});
}}),
"[project]/components/ui/imageGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ImageGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ImageGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/components/ui/ImageGrid.module.css [app-client] (css module)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const images = Array.from({
    length: 11
}, (_, i)=>`/brands/image${i + 1}.png`);
function ImageGrid() {
    _s();
    const [zoomedIndex, setZoomedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleImageClick = (index)=>{
        setZoomedIndex(zoomedIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ImageGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
        children: images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ImageGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrapper} ${zoomedIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ImageGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].zoomed : ""}`,
                onClick: ()=>handleImageClick(index),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: src || "/placeholder.svg",
                    alt: `Image ${index + 1}`,
                    fill: true,
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ImageGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                }, void 0, false, {
                    fileName: "[project]/components/ui/imageGrid.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, src, false, {
                fileName: "[project]/components/ui/imageGrid.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ui/imageGrid.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ImageGrid, "QM7yU+0Xr+adNsXdbzAKwCdWROI=");
_c = ImageGrid;
var _c;
__turbopack_refresh__.register(_c, "ImageGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/parceiros/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_7c148d._.js.map