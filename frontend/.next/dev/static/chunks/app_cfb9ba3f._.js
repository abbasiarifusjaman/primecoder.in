(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Services.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const services = [
    {
        idx: "01",
        title: "Website Development",
        short: "Modern Web Experiences",
        desc: "Crafting fast, responsive, and visually stunning websites using React.js, Next.js, and Tailwind CSS. Built for performance, SEO, and conversion — from landing pages to production-grade web apps.",
        tags: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "GSAP"
        ],
        accent: "#A8FF57"
    },
    {
        idx: "02",
        title: "Mobile App Development",
        short: "Native-Feel Cross-Platform",
        desc: "Cross-platform mobile apps with React Native CLI. From GST billing to e-commerce — smooth animations, native modules, and offline-first architecture for Android and iOS.",
        tags: [
            "React Native",
            "Android",
            "iOS",
            "Hermes"
        ],
        accent: "#38BDF8"
    },
    {
        idx: "03",
        title: "Desktop Applications",
        short: "Cross-Platform Desktop Software",
        desc: "Powerful desktop applications built with Electron and Tauri. Native menus, file system access, auto-updates, and platform-specific integrations for Windows, macOS, and Linux.",
        tags: [
            "Electron",
            "Tauri",
            "Node.js",
            "Windows · macOS"
        ],
        accent: "#FB923C"
    },
    {
        idx: "04",
        title: "Graphic Design",
        short: "Brand · UI · Print",
        desc: "Brand identity, UI/UX, social creatives, and print collateral designed in Figma and Photoshop. From wireframes to high-fidelity prototypes — designed with real users and conversion goals in mind.",
        tags: [
            "Figma",
            "Photoshop",
            "Branding",
            "UI/UX"
        ],
        accent: "#FBBF24"
    },
    {
        idx: "05",
        title: "Database Engineering",
        short: "Structured Data Architecture",
        desc: "Designing and optimizing relational and NoSQL databases. MySQL schema design with normalized tables to MongoDB with efficient indexing — built for speed, integrity, and scale.",
        tags: [
            "MySQL",
            "MongoDB",
            "Schema Design",
            "Indexing"
        ],
        accent: "#F472B6"
    },
    {
        idx: "06",
        title: "AWS Cloud Services",
        short: "Deploy · Scale · Secure",
        desc: "End-to-end AWS infrastructure — EC2, RDS, S3, CloudFront, Lambda, and Route53. Production deployments, CI/CD pipelines, and cost-optimized architectures that scale with your business.",
        tags: [
            "EC2",
            "RDS",
            "S3",
            "CloudFront",
            "Lambda"
        ],
        accent: "#A78BFA"
    }
];
function ServiceRow(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "b6194031aa27802323323d31f1795fe3b0cf5ec09b03fb580e692e5bc7342344") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6194031aa27802323323d31f1795fe3b0cf5ec09b03fb580e692e5bc7342344";
    }
    const { service, index } = t0;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ServiceRow[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t3)=>{
                    const [entry] = t3;
                    if (entry.isIntersecting) {
                        setVisible(true);
                    }
                }, {
                    threshold: 0.1
                });
                if (ref.current) {
                    observer.observe(ref.current);
                }
                return ()=>observer.disconnect();
            }
        })["ServiceRow[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    const t3 = visible ? 1 : 0;
    const t4 = visible ? "translateY(0)" : "translateY(20px)";
    const t5 = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
    let t6;
    if ($[3] !== t3 || $[4] !== t4 || $[5] !== t5) {
        t6 = {
            borderBottom: "1px solid var(--border)",
            opacity: t3,
            transform: t4,
            transition: t5
        };
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== open) {
        t7 = ({
            "ServiceRow[<div>.onClick]": ()=>setOpen(!open)
        })["ServiceRow[<div>.onClick]"];
        $[7] = open;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t10;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "ServiceRow[<div>.onMouseEnter]": ()=>setHovered(true)
        })["ServiceRow[<div>.onMouseEnter]"];
        t9 = ({
            "ServiceRow[<div>.onMouseLeave]": ()=>setHovered(false)
        })["ServiceRow[<div>.onMouseLeave]"];
        t10 = {
            display: "flex",
            alignItems: "center",
            padding: "28px 0",
            cursor: "pointer",
            gap: 24,
            transition: "all 0.2s ease"
        };
        $[9] = t10;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    const t11 = hovered ? service.accent : "var(--text-faint)";
    let t12;
    if ($[12] !== t11) {
        t12 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.15em",
            color: t11,
            transition: "color 0.3s ease",
            minWidth: 28
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== service.idx || $[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t12,
            children: service.idx
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, this);
        $[14] = service.idx;
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    const t14 = hovered ? "var(--text)" : "rgba(238,238,240,0.7)";
    let t15;
    if ($[17] !== t14) {
        t15 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 40px)",
            letterSpacing: "0.02em",
            color: t14,
            transition: "color 0.3s ease",
            flex: 1,
            margin: 0
        };
        $[17] = t14;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== service.title) {
        t16 = service.title.toUpperCase();
        $[19] = service.title;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== t15 || $[22] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            style: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[21] = t15;
        $[22] = t16;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            display: "block",
            minWidth: 180,
            textAlign: "right"
        };
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] !== service.short) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t18,
            className: "service-short",
            children: service.short
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[25] = service.short;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    const t20 = `1px solid ${hovered ? service.accent : "var(--border-hi)"}`;
    const t21 = open ? "rotate(45deg)" : "rotate(0deg)";
    const t22 = hovered ? service.accent : "var(--text-dim)";
    let t23;
    if ($[27] !== t20 || $[28] !== t21 || $[29] !== t22) {
        t23 = {
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: t20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
            transform: t21,
            color: t22,
            flexShrink: 0
        };
        $[27] = t20;
        $[28] = t21;
        $[29] = t22;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 1v12M1 7h12",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/app/components/Services.jsx",
                lineNumber: 256,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[31] = t24;
    } else {
        t24 = $[31];
    }
    let t25;
    if ($[32] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t23,
            children: t24
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[32] = t23;
        $[33] = t25;
    } else {
        t25 = $[33];
    }
    let t26;
    if ($[34] !== t13 || $[35] !== t17 || $[36] !== t19 || $[37] !== t25 || $[38] !== t7) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: t7,
            onMouseEnter: t8,
            onMouseLeave: t9,
            style: t10,
            children: [
                t13,
                t17,
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 271,
            columnNumber: 11
        }, this);
        $[34] = t13;
        $[35] = t17;
        $[36] = t19;
        $[37] = t25;
        $[38] = t7;
        $[39] = t26;
    } else {
        t26 = $[39];
    }
    const t27 = open ? 200 : 0;
    let t28;
    if ($[40] !== t27) {
        t28 = {
            overflow: "hidden",
            maxHeight: t27,
            transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)"
        };
        $[40] = t27;
        $[41] = t28;
    } else {
        t28 = $[41];
    }
    let t29;
    let t30;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            padding: "0 0 32px",
            paddingLeft: 52,
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            alignItems: "flex-start"
        };
        t30 = {
            flex: 1,
            minWidth: 260,
            display: "flex",
            gap: 16
        };
        $[42] = t29;
        $[43] = t30;
    } else {
        t29 = $[42];
        t30 = $[43];
    }
    let t31;
    if ($[44] !== service.accent) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 2,
                background: service.accent,
                borderRadius: 1,
                flexShrink: 0,
                minHeight: "100%"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[44] = service.accent;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    let t32;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.7,
            color: "var(--text-dim)",
            margin: 0
        };
        $[46] = t32;
    } else {
        t32 = $[46];
    }
    let t33;
    if ($[47] !== service.desc) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t32,
            children: service.desc
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[47] = service.desc;
        $[48] = t33;
    } else {
        t33 = $[48];
    }
    let t34;
    if ($[49] !== t31 || $[50] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t30,
            children: [
                t31,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[49] = t31;
        $[50] = t33;
        $[51] = t34;
    } else {
        t34 = $[51];
    }
    let t35;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = {
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignSelf: "flex-start"
        };
        $[52] = t35;
    } else {
        t35 = $[52];
    }
    let t36;
    if ($[53] !== service.accent || $[54] !== service.tags) {
        let t37;
        if ($[56] !== service.accent) {
            t37 = ({
                "ServiceRow[service.tags.map()]": (tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            padding: "5px 12px",
                            border: `1px solid ${service.accent}33`,
                            borderRadius: 100,
                            background: `${service.accent}0D`,
                            color: service.accent
                        },
                        children: tag
                    }, tag, false, {
                        fileName: "[project]/app/components/Services.jsx",
                        lineNumber: 378,
                        columnNumber: 50
                    }, this)
            })["ServiceRow[service.tags.map()]"];
            $[56] = service.accent;
            $[57] = t37;
        } else {
            t37 = $[57];
        }
        t36 = service.tags.map(t37);
        $[53] = service.accent;
        $[54] = service.tags;
        $[55] = t36;
    } else {
        t36 = $[55];
    }
    let t37;
    if ($[58] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t35,
            children: t36
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 403,
            columnNumber: 11
        }, this);
        $[58] = t36;
        $[59] = t37;
    } else {
        t37 = $[59];
    }
    let t38;
    if ($[60] !== t34 || $[61] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t29,
            children: [
                t34,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[60] = t34;
        $[61] = t37;
        $[62] = t38;
    } else {
        t38 = $[62];
    }
    let t39;
    if ($[63] !== t28 || $[64] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t28,
            children: t38
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[63] = t28;
        $[64] = t38;
        $[65] = t39;
    } else {
        t39 = $[65];
    }
    let t40;
    if ($[66] !== t26 || $[67] !== t39 || $[68] !== t6) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            style: t6,
            children: [
                t26,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[66] = t26;
        $[67] = t39;
        $[68] = t6;
        $[69] = t40;
    } else {
        t40 = $[69];
    }
    return t40;
}
_s(ServiceRow, "B68gG47a4mFneVEw7Yb2jdgwV54=");
_c = ServiceRow;
function Services(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "b6194031aa27802323323d31f1795fe3b0cf5ec09b03fb580e692e5bc7342344") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b6194031aa27802323323d31f1795fe3b0cf5ec09b03fb580e692e5bc7342344";
    }
    const { hideHeader: t1 } = t0;
    const hideHeader = t1 === undefined ? false : t1;
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Services[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t4)=>{
                    const [e] = t4;
                    if (e.isIntersecting) {
                        setHeaderVisible(true);
                    }
                }, {
                    threshold: 0.2
                });
                if (headerRef.current) {
                    observer.observe(headerRef.current);
                }
                return ()=>observer.disconnect();
            }
        })["Services[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    let t6;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "var(--bg)",
            padding: "120px 0",
            position: "relative",
            overflow: "hidden"
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: "linear-gradient(90deg, transparent, var(--border) 30%, var(--border) 70%, transparent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 490,
            columnNumber: 10
        }, this);
        t6 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
    } else {
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] !== headerVisible || $[7] !== hideHeader) {
        t7 = !hideHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: headerRef,
            style: {
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
                marginBottom: 80,
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-label",
                            style: {
                                marginBottom: 20
                            },
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(40px, 6vw, 90px)",
                                letterSpacing: "0.02em",
                                color: "var(--text)",
                                margin: 0,
                                lineHeight: 0.95
                            },
                            children: [
                                "WHAT",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/components/Services.jsx",
                                    lineNumber: 532,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "var(--accent)"
                                    },
                                    children: "WE DO"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Services.jsx",
                                    lineNumber: 532,
                                    columnNumber: 22
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 525,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 523,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--text-dim)",
                        maxWidth: 320,
                        margin: 0
                    },
                    children: "From concept to deployment — full-stack capability across web, mobile, and cloud platforms."
                }, void 0, false, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 534,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 513,
            columnNumber: 25
        }, this);
        $[6] = headerVisible;
        $[7] = hideHeader;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t10;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                borderTop: "1px solid var(--border)"
            },
            children: services.map(_ServicesServicesMap)
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 552,
            columnNumber: 10
        }, this);
        t9 = {
            marginTop: 60,
            padding: "36px 40px",
            border: "1px solid var(--border)",
            borderRadius: 16,
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden"
        };
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: -80,
                right: -80,
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,255,87,0.08), transparent 70%)",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 569,
            columnNumber: 11
        }, this);
        $[9] = t10;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-label",
                    style: {
                        marginBottom: 10
                    },
                    children: "Let's collaborate"
                }, void 0, false, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 589,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: {
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(24px, 3vw, 40px)",
                        letterSpacing: "0.02em",
                        color: "var(--text)",
                        margin: 0
                    },
                    children: "HAVE A PROJECT IN MIND?"
                }, void 0, false, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 591,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            textDecoration: "none"
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t9,
            children: [
                t10,
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "btn-primary",
                    style: t12,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M1 7h12M7 1l6 6-6 6",
                                stroke: "#000",
                                strokeWidth: "1.6",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Services.jsx",
                                lineNumber: 613,
                                columnNumber: 155
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 613,
                            columnNumber: 95
                        }, this),
                        "Start a Project"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 613,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t6,
            children: [
                t7,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[15] = t7;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @media (max-width: 640px) {\n          .service-short { display: none !important; }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            style: t4,
            children: [
                t5,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 635,
            columnNumber: 11
        }, this);
        $[18] = t14;
        $[19] = t16;
    } else {
        t16 = $[19];
    }
    return t16;
}
_s1(Services, "o2hg/lymq321eeLT069yIvJmCVg=");
_c1 = Services;
function _ServicesServicesMap(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceRow, {
        service: s,
        index: i
    }, s.idx, false, {
        fileName: "[project]/app/components/Services.jsx",
        lineNumber: 644,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ServiceRow");
__turbopack_context__.k.register(_c1, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/about/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Services.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const skills = [
    {
        label: "Frontend",
        items: [
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "GSAP",
            "TypeScript"
        ]
    },
    {
        label: "Mobile",
        items: [
            "React Native CLI",
            "Android",
            "iOS",
            "Hermes"
        ]
    },
    {
        label: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "REST API",
            "JWT Auth"
        ]
    },
    {
        label: "Database",
        items: [
            "MySQL",
            "MongoDB",
            "Schema Design"
        ]
    },
    {
        label: "Tools",
        items: [
            "Figma",
            "Git",
            "AWS",
            "Razorpay",
            "Fast2SMS"
        ]
    }
];
const timeline = [
    {
        year: "2026",
        event: "Building BillBook Pro — GST-compliant billing app for Indian SMBs"
    },
    {
        year: "2025",
        event: "Launched ajabbasi.in portfolio + Chrome extension Marks"
    },
    {
        year: "2024",
        event: "Assam Job Portal, multiple full-stack web projects"
    },
    {
        year: "2023",
        event: "Started full-stack journey — React, Node.js, MySQL"
    }
];
function AboutPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "48cee733c64bdc0df5138b99ef7dca873b2ff672fc2474fb8064f0e12f20f59c") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48cee733c64bdc0df5138b99ef7dca873b2ff672fc2474fb8064f0e12f20f59c";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--bg)",
            paddingTop: 72
        };
        t1 = {
            padding: "100px 0 80px",
            position: "relative",
            overflow: "hidden"
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: -100,
                right: -100,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t3 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-label",
            style: {
                marginBottom: 24
            },
            children: "About"
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        t5 = {
            display: "flex",
            gap: 60,
            flexWrap: "wrap",
            alignItems: "flex-start"
        };
        t6 = {
            flex: 1,
            minWidth: 280
        };
        t7 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 110px)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            color: "var(--text)",
            margin: "0 0 32px"
        };
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
    }
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: t7,
            children: [
                "A.J.",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 124,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--accent)"
                    },
                    children: "ABBASI"
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 124,
                    columnNumber: 35
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 124,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                padding: "8px 16px",
                border: "1px solid var(--border-hi)",
                borderRadius: 6,
                display: "inline-block",
                marginBottom: 32
            },
            children: "Full Stack Developer · Agartala, India"
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--text-dim)",
                maxWidth: 520,
                margin: "0 0 32px"
            },
            children: "I'm a Full Stack Developer with a passion for building high-performance digital products. From React Native billing apps for Indian SMBs to editorial portfolio sites — I care deeply about code quality, design precision, and shipping software that actually works."
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t11 = {
            display: "flex",
            gap: 12,
            flexWrap: "wrap"
        };
        $[9] = t10;
        $[10] = t11;
        $[11] = t8;
        $[12] = t9;
    } else {
        t10 = $[9];
        t11 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            textDecoration: "none"
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/Resume.pdf",
            download: "Arifus_Jaman_Abbasi_CV.pdf",
            className: "btn-primary",
            style: t12,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M7 1v9M3 7l4 4 4-4M1 12h12",
                        stroke: "#000",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 173,
                        columnNumber: 170
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 173,
                    columnNumber: 110
                }, this),
                "Download CV"
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    let t16;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t1,
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t3,
                    children: [
                        t4,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t5,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: t6,
                                    children: [
                                        t8,
                                        t9,
                                        t10,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: t11,
                                            children: [
                                                t13,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    className: "btn-outline",
                                                    style: {
                                                        textDecoration: "none"
                                                    },
                                                    children: "Get in Touch"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/about/page.js",
                                                    lineNumber: 182,
                                                    columnNumber: 122
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/about/page.js",
                                            lineNumber: 182,
                                            columnNumber: 100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/about/page.js",
                                    lineNumber: 182,
                                    columnNumber: 71
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 280,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12
                                    },
                                    children: [
                                        {
                                            label: "Birthday",
                                            value: "April 24, 2002"
                                        },
                                        {
                                            label: "Location",
                                            value: "Assam, India"
                                        },
                                        {
                                            label: "Email",
                                            value: "abbasiarifusjaman@gmail.com"
                                        },
                                        {
                                            label: "Languages",
                                            value: "English, Hindi, Assamese"
                                        },
                                        {
                                            label: "Speciality",
                                            value: "Indian SMB Software, Billing Apps, Portfolio Sites"
                                        }
                                    ].map(_AboutPageAnonymous)
                                }, void 0, false, {
                                    fileName: "[project]/app/about/page.js",
                                    lineNumber: 184,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/about/page.js",
                            lineNumber: 182,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 182,
                    columnNumber: 35
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        t15 = {
            padding: "80px 0",
            borderTop: "1px solid var(--border)",
            background: "var(--surface)"
        };
        t16 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[15] = t14;
        $[16] = t15;
        $[17] = t16;
    } else {
        t14 = $[15];
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    let t18;
    let t19;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t15,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t16,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-label",
                        style: {
                            marginBottom: 40
                        },
                        children: "Tech Stack"
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 228,
                        columnNumber: 49
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 0
                        },
                        children: skills.map(_AboutPageSkillsMap)
                    }, void 0, false, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 230,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 228,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        t18 = {
            padding: "80px 0",
            borderTop: "1px solid var(--border)"
        };
        t19 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[18] = t17;
        $[19] = t18;
        $[20] = t19;
    } else {
        t17 = $[18];
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t0,
            children: [
                t14,
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: t18,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t19,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                style: {
                                    marginBottom: 40
                                },
                                children: "Journey"
                            }, void 0, false, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 254,
                                columnNumber: 75
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    paddingLeft: 24
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: 1,
                                            background: "linear-gradient(180deg, var(--accent), var(--border) 80%)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/about/page.js",
                                        lineNumber: 259,
                                        columnNumber: 14
                                    }, this),
                                    timeline.map(_AboutPageTimelineMap)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/about/page.js",
                                lineNumber: 256,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/about/page.js",
                        lineNumber: 254,
                        columnNumber: 58
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 254,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/about/page.js",
                    lineNumber: 266,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/about/page.js",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_c = AboutPage;
