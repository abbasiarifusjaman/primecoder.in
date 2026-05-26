"use client";

import Link from "next/link";
import { useState } from "react";

const allProjects = [
  {
    num: "01", title: "Income & Expense Tracker",
    category: "Web App", year: "2024",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "Clean finance tracking tool for logging income and expenses with visual dashboards.",
    link: "https://thriving-lokum-d1ea1f.netlify.app/index.html",
    accent: "#A8FF57",
  },
  {
    num: "02", title: "Google Search Clone",
    category: "Web App", year: "2024",
    stack: ["React", "API Integration"],
    desc: "Functional Google Search UI with real results. Clean recreation of the iconic interface.",
    link: "https://www.search.imdos.in/",
    accent: "#38BDF8",
  },
  {
    num: "03", title: "Spotify Clone",
    category: "Music Streaming UI", year: "2024",
    stack: ["React", "Tailwind CSS"],
    desc: "Immersive music streaming interface with playlists and personalized recommendations.",
    link: "#",
    accent: "#1DB954",
  },
  {
    num: "04", title: "Threads Clone",
    category: "Social Platform", year: "2024",
    stack: ["React", "Next.js"],
    desc: "Dynamic social platform UI with seamless thread-based conversation design.",
    link: "#",
    accent: "#F472B6",
  },
  {
    num: "05", title: "Assam Job Portal",
    category: "Full-Stack Platform", year: "2023",
    stack: ["Next.js", "Node.js", "MySQL"],
    desc: "Employment platform connecting job seekers across Assam with top employers.",
    link: "https://www.assamjobportal.com/",
    accent: "#FB923C",
  },
  {
    num: "06", title: "Darrang Mobile Shop",
    category: "E-Commerce", year: "2023",
    stack: ["Next.js", "Tailwind CSS"],
    desc: "Modern e-commerce site for a mobile retail brand with full product catalog.",
    link: "https://darrang-mobile.vercel.app/",
    accent: "#A78BFA",
  },
  {
    num: "07", title: "BillBook Pro",
    category: "Mobile App", year: "2026",
    stack: ["React Native", "Express.js", "MySQL", "AWS"],
    desc: "GST-compliant billing and invoicing app for Indian SMBs. Full offline-first architecture.",
    link: "#",
    accent: "#FBBF24",
  },
];

const categories = ["All", "Web App", "Mobile App", "Full-Stack Platform", "E-Commerce", "Music Streaming UI", "Social Platform"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? allProjects
    : allProjects.filter(p => p.category === active);

  return (
    <div style={{ background: "var(--bg)", paddingTop: 72, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ padding: "100px 0 60px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -80, left: -60,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.05), transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Portfolio</div>

          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}>
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
              ALL<br />
              <span style={{ color: "var(--accent)" }}>PROJECTS</span>
            </h1>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 300,
              margin: 0,
            }}>
              {allProjects.length} projects shipped across web, mobile, and cloud platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <div style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0 28px",
        overflowX: "auto",
      }}>
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          display: "flex",
          gap: 4,
          padding: "16px 0",
          whiteSpace: "nowrap",
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
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
                flexShrink: 0,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section style={{ padding: "60px 0 120px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}>
            {filtered.map((project, i) => (
              <div
                key={project.num}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.015)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${project.accent}33`;
                  e.currentTarget.style.background = "var(--surface)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.015)";
                }}
              >
                {/* Top bar */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    color: project.accent,
                  }}>
                    {project.num}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                  }}>
                    {project.category} · {project.year}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "24px 20px", flex: 1 }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    letterSpacing: "0.02em",
                    color: "var(--text)",
                    margin: "0 0 12px",
                  }}>
                    {project.title.toUpperCase()}
                  </h3>

                  <div style={{
                    height: 1,
                    background: `linear-gradient(90deg, ${project.accent}50, transparent)`,
                    marginBottom: 16,
                  }} />

                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "var(--text-faint)",
                    margin: "0 0 20px",
                  }}>
                    {project.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.stack.map(t => (
                      <span key={t} style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        padding: "4px 10px",
                        border: `1px solid ${project.accent}25`,
                        borderRadius: 100,
                        background: `${project.accent}0D`,
                        color: project.accent,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                {project.link !== "#" ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
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
                      textDecoration: "none",
                    }}
                  >
                    <span>View Live</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ) : (
                  <div style={{
                    padding: "14px 20px",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-faint)", display: "block" }} />
                    In Progress
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
