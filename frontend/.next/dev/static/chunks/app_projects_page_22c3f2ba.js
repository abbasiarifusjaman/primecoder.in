(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/projects/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const allProjects = [
    {
        num: "01",
        title: "Income & Expense Tracker",
        category: "Web App",
        year: "2024",
        stack: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        desc: "Clean finance tracking tool for logging income and expenses with visual dashboards.",
        link: "https://thriving-lokum-d1ea1f.netlify.app/index.html",
        accent: "#A8FF57"
    },
    {
        num: "02",
        title: "Google Search Clone",
        category: "Web App",
        year: "2024",
        stack: [
            "React",
            "API Integration"
        ],
        desc: "Functional Google Search UI with real results. Clean recreation of the iconic interface.",
        link: "https://www.search.imdos.in/",
        accent: "#38BDF8"
    },
    {
        num: "03",
        title: "Spotify Clone",
        category: "Music Streaming UI",
        year: "2024",
        stack: [
            "React",
            "Tailwind CSS"
        ],
        desc: "Immersive music streaming interface with playlists and personalized recommendations.",
        link: "#",
        accent: "#1DB954"
    },
    {
        num: "04",
        title: "Threads Clone",
        category: "Social Platform",
        year: "2024",
        stack: [
            "React",
            "Next.js"
        ],
        desc: "Dynamic social platform UI with seamless thread-based conversation design.",
        link: "#",
        accent: "#F472B6"
    },
    {
        num: "05",
        title: "Assam Job Portal",
        category: "Full-Stack Platform",
        year: "2023",
        stack: [
            "Next.js",
            "Node.js",
            "MySQL"
        ],
        desc: "Employment platform connecting job seekers across Assam with top employers.",
        link: "https://www.assamjobportal.com/",
        accent: "#FB923C"
    },
    {
        num: "06",
        title: "Darrang Mobile Shop",
        category: "E-Commerce",
        year: "2023",
        stack: [
            "Next.js",
            "Tailwind CSS"
        ],
        desc: "Modern e-commerce site for a mobile retail brand with full product catalog.",
        link: "https://darrang-mobile.vercel.app/",
        accent: "#A78BFA"
    },
    {
        num: "07",
        title: "BillBook Pro",
        category: "Mobile App",
        year: "2026",
        stack: [
            "React Native",
            "Express.js",
            "MySQL",
            "AWS"
        ],
        desc: "GST-compliant billing and invoicing app for Indian SMBs. Full offline-first architecture.",
        link: "#",
        accent: "#FBBF24"
    }
];
const categories = [
    "All",
    "Web App",
    "Mobile App",
    "Full-Stack Platform",
    "E-Commerce",
    "Music Streaming UI",
    "Social Platform"
];
function ProjectsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "5b937767dfbf8de9750f70cbeae6343d44b70ba12b9e892230d86724d4695f9d") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b937767dfbf8de9750f70cbeae6343d44b70ba12b9e892230d86724d4695f9d";
    }
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== active) {
        const filtered = active === "All" ? allProjects : allProjects.filter({
            "ProjectsPage[allProjects.filter()]": (p)=>p.category === active
        }["ProjectsPage[allProjects.filter()]"]);
        let t7;
        let t8;
        let t9;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = {
                background: "var(--bg)",
                paddingTop: 72,
                minHeight: "100vh"
            };
            t7 = {
                padding: "100px 0 60px",
                position: "relative",
                overflow: "hidden"
            };
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: -80,
                    left: -60,
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(168,255,87,0.05), transparent 70%)",
                    filter: "blur(60px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 105,
                columnNumber: 12
            }, this);
            t9 = {
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 28px"
            };
            $[9] = t4;
            $[10] = t7;
            $[11] = t8;
            $[12] = t9;
        } else {
            t4 = $[9];
            t7 = $[10];
            t8 = $[11];
            t9 = $[12];
        }
        let t10;
        let t11;
        let t12;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-label",
                style: {
                    marginBottom: 24
                },
                children: "Portfolio"
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 135,
                columnNumber: 13
            }, this);
            t11 = {
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24
            };
            t12 = {
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 9vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "0.01em",
                color: "var(--text)",
                margin: 0
            };
            $[13] = t10;
            $[14] = t11;
            $[15] = t12;
        } else {
            t10 = $[13];
            t11 = $[14];
            t12 = $[15];
        }
        let t13;
        let t14;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: t7,
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: t9,
                        children: [
                            t10,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: t11,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: t12,
                                        children: [
                                            "ALL",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/projects/page.js",
                                                lineNumber: 164,
                                                columnNumber: 93
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: "var(--accent)"
                                                },
                                                children: "PROJECTS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.js",
                                                lineNumber: 164,
                                                columnNumber: 99
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 164,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                            color: "var(--text-dim)",
                                            maxWidth: 300,
                                            margin: 0
                                        },
                                        children: [
                                            allProjects.length,
                                            " projects shipped across web, mobile, and cloud platforms."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.js",
                                        lineNumber: 166,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.js",
                                lineNumber: 164,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 164,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 164,
                columnNumber: 12
            }, this);
            t13 = {
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "0 28px",
                overflowX: "auto"
            };
            t14 = {
                maxWidth: 1400,
                margin: "0 auto",
                display: "flex",
                gap: 4,
                padding: "16px 0",
                whiteSpace: "nowrap"
            };
            $[16] = t13;
            $[17] = t14;
            $[18] = t5;
        } else {
            t13 = $[16];
            t14 = $[17];
            t5 = $[18];
        }
        const t15 = categories.map({
            "ProjectsPage[categories.map()]": (cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "ProjectsPage[categories.map() > <button>.onClick]": ()=>setActive(cat)
                    }["ProjectsPage[categories.map() > <button>.onClick]"],
                    style: {
                        padding: "8px 16px",
                        borderRadius: 6,
                        border: `1px solid ${active === cat ? "var(--accent-border)" : "transparent"}`,
                        background: active === cat ? "var(--accent-dim)" : "transparent",
                        color: active === cat ? "var(--accent)" : "var(--text-dim)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        flexShrink: 0
                    },
                    children: cat
                }, cat, false, {
                    fileName: "[project]/app/projects/page.js",
                    lineNumber: 197,
                    columnNumber: 48
                }, this)
        }["ProjectsPage[categories.map()]"]);
        if ($[19] !== t15) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t13,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t14,
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/app/projects/page.js",
                    lineNumber: 215,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 215,
                columnNumber: 12
            }, this);
            $[19] = t15;
            $[20] = t6;
        } else {
            t6 = $[20];
        }
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                padding: "60px 0 120px"
            };
            t2 = {
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 28px"
            };
            t0 = {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                gap: 16
            };
            $[21] = t0;
            $[22] = t2;
            $[23] = t3;
        } else {
            t0 = $[21];
            t2 = $[22];
            t3 = $[23];
        }
        t1 = filtered.map(_ProjectsPageFilteredMap);
        $[1] = active;
        $[2] = t0;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t0 = $[2];
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[24] !== t0 || $[25] !== t1) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/app/projects/page.js",
            lineNumber: 263,
            columnNumber: 10
        }, this);
        $[24] = t0;
        $[25] = t1;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] !== t2 || $[28] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: t7
        }, void 0, false, {
            fileName: "[project]/app/projects/page.js",
            lineNumber: 272,
            columnNumber: 10
        }, this);
        $[27] = t2;
        $[28] = t7;
        $[29] = t8;
    } else {
        t8 = $[29];
    }
    let t9;
    if ($[30] !== t3 || $[31] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t3,
            children: t8
        }, void 0, false, {
            fileName: "[project]/app/projects/page.js",
            lineNumber: 281,
            columnNumber: 10
        }, this);
        $[30] = t3;
        $[31] = t8;
        $[32] = t9;
    } else {
        t9 = $[32];
    }
    let t10;
    if ($[33] !== t4 || $[34] !== t5 || $[35] !== t6 || $[36] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: [
                t5,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/app/projects/page.js",
            lineNumber: 290,
            columnNumber: 11
        }, this);
        $[33] = t4;
        $[34] = t5;
        $[35] = t6;
        $[36] = t9;
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    return t10;
}
_s(ProjectsPage, "BmrN4OIGrrMiAmFjPaJAG0l6ZTM=");
_c = ProjectsPage;
function _ProjectsPageFilteredMap(project, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.015)",
            transition: "all 0.3s ease",
            display: "flex",
            flexDirection: "column"
        },
        onMouseEnter: {
            "ProjectsPage[filtered.map() > <div>.onMouseEnter]": (e)=>{
                e.currentTarget.style.borderColor = `${project.accent}33`;
                e.currentTarget.style.background = "var(--surface)";
            }
        }["ProjectsPage[filtered.map() > <div>.onMouseEnter]"],
        onMouseLeave: _ProjectsPageFilteredMapDivOnMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    borderBottom: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            letterSpacing: "0.15em",
                            color: project.accent
                        },
                        children: project.num
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 321,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--text-faint)"
                        },
                        children: [
                            project.category,
                            " · ",
                            project.year
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 326,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 315,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "24px 20px",
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: "var(--font-display)",
                            fontSize: 26,
                            letterSpacing: "0.02em",
                            color: "var(--text)",
                            margin: "0 0 12px"
                        },
                        children: project.title.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 335,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            background: `linear-gradient(90deg, ${project.accent}50, transparent)`,
                            marginBottom: 16
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 341,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-sans)",
                            fontSize: 13,
                            lineHeight: 1.65,
                            color: "var(--text-faint)",
                            margin: "0 0 20px"
                        },
                        children: project.desc
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 345,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 6
                        },
                        children: project.stack.map({
                            "ProjectsPage[filtered.map() > project.stack.map()]": (t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-mono)",
                                        fontSize: 10,
                                        padding: "4px 10px",
                                        border: `1px solid ${project.accent}25`,
                                        borderRadius: 100,
                                        background: `${project.accent}0D`,
                                        color: project.accent
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/app/projects/page.js",
                                    lineNumber: 356,
                                    columnNumber: 70
                                }, this)
                        }["ProjectsPage[filtered.map() > project.stack.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 351,
                        columnNumber: 28
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 332,
                columnNumber: 58
            }, this),
            project.link !== "#" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: project.accent,
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "View Live"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 377,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 12L12 2M12 2H5M12 2v7",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/projects/page.js",
                            lineNumber: 377,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 377,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 365,
                columnNumber: 102
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "14px 20px",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--text-faint)",
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.js",
                        lineNumber: 388,
                        columnNumber: 8
                    }, this),
                    "In Progress"
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.js",
                lineNumber: 377,
                columnNumber: 228
            }, this)
        ]
    }, project.num, true, {
        fileName: "[project]/app/projects/page.js",
        lineNumber: 302,
        columnNumber: 10
    }, this);
}
function _ProjectsPageFilteredMapDivOnMouseLeave(e_0) {
    e_0.currentTarget.style.borderColor = "var(--border)";
    e_0.currentTarget.style.background = "rgba(255,255,255,0.015)";
}
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_projects_page_22c3f2ba.js.map