"use client";

import Link from "next/link";

const navCols = [
  {
    label: "Navigation",
    links: [
      { href: "/",         label: "Home"     },
      { href: "/about",    label: "About"    },
      { href: "/projects", label: "Projects" },
      { href: "/blog",     label: "Blog"     },
      { href: "/contact",  label: "Contact"  },
    ],
  },
  {
    label: "Services",
    links: [
      { href: "/", label: "Frontend Development" },
      { href: "/", label: "Backend Development"  },
      { href: "/", label: "Mobile Apps"          },
      { href: "/", label: "Database Design"      },
      { href: "/", label: "UI/UX Design"         },
    ],
  },
  {
    label: "Connect",
    links: [
      { href: "https://github.com",    label: "GitHub"    },
      { href: "https://linkedin.com",  label: "LinkedIn"  },
      { href: "https://twitter.com",   label: "Twitter"   },
      { href: "https://instagram.com", label: "Instagram" },
      { href: "mailto:abbasiarifusjaman@gmail.com", label: "Email" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030305",
        borderTop: "1px solid var(--border)",
        padding: "80px 0 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        bottom: -200, left: "50%",
        transform: "translateX(-50%)",
        width: 600, height: 400,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(168,255,87,0.04), transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>

        {/* Top: brand + tagline */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
          marginBottom: 64,
          paddingBottom: 64,
          borderBottom: "1px solid var(--border)",
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40,
                borderRadius: 10,
                background: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6 3L2 9l4 6M12 3l4 6-4 6M10.5 2l-3 14" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1, letterSpacing: "0.04em", color: "var(--text)" }}>
                  PRIME<span style={{ color: "var(--accent)" }}>CODER</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--text-faint)", marginTop: 3 }}>
                  ENGINEERED.EXCELLENCE
                </div>
              </div>
            </Link>

            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 280,
              margin: "0 0 24px",
            }}>
              Full-stack development that turns ambitious ideas into high-performance digital products.
            </p>

            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
              Start a Project →
            </Link>
          </div>

          {/* CTA highlight box */}
          <div style={{
            padding: "32px 36px",
            border: "1px solid var(--accent-border)",
            borderRadius: 16,
            background: "var(--accent-dim)",
            maxWidth: 320,
          }}>
            <div className="section-label" style={{ marginBottom: 12 }}>Current status</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{
                width: 8, height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "block",
                boxShadow: "0 0 10px var(--accent)",
              }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em" }}>
                Available for Work
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-dim)", margin: "0 0 20px" }}>
              Currently taking on new projects. Let's discuss your idea.
            </p>
            <a
              href="mailto:abbasiarifusjaman@gmail.com"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                color: "var(--accent)",
                textDecoration: "none",
                borderBottom: "1px solid var(--accent-border)",
                paddingBottom: 2,
              }}
            >
              abbasiarifusjaman@gmail.com
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: 40,
          marginBottom: 60,
        }}>
          {navCols.map(col => (
            <div key={col.label}>
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-faint)",
                marginBottom: 20,
              }}>
                {col.label}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        color: "var(--text-dim)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-dim)"}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", margin: 0 }}>
            © 2026 PrimeCoder. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-faint)", margin: 0 }}>
            Crafted by <span style={{ color: "var(--accent)" }}>A.J.Abbasi</span> · Agartala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
