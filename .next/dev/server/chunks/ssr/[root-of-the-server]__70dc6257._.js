module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/belts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "belts",
    ()=>belts,
    "getAllBeltIds",
    ()=>getAllBeltIds,
    "getBeltById",
    ()=>getBeltById
]);
const belts = [
    {
        id: "heritage-trio",
        name: "Heritage Trio",
        description: "A celebration of classic Western-inspired hardware, this statement belt pairs sculpted metalwork with rich leather tones for a timeless, collectible piece.",
        material: "Full-Grain Leather",
        details: [
            "Hand-polished antique gold buckle set",
            "Three-tone leather palette",
            "Width: 3.2 cm",
            "Designed in Brazil"
        ],
        gradient: "linear-gradient(135deg, #C79A63 0%, #8A5A35 50%, #3A2414 100%)",
        accentColor: "#D9B26A",
        image: "/produto1.jpeg"
    },
    {
        id: "amber-trail",
        name: "Amber Trail",
        description: "Warm amber leather with subtle texture and sculpted buckle detailing, ideal for elevating denim or cinching a fluid dress.",
        material: "Vegetable-Tanned Leather",
        details: [
            "Hand-burnished finish",
            "Brass-finished buckle and keeper",
            "Width: 3.5 cm",
            "Ages with a unique patina"
        ],
        gradient: "linear-gradient(135deg, #E1A057 0%, #BC7332 50%, #6C3B1A 100%)",
        accentColor: "#E9B26C",
        image: "/produto2.jpeg"
    },
    {
        id: "saddle-vintage",
        name: "Saddle Vintage",
        description: "Inspired by heritage saddlery, this belt features a deep saddle-brown tone with vintage metal accents for everyday luxury.",
        material: "Italian Full-Grain Leather",
        details: [
            "Contrast topstitching",
            "Vintage brass buckle",
            "Width: 3.8 cm",
            "Hand-cut and edge-painted"
        ],
        gradient: "linear-gradient(135deg, #A5663A 0%, #7A4323 50%, #3E2213 100%)",
        accentColor: "#C88A54",
        image: "/produto3.jpeg"
    },
    {
        id: "noir-eclipse",
        name: "Noir Eclipse",
        description: "A sleek midnight-black belt with dramatic metalwork that adds instant edge to tailored and casual looks alike.",
        material: "Premium Calfskin",
        details: [
            "Matte black leather finish",
            "Sculpted gunmetal buckle",
            "Width: 3 cm",
            "Smooth, flexible hand-feel"
        ],
        gradient: "linear-gradient(135deg, #2B2B2B 0%, #141414 50%, #050505 100%)",
        accentColor: "#555555",
        image: "/produto4.jpeg"
    },
    {
        id: "terra-rustica",
        name: "Terra Rustica",
        description: "Earthy, sun-warmed brown leather with artisanal buckle engraving that nods to handcrafted traditions.",
        material: "Waxed Leather",
        details: [
            "Lightly distressed texture",
            "Etched brass-tone buckle",
            "Width: 3.4 cm",
            "Water-resistant waxed finish"
        ],
        gradient: "linear-gradient(135deg, #B2734A 0%, #8B4B2A 50%, #4A2414 100%)",
        accentColor: "#E09B62",
        image: "/produto5.jpeg"
    },
    {
        id: "desert-ember",
        name: "Desert Ember",
        description: "A glowing burnt-orange belt that recalls desert sunsets, finished with bold metallic details for a modern statement.",
        material: "Top-Grain Leather",
        details: [
            "Smooth waxed surface",
            "Brushed gold buckle",
            "Width: 3.2 cm",
            "Colorfast dyed through the hide"
        ],
        gradient: "linear-gradient(135deg, #F48C4A 0%, #D26631 50%, #7C3515 100%)",
        accentColor: "#FFB27A",
        image: "/produto6.jpeg"
    },
    {
        id: "mahogany-crest",
        name: "Mahogany Crest",
        description: "Deep mahogany tones and crest-inspired buckle engraving come together in a belt designed for elevated everyday wear.",
        material: "Vegetable-Tanned Leather",
        details: [
            "Rich, multi-tone color depth",
            "Signature engraved buckle",
            "Width: 3.5 cm",
            "Edges burnished by hand"
        ],
        gradient: "linear-gradient(135deg, #7F3B30 0%, #5B221C 50%, #321112 100%)",
        accentColor: "#C06855",
        image: "/produto7.jpeg"
    },
    {
        id: "copper-sands",
        name: "Copper Sands",
        description: "Soft copper-brown leather with a gentle sheen, perfect for adding warmth to monochrome or neutral outfits.",
        material: "Nubuck Leather",
        details: [
            "Powdery, velvety surface",
            "Light antique brass buckle",
            "Width: 3.8 cm",
            "Comfortable, flexible structure"
        ],
        gradient: "linear-gradient(135deg, #C8875A 0%, #A0633F 50%, #5A2F1B 100%)",
        accentColor: "#F1B181",
        image: "/produto8.jpeg"
    },
    {
        id: "midnight-halo",
        name: "Midnight Halo",
        description: "An inky black belt framed by luminous metalwork, ideal for sharp tailoring and minimalist silhouettes.",
        material: "Smooth Calf Leather",
        details: [
            "High-contrast metal hardware",
            "Sleek, untextured strap",
            "Width: 3 cm",
            "Subtle tonal edge painting"
        ],
        gradient: "linear-gradient(135deg, #232323 0%, #101010 50%, #000000 100%)",
        accentColor: "#C0B28A",
        image: "/produto9.jpeg"
    },
    {
        id: "brass-orbit",
        name: "Brass Orbit",
        description: "A sculptural brass-tone buckle meets structured leather, creating a bold belt that anchors any look.",
        material: "Full-Grain Leather",
        details: [
            "Bold central buckle silhouette",
            "Structured strap keeps its shape",
            "Width: 3.6 cm",
            "Crafted in limited runs"
        ],
        gradient: "linear-gradient(135deg, #C4A15B 0%, #8B6C33 50%, #473619 100%)",
        accentColor: "#E3C276",
        image: "/produto10.jpeg"
    },
    {
        id: "onyx-ridge",
        name: "Onyx Ridge",
        description: "Textured black leather with a ridged grain and darkened buckle, designed for subtle depth and dimension.",
        material: "Grain-Embossed Leather",
        details: [
            "Pronounced grain pattern",
            "Dark nickel hardware",
            "Width: 3.2 cm",
            "Durable, everyday construction"
        ],
        gradient: "linear-gradient(135deg, #3B3B3B 0%, #202020 50%, #070707 100%)",
        accentColor: "#797979",
        image: "/produto11.jpeg"
    },
    {
        id: "sandstone-loop",
        name: "Sandstone Loop",
        description: "A soft sandstone hue with tonal stitching and gently rounded hardware, bringing an understated elegance to your wardrobe.",
        material: "Suede-Effect Leather",
        details: [
            "Tonal edge stitching",
            "Rounded, polished buckle",
            "Width: 3.4 cm",
            "Soft, flexible hand-feel"
        ],
        gradient: "linear-gradient(135deg, #E3C7A0 0%, #C79D72 50%, #8C6643 100%)",
        accentColor: "#F1D3AC",
        image: "/produto12.jpeg"
    },
    {
        id: "caramel-boulevard",
        name: "Caramel Boulevard",
        description: "A luminous caramel belt that pairs beautifully with denim, tailoring, and airy dresses alike.",
        material: "Top-Grain Leather",
        details: [
            "Smooth, even color",
            "Classic rectangular buckle",
            "Width: 3.5 cm",
            "Finished with tone-on-tone edges"
        ],
        gradient: "linear-gradient(135deg, #E2A768 0%, #C17E40 50%, #7A4421 100%)",
        accentColor: "#F4BC7B",
        image: "/produto13.jpeg"
    },
    {
        id: "chestnut-parade",
        name: "Chestnut Parade",
        description: "Rich chestnut leather accented with warm hardware for a refined yet approachable everyday belt.",
        material: "Vegetable-Tanned Leather",
        details: [
            "Subtle two-tone shading",
            "Polished brass buckle",
            "Width: 3.7 cm",
            "Handcrafted in small batches"
        ],
        gradient: "linear-gradient(135deg, #8A4B2D 0%, #65301D 50%, #321611 100%)",
        accentColor: "#D58B5E",
        image: "/produto14.jpeg"
    },
    {
        id: "burnt-sienna-line",
        name: "Burnt Sienna Line",
        description: "A bold burnt-sienna belt with a strong linear silhouette that instantly sharpens relaxed outfits.",
        material: "Smooth Leather",
        details: [
            "Minimal topstitching",
            "Angular metal buckle",
            "Width: 3.5 cm",
            "Color-stable finish"
        ],
        gradient: "linear-gradient(135deg, #C8683E 0%, #A04626 50%, #5A2414 100%)",
        accentColor: "#F58A54",
        image: "/produto15.jpeg"
    },
    {
        id: "graphite-edge",
        name: "Graphite Edge",
        description: "Dark graphite leather with crisp edges and a cool-toned buckle, designed for modern, urban styling.",
        material: "Calfskin Leather",
        details: [
            "Semi-matte finish",
            "Cool silver-tone hardware",
            "Width: 3 cm",
            "Precision-cut edges"
        ],
        gradient: "linear-gradient(135deg, #4A4A4A 0%, #292929 50%, #0F0F0F 100%)",
        accentColor: "#B0B0B0",
        image: "/produto16.jpeg"
    },
    {
        id: "golden-dusk",
        name: "Golden Dusk",
        description: "Soft golden-brown leather that catches the light beautifully, finished with sculpted hardware for a luxe feel.",
        material: "Full-Grain Leather",
        details: [
            "Light-catching surface finish",
            "Curved sculptural buckle",
            "Width: 3.4 cm",
            "Made from single leather piece"
        ],
        gradient: "linear-gradient(135deg, #D9A962 0%, #B57A3B 50%, #6F411D 100%)",
        accentColor: "#F0C57F",
        image: "/produto17.jpeg"
    },
    {
        id: "espresso-royale",
        name: "Espresso Royale",
        description: "An ultra-deep espresso belt that anchors any outfit, from sharp suiting to elevated weekend wear.",
        material: "Vegetable-Tanned Leather",
        details: [
            "Intense dark-brown tone",
            "Subtle sheen finish",
            "Width: 3.5 cm",
            "Built to soften with time"
        ],
        gradient: "linear-gradient(135deg, #3A2317 0%, #23140E 50%, #0F0705 100%)",
        accentColor: "#8B5A3C",
        image: "/produto18.jpeg"
    }
];
function getBeltById(id) {
    return belts.find((belt)=>belt.id === id);
}
function getAllBeltIds() {
    return belts.map((belt)=>belt.id);
}
}),
"[project]/src/app/belt/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BeltPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$belts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/belts.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function generateStaticParams() {
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$belts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllBeltIds"])();
    return ids.map((id)=>({
            id
        }));
}
async function generateMetadata({ params }) {
    const { id } = await params;
    const belt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$belts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBeltById"])(id);
    if (!belt) {
        return {
            title: "Belt Not Found | RachConcept"
        };
    }
    return {
        title: `${belt.name} | RachConcept`,
        description: belt.description
    };
}
async function BeltPage({ params }) {
    const { id } = await params;
    const belt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$belts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBeltById"])(id);
    if (!belt) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-28 pb-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-muted hover:text-foreground transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-muted",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalogue",
                                    className: "text-muted hover:text-foreground transition-colors",
                                    children: "Catalogue"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-muted",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-foreground",
                                children: belt.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/belt/[id]/page.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[4/5] w-full rounded-sm overflow-hidden bg-foreground/[0.02]",
                                style: {
                                    background: belt.gradient
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: belt.image,
                                        alt: belt.name,
                                        fill: true,
                                        sizes: "(min-width: 1024px) 520px, 90vw",
                                        className: "object-cover object-center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/belt/[id]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/90 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/belt/[id]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-6 border border-white/40 rounded-sm mix-blend-soft-light"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/belt/[id]/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm tracking-[0.3em] uppercase text-accent mb-4",
                                    children: belt.material
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif text-4xl md:text-5xl font-light text-foreground mb-6",
                                    children: belt.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-px bg-accent mb-8"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted leading-relaxed mb-10",
                                    children: belt.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm tracking-[0.2em] uppercase text-foreground mb-4",
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: belt.details.map((detail, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-3 text-muted",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 bg-accent rounded-full"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this),
                                                        detail
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm tracking-[0.2em] uppercase text-foreground mb-3",
                                            children: "More details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-muted text-sm leading-relaxed",
                                            children: [
                                                "For additional product information, styling inspiration, and the latest releases, visit our",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/rachconcept.store/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "underline underline-offset-4 decoration-accent hover:text-accent",
                                                    children: "Instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/catalogue",
                                    className: "inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 transform group-hover:-translate-x-1 transition-transform",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/belt/[id]/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        "Back to Collection"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/belt/[id]/page.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/belt/[id]/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/belt/[id]/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/belt/[id]/page.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/belt/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/belt/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__70dc6257._.js.map