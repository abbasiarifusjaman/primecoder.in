"use client";

import Link from "next/link";
import Services from "../components/Services";

const skills = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
  },
  { label: "Mobile", items: ["React Native CLI", "Android", "iOS", "Hermes"] },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT Auth"],
  },
  { label: "Database", items: ["MySQL", "MongoDB", "Schema Design"] },
  { label: "Tools", items: ["Figma", "Git", "AWS", "Razorpay", "Fast2SMS"] },
];

const timeline = [
  {
    year: "2026",
    event: "Building BillBook Pro — GST-compliant billing app for Indian SMBs",
  },
  {
    year: "2025",
    event: "Launched ajabbasi.in portfolio + Chrome extension Marks",
  },
  { year: "2024", event: "Assam Job Portal, multiple full-stack web projects" },
  { year: "2023", event: "Started full-stack journey — React, Node.js, MySQL" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 72 }}>
      {/* ── Hero ── */}
      <section
        style={{
          padding: "100px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>
            About
          </div>

          <div
            style={{
              display: "flex",
              gap: 60,
              flexWrap: "wrap",
              alignItems: "flex-start",
            }}
          >
            {/* Left: big text */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(48px, 8vw, 110px)",
                  lineHeight: 0.92,
                  letterSpacing: "0.01em",
                  color: "var(--text)",
                  margin: "0 0 32px",
                }}
              >
                A.J.
                <br />
                <span style={{ color: "var(--accent)" }}>ABBASI</span>
              </h1>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  padding: "8px 16px",
                  border: "1px solid var(--border-hi)",
                  borderRadius: 6,
                  display: "inline-block",
                  marginBottom: 32,
                }}
              >
                Full Stack Developer · Agartala, India
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "var(--text-dim)",
                  maxWidth: 520,
                  margin: "0 0 32px",
                }}
              >
                I'm a Full Stack Developer with a passion for building
                high-performance digital products. From React Native billing
                apps for Indian SMBs to editorial portfolio sites — I care
                deeply about code quality, design precision, and shipping
                software that actually works.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/Resume.pdf"
                  download="Arifus_Jaman_Abbasi_CV.pdf"
                  className="btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v9M3 7l4 4 4-4M1 12h12"
                      stroke="#000"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download CV
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline"
                  style={{ textDecoration: "none" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right: info cards */}
            <div
              style={{
                flex: 1,
                minWidth: 280,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                { label: "Birthday", value: "April 24, 2002" },
                { label: "Location", value: "Assam, India" },
                { label: "Email", value: "abbasiarifusjaman@gmail.com" },
                { label: "Languages", value: "English, Hindi, Assamese" },
                {
                  label: "Speciality",
                  value: "Indian SMB Software, Billing Apps, Portfolio Sites",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "16px 20px",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    background: "var(--surface)",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      minWidth: 80,
                      paddingTop: 2,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "var(--text)",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        style={{
          padding: "80px 0",
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 40 }}>
            Tech Stack
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {skills.map((group, i) => (
              <div
                key={group.label}
                style={{
                  display: "flex",
                  gap: 40,
                  padding: "24px 0",
                  borderBottom:
                    i < skills.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    color: "var(--text-faint)",
                    minWidth: 140,
                  }}
                >
                  {group.label.toUpperCase()}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 40 }}>
            Journey
          </div>

          <div style={{ position: "relative", paddingLeft: 24 }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: 1,
                background:
                  "linear-gradient(180deg, var(--accent), var(--border) 80%)",
              }}
            />

            {timeline.map((item, i) => (
              <div
                key={item.year}
                style={{
                  display: "flex",
                  gap: 32,
                  padding: "24px 0",
                  alignItems: "flex-start",
                  borderBottom:
                    i < timeline.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -28,
                    top: 28,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--accent)" : "var(--surface-2)",
                    border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border-hi)"}`,
                  }}
                />

                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    letterSpacing: "0.04em",
                    color: "var(--accent)",
                    minWidth: 60,
                  }}
                >
                  {item.year}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--text-dim)",
                    margin: "4px 0 0",
                  }}
                >
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services section ── */}
      <Services />
    </div>
  );
}
