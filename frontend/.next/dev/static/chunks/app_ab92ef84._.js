(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const roles = [
    "Full-Stack Developer",
    "React Native Engineer",
    "API Architect",
    "UI/UX Craftsman"
];
function HeroSection() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "864d3298fe9919d8f5ddd748f1d20d81ad0d95e3c0b00bd9c43e36fe99ac3017") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "864d3298fe9919d8f5ddd748f1d20d81ad0d95e3c0b00bd9c43e36fe99ac3017";
    }
    const [roleIdx, setRoleIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            x: 0,
            y: 0
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HeroSection[useEffect()]": ()=>{
                setVisible(true);
                const interval = setInterval({
                    "HeroSection[useEffect() > setInterval()]": ()=>{
                        setRoleIdx(_HeroSectionUseEffectSetIntervalSetRoleIdx);
                    }
                }["HeroSection[useEffect() > setInterval()]"], 2800);
                return ()=>clearInterval(interval);
            }
        })["HeroSection[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "HeroSection[useEffect()]": ()=>{
                const onMove = {
                    "HeroSection[useEffect() > onMove]": (e)=>{
                        mouseRef.current = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        if (glowRef.current) {
                            glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
                        }
                    }
                }["HeroSection[useEffect() > onMove]"];
                window.addEventListener("mousemove", onMove);
                return ()=>window.removeEventListener("mousemove", onMove);
            }
        })["HeroSection[useEffect()]"];
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            {
                value: "30+",
                label: "Projects Shipped"
            },
            {
                value: "5+",
                label: "Years Building"
            },
            {
                value: "100%",
                label: "Client Satisfaction"
            }
        ];
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const stats = t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            minHeight: "100vh",
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            paddingTop: 72
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t10;
    let t11;
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: glowRef,
            style: {
                position: "absolute",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,255,87,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                zIndex: 0
            }
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: -120,
                right: -100,
                width: 600,
                height: 600,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                bottom: -60,
                left: -80,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,95,87,0.06), transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                inset: 0,
                pointerEvents: "none"
            },
            children: [
                20,
                40,
                60,
                80
            ].map(_HeroSectionAnonymous)
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        t11 = {
            maxWidth: 1400,
            margin: "0 auto",
            width: "100%",
            padding: "0 28px",
            position: "relative",
            zIndex: 1
        };
        $[8] = t10;
        $[9] = t11;
        $[10] = t7;
        $[11] = t8;
        $[12] = t9;
    } else {
        t10 = $[8];
        t11 = $[9];
        t7 = $[10];
        t8 = $[11];
        t9 = $[12];
    }
    const t12 = visible ? 1 : 0;
    const t13 = visible ? "translateY(0)" : "translateY(12px)";
    let t14;
    if ($[13] !== t12 || $[14] !== t13) {
        t14 = {
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            border: "1px solid var(--accent-border)",
            borderRadius: 100,
            background: "var(--accent-dim)",
            marginBottom: 40,
            opacity: t12,
            transform: t13,
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s"
        };
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "block",
                boxShadow: "0 0 8px var(--accent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)"
            },
            children: "Available for new projects"
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[16] = t15;
        $[17] = t16;
    } else {
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t14) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t14,
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[18] = t14;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    const t18 = visible ? 1 : 0;
    const t19 = visible ? "translateY(0)" : "translateY(20px)";
    let t20;
    if ($[20] !== t18 || $[21] !== t19) {
        t20 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(68px, 11vw, 160px)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            color: "var(--text)",
            marginBottom: 0,
            opacity: t18,
            transform: t19,
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s"
        };
        $[20] = t18;
        $[21] = t19;
        $[22] = t20;
    } else {
        t20 = $[22];
    }
    let t21;
    let t22;
    let t23;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "var(--accent)"
            },
            children: "DIGITAL"
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[23] = t21;
        $[24] = t22;
        $[25] = t23;
    } else {
        t21 = $[23];
        t22 = $[24];
        t23 = $[25];
    }
    let t24;
    if ($[26] !== t20) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: t20,
            children: [
                "WE BUILD",
                t21,
                t22,
                t23,
                "PRODUCTS"
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[26] = t20;
        $[27] = t24;
    } else {
        t24 = $[27];
    }
    const t25 = visible ? 1 : 0;
    let t26;
    if ($[28] !== t25) {
        t26 = {
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
            opacity: t25,
            transition: "opacity 0.6s ease 0.5s"
        };
        $[28] = t25;
        $[29] = t26;
    } else {
        t26 = $[29];
    }
    let t27;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 40,
                height: 1,
                background: "var(--accent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[30] = t27;
    } else {
        t27 = $[30];
    }
    let t28;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
            animation: "fadeIn 0.4s ease both"
        };
        $[31] = t28;
    } else {
        t28 = $[31];
    }
    const t29 = roles[roleIdx];
    let t30;
    if ($[32] !== roleIdx || $[33] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t28,
            children: t29
        }, roleIdx, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 320,
            columnNumber: 11
        }, this);
        $[32] = roleIdx;
        $[33] = t29;
        $[34] = t30;
    } else {
        t30 = $[34];
    }
    let t31;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                display: "inline-block",
                width: 2,
                height: 18,
                background: "var(--accent)"
            },
            className: "cursor-blink"
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 329,
            columnNumber: 11
        }, this);
        $[35] = t31;
    } else {
        t31 = $[35];
    }
    let t32;
    if ($[36] !== t26 || $[37] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t26,
            children: [
                t27,
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[36] = t26;
        $[37] = t30;
        $[38] = t32;
    } else {
        t32 = $[38];
    }
    const t33 = visible ? 1 : 0;
    const t34 = visible ? "translateY(0)" : "translateY(16px)";
    let t35;
    if ($[39] !== t33 || $[40] !== t34) {
        t35 = {
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-end",
            marginTop: 56,
            opacity: t33,
            transform: t34,
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s"
        };
        $[39] = t33;
        $[40] = t34;
        $[41] = t35;
    } else {
        t35 = $[41];
    }
    let t36;
    let t37;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--text-dim)",
                maxWidth: 440,
                margin: 0
            },
            children: "Full-stack development for modern businesses. React, Next.js, React Native, and Node.js — production-grade software that scales."
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 371,
            columnNumber: 11
        }, this);
        t37 = {
            display: "flex",
            gap: 12,
            flexWrap: "wrap"
        };
        $[42] = t36;
        $[43] = t37;
    } else {
        t36 = $[42];
        t37 = $[43];
    }
    let t38;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            textDecoration: "none"
        };
        $[44] = t38;
    } else {
        t38 = $[44];
    }
    let t39;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/projects",
            className: "btn-primary",
            style: t38,
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
                        fileName: "[project]/app/components/HeroSection.jsx",
                        lineNumber: 401,
                        columnNumber: 130
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.jsx",
                    lineNumber: 401,
                    columnNumber: 70
                }, this),
                "View Work"
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[45] = t39;
    } else {
        t39 = $[45];
    }
    let t40;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t37,
            children: [
                t39,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "btn-outline",
                    style: {
                        textDecoration: "none"
                    },
                    children: "Get in Touch"
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.jsx",
                    lineNumber: 408,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 408,
            columnNumber: 11
        }, this);
        $[46] = t40;
    } else {
        t40 = $[46];
    }
    let t41;
    if ($[47] !== t35) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t35,
            children: [
                t36,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 417,
            columnNumber: 11
        }, this);
        $[47] = t35;
        $[48] = t41;
    } else {
        t41 = $[48];
    }
    const t42 = visible ? 1 : 0;
    let t43;
    if ($[49] !== t42) {
        t43 = {
            display: "flex",
            gap: 0,
            marginTop: 80,
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            opacity: t42,
            transition: "opacity 0.6s ease 0.9s"
        };
        $[49] = t42;
        $[50] = t43;
    } else {
        t43 = $[50];
    }
    let t44;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = stats.map({
            "HeroSection[stats.map()]": (s, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        flex: 1,
                        padding: "28px 0",
                        borderRight: i_0 < stats.length - 1 ? "1px solid var(--border)" : "none",
                        paddingLeft: i_0 === 0 ? 0 : 32
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(36px, 4vw, 56px)",
                                lineHeight: 1,
                                color: "var(--accent)"
                            },
                            children: s.value
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSection.jsx",
                            lineNumber: 448,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "var(--font-mono)",
                                fontSize: 11,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--text-faint)",
                                marginTop: 6
                            },
                            children: s.label
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeroSection.jsx",
                            lineNumber: 453,
                            columnNumber: 27
                        }, this)
                    ]
                }, s.label, true, {
                    fileName: "[project]/app/components/HeroSection.jsx",
                    lineNumber: 443,
                    columnNumber: 47
                }, this)
        }["HeroSection[stats.map()]"]);
        $[51] = t44;
    } else {
        t44 = $[51];
    }
    let t45;
    if ($[52] !== t43) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t43,
            children: t44
        }, void 0, false, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[52] = t43;
        $[53] = t45;
    } else {
        t45 = $[53];
    }
    let t46;
    if ($[54] !== t17 || $[55] !== t24 || $[56] !== t32 || $[57] !== t41 || $[58] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: [
                t17,
                t24,
                t32,
                t41,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 476,
            columnNumber: 11
        }, this);
        $[54] = t17;
        $[55] = t24;
        $[56] = t32;
        $[57] = t41;
        $[58] = t45;
        $[59] = t46;
    } else {
        t46 = $[59];
    }
    let t47;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                bottom: 32,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                opacity: 0.4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-dim)"
                    },
                    children: "Scroll"
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.jsx",
                    lineNumber: 498,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 1,
                        height: 40,
                        background: "linear-gradient(180deg, var(--text-dim), transparent)"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/HeroSection.jsx",
                    lineNumber: 504,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[60] = t47;
    } else {
        t47 = $[60];
    }
    let t48;
    if ($[61] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t6,
            children: [
                t7,
                t8,
                t9,
                t10,
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/HeroSection.jsx",
            lineNumber: 515,
            columnNumber: 11
        }, this);
        $[61] = t46;
        $[62] = t48;
    } else {
        t48 = $[62];
    }
    return t48;
}
_s(HeroSection, "Iii8d7or0uI2EkI47YewpKyE6YI=");
_c = HeroSection;
function _HeroSectionAnonymous(pct) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${pct}%`,
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)"
        }
    }, pct, false, {
        fileName: "[project]/app/components/HeroSection.jsx",
        lineNumber: 524,
        columnNumber: 10
    }, this);
}
function _HeroSectionUseEffectSetIntervalSetRoleIdx(i) {
    return (i + 1) % roles.length;
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    if ($[0] !== "c548b9f6d579f0ae15373bb0c154ecb26275387e55139b8a693788ca7a8f3230") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c548b9f6d579f0ae15373bb0c154ecb26275387e55139b8a693788ca7a8f3230";
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
function Services() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "c548b9f6d579f0ae15373bb0c154ecb26275387e55139b8a693788ca7a8f3230") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c548b9f6d579f0ae15373bb0c154ecb26275387e55139b8a693788ca7a8f3230";
    }
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Services[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t2)=>{
                    const [e] = t2;
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
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "var(--bg)",
            padding: "120px 0",
            position: "relative",
            overflow: "hidden"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lineNumber: 486,
            columnNumber: 10
        }, this);
        t4 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = headerVisible ? 1 : 0;
    const t6 = headerVisible ? "translateY(0)" : "translateY(20px)";
    let t7;
    if ($[6] !== t5 || $[7] !== t6) {
        t7 = {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 80,
            opacity: t5,
            transform: t6,
            transition: "opacity 0.7s ease, transform 0.7s ease"
        };
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-label",
            style: {
                marginBottom: 20
            },
            children: "Services"
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 531,
            columnNumber: 10
        }, this);
        t9 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 90px)",
            letterSpacing: "0.02em",
            color: "var(--text)",
            margin: 0,
            lineHeight: 0.95
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    let t11;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: t9,
                    children: [
                        "WHAT",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 551,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--accent)"
                            },
                            children: "WE DO"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 551,
                            columnNumber: 45
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 551,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 551,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            lineNumber: 554,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t11;
    } else {
        t10 = $[11];
        t11 = $[12];
    }
    let t12;
    if ($[13] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: headerRef,
            style: t7,
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 570,
            columnNumber: 11
        }, this);
        $[13] = t7;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    let t14;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                borderTop: "1px solid var(--border)"
            },
            children: services.map(_ServicesServicesMap)
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        t14 = {
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
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lineNumber: 597,
            columnNumber: 11
        }, this);
        $[15] = t13;
        $[16] = t14;
        $[17] = t15;
    } else {
        t13 = $[15];
        t14 = $[16];
        t15 = $[17];
    }
    let t16;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-label",
                    style: {
                        marginBottom: 10
                    },
                    children: "Let's collaborate"
                }, void 0, false, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 617,
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
                    lineNumber: 619,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            textDecoration: "none"
        };
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t14,
            children: [
                t15,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "btn-primary",
                    style: t17,
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
                                lineNumber: 641,
                                columnNumber: 156
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Services.jsx",
                            lineNumber: 641,
                            columnNumber: 96
                        }, this),
                        "Start a Project"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Services.jsx",
                    lineNumber: 641,
                    columnNumber: 38
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] !== t12) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: [
                t12,
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 648,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @media (max-width: 640px) {\n          .service-short { display: none !important; }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 656,
            columnNumber: 11
        }, this);
        $[23] = t20;
    } else {
        t20 = $[23];
    }
    let t21;
    if ($[24] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            style: t2,
            children: [
                t3,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Services.jsx",
            lineNumber: 663,
            columnNumber: 11
        }, this);
        $[24] = t19;
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    return t21;
}
_s1(Services, "o2hg/lymq321eeLT069yIvJmCVg=");
_c1 = Services;
function _ServicesServicesMap(s, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceRow, {
        service: s,
        index: i
    }, s.idx, false, {
        fileName: "[project]/app/components/Services.jsx",
        lineNumber: 672,
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
"[project]/app/components/Projects.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
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
const projects = [
    {
        num: "01",
        title: "Income & Expense Tracker",
        category: "Web App",
        stack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "A clean finance tracking tool for logging income and expenses. Visual dashboards help users stay ahead of their financial goals.",
        link: "https://thriving-lokum-d1ea1f.netlify.app/index.html",
        accent: "#A8FF57",
        year: "2024",
        imgColor: "linear-gradient(135deg, #1a2a1a, #0d1f0d)"
    },
    {
        num: "02",
        title: "Google Search Clone",
        category: "Web App",
        stack: [
            "React",
            "API Integration"
        ],
        desc: "A functional Google Search UI replica with real search results. Clean recreation of the iconic interface with modern tooling.",
        link: "https://www.search.imdos.in/",
        accent: "#38BDF8",
        year: "2024",
        imgColor: "linear-gradient(135deg, #0d1a2a, #0a1520)"
    },
    {
        num: "03",
        title: "Spotify Clone",
        category: "Music Streaming UI",
        stack: [
            "React",
            "Tailwind CSS"
        ],
        desc: "Immersive music streaming interface with curated playlists, personalized recommendations, and a vast virtual library.",
        link: "#",
        accent: "#1DB954",
        year: "2024",
        imgColor: "linear-gradient(135deg, #0d2a12, #081a0c)"
    },
    {
        num: "04",
        title: "Threads Clone",
        category: "Social Platform UI",
        stack: [
            "React",
            "Next.js"
        ],
        desc: "Dynamic social platform replica with meticulous attention to interaction design and seamless thread-based conversation flow.",
        link: "#",
        accent: "#F472B6",
        year: "2024",
        imgColor: "linear-gradient(135deg, #2a0d1a, #1a0810)"
    },
    {
        num: "05",
        title: "Assam Job Portal",
        category: "Full-Stack Platform",
        stack: [
            "Next.js",
            "Node.js",
            "MySQL"
        ],
        desc: "Employment platform connecting job seekers across Assam with top employers. Full-stack solution with listings, applications, and employer dashboards.",
        link: "https://www.assamjobportal.com/",
        accent: "#FB923C",
        year: "2023",
        imgColor: "linear-gradient(135deg, #2a1a0d, #1a1008)"
    },
    {
        num: "06",
        title: "Darrang Mobile Shop",
        category: "E-Commerce",
        stack: [
            "Next.js",
            "Tailwind CSS"
        ],
        desc: "Modern e-commerce site for a mobile retail brand. Product catalog, service pages, and seamless customer experience.",
        link: "https://darrang-mobile.vercel.app/",
        accent: "#A78BFA",
        year: "2023",
        imgColor: "linear-gradient(135deg, #1a0d2a, #100820)"
    }
];
function ProjectCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "d2f6e1f6e312e2d079d625e32031af2bbf58128f15cc01bcf10e4327fca7e740") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d2f6e1f6e312e2d079d625e32031af2bbf58128f15cc01bcf10e4327fca7e740";
    }
    const { project, index } = t0;
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProjectCard[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t3)=>{
                    const [e] = t3;
                    if (e.isIntersecting) {
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
        })["ProjectCard[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "ProjectCard[<div>.onMouseEnter]": ()=>setHovered(true)
        })["ProjectCard[<div>.onMouseEnter]"];
        t4 = ({
            "ProjectCard[<div>.onMouseLeave]": ()=>setHovered(false)
        })["ProjectCard[<div>.onMouseLeave]"];
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    const t5 = `1px solid ${hovered ? project.accent + "33" : "var(--border)"}`;
    const t6 = hovered ? "var(--surface)" : "rgba(255,255,255,0.015)";
    const t7 = visible ? 1 : 0;
    const t8 = visible ? "translateY(0)" : "translateY(24px)";
    const t9 = `${index * 0.07}s`;
    let t10;
    if ($[5] !== t5 || $[6] !== t6 || $[7] !== t7 || $[8] !== t8 || $[9] !== t9) {
        t10 = {
            border: t5,
            borderRadius: 16,
            overflow: "hidden",
            background: t6,
            transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            opacity: t7,
            transform: t8,
            transitionDelay: t9,
            cursor: "default",
            display: "flex",
            flexDirection: "column"
        };
        $[5] = t5;
        $[6] = t6;
        $[7] = t7;
        $[8] = t8;
        $[9] = t9;
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    let t11;
    if ($[11] !== project.imgColor) {
        t11 = {
            height: 200,
            background: project.imgColor,
            position: "relative",
            overflow: "hidden",
            flexShrink: 0
        };
        $[11] = project.imgColor;
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        t13 = {
            fontFamily: "var(--font-display)",
            fontSize: 120,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none"
        };
        $[13] = t12;
        $[14] = t13;
    } else {
        t12 = $[13];
        t13 = $[14];
    }
    let t14;
    if ($[15] !== project.num) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t12,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: t13,
                children: project.num
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.jsx",
                lineNumber: 193,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[15] = project.num;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    const t15 = `1px solid ${project.accent}33`;
    const t16 = `${project.accent}15`;
    let t17;
    if ($[17] !== project.accent || $[18] !== t15 || $[19] !== t16) {
        t17 = {
            position: "absolute",
            top: 16,
            left: 16,
            padding: "5px 12px",
            border: t15,
            borderRadius: 100,
            background: t16,
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: project.accent
        };
        $[17] = project.accent;
        $[18] = t15;
        $[19] = t16;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== project.category || $[22] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t17,
            children: project.category
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[21] = project.category;
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            position: "absolute",
            top: 16,
            right: 16,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "rgba(255,255,255,0.25)"
        };
        $[24] = t19;
    } else {
        t19 = $[24];
    }
    let t20;
    if ($[25] !== project.year) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t19,
            children: project.year
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[25] = project.year;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] !== hovered || $[28] !== project.accent || $[29] !== project.link) {
        t21 = project.link && project.link !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                bottom: 16,
                right: 16,
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: project.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1)" : "scale(0.6)",
                transition: "all 0.3s ease"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12L12 2M12 2H5M12 2v7",
                    stroke: "#000",
                    strokeWidth: "1.8",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 271,
                    columnNumber: 68
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.jsx",
                lineNumber: 271,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 257,
            columnNumber: 51
        }, this);
        $[27] = hovered;
        $[28] = project.accent;
        $[29] = project.link;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t11 || $[32] !== t14 || $[33] !== t18 || $[34] !== t20 || $[35] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: [
                t14,
                t18,
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t14;
        $[33] = t18;
        $[34] = t20;
        $[35] = t21;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    let t24;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            padding: "24px",
            flex: 1,
            display: "flex",
            flexDirection: "column"
        };
        t24 = {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: 12
        };
        $[37] = t23;
        $[38] = t24;
    } else {
        t23 = $[37];
        t24 = $[38];
    }
    const t25 = hovered ? "var(--text)" : "rgba(238,238,240,0.8)";
    let t26;
    if ($[39] !== t25) {
        t26 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2vw, 26px)",
            letterSpacing: "0.02em",
            color: t25,
            margin: 0,
            transition: "color 0.2s ease",
            lineHeight: 1.1
        };
        $[39] = t25;
        $[40] = t26;
    } else {
        t26 = $[40];
    }
    let t27;
    if ($[41] !== project.title) {
        t27 = project.title.toUpperCase();
        $[41] = project.title;
        $[42] = t27;
    } else {
        t27 = $[42];
    }
    let t28;
    if ($[43] !== t26 || $[44] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t24,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: t26,
                children: t27
            }, void 0, false, {
                fileName: "[project]/app/components/Projects.jsx",
                lineNumber: 339,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 339,
            columnNumber: 11
        }, this);
        $[43] = t26;
        $[44] = t27;
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    const t29 = `linear-gradient(90deg, ${project.accent}40, transparent)`;
    const t30 = hovered ? "100%" : "40%";
    let t31;
    if ($[46] !== t29 || $[47] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: 1,
                background: t29,
                marginBottom: 14,
                width: t30,
                transition: "width 0.4s ease"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[46] = t29;
        $[47] = t30;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    let t32;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = {
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.65,
            color: "var(--text-faint)",
            margin: "0 0 20px",
            flex: 1
        };
        $[49] = t32;
    } else {
        t32 = $[49];
    }
    let t33;
    if ($[50] !== project.desc) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t32,
            children: project.desc
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        $[50] = project.desc;
        $[51] = t33;
    } else {
        t33 = $[51];
    }
    let t34;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = {
            display: "flex",
            flexWrap: "wrap",
            gap: 6
        };
        $[52] = t34;
    } else {
        t34 = $[52];
    }
    let t35;
    if ($[53] !== project.stack) {
        t35 = project.stack.map(_ProjectCardProjectStackMap);
        $[53] = project.stack;
        $[54] = t35;
    } else {
        t35 = $[54];
    }
    let t36;
    if ($[55] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t34,
            children: t35
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[55] = t35;
        $[56] = t36;
    } else {
        t36 = $[56];
    }
    let t37;
    if ($[57] !== t28 || $[58] !== t31 || $[59] !== t33 || $[60] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t23,
            children: [
                t28,
                t31,
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[57] = t28;
        $[58] = t31;
        $[59] = t33;
        $[60] = t36;
        $[61] = t37;
    } else {
        t37 = $[61];
    }
    let t38;
    if ($[62] !== hovered || $[63] !== project.accent || $[64] !== project.link) {
        t38 = project.link && project.link !== "#" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: project.link,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 24px",
                borderTop: "1px solid var(--border)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: hovered ? project.accent : "var(--text-faint)",
                textDecoration: "none",
                transition: "color 0.2s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "View Live"
                }, void 0, false, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 438,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 7h12M7 1l6 6-6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Projects.jsx",
                        lineNumber: 438,
                        columnNumber: 90
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 438,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 425,
            columnNumber: 51
        }, this);
        $[62] = hovered;
        $[63] = project.accent;
        $[64] = project.link;
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    let t39;
    if ($[66] !== t10 || $[67] !== t22 || $[68] !== t37 || $[69] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            onMouseEnter: t3,
            onMouseLeave: t4,
            style: t10,
            children: [
                t22,
                t37,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 448,
            columnNumber: 11
        }, this);
        $[66] = t10;
        $[67] = t22;
        $[68] = t37;
        $[69] = t38;
        $[70] = t39;
    } else {
        t39 = $[70];
    }
    return t39;
}
_s(ProjectCard, "Io6tHxHNmh7JjjisfBT7u3vz16c=");
_c = ProjectCard;
function _ProjectCardProjectStackMap(tech) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            padding: "4px 10px",
            border: "1px solid var(--border-hi)",
            borderRadius: 100,
            color: "var(--text-dim)"
        },
        children: tech
    }, tech, false, {
        fileName: "[project]/app/components/Projects.jsx",
        lineNumber: 460,
        columnNumber: 10
    }, this);
}
function Projects() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "d2f6e1f6e312e2d079d625e32031af2bbf58128f15cc01bcf10e4327fca7e740") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d2f6e1f6e312e2d079d625e32031af2bbf58128f15cc01bcf10e4327fca7e740";
    }
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [headerVisible, setHeaderVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Projects[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t2)=>{
                    const [e] = t2;
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
        })["Projects[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "var(--surface)",
            padding: "120px 0",
            position: "relative",
            overflow: "hidden"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                background: "linear-gradient(90deg, transparent, var(--border) 30%, var(--border) 70%, transparent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 517,
            columnNumber: 10
        }, this);
        t4 = {
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 28px"
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    const t5 = headerVisible ? 1 : 0;
    const t6 = headerVisible ? "translateY(0)" : "translateY(20px)";
    let t7;
    if ($[6] !== t5 || $[7] !== t6) {
        t7 = {
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 64,
            opacity: t5,
            transform: t6,
            transition: "opacity 0.7s ease, transform 0.7s ease"
        };
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-label",
            style: {
                marginBottom: 20
            },
            children: "Portfolio"
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 562,
            columnNumber: 10
        }, this);
        t9 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 90px)",
            letterSpacing: "0.02em",
            color: "var(--text)",
            margin: 0,
            lineHeight: 0.95
        };
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: t9,
                    children: [
                        "SELECTED",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/components/Projects.jsx",
                            lineNumber: 581,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--accent)"
                            },
                            children: "WORK"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Projects.jsx",
                            lineNumber: 581,
                            columnNumber: 49
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 581,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 581,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            textDecoration: "none",
            alignSelf: "flex-end"
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/projects",
            className: "btn-outline",
            style: t11,
            children: [
                "All Projects",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 6h10M6 1l5 5-5 5",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Projects.jsx",
                        lineNumber: 600,
                        columnNumber: 142
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 600,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 600,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== t7) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: headerRef,
            style: t7,
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 607,
            columnNumber: 11
        }, this);
        $[14] = t7;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 16
            },
            children: projects.map(_ProjectsProjectsMap)
        }, void 0, false, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 615,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "work",
            style: t2,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t4,
                    children: [
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Projects.jsx",
                    lineNumber: 626,
                    columnNumber: 45
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Projects.jsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[17] = t13;
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    return t15;
}
_s1(Projects, "o2hg/lymq321eeLT069yIvJmCVg=");
_c1 = Projects;
function _ProjectsProjectsMap(p, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
        project: p,
        index: i
    }, p.num, false, {
        fileName: "[project]/app/components/Projects.jsx",
        lineNumber: 635,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TechStrip.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const techs = [
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "TypeScript",
    "REST API",
    "JWT",
    "Razorpay",
    "AWS",
    "GSAP"
];
function TechStrip() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "876b3eb3abdacd27a60436da81dc8f3c44690e76ccb7331f80104c47b892e2e2") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "876b3eb3abdacd27a60436da81dc8f3c44690e76ccb7331f80104c47b892e2e2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            ...techs,
            ...techs
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const doubled = t0;
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            padding: "18px 0",
            overflow: "hidden",
            position: "relative"
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: 80,
                background: "linear-gradient(90deg, var(--surface), transparent)",
                zIndex: 1,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/TechStrip.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                width: 80,
                background: "linear-gradient(270deg, var(--surface), transparent)",
                zIndex: 1,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/TechStrip.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "marquee-track",
                    style: {
                        display: "flex",
                        gap: 40,
                        width: "max-content"
                    },
                    children: doubled.map(_TechStripDoubledMap)
                }, void 0, false, {
                    fileName: "[project]/app/components/TechStrip.jsx",
                    lineNumber: 63,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/TechStrip.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = TechStrip;
function _TechStripDoubledMap(tech, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                    whiteSpace: "nowrap"
                },
                children: tech
            }, void 0, false, {
                fileName: "[project]/app/components/TechStrip.jsx",
                lineNumber: 80,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/components/TechStrip.jsx",
                lineNumber: 87,
                columnNumber: 21
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/app/components/TechStrip.jsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TechStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Services.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Projects.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStrip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TechStrip.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "8ad11fc2a0aa00b0eb51346b7ff8e5961a90c9e629507a43de6f6cc144f42a42") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8ad11fc2a0aa00b0eb51346b7ff8e5961a90c9e629507a43de6f6cc144f42a42";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "var(--bg)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 20,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TechStrip$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 20,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Services$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 20,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Projects$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 20,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.js",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ab92ef84._.js.map