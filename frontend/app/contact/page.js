"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "abbasiarifusjaman@gmail.com",
    href: "mailto:abbasiarifusjaman@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 60025-75252",
    href: "tel:+916002575252",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M6 2H4a2 2 0 00-2 2v.5C2 11.897 6.103 16 12.5 16H13a2 2 0 002-2v-2a.5.5 0 00-.5-.5l-3-.75a.5.5 0 00-.542.27l-.908 1.816A9.969 9.969 0 018.164 9.45L9.98 8.542A.5.5 0 0010.25 8l-.75-3A.5.5 0 009 4.5H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Assam, India · PIN 784115",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 9a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M9 1C5.686 1 3 3.686 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div style={{ background: "var(--bg)", paddingTop: 72, minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{ padding: "100px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -60, right: -80,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>
          <div className="section-label" style={{ marginBottom: 24 }}>Contact</div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(52px, 9vw, 130px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
              color: "var(--text)",
              margin: "0 0 40px",
            }}
          >
            LET'S<br />
            <span style={{ color: "var(--accent)" }}>BUILD</span><br />
            TOGETHER
          </h1>

          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--text-dim)",
            maxWidth: 460,
            margin: 0,
          }}>
            Have a project in mind? I'm available for freelance work and collaborations.
            Drop a message and I'll get back within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Main form + info ── */}
      <section style={{ padding: "0 0 120px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 28px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, flexWrap: "wrap" }} className="contact-grid">

            {/* Form */}
            <div>
              {sent ? (
                <div style={{
                  padding: 40,
                  border: "1px solid var(--accent-border)",
                  borderRadius: 16,
                  background: "var(--accent-dim)",
                  textAlign: "center",
                }}>
                  <div style={{
                    width: 60, height: 60,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--text)", marginBottom: 12 }}>MESSAGE SENT!</h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-dim)" }}>
                    Thanks for reaching out. I'll reply within 24 hours.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    letterSpacing: "0.02em",
                    color: "var(--text)",
                    marginBottom: 8,
                  }}>SEND A MESSAGE</h2>

                  {[
                    { name: "name",    label: "Your Name *",    type: "text",  placeholder: "Rahul Sharma" },
                    { name: "email",   label: "Email Address *", type: "email", placeholder: "rahul@company.com" },
                    { name: "project", label: "Project Type",    type: "text",  placeholder: "Web App / Mobile / API..." },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-faint)",
                        display: "block",
                        marginBottom: 8,
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        style={{
                          width: "100%",
                          padding: "14px 18px",
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          borderRadius: 10,
                          color: "var(--text)",
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--accent-border)"}
                        onBlur={e => e.target.style.borderColor = "var(--border)"}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                      display: "block",
                      marginBottom: 8,
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "14px 18px",
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: 10,
                        color: "var(--text)",
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        outline: "none",
                        resize: "vertical",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={e => e.target.style.borderColor = "var(--accent-border)"}
                      onBlur={e => e.target.style.borderColor = "var(--border)"}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn-primary"
                    style={{ alignSelf: "flex-start", cursor: "pointer", border: "none" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <div className="section-label" style={{ marginBottom: 20 }}>Direct Contact</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {contactInfo.map(item => (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                        padding: "20px 24px",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                        background: "var(--surface)",
                        textDecoration: "none",
                        transition: "all 0.25s ease",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "var(--accent-border)";
                        e.currentTarget.style.background = "var(--accent-dim)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.background = "var(--surface)";
                      }}
                    >
                      <div style={{
                        width: 40, height: 40,
                        borderRadius: 10,
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--accent)",
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: 4 }}>
                          {item.label}
                        </div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text)" }}>
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div style={{
                padding: "28px 28px",
                border: "1px solid var(--accent-border)",
                borderRadius: 16,
                background: "var(--accent-dim)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", display: "block", boxShadow: "0 0 8px var(--accent)" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                    Currently Available
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-dim)", margin: 0 }}>
                  Open to freelance projects, collaborations, and full-time opportunities. Response time: under 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
