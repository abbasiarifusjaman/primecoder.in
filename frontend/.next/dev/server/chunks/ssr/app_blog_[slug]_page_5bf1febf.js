module.exports = [
"[project]/app/blog/[slug]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
// ─── Post database ──────────────────────────────────────────────────────────
const posts = {
    "billbook-pro-architecture": {
        num: "01",
        slug: "billbook-pro-architecture",
        title: "Building BillBook Pro: GST-Compliant Architecture for Indian SMBs",
        subtitle: "How I designed a proprietary .billbook file format, AWS RDS MySQL schema, and React Native offline-first architecture for billing at scale.",
        tags: [
            "React Native",
            "MySQL",
            "AWS",
            "GST"
        ],
        date: "May 2026",
        readTime: "8 min read",
        accent: "#A8FF57",
        accentRgb: "168,255,87",
        category: "Architecture",
        author: "A.J. Abbasi",
        sections: [
            {
                type: "intro",
                body: "Indian SMBs face a unique challenge: they need billing software that works offline in areas with spotty connectivity, complies with complex GST regulations, and scales without ballooning infrastructure costs. BillBook Pro is my answer to that problem."
            },
            {
                type: "heading",
                text: "The .billbook File Format"
            },
            {
                type: "body",
                text: "Instead of relying solely on cloud sync, I designed a proprietary binary format — .billbook — that encodes invoice data, customer metadata, and GST breakdowns into a compact, self-contained file. This enables true offline-first functionality: any device can generate, read, and share a complete invoice without network access."
            },
            {
                type: "code",
                lang: "sql",
                label: "MySQL — GST Invoice Schema",
                code: `CREATE TABLE invoices (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  invoice_no  VARCHAR(20) NOT NULL UNIQUE,
  customer_id BIGINT UNSIGNED NOT NULL,
  subtotal    DECIMAL(12,2) NOT NULL,
  cgst_rate   DECIMAL(5,2)  NOT NULL DEFAULT 9.00,
  sgst_rate   DECIMAL(5,2)  NOT NULL DEFAULT 9.00,
  igst_rate   DECIMAL(5,2)  NOT NULL DEFAULT 0.00,
  cgst_amount DECIMAL(12,2) GENERATED ALWAYS AS
                (subtotal * cgst_rate / 100) STORED,
  sgst_amount DECIMAL(12,2) GENERATED ALWAYS AS
                (subtotal * sgst_rate / 100) STORED,
  igst_amount DECIMAL(12,2) GENERATED ALWAYS AS
                (subtotal * igst_rate / 100) STORED,
  total       DECIMAL(12,2) GENERATED ALWAYS AS
                (subtotal + cgst_amount + sgst_amount + igst_amount) STORED,
  status      ENUM('draft','sent','paid','cancelled') DEFAULT 'draft',
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_customer (customer_id),
  INDEX idx_status   (status, created_at)
);`
            },
            {
                type: "heading",
                text: "Offline-First Sync Architecture"
            },
            {
                type: "body",
                text: "The React Native app uses a local SQLite database as the source of truth. When connectivity resumes, a delta-sync algorithm pushes only changed records to AWS RDS MySQL. Conflict resolution favours the server timestamp, with client overrides logged for audit trails."
            },
            {
                type: "callout",
                icon: "💡",
                label: "Key Insight",
                text: "Generated columns in MySQL do the GST math at storage time — no risk of calculation drift between the app and the backend."
            },
            {
                type: "heading",
                text: "AWS Infrastructure"
            },
            {
                type: "body",
                text: "The backend runs on AWS RDS MySQL (Multi-AZ) behind an API Gateway + Lambda layer. CloudFront handles static assets and the .billbook file downloads. Costs stayed under $40/month for 500 active SMB users by leaning on Lambda's pay-per-invocation model."
            },
            {
                type: "stats",
                items: [
                    {
                        value: "< 40ms",
                        label: "Avg API latency"
                    },
                    {
                        value: "99.97%",
                        label: "Uptime SLA"
                    },
                    {
                        value: "$38/mo",
                        label: "AWS infra cost"
                    },
                    {
                        value: "500+",
                        label: "Active SMBs"
                    }
                ]
            }
        ],
        relatedSlugs: [
            "mysql-gst-schema",
            "react-native-truecaller-sdk"
        ]
    },
    "nextjs-gsap-portfolio": {
        num: "02",
        slug: "nextjs-gsap-portfolio",
        title: "GSAP ScrollTrigger Animations in Next.js — Practical Patterns",
        subtitle: "Deep dive into integrating GSAP ScrollTrigger with React and Next.js. Patterns that actually work without hydration issues.",
        tags: [
            "Next.js",
            "GSAP",
            "Animation"
        ],
        date: "April 2026",
        readTime: "6 min read",
        accent: "#38BDF8",
        accentRgb: "56,189,248",
        category: "Animation",
        author: "A.J. Abbasi",
        sections: [
            {
                type: "intro",
                body: "Integrating GSAP with Next.js's server-side rendering model has hidden landmines. Most tutorials skip the hard parts — hydration mismatches, cleanup logic, and React Strict Mode double-invocations. Here are the patterns I use in production."
            },
            {
                type: "heading",
                text: "The useGSAP Hook"
            },
            {
                type: "body",
                text: "GSAP's official @gsap/react package ships a useGSAP hook that handles cleanup automatically. Always scope your animations to a container ref to prevent memory leaks when components unmount."
            },
            {
                type: "code",
                lang: "jsx",
                label: "React — useGSAP with ScrollTrigger",
                code: `import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedSection() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from(".card", {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: container });

  return (
    <section ref={container}>
      {items.map(item => (
        <div key={item.id} className="card">{item.content}</div>
      ))}
    </section>
  );
}`
            },
            {
                type: "callout",
                icon: "⚠️",
                label: "Hydration Warning",
                text: "Never initialize GSAP outside useEffect or useGSAP. SSR renders without a DOM — any direct manipulation will cause React hydration mismatches."
            },
            {
                type: "stats",
                items: [
                    {
                        value: "60fps",
                        label: "Target frame rate"
                    },
                    {
                        value: "0ms",
                        label: "Layout shift"
                    },
                    {
                        value: "~18kb",
                        label: "GSAP gzip bundle"
                    },
                    {
                        value: "100",
                        label: "Lighthouse perf"
                    }
                ]
            }
        ],
        relatedSlugs: [
            "billbook-pro-architecture",
            "react-native-truecaller-sdk"
        ]
    },
    "react-native-truecaller-sdk": {
        num: "03",
        slug: "react-native-truecaller-sdk",
        title: "Implementing a Truecaller-Style Auth Bottom Sheet in React Native",
        subtitle: "Building a smooth spring-physics bottom sheet with PanResponder for phone authentication — no third-party libraries.",
        tags: [
            "React Native",
            "Animation",
            "Auth"
        ],
        date: "March 2026",
        readTime: "5 min read",
        accent: "#FB923C",
        accentRgb: "251,146,60",
        category: "Mobile",
        author: "A.J. Abbasi",
        sections: [
            {
                type: "intro",
                body: "Most React Native bottom sheet libraries are overkill for a single auth flow. I built a spring-physics sheet from scratch using Animated API and PanResponder — under 200 lines, no dependencies."
            },
            {
                type: "heading",
                text: "Spring Physics with Animated"
            },
            {
                type: "body",
                text: "The key is using Animated.spring instead of Animated.timing for the snap gesture. Spring gives you the momentum physics that make the sheet feel native — tune friction and tension to match the platform's feel."
            },
            {
                type: "code",
                lang: "jsx",
                label: "React Native — Spring Bottom Sheet",
                code: `const SHEET_HEIGHT = 340;
const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;

const panResponder = PanResponder.create({
  onMoveShouldSetPanResponder: (_, { dy }) => Math.abs(dy) > 5,
  onPanResponderMove: (_, { dy }) => {
    if (dy > 0) translateY.setValue(dy);
  },
  onPanResponderRelease: (_, { dy, vy }) => {
    if (dy > SHEET_HEIGHT * 0.4 || vy > 0.5) {
      dismiss(); // snap down
    } else {
      Animated.spring(translateY, {
        toValue: 0,
        friction: 8,
        tension: 80,
        useNativeDriver: true,
      }).start();
    }
  },
});`
            }
        ],
        relatedSlugs: [
            "nextjs-gsap-portfolio",
            "mysql-gst-schema"
        ]
    },
    "mysql-gst-schema": {
        num: "04",
        slug: "mysql-gst-schema",
        title: "MySQL Schema Design for GST Billing: Triggers, Views & Calculations",
        subtitle: "Complete walkthrough of a production-ready MySQL schema with CGST/SGST/IGST logic, triggers, and views for Indian billing software.",
        tags: [
            "MySQL",
            "GST",
            "Schema Design"
        ],
        date: "Feb 2026",
        readTime: "10 min read",
        accent: "#F472B6",
        accentRgb: "244,114,182",
        category: "Database",
        author: "A.J. Abbasi",
        sections: [
            {
                type: "intro",
                body: "GST in India has three components — CGST, SGST, and IGST — and which applies depends on whether the transaction is intra-state or inter-state. Getting this right in the DB layer prevents a whole class of calculation bugs."
            },
            {
                type: "heading",
                text: "Trigger-Based Audit Log"
            },
            {
                type: "body",
                text: "Every invoice mutation is recorded in an audit_log table via an AFTER UPDATE trigger. This gives finance teams a tamper-evident history without any application-layer code changes."
            },
            {
                type: "code",
                lang: "sql",
                label: "MySQL — Audit Trigger",
                code: `DELIMITER $$
CREATE TRIGGER after_invoice_update
  AFTER UPDATE ON invoices
  FOR EACH ROW
BEGIN
  INSERT INTO audit_log (
    table_name, record_id, changed_at,
    old_status, new_status, changed_by
  ) VALUES (
    'invoices', NEW.id, NOW(),
    OLD.status, NEW.status,
    @current_user_id
  );
END$$
DELIMITER ;`
            },
            {
                type: "stats",
                items: [
                    {
                        value: "3",
                        label: "GST components"
                    },
                    {
                        value: "100%",
                        label: "Audit coverage"
                    },
                    {
                        value: "0",
                        label: "Calc errors in prod"
                    },
                    {
                        value: "10+",
                        label: "Views & procedures"
                    }
                ]
            }
        ],
        relatedSlugs: [
            "billbook-pro-architecture",
            "nextjs-gsap-portfolio"
        ]
    }
};
const allPosts = [
    posts["billbook-pro-architecture"],
    posts["nextjs-gsap-portfolio"],
    posts["react-native-truecaller-sdk"],
    posts["mysql-gst-schema"]
];
// ─── Reading progress bar ───────────────────────────────────────────────────
function ProgressBar({ accent }) {
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            const el = document.documentElement;
            const scrolled = el.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            setProgress(total > 0 ? scrolled / total * 100 : 0);
        };
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.05)",
            zIndex: 200
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: "100%",
                width: `${progress}%`,
                background: accent,
                transition: "width 0.1s linear",
                boxShadow: `0 0 12px ${accent}80`
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 330,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
// ─── Code block ─────────────────────────────────────────────────────────────
function CodeBlock({ code, lang, label, accent }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const copy = async ()=>{
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            margin: "48px 0",
            border: `1px solid rgba(${accent === "#A8FF57" ? "168,255,87" : accent === "#38BDF8" ? "56,189,248" : accent === "#FB923C" ? "251,146,60" : "244,114,182"},0.15)`,
            borderRadius: 12,
            overflow: "hidden",
            background: "#08080F"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 20px",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    background: "rgba(255,255,255,0.02)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "#FF5F57"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "#FFBD2E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 10,
                                            height: 10,
                                            borderRadius: "50%",
                                            background: "#28C840"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 11,
                                    letterSpacing: "0.12em",
                                    color: "var(--text-faint)"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: copy,
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: copied ? accent : "var(--text-faint)",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            transition: "color 0.2s",
                            padding: "4px 8px"
                        },
                        children: copied ? "✓ Copied" : "Copy"
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                style: {
                    margin: 0,
                    padding: "24px",
                    overflowX: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: "rgba(238,238,240,0.85)",
                    scrollbarWidth: "thin"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    children: code
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 444,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 432,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
// ─── Stats row ───────────────────────────────────────────────────────────────
function StatsRow({ items, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "grid",
            gridTemplateColumns: `repeat(${items.length}, 1fr)`,
            gap: 1,
            margin: "48px 0",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "32px 24px",
                    background: "var(--surface)",
                    borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-display)",
                            fontSize: "clamp(28px, 4vw, 48px)",
                            lineHeight: 1,
                            color: accent,
                            marginBottom: 8
                        },
                        children: item.value
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--text-faint)"
                        },
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 486,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 465,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 453,
        columnNumber: 5
    }, this);
}
// ─── Callout ─────────────────────────────────────────────────────────────────
function Callout({ icon, label, text, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            margin: "40px 0",
            padding: "24px 28px",
            borderLeft: `3px solid ${accent}`,
            background: `rgba(${accent === "#A8FF57" ? "168,255,87" : accent === "#38BDF8" ? "56,189,248" : accent === "#FB923C" ? "251,146,60" : "244,114,182"},0.05)`,
            borderRadius: "0 8px 8px 0"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-mono)",
                            fontSize: 10,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: accent
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 515,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--text-dim)",
                    margin: 0
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 536,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 506,
        columnNumber: 5
    }, this);
}
// ─── Table of Contents ───────────────────────────────────────────────────────
function TableOfContents({ sections, accent }) {
    const headings = sections.filter((s)=>s.type === "heading");
    if (headings.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "24px",
            border: "1px solid var(--border)",
            borderRadius: 12,
            background: "var(--surface)",
            marginBottom: 48
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    marginBottom: 16
                },
                children: "Contents"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                },
                children: headings.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 10,
                                    color: accent,
                                    minWidth: 20
                                },
                                children: [
                                    "0",
                                    i + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 584,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 14,
                                    color: "var(--text-dim)"
                                },
                                children: h.text
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 594,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 580,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 578,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 557,
        columnNumber: 5
    }, this);
}
// ─── Related posts ───────────────────────────────────────────────────────────
function RelatedPosts({ slugs }) {
    const related = slugs.map((s)=>posts[s]).filter(Boolean);
    if (!related.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            marginTop: 80,
            paddingTop: 64,
            borderTop: "1px solid var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-label",
                style: {
                    marginBottom: 32
                },
                children: "Continue Reading"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 623,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 20
                },
                children: related.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/blog/${post.slug}`,
                        style: {
                            display: "block",
                            padding: "28px",
                            border: "1px solid var(--border)",
                            borderRadius: 12,
                            background: "var(--surface)",
                            textDecoration: "none",
                            transition: "border-color 0.2s, transform 0.2s"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = post.accent + "60";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.transform = "translateY(0)";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 10,
                                    letterSpacing: "0.15em",
                                    color: post.accent,
                                    marginBottom: 12
                                },
                                children: [
                                    post.num,
                                    " · ",
                                    post.readTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-display)",
                                    fontSize: 18,
                                    letterSpacing: "0.02em",
                                    color: "var(--text)",
                                    margin: "0 0 12px",
                                    lineHeight: 1.2
                                },
                                children: post.title.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 13,
                                    color: "var(--text-dim)",
                                    lineHeight: 1.6,
                                    margin: "0 0 16px"
                                },
                                children: post.subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 6,
                                    flexWrap: "wrap"
                                },
                                children: post.tags.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 9,
                                            letterSpacing: "0.1em",
                                            padding: "3px 8px",
                                            border: `1px solid ${post.accent}30`,
                                            borderRadius: 100,
                                            color: post.accent,
                                            background: `${post.accent}0D`
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 691,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 689,
                                columnNumber: 13
                            }, this)
                        ]
                    }, post.slug, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 634,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 626,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 616,
        columnNumber: 5
    }, this);
}
function BlogPostPage() {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const post = posts[slug];
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // 404 fallback
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: "var(--bg)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                paddingTop: 72
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontFamily: "var(--font-display)",
                        fontSize: 96,
                        color: "var(--accent)",
                        lineHeight: 1
                    },
                    children: "404"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 743,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-dim)",
                        fontSize: 14,
                        letterSpacing: "0.1em"
                    },
                    children: "POST NOT FOUND"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 753,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/blog",
                    className: "btn-outline",
                    style: {
                        textDecoration: "none"
                    },
                    children: "← Back to Blog"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 763,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 731,
            columnNumber: 7
        }, this);
    }
    const accentRgb = post.accentRgb || "168,255,87";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "var(--bg)",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
                accent: post.accent
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                ref: heroRef,
                style: {
                    position: "relative",
                    paddingTop: 140,
                    paddingBottom: 80,
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: -100 + scrollY * 0.15,
                            right: -100,
                            width: 700,
                            height: 700,
                            borderRadius: "50%",
                            background: `radial-gradient(circle, rgba(${accentRgb},0.07), transparent 65%)`,
                            filter: "blur(80px)",
                            pointerEvents: "none",
                            transition: "top 0.05s linear"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            backgroundImage: `
            linear-gradient(rgba(${accentRgb},0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${accentRgb},0.03) 1px, transparent 1px)
          `,
                            backgroundSize: "80px 80px",
                            pointerEvents: "none",
                            maskImage: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.6) 70%, transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 807,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: 800,
                            margin: "0 auto",
                            padding: "0 28px",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    marginBottom: 40,
                                    fontFamily: "var(--font-mono)",
                                    fontSize: 11,
                                    letterSpacing: "0.12em"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blog",
                                        style: {
                                            color: "var(--text-faint)",
                                            textDecoration: "none",
                                            transition: "color 0.2s"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = post.accent,
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-faint)",
                                        children: "BLOG"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-faint)"
                                        },
                                        children: "·"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 856,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: post.accent
                                        },
                                        children: post.category.toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 857,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 831,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(80px, 14vw, 160px)",
                                    lineHeight: 1,
                                    color: `rgba(${accentRgb},0.06)`,
                                    position: "absolute",
                                    top: -20,
                                    right: -20,
                                    pointerEvents: "none",
                                    userSelect: "none"
                                },
                                children: post.num
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 863,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 8,
                                    marginBottom: 28
                                },
                                children: post.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 10,
                                            letterSpacing: "0.1em",
                                            padding: "5px 12px",
                                            border: `1px solid ${post.accent}30`,
                                            borderRadius: 100,
                                            color: post.accent,
                                            background: `${post.accent}0D`
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 889,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 880,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontFamily: "var(--font-display)",
                                    fontSize: "clamp(32px, 5.5vw, 72px)",
                                    lineHeight: 1.05,
                                    letterSpacing: "0.02em",
                                    color: "var(--text)",
                                    margin: "0 0 24px"
                                },
                                children: post.title.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 908,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 17,
                                    lineHeight: 1.7,
                                    color: "var(--text-dim)",
                                    margin: "0 0 40px",
                                    maxWidth: 620
                                },
                                children: post.subtitle
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 922,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 24,
                                    paddingTop: 24,
                                    borderTop: "1px solid var(--border)",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: "50%",
                                                    background: `rgba(${accentRgb},0.15)`,
                                                    border: `1px solid rgba(${accentRgb},0.3)`,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 18 18",
                                                    fill: "none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 3L2 9l4 6M12 3l4 6-4 6M10.5 2l-3 14",
                                                        stroke: post.accent,
                                                        strokeWidth: "1.8",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.js",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/blog/[slug]/page.js",
                                                    lineNumber: 960,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 948,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-mono)",
                                                            fontSize: 11,
                                                            letterSpacing: "0.08em",
                                                            color: "var(--text)"
                                                        },
                                                        children: post.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.js",
                                                        lineNumber: 971,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-mono)",
                                                            fontSize: 10,
                                                            letterSpacing: "0.08em",
                                                            color: "var(--text-faint)"
                                                        },
                                                        children: "PrimeCoder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.js",
                                                        lineNumber: 981,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 970,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 947,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 1,
                                            height: 32,
                                            background: "var(--border)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 994,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-mono)",
                                            fontSize: 11,
                                            letterSpacing: "0.12em",
                                            color: "var(--text-faint)"
                                        },
                                        children: post.date
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 998,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                viewBox: "0 0 12 12",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "6",
                                                        cy: "6",
                                                        r: "5",
                                                        stroke: "var(--text-faint)",
                                                        strokeWidth: "1.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.js",
                                                        lineNumber: 1011,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 3.5V6l2 1.5",
                                                        stroke: "var(--text-faint)",
                                                        strokeWidth: "1.2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/blog/[slug]/page.js",
                                                        lineNumber: 1018,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 1010,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-mono)",
                                                    fontSize: 11,
                                                    letterSpacing: "0.1em",
                                                    color: "var(--text-faint)"
                                                },
                                                children: post.readTime
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 1025,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 936,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 781,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 1,
                    background: "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1041,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                style: {
                    maxWidth: 800,
                    margin: "0 auto",
                    padding: "72px 28px 120px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableOfContents, {
                        sections: post.sections,
                        accent: post.accent
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1053,
                        columnNumber: 9
                    }, this),
                    post.sections.map((section, idx)=>{
                        if (section.type === "intro") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-sans)",
                                fontSize: 18,
                                lineHeight: 1.8,
                                color: "var(--text)",
                                margin: "0 0 40px",
                                paddingLeft: 20,
                                borderLeft: `3px solid ${post.accent}`,
                                fontWeight: 400
                            },
                            children: section.body
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1058,
                            columnNumber: 15
                        }, this);
                        if (section.type === "heading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-display)",
                                fontSize: "clamp(22px, 3.5vw, 38px)",
                                letterSpacing: "0.03em",
                                color: "var(--text)",
                                margin: "64px 0 24px",
                                display: "flex",
                                alignItems: "center",
                                gap: 16
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-block",
                                        width: 28,
                                        height: 2,
                                        background: post.accent,
                                        flexShrink: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.js",
                                    lineNumber: 1090,
                                    columnNumber: 17
                                }, this),
                                section.text.toUpperCase()
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1077,
                            columnNumber: 15
                        }, this);
                        if (section.type === "body") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-sans)",
                                fontSize: 16,
                                lineHeight: 1.85,
                                color: "var(--text-dim)",
                                margin: "0 0 28px"
                            },
                            children: section.text
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1105,
                            columnNumber: 15
                        }, this);
                        if (section.type === "code") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                            code: section.code,
                            lang: section.lang,
                            label: section.label,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1121,
                            columnNumber: 15
                        }, this);
                        if (section.type === "callout") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Callout, {
                            icon: section.icon,
                            label: section.label,
                            text: section.text,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1132,
                            columnNumber: 15
                        }, this);
                        if (section.type === "stats") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsRow, {
                            items: section.items,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1143,
                            columnNumber: 15
                        }, this);
                        return null;
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 72,
                            padding: "36px",
                            border: "1px solid var(--border)",
                            borderRadius: 16,
                            background: "var(--surface)",
                            display: "flex",
                            gap: 24,
                            alignItems: "flex-start",
                            flexWrap: "wrap"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 56,
                                    height: 56,
                                    borderRadius: 12,
                                    background: `rgba(${accentRgb},0.12)`,
                                    border: `1px solid rgba(${accentRgb},0.25)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "22",
                                    height: "22",
                                    viewBox: "0 0 18 18",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 3L2 9l4 6M12 3l4 6-4 6M10.5 2l-3 14",
                                        stroke: post.accent,
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1177,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.js",
                                    lineNumber: 1176,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 1163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-label",
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: "Written by"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-display)",
                                            fontSize: 22,
                                            letterSpacing: "0.04em",
                                            color: "var(--text)",
                                            marginBottom: 8
                                        },
                                        children: "A.J. ABBASI"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                            color: "var(--text-dim)",
                                            margin: "0 0 16px"
                                        },
                                        children: "Full-stack developer from Agartala, India. I build high-performance web and mobile products for ambitious businesses."
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: 12
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                style: {
                                                    fontFamily: "var(--font-mono)",
                                                    fontSize: 11,
                                                    letterSpacing: "0.12em",
                                                    color: post.accent,
                                                    textDecoration: "none"
                                                },
                                                children: "GitHub →"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 1214,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://twitter.com",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                style: {
                                                    fontFamily: "var(--font-mono)",
                                                    fontSize: 11,
                                                    letterSpacing: "0.12em",
                                                    color: "var(--text-faint)",
                                                    textDecoration: "none"
                                                },
                                                children: "Twitter"
                                            }, void 0, false, {
                                                fileName: "[project]/app/blog/[slug]/page.js",
                                                lineNumber: 1228,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/blog/[slug]/page.js",
                                lineNumber: 1186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedPosts, {
                        slugs: post.relatedSlugs
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 64,
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/blog",
                            className: "btn-outline",
                            style: {
                                textDecoration: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 14 14",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 7H4M7 4L4 7l3 3",
                                        stroke: "currentColor",
                                        strokeWidth: "1.4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/blog/[slug]/page.js",
                                        lineNumber: 1259,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.js",
                                    lineNumber: 1258,
                                    columnNumber: 13
                                }, this),
                                "All Articles"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1050,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 600px) {
          article > div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_blog_%5Bslug%5D_page_5bf1febf.js.map