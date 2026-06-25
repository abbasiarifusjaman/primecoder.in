"use client";

import Link from "next/link";
import Services from "../components/Services";

const process = [
  {
    step: "01",
    title: "Discover",
    desc: "We talk. I understand your business, audience, and the problem you're solving. No assumptions — just clarity.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Wireframes, mood boards, and high-fidelity Figma prototypes. Iterate until the design feels inevitable.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "Clean, production-grade code with version control. Daily updates and a staging environment from day one.",
  },
  {
    step: "04",
    title: "Deploy",
    desc: "AWS deployment, domain wiring, performance audits, and analytics. Plus 30 days of post-launch support.",
  },
];

const expertise = [
  { label: "Websites Shipped",  value: "30+" },
  { label: "Mobile Apps",        value: "8+"  },
  { label: "Cloud Deployments",  value: "20+" },
  { label: "Happy Clients",      value: "100%" },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--bg)", paddingTop: 72, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -100, right: -120,
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -100, left: -120,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,95,87,0.05), transparent 70%)",
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Services</div>

          <div style={{ display: "flex", gap: 60, flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(52px, 9vw, 130px)",
                lineHeight: 0.92,
                letterSpacing: "0.01em",
                color: "var(--text)",
                margin: 0,
              }}
            >
              WHAT<br />
              <span style={{ color: "var(--accent)" }}>WE CRAFT</span>
            </h1>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 420,
              margin: 0,
            }}>
              End-to-end product engineering — websites, apps, desktop software, graphic design, databases, and AWS cloud. Built to ship, built to scale.
            </p>
          </div>

          {/* Stats strip */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 0,
            marginTop: 80,
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}>
            {expertise.map((s, i) => (
              <div key={s.label} style={{
                padding: "28px 24px",
                borderRight: i < expertise.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: 1,
                  color: "var(--accent)",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  marginTop: 6,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services list (reuse) ── */}
      <Services hideHeader />

      {/* ── Process section ── */}
      <section style={{ padding: "120px 0", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 80,
          }}>
            <div>
              <div className="section-label" style={{ marginBottom: 20 }}>Process</div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 90px)",
                letterSpacing: "0.02em",
                color: "var(--text)",
                margin: 0,
                lineHeight: 0.95,
              }}>
                FROM IDEA<br />
                <span style={{ color: "var(--accent)" }}>TO SHIP</span>
              </h2>
            </div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 320,
              margin: 0,
            }}>
              A focused 4-step process — no scope creep, no surprise invoices. Just measurable progress every week.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 0,
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            background: "var(--surface)",
          }}>
            {process.map((p, i) => (
              <div
                key={p.step}
                style={{
                  padding: "36px 32px",
                  borderRight: i < process.length - 1 ? "1px solid var(--border)" : "none",
                  position: "relative",
                  transition: "background 0.25s ease",
                }}
                className="process-card"
              >
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  color: "var(--accent)",
                  marginBottom: 28,
                }}>
                  {p.step}
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  letterSpacing: "0.02em",
                  color: "var(--text)",
                  margin: "0 0 16px",
                  lineHeight: 1,
                }}>
                  {p.title.toUpperCase()}
                </h3>

                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "var(--text-dim)",
                  margin: 0,
                }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 28px 120px" }}>
        <div style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "60px 48px",
          border: "1px solid var(--accent-border)",
          borderRadius: 20,
          background: "linear-gradient(135deg, rgba(168,255,87,0.06), rgba(168,255,87,0.02))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 32,
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            top: -100, right: -100,
            width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,255,87,0.15), transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label" style={{ marginBottom: 14 }}>Ready to build</div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 56px)",
              letterSpacing: "0.02em",
              color: "var(--text)",
              margin: "0 0 12px",
              lineHeight: 1,
              maxWidth: 700,
            }}>
              LET'S TURN YOUR IDEA INTO SHIPPED CODE
            </h3>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "var(--text-dim)",
              margin: 0,
              maxWidth: 500,
            }}>
              Free 30-minute discovery call. We'll scope, estimate, and confirm if we're a fit before any commitment.
            </p>
          </div>

          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", position: "relative", zIndex: 1 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