function _AboutPageTimelineMap(item_1, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 32,
            padding: "24px 0",
            alignItems: "flex-start",
            borderBottom: i_0 < timeline.length - 1 ? "1px solid var(--border)" : "none",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -28,
                    top: 28,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: i_0 === 0 ? "var(--accent)" : "var(--surface-2)",
                    border: `2px solid ${i_0 === 0 ? "var(--accent)" : "var(--border-hi)"}`
                }
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 281,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    color: "var(--accent)",
                    minWidth: 60
                },
                children: item_1.year
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 290,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--text-dim)",
                    margin: "4px 0 0"
                },
                children: item_1.event
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 296,
                columnNumber: 28
            }, this)
        ]
    }, item_1.year, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 274,
        columnNumber: 10
    }, this);
}
function _AboutPageSkillsMap(group, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 40,
            padding: "24px 0",
            borderBottom: i < skills.length - 1 ? "1px solid var(--border)" : "none",
            alignItems: "center",
            flexWrap: "wrap"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    color: "var(--text-faint)",
                    minWidth: 140
                },
                children: group.label.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 312,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8
                },
                children: group.items.map(_AboutPageSkillsMapGroupItemsMap)
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 318,
                columnNumber: 42
            }, this)
        ]
    }, group.label, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 305,
        columnNumber: 10
    }, this);
}
function _AboutPageSkillsMapGroupItemsMap(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tag",
        children: item_0
    }, item_0, false, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 325,
        columnNumber: 10
    }, this);
}
function _AboutPageAnonymous(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 16,
            padding: "16px 20px",
            border: "1px solid var(--border)",
            borderRadius: 10,
            background: "var(--surface)",
            alignItems: "flex-start"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    minWidth: 80,
                    paddingTop: 2
                },
                children: item.label
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 336,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--text)"
                },
                children: item.value
            }, void 0, false, {
                fileName: "[project]/app/about/page.js",
                lineNumber: 344,
                columnNumber: 27
            }, this)
        ]
    }, item.label, true, {
        fileName: "[project]/app/about/page.js",
        lineNumber: 328,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AboutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_cfb9ba3f._.js.map