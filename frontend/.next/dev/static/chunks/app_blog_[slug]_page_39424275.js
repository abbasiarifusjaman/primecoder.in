(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/blog/[slug]/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
function ProgressBar(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { accent } = t0;
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ProgressBar[useEffect()]": ()=>{
                const onScroll = {
                    "ProgressBar[useEffect() > onScroll]": ()=>{
                        const el = document.documentElement;
                        const scrolled = el.scrollTop;
                        const total = el.scrollHeight - el.clientHeight;
                        setProgress(total > 0 ? scrolled / total * 100 : 0);
                    }
                }["ProgressBar[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["ProgressBar[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.05)",
            zIndex: 200
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const t4 = `${progress}%`;
    const t5 = `0 0 12px ${accent}80`;
    let t6;
    if ($[4] !== accent || $[5] !== t4 || $[6] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "100%",
                    width: t4,
                    background: accent,
                    transition: "width 0.1s linear",
                    boxShadow: t5
                }
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 341,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 341,
            columnNumber: 10
        }, this);
        $[4] = accent;
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_s(ProgressBar, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ProgressBar;
// ─── Code block ─────────────────────────────────────────────────────────────
function CodeBlock(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { code, label, accent } = t0;
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== code) {
        t1 = ({
            "CodeBlock[copy]": async ()=>{
                await navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout({
                    "CodeBlock[copy > setTimeout()]": ()=>setCopied(false)
                }["CodeBlock[copy > setTimeout()]"], 2000);
            }
        })["CodeBlock[copy]"];
        $[1] = code;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const copy = t1;
    const t2 = `1px solid rgba(${accent === "#A8FF57" ? "168,255,87" : accent === "#38BDF8" ? "56,189,248" : accent === "#FB923C" ? "251,146,60" : "244,114,182"},0.15)`;
    let t3;
    if ($[3] !== t2) {
        t3 = {
            margin: "48px 0",
            border: t2,
            borderRadius: 12,
            overflow: "hidden",
            background: "#08080F"
        };
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(255,255,255,0.02)"
        };
        t5 = {
            display: "flex",
            alignItems: "center",
            gap: 12
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                gap: 6
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#FF5F57"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 426,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#FFBD2E"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 431,
                    columnNumber: 12
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#28C840"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 436,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 423,
            columnNumber: 10
        }, this);
        t7 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--text-faint)"
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
    let t8;
    if ($[9] !== label) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: t7,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 460,
                    columnNumber: 30
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 460,
            columnNumber: 10
        }, this);
        $[9] = label;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const t9 = copied ? accent : "var(--text-faint)";
    let t10;
    if ($[11] !== t9) {
        t10 = {
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: t9,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            transition: "color 0.2s",
            padding: "4px 8px"
        };
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = copied ? "\u2713 Copied" : "Copy";
    let t12;
    if ($[13] !== copy || $[14] !== t10 || $[15] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: copy,
            style: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[13] = copy;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] !== t12 || $[18] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 499,
            columnNumber: 11
        }, this);
        $[17] = t12;
        $[18] = t8;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            margin: 0,
            padding: "24px",
            overflowX: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            lineHeight: 1.75,
            color: "rgba(238,238,240,0.85)",
            scrollbarWidth: "thin"
        };
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== code) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
            style: t14,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                children: code
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 524,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 524,
            columnNumber: 11
        }, this);
        $[21] = code;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t13 || $[24] !== t15 || $[25] !== t3) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 532,
            columnNumber: 11
        }, this);
        $[23] = t13;
        $[24] = t15;
        $[25] = t3;
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    return t16;
}
_s1(CodeBlock, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c1 = CodeBlock;
// ─── Stats row ───────────────────────────────────────────────────────────────
function StatsRow(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { items, accent } = t0;
    const t1 = `repeat(${items.length}, 1fr)`;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            display: "grid",
            gridTemplateColumns: t1,
            gap: 1,
            margin: "48px 0",
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden"
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== accent || $[4] !== items) {
        let t4;
        if ($[6] !== accent || $[7] !== items.length) {
            t4 = ({
                "StatsRow[items.map()]": (item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "32px 24px",
                            background: "var(--surface)",
                            borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 583,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 589,
                                columnNumber: 32
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 578,
                        columnNumber: 47
                    }, this)
            })["StatsRow[items.map()]"];
            $[6] = accent;
            $[7] = items.length;
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        t3 = items.map(t4);
        $[3] = accent;
        $[4] = items;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[9] !== t2 || $[10] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 612,
            columnNumber: 10
        }, this);
        $[9] = t2;
        $[10] = t3;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    return t4;
}
_c2 = StatsRow;
// ─── Callout ─────────────────────────────────────────────────────────────────
function Callout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { icon, label, text, accent } = t0;
    const t1 = `3px solid ${accent}`;
    const t2 = `rgba(${accent === "#A8FF57" ? "168,255,87" : accent === "#38BDF8" ? "56,189,248" : accent === "#FB923C" ? "251,146,60" : "244,114,182"},0.05)`;
    let t3;
    if ($[1] !== t1 || $[2] !== t2) {
        t3 = {
            margin: "40px 0",
            padding: "24px 28px",
            borderLeft: t1,
            background: t2,
            borderRadius: "0 8px 8px 0"
        };
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== icon) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: icon
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 668,
            columnNumber: 10
        }, this);
        $[5] = icon;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== accent) {
        t6 = {
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: accent
        };
        $[7] = accent;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== label || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t6,
            children: label
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 690,
            columnNumber: 10
        }, this);
        $[9] = label;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t5 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t4,
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 699,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "var(--text-dim)",
            margin: 0
        };
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== text) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t9,
            children: text
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 721,
            columnNumber: 11
        }, this);
        $[16] = text;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t3 || $[20] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 729,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t3;
        $[20] = t8;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    return t11;
}
_c3 = Callout;
// ─── Table of Contents ───────────────────────────────────────────────────────
function TableOfContents(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { sections, accent } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== accent || $[2] !== sections) {
        t5 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const headings = sections.filter(_TableOfContentsSectionsFilter);
            if (headings.length === 0) {
                t5 = null;
                break bb0;
            }
            if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = {
                    padding: "24px",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    background: "var(--surface)",
                    marginBottom: 48
                };
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 774,
                    columnNumber: 14
                }, this);
                t1 = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10
                };
                $[8] = t1;
                $[9] = t3;
                $[10] = t4;
            } else {
                t1 = $[8];
                t3 = $[9];
                t4 = $[10];
            }
            let t6;
            if ($[11] !== accent) {
                t6 = ({
                    "TableOfContents[headings.map()]": (h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 802,
                                    columnNumber: 14
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: 14,
                                        color: "var(--text-dim)"
                                    },
                                    children: h.text
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.js",
                                    lineNumber: 807,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 798,
                            columnNumber: 56
                        }, this)
                })["TableOfContents[headings.map()]"];
                $[11] = accent;
                $[12] = t6;
            } else {
                t6 = $[12];
            }
            t2 = headings.map(t6);
        }
        $[1] = accent;
        $[2] = sections;
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
    } else {
        t1 = $[3];
        t2 = $[4];
        t3 = $[5];
        t4 = $[6];
        t5 = $[7];
    }
    if (t5 !== Symbol.for("react.early_return_sentinel")) {
        return t5;
    }
    let t6;
    if ($[13] !== t1 || $[14] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 839,
            columnNumber: 10
        }, this);
        $[13] = t1;
        $[14] = t2;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== t3 || $[17] !== t4 || $[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 848,
            columnNumber: 10
        }, this);
        $[16] = t3;
        $[17] = t4;
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    return t7;
}
_c4 = TableOfContents;
// ─── Related posts ───────────────────────────────────────────────────────────
function _TableOfContentsSectionsFilter(s) {
    return s.type === "heading";
}
function RelatedPosts(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { slugs } = t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] !== slugs) {
        t5 = Symbol.for("react.early_return_sentinel");
        bb0: {
            const related = slugs.map(_RelatedPostsSlugsMap).filter(Boolean);
            if (!related.length) {
                t5 = null;
                break bb0;
            }
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = {
                    marginTop: 80,
                    paddingTop: 64,
                    borderTop: "1px solid var(--border)"
                };
                $[7] = t3;
            } else {
                t3 = $[7];
            }
            if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
                t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-label",
                    style: {
                        marginBottom: 32
                    },
                    children: "Continue Reading"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 898,
                    columnNumber: 14
                }, this);
                t1 = {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 20
                };
                $[8] = t1;
                $[9] = t4;
            } else {
                t1 = $[8];
                t4 = $[9];
            }
            t2 = related.map(_RelatedPostsRelatedMap);
        }
        $[1] = slugs;
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    if (t5 !== Symbol.for("react.early_return_sentinel")) {
        return t5;
    }
    let t6;
    if ($[10] !== t1 || $[11] !== t2) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 932,
            columnNumber: 10
        }, this);
        $[10] = t1;
        $[11] = t2;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t3 || $[14] !== t4 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            style: t3,
            children: [
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 941,
            columnNumber: 10
        }, this);
        $[13] = t3;
        $[14] = t4;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_c5 = RelatedPosts;
// ─── Main page ───────────────────────────────────────────────────────────────
function _RelatedPostsRelatedMap(post) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
        onMouseEnter: {
            "RelatedPosts[related.map() > <Link>.onMouseEnter]": (e)=>{
                e.currentTarget.style.borderColor = post.accent + "60";
                e.currentTarget.style.transform = "translateY(-2px)";
            }
        }["RelatedPosts[related.map() > <Link>.onMouseEnter]"],
        onMouseLeave: _RelatedPostsRelatedMapLinkOnMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 967,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                lineNumber: 973,
                columnNumber: 42
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                lineNumber: 980,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap"
                },
                children: post.tags.slice(0, 2).map({
                    "RelatedPosts[related.map() > (anonymous)()]": (tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            lineNumber: 991,
                            columnNumber: 63
                        }, this)
                }["RelatedPosts[related.map() > (anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 986,
                columnNumber: 27
            }, this)
        ]
    }, post.slug, true, {
        fileName: "[project]/app/blog/[slug]/page.js",
        lineNumber: 954,
        columnNumber: 10
    }, this);
}
function _RelatedPostsRelatedMapLinkOnMouseLeave(e_0) {
    e_0.currentTarget.style.borderColor = "var(--border)";
    e_0.currentTarget.style.transform = "translateY(0)";
}
function _RelatedPostsSlugsMap(s) {
    return posts[s];
}
function BlogPostPage() {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(141);
    if ($[0] !== "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2") {
        for(let $i = 0; $i < 141; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "554f4b0fc6c2e47cffe94da19350f721071ccc948bc0064e698e6a1e42e4a4a2";
    }
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const post = posts[slug];
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "BlogPostPage[useEffect()]": ()=>{
                const onScroll = {
                    "BlogPostPage[useEffect() > onScroll]": ()=>setScrollY(window.scrollY)
                }["BlogPostPage[useEffect() > onScroll]"];
                window.addEventListener("scroll", onScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", onScroll);
            }
        })["BlogPostPage[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!post) {
        let t2;
        let t3;
        let t4;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = {
                background: "var(--bg)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                paddingTop: 72
            };
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontFamily: "var(--font-display)",
                    fontSize: 96,
                    color: "var(--accent)",
                    lineHeight: 1
                },
                children: "404"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1061,
                columnNumber: 12
            }, this);
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-dim)",
                    fontSize: 14,
                    letterSpacing: "0.1em"
                },
                children: "POST NOT FOUND"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1067,
                columnNumber: 12
            }, this);
            $[3] = t2;
            $[4] = t3;
            $[5] = t4;
        } else {
            t2 = $[3];
            t3 = $[4];
            t4 = $[5];
        }
        let t5;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: t2,
                children: [
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        className: "btn-outline",
                        style: {
                            textDecoration: "none"
                        },
                        children: "← Back to Blog"
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1083,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1083,
                columnNumber: 12
            }, this);
            $[6] = t5;
        } else {
            t5 = $[6];
        }
        return t5;
    }
    const accentRgb = post.accentRgb || "168,255,87";
    let t2;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            background: "var(--bg)",
            minHeight: "100vh"
        };
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== post.accent) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProgressBar, {
            accent: post.accent
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1105,
            columnNumber: 10
        }, this);
        $[8] = post.accent;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            position: "relative",
            paddingTop: 140,
            paddingBottom: 80,
            overflow: "hidden"
        };
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = -100 + scrollY * 0.15;
    const t6 = `radial-gradient(circle, rgba(${accentRgb},0.07), transparent 65%)`;
    let t7;
    if ($[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                top: t5,
                right: -100,
                width: 700,
                height: 700,
                borderRadius: "50%",
                background: t6,
                filter: "blur(80px)",
                pointerEvents: "none",
                transition: "top 0.05s linear"
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1127,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const t8 = `
            linear-gradient(rgba(${accentRgb},0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${accentRgb},0.03) 1px, transparent 1px)
          `;
    let t9;
    if ($[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "absolute",
                inset: 0,
                backgroundImage: t8,
                backgroundSize: "80px 80px",
                pointerEvents: "none",
                maskImage: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.6) 70%, transparent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1151,
            columnNumber: 10
        }, this);
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 28px",
            position: "relative"
        };
        t11 = {
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 40,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em"
        };
        $[16] = t10;
        $[17] = t11;
    } else {
        t10 = $[16];
        t11 = $[17];
    }
    let t12;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            color: "var(--text-faint)",
            textDecoration: "none",
            transition: "color 0.2s"
        };
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] !== post.accent) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/blog",
            style: t12,
            onMouseEnter: {
                "BlogPostPage[<Link>.onMouseEnter]": (e)=>e.currentTarget.style.color = post.accent
            }["BlogPostPage[<Link>.onMouseEnter]"],
            onMouseLeave: _BlogPostPageLinkOnMouseLeave,
            children: "BLOG"
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1201,
            columnNumber: 11
        }, this);
        $[19] = post.accent;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: "var(--text-faint)"
            },
            children: "·"
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1211,
            columnNumber: 11
        }, this);
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== post.accent) {
        t15 = {
            color: post.accent
        };
        $[22] = post.accent;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== post.category) {
        t16 = post.category.toUpperCase();
        $[24] = post.category;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] !== t15 || $[27] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t15,
            children: t16
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1238,
            columnNumber: 11
        }, this);
        $[26] = t15;
        $[27] = t16;
        $[28] = t17;
    } else {
        t17 = $[28];
    }
    let t18;
    if ($[29] !== t13 || $[30] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t11,
            children: [
                t13,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1247,
            columnNumber: 11
        }, this);
        $[29] = t13;
        $[30] = t17;
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    const t19 = `rgba(${accentRgb},0.06)`;
    let t20;
    if ($[32] !== t19) {
        t20 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 14vw, 160px)",
            lineHeight: 1,
            color: t19,
            position: "absolute",
            top: -20,
            right: -20,
            pointerEvents: "none",
            userSelect: "none"
        };
        $[32] = t19;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== post.num || $[35] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t20,
            children: post.num
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1275,
            columnNumber: 11
        }, this);
        $[34] = post.num;
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 28
        };
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== post.accent || $[39] !== post.tags) {
        let t24;
        if ($[41] !== post.accent) {
            t24 = ({
                "BlogPostPage[post.tags.map()]": (tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        lineNumber: 1299,
                        columnNumber: 49
                    }, this)
            })["BlogPostPage[post.tags.map()]"];
            $[41] = post.accent;
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        t23 = post.tags.map(t24);
        $[38] = post.accent;
        $[39] = post.tags;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[43] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t22,
            children: t23
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1324,
            columnNumber: 11
        }, this);
        $[43] = t23;
        $[44] = t24;
    } else {
        t24 = $[44];
    }
    let t25;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = {
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5.5vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            color: "var(--text)",
            margin: "0 0 24px"
        };
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== post.title) {
        t26 = post.title.toUpperCase();
        $[46] = post.title;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            style: t25,
            children: t26
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1354,
            columnNumber: 11
        }, this);
        $[48] = t26;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    let t28;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = {
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--text-dim)",
            margin: "0 0 40px",
            maxWidth: 620
        };
        $[50] = t28;
    } else {
        t28 = $[50];
    }
    let t29;
    if ($[51] !== post.subtitle) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: t28,
            children: post.subtitle
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1376,
            columnNumber: 11
        }, this);
        $[51] = post.subtitle;
        $[52] = t29;
    } else {
        t29 = $[52];
    }
    let t30;
    let t31;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap"
        };
        t31 = {
            display: "flex",
            alignItems: "center",
            gap: 10
        };
        $[53] = t30;
        $[54] = t31;
    } else {
        t30 = $[53];
        t31 = $[54];
    }
    const t32 = `rgba(${accentRgb},0.15)`;
    const t33 = `1px solid rgba(${accentRgb},0.3)`;
    let t34;
    if ($[55] !== t32 || $[56] !== t33) {
        t34 = {
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: t32,
            border: t33,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        $[55] = t32;
        $[56] = t33;
        $[57] = t34;
    } else {
        t34 = $[57];
    }
    let t35;
    if ($[58] !== post.accent) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 18 18",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3L2 9l4 6M12 3l4 6-4 6M10.5 2l-3 14",
                stroke: post.accent,
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1426,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1426,
            columnNumber: 11
        }, this);
        $[58] = post.accent;
        $[59] = t35;
    } else {
        t35 = $[59];
    }
    let t36;
    if ($[60] !== t34 || $[61] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t34,
            children: t35
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1434,
            columnNumber: 11
        }, this);
        $[60] = t34;
        $[61] = t35;
        $[62] = t36;
    } else {
        t36 = $[62];
    }
    let t37;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--text)"
        };
        $[63] = t37;
    } else {
        t37 = $[63];
    }
    let t38;
    if ($[64] !== post.author) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t37,
            children: post.author
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1455,
            columnNumber: 11
        }, this);
        $[64] = post.author;
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    let t39;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: "var(--text-faint)"
            },
            children: "PrimeCoder"
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1463,
            columnNumber: 11
        }, this);
        $[66] = t39;
    } else {
        t39 = $[66];
    }
    let t40;
    if ($[67] !== t38) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1475,
            columnNumber: 11
        }, this);
        $[67] = t38;
        $[68] = t40;
    } else {
        t40 = $[68];
    }
    let t41;
    if ($[69] !== t36 || $[70] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t31,
            children: [
                t36,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1483,
            columnNumber: 11
        }, this);
        $[69] = t36;
        $[70] = t40;
        $[71] = t41;
    } else {
        t41 = $[71];
    }
    let t42;
    let t43;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: 1,
                height: 32,
                background: "var(--border)"
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1493,
            columnNumber: 11
        }, this);
        t43 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--text-faint)"
        };
        $[72] = t42;
        $[73] = t43;
    } else {
        t42 = $[72];
        t43 = $[73];
    }
    let t44;
    if ($[74] !== post.date) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t43,
            children: post.date
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1512,
            columnNumber: 11
        }, this);
        $[74] = post.date;
        $[75] = t44;
    } else {
        t44 = $[75];
    }
    let t45;
    if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = {
            display: "flex",
            alignItems: "center",
            gap: 6
        };
        $[76] = t45;
    } else {
        t45 = $[76];
    }
    let t46;
    let t47;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "6",
                    cy: "6",
                    r: "5",
                    stroke: "var(--text-faint)",
                    strokeWidth: "1.2"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 1532,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 3.5V6l2 1.5",
                    stroke: "var(--text-faint)",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 1532,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1532,
            columnNumber: 11
        }, this);
        t47 = {
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "var(--text-faint)"
        };
        $[77] = t46;
        $[78] = t47;
    } else {
        t46 = $[77];
        t47 = $[78];
    }
    let t48;
    if ($[79] !== post.readTime) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t45,
            children: [
                t46,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: t47,
                    children: post.readTime
                }, void 0, false, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 1547,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1547,
            columnNumber: 11
        }, this);
        $[79] = post.readTime;
        $[80] = t48;
    } else {
        t48 = $[80];
    }
    let t49;
    if ($[81] !== t41 || $[82] !== t44 || $[83] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t30,
            children: [
                t41,
                t42,
                t44,
                t48
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1555,
            columnNumber: 11
        }, this);
        $[81] = t41;
        $[82] = t44;
        $[83] = t48;
        $[84] = t49;
    } else {
        t49 = $[84];
    }
    let t50;
    if ($[85] !== t18 || $[86] !== t21 || $[87] !== t24 || $[88] !== t27 || $[89] !== t29 || $[90] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t10,
            children: [
                t18,
                t21,
                t24,
                t27,
                t29,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1565,
            columnNumber: 11
        }, this);
        $[85] = t18;
        $[86] = t21;
        $[87] = t24;
        $[88] = t27;
        $[89] = t29;
        $[90] = t49;
        $[91] = t50;
    } else {
        t50 = $[91];
    }
    let t51;
    if ($[92] !== t50 || $[93] !== t7 || $[94] !== t9) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: heroRef,
            style: t4,
            children: [
                t7,
                t9,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1578,
            columnNumber: 11
        }, this);
        $[92] = t50;
        $[93] = t7;
        $[94] = t9;
        $[95] = t51;
    } else {
        t51 = $[95];
    }
    let t52;
    let t53;
    if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                height: 1,
                background: "linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)"
            }
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1589,
            columnNumber: 11
        }, this);
        t53 = {
            maxWidth: 800,
            margin: "0 auto",
            padding: "72px 28px 120px"
        };
        $[96] = t52;
        $[97] = t53;
    } else {
        t52 = $[96];
        t53 = $[97];
    }
    let t54;
    let t55;
    if ($[98] !== post.accent || $[99] !== post.sections) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableOfContents, {
            sections: post.sections,
            accent: post.accent
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1607,
            columnNumber: 11
        }, this);
        let t56;
        if ($[102] !== post.accent) {
            t56 = ({
                "BlogPostPage[post.sections.map()]": (section, idx)=>{
                    if (section.type === "intro") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 1613,
                            columnNumber: 20
                        }, this);
                    }
                    if (section.type === "heading") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "inline-block",
                                        width: 28,
                                        height: 2,
                                        background: post.accent,
                                        flexShrink: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/[slug]/page.js",
                                    lineNumber: 1634,
                                    columnNumber: 16
                                }, this),
                                section.text.toUpperCase()
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1625,
                            columnNumber: 20
                        }, this);
                    }
                    if (section.type === "body") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            lineNumber: 1643,
                            columnNumber: 20
                        }, this);
                    }
                    if (section.type === "code") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {
                            code: section.code,
                            lang: section.lang,
                            label: section.label,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1652,
                            columnNumber: 20
                        }, this);
                    }
                    if (section.type === "callout") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Callout, {
                            icon: section.icon,
                            label: section.label,
                            text: section.text,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1655,
                            columnNumber: 20
                        }, this);
                    }
                    if (section.type === "stats") {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsRow, {
                            items: section.items,
                            accent: post.accent
                        }, idx, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1658,
                            columnNumber: 20
                        }, this);
                    }
                    return null;
                }
            })["BlogPostPage[post.sections.map()]"];
            $[102] = post.accent;
            $[103] = t56;
        } else {
            t56 = $[103];
        }
        t55 = post.sections.map(t56);
        $[98] = post.accent;
        $[99] = post.sections;
        $[100] = t54;
        $[101] = t55;
    } else {
        t54 = $[100];
        t55 = $[101];
    }
    let t56;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = {
            marginTop: 72,
            padding: "36px",
            border: "1px solid var(--border)",
            borderRadius: 16,
            background: "var(--surface)",
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            flexWrap: "wrap"
        };
        $[104] = t56;
    } else {
        t56 = $[104];
    }
    const t57 = `rgba(${accentRgb},0.12)`;
    const t58 = `1px solid rgba(${accentRgb},0.25)`;
    let t59;
    if ($[105] !== t57 || $[106] !== t58) {
        t59 = {
            width: 56,
            height: 56,
            borderRadius: 12,
            background: t57,
            border: t58,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        };
        $[105] = t57;
        $[106] = t58;
        $[107] = t59;
    } else {
        t59 = $[107];
    }
    let t60;
    if ($[108] !== post.accent) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 18 18",
            fill: "none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 3L2 9l4 6M12 3l4 6-4 6M10.5 2l-3 14",
                stroke: post.accent,
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1717,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1717,
            columnNumber: 11
        }, this);
        $[108] = post.accent;
        $[109] = t60;
    } else {
        t60 = $[109];
    }
    let t61;
    if ($[110] !== t59 || $[111] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t59,
            children: t60
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1725,
            columnNumber: 11
        }, this);
        $[110] = t59;
        $[111] = t60;
        $[112] = t61;
    } else {
        t61 = $[112];
    }
    let t62;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = {
            flex: 1
        };
        $[113] = t62;
    } else {
        t62 = $[113];
    }
    let t63;
    let t64;
    let t65;
    let t66;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-label",
            style: {
                marginBottom: 8
            },
            children: "Written by"
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1746,
            columnNumber: 11
        }, this);
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lineNumber: 1749,
            columnNumber: 11
        }, this);
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            lineNumber: 1756,
            columnNumber: 11
        }, this);
        t66 = {
            display: "flex",
            gap: 12
        };
        $[114] = t63;
        $[115] = t64;
        $[116] = t65;
        $[117] = t66;
    } else {
        t63 = $[114];
        t64 = $[115];
        t65 = $[116];
        t66 = $[117];
    }
    let t67;
    if ($[118] !== post.accent) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            lineNumber: 1779,
            columnNumber: 11
        }, this);
        $[118] = post.accent;
        $[119] = t67;
    } else {
        t67 = $[119];
    }
    let t68;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            lineNumber: 1793,
            columnNumber: 11
        }, this);
        $[120] = t68;
    } else {
        t68 = $[120];
    }
    let t69;
    if ($[121] !== t67) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t62,
            children: [
                t63,
                t64,
                t65,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t66,
                    children: [
                        t67,
                        t68
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/blog/[slug]/page.js",
                    lineNumber: 1806,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1806,
            columnNumber: 11
        }, this);
        $[121] = t67;
        $[122] = t69;
    } else {
        t69 = $[122];
    }
    let t70;
    if ($[123] !== t61 || $[124] !== t69) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t56,
            children: [
                t61,
                t69
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1814,
            columnNumber: 11
        }, this);
        $[123] = t61;
        $[124] = t69;
        $[125] = t70;
    } else {
        t70 = $[125];
    }
    let t71;
    if ($[126] !== post.relatedSlugs) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RelatedPosts, {
            slugs: post.relatedSlugs
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1823,
            columnNumber: 11
        }, this);
        $[126] = post.relatedSlugs;
        $[127] = t71;
    } else {
        t71 = $[127];
    }
    let t72;
    if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
        t72 = {
            marginTop: 64,
            display: "flex",
            justifyContent: "center"
        };
        $[128] = t72;
    } else {
        t72 = $[128];
    }
    let t73;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t73 = {
            textDecoration: "none"
        };
        $[129] = t73;
    } else {
        t73 = $[129];
    }
    let t74;
    if ($[130] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t72,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/blog",
                className: "btn-outline",
                style: t73,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 7H4M7 4L4 7l3 3",
                            stroke: "currentColor",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/app/blog/[slug]/page.js",
                            lineNumber: 1851,
                            columnNumber: 143
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/blog/[slug]/page.js",
                        lineNumber: 1851,
                        columnNumber: 83
                    }, this),
                    "All Articles"
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/[slug]/page.js",
                lineNumber: 1851,
                columnNumber: 28
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1851,
            columnNumber: 11
        }, this);
        $[130] = t74;
    } else {
        t74 = $[130];
    }
    let t75;
    if ($[131] !== t54 || $[132] !== t55 || $[133] !== t70 || $[134] !== t71) {
        t75 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            style: t53,
            children: [
                t54,
                t55,
                t70,
                t71,
                t74
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1858,
            columnNumber: 11
        }, this);
        $[131] = t54;
        $[132] = t55;
        $[133] = t70;
        $[134] = t71;
        $[135] = t75;
    } else {
        t75 = $[135];
    }
    let t76;
    if ($[136] === Symbol.for("react.memo_cache_sentinel")) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
            children: "\n        @media (max-width: 600px) {\n          article > div[style*=\"gridTemplateColumns\"] {\n            grid-template-columns: repeat(2, 1fr) !important;\n          }\n        }\n      "
        }, void 0, false, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1869,
            columnNumber: 11
        }, this);
        $[136] = t76;
    } else {
        t76 = $[136];
    }
    let t77;
    if ($[137] !== t3 || $[138] !== t51 || $[139] !== t75) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t2,
            children: [
                t3,
                t51,
                t52,
                t75,
                t76
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/[slug]/page.js",
            lineNumber: 1876,
            columnNumber: 11
        }, this);
        $[137] = t3;
        $[138] = t51;
        $[139] = t75;
        $[140] = t77;
    } else {
        t77 = $[140];
    }
    return t77;
}
_s2(BlogPostPage, "BAuKCfwcxHuOPZOHybMkrmSWsFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c6 = BlogPostPage;
function _BlogPostPageLinkOnMouseLeave(e_0) {
    return e_0.currentTarget.style.color = "var(--text-faint)";
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ProgressBar");
__turbopack_context__.k.register(_c1, "CodeBlock");
__turbopack_context__.k.register(_c2, "StatsRow");
__turbopack_context__.k.register(_c3, "Callout");
__turbopack_context__.k.register(_c4, "TableOfContents");
__turbopack_context__.k.register(_c5, "RelatedPosts");
__turbopack_context__.k.register(_c6, "BlogPostPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_blog_%5Bslug%5D_page_39424275.js.map