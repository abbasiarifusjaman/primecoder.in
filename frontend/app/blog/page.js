"use client";

import Link from "next/link";

const posts = [
  {
    slug: "billbook-pro-architecture",
    num: "01",
    title: "Building BillBook Pro: GST-Compliant Architecture for Indian SMBs",
    excerpt: "How I designed a proprietary .billbook file format, AWS RDS MySQL schema, and React Native offline-first architecture for billing at scale.",
    tags: ["React Native", "MySQL", "AWS", "GST"],
    date: "May 2026",
    accent: "#A8FF57",
    readTime: "8 min read",
  },
  {
    slug: "nextjs-gsap-portfolio",
    num: "02",
    title: "GSAP ScrollTrigger Animations in Next.js — Practical Patterns",
    excerpt: "Deep dive into integrating GSAP ScrollTrigger with React and Next.js. Patterns that actually work without hydration issues.",
    tags: ["Next.js", "GSAP", "Animation"],
    date: "April 2026",
    accent: "#38BDF8",
    readTime: "6 min read",
  },
  {
    slug: "react-native-truecaller-sdk",
    num: "03",
    title: "Implementing a Truecaller-Style Auth Bottom Sheet in React Native",
    excerpt: "Building a smooth spring-physics bottom sheet with PanResponder for phone authentication — no third-party libraries.",
    tags: ["React Native", "Animation", "Auth"],
    date: "March 2026",
    accent: "#FB923C",
    readTime: "5 min read",
  },
  {
    slug: "mysql-gst-schema",
    num: "04",
    title: "MySQL Schema Design for GST Billing: Triggers, Views & Calculations",
    excerpt: "Complete walkthrough of a production-ready MySQL schema with CGST/SGST/IGST logic, triggers, and views for Indian billing software.",
    tags: ["MySQL", "GST", "Schema Design"],
    date: "Feb 2026",
    accent: "#F472B6",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 72, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ padding: "100px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -80, right: -60,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.05), transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Blog</div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 9vw, 120px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
              color: "var(--text)",
              margin: 0,
            }}
          >
            THOUGHTS<br />
            &amp; <span style={{ color: "var(--accent)" }}>CRAFT</span>
          </h1>
        </div>
      </section>

      {/* ── Posts list ── */}
      <section style={{ borderTop: "1px solid var(--border)", padding: "0 28px 120px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{
                display: "flex",
                gap: 32,
                padding: "40px 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                alignItems: "flex-start",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector(".post-title").style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector(".post-title").style.color = "var(--text)";
              }}
            >
              {/* Number */}
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: post.accent,
                paddingTop: 4,
                minWidth: 28,
              }}>
                {post.num}
              </span>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12, flexWrap: "wrap" }}>
                  {post.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      padding: "3px 10px",
                      border: `1px solid ${post.accent}33`,
                      borderRadius: 100,
                      color: post.accent,
                      background: `${post.accent}0D`,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h2
                  className="post-title"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 3vw, 38px)",
                    letterSpacing: "0.02em",
                    color: "var(--text)",
                    margin: "0 0 12px",
                    transition: "color 0.2s ease",
                    lineHeight: 1.1,
                  }}
                >
                  {post.title.toUpperCase()}
                </h2>

                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                  margin: 0,
                  maxWidth: 640,
                }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 8,
                flexShrink: 0,
              }}
              className="post-meta"
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>
                  {post.date}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)" }}>
                  {post.readTime}
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: 4 }}>
                  <path d="M4 10h12M10 4l6 6-6 6" stroke="var(--text-faint)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .post-meta { display: none !important; }
        }
      `}</style>
    </div>
  );
}
