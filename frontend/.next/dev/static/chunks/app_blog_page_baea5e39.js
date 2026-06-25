(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/blog/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
const posts = [
    {
        slug: "billbook-pro-architecture",
        num: "01",
        title: "Building BillBook Pro: GST-Compliant Architecture for Indian SMBs",
        excerpt: "How I designed a proprietary .billbook file format, AWS RDS MySQL schema, and React Native offline-first architecture for billing at scale.",
        tags: [
            "React Native",
            "MySQL",
            "AWS",
            "GST"
        ],
        date: "May 2026",
        accent: "#A8FF57",
        readTime: "8 min read"
    },
    {
        slug: "nextjs-gsap-portfolio",
        num: "02",
        title: "GSAP ScrollTrigger Animations in Next.js — Practical Patterns",
        excerpt: "Deep dive into integrating GSAP ScrollTrigger with React and Next.js. Patterns that actually work without hydration issues.",
        tags: [
            "Next.js",
            "GSAP",
            "Animation"
        ],
        date: "April 2026",
        accent: "#38BDF8",
        readTime: "6 min read"
    },
    {
        slug: "react-native-truecaller-sdk",
        num: "03",
        title: "Implementing a Truecaller-Style Auth Bottom Sheet in React Native",
        excerpt: "Building a smooth spring-physics bottom sheet with PanResponder for phone authentication — no third-party libraries.",
        tags: [
            "React Native",
            "Animation",
            "Auth"
        ],
        date: "March 2026",
        accent: "#FB923C",
        readTime: "5 min read"
    },
    {
        slug: "mysql-gst-schema",
        num: "04",
        title: "MySQL Schema Design for GST Billing: Triggers, Views & Calculations",
        excerpt: "Complete walkthrough of a production-ready MySQL schema with CGST/SGST/IGST logic, triggers, and views for Indian billing software.",
        tags: [
            "MySQL",
            "GST",
            "Schema Design"
        ],
        date: "Feb 2026",
        accent: "#F472B6",
        readTime: "10 min read"
    }
];
function BlogPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "d9ce0cd6493b7a1bf1b6463ccef02f7d6f178322d4d2b02357d93490eebb35fc") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9ce0cd6493b7a1bf1b6463ccef02f7d6f178322d4d2b02357d93490eebb35fc";
    }
    let t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            background: "var(--bg)",
            paddingTop: 72,
            minHeight: "100vh"
        };
        t1 = {
            padding: "100px 0 60px",
            position: "relative",
            overflow: "hidden"
        };
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: -80,
                right: -60,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,255,87,0.05), transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/page.js",
            lineNumber: 65,
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
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-label",
            style: {
                marginBottom: 24
            },
            children: "Blog"
        }, void 0, false, {
            fileName: "[project]/app/blog/page.js",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        t5 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(52px, 9vw, 120px)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            color: "var(--text)",
            margin: 0
        };
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/app/blog/page.js",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t0,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: t1,
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: t3,
                            children: [
                                t4,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: t5,
                                    children: [
                                        "THOUGHTS",
                                        t6,
                                        "& ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: "var(--accent)"
                                            },
                                            children: "CRAFT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/page.js",
                                            lineNumber: 120,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/page.js",
                                    lineNumber: 120,
                                    columnNumber: 70
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/page.js",
                            lineNumber: 120,
                            columnNumber: 50
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/page.js",
                    lineNumber: 120,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        borderTop: "1px solid var(--border)",
                        padding: "0 28px 120px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 1400,
                            margin: "0 auto"
                        },
                        children: posts.map(_BlogPagePostsMap)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 125,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/blog/page.js",
                    lineNumber: 122,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: "\n        @media (max-width: 640px) {\n          .post-meta { display: none !important; }\n        }\n      "
                }, void 0, false, {
                    fileName: "[project]/app/blog/page.js",
                    lineNumber: 128,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/page.js",
            lineNumber: 120,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c = BlogPage;
function _BlogPagePostsMap(post, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/blog/${post.slug}`,
        style: {
            display: "flex",
            gap: 32,
            padding: "40px 0",
            borderBottom: "1px solid var(--border)",
            textDecoration: "none",
            alignItems: "flex-start",
            transition: "all 0.2s ease"
        },
        onMouseEnter: _BlogPagePostsMapLinkOnMouseEnter,
        onMouseLeave: _BlogPagePostsMapLinkOnMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: post.accent,
                    paddingTop: 4,
                    minWidth: 28
                },
                children: post.num
            }, void 0, false, {
                fileName: "[project]/app/blog/page.js",
                lineNumber: 144,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 16,
                            marginBottom: 12,
                            flexWrap: "wrap"
                        },
                        children: post.tags.map({
                            "BlogPage[posts.map() > post.tags.map()]": (tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-mono)",
                                        fontSize: 10,
                                        letterSpacing: "0.1em",
                                        padding: "3px 10px",
                                        border: `1px solid ${post.accent}33`,
                                        borderRadius: 100,
                                        color: post.accent,
                                        background: `${post.accent}0D`
                                    },
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/app/blog/page.js",
                                    lineNumber: 160,
                                    columnNumber: 61
                                }, this)
                        }["BlogPage[posts.map() > post.tags.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 153,
                        columnNumber: 8
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "post-title",
                        style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(22px, 3vw, 38px)",
                            letterSpacing: "0.02em",
                            color: "var(--text)",
                            margin: "0 0 12px",
                            transition: "color 0.2s ease",
                            lineHeight: 1.1
                        },
                        children: post.title.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 170,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "var(--font-sans)",
                            fontSize: 14,
                            lineHeight: 1.65,
                            color: "var(--text-dim)",
                            margin: 0,
                            maxWidth: 640
                        },
                        children: post.excerpt
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 178,
                        columnNumber: 41
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/page.js",
                lineNumber: 151,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 8,
                    flexShrink: 0
                },
                className: "post-meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "var(--text-faint)"
                        },
                        children: post.date
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 191,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "var(--text-faint)"
                        },
                        children: post.readTime
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 195,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        style: {
                            marginTop: 4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 10h12M10 4l6 6-6 6",
                            stroke: "var(--text-faint)",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/page.js",
                            lineNumber: 201,
                            columnNumber: 10
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.js",
                        lineNumber: 199,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/page.js",
                lineNumber: 185,
                columnNumber: 34
            }, this)
        ]
    }, post.slug, true, {
        fileName: "[project]/app/blog/page.js",
        lineNumber: 136,
        columnNumber: 10
    }, this);
}
function _BlogPagePostsMapLinkOnMouseLeave(e_0) {
    e_0.currentTarget.querySelector(".post-title").style.color = "var(--text)";
}
function _BlogPagePostsMapLinkOnMouseEnter(e) {
    e.currentTarget.querySelector(".post-title").style.color = "var(--accent)";
}
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_blog_page_baea5e39.js.map