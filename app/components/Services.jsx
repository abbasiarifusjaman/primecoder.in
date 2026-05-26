"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  {
    idx: "01",
    title: "Frontend Development",
    short: "Web Design & Engineering",
    desc: "Crafting fast, responsive, and visually stunning web interfaces using React.js, Next.js, and Tailwind CSS. Every component built with performance, accessibility, and precision.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "GSAP"],
    accent: "#A8FF57",
  },
  {
    idx: "02",
    title: "Backend Development",
    short: "Scalable Server Systems",
    desc: "Building REST APIs, authentication systems, and server-side logic with Node.js and Express. Secure, maintainable, production-ready architecture from the ground up.",
    tags: ["Node.js", "Express.js", "REST API", "JWT"],
    accent: "#38BDF8",
  },
  {
    idx: "03",
    title: "Mobile App Development",
    short: "Native-Feel Cross-Platform",
    desc: "Cross-platform mobile apps with React Native CLI. From GST billing to e-commerce — smooth animations, native modules, and offline-first architecture.",
    tags: ["React Native", "Android", "iOS", "Hermes"],
    accent: "#FB923C",
  },
  {
    idx: "04",
    title: "Database Design",
    short: "Structured Data Architecture",
    desc: "Designing and optimizing relational and NoSQL databases. MySQL schema design with normalized tables to MongoDB with efficient indexing — built for speed and scale.",
    tags: ["MySQL", "MongoDB", "Schema Design", "Indexing"],
    accent: "#F472B6",
  },
  {
    idx: "05",
    title: "API Integration",
    short: "Connecting the Modern Web",
    desc: "Seamless third-party API integration — payment gateways (Razorpay), SMS (Fast2SMS), maps, and more. Clean abstraction layers that keep your codebase maintainable.",
    tags: ["Razorpay", "Fast2SMS", "REST", "Webhooks"],
    accent: "#A78BFA",
  },
  {
    idx: "06",
    title: "UI/UX Design",
    short: "Design That Converts",
    desc: "Translating ideas into polished, intuitive interfaces using Figma. From wireframes to high-fidelity prototypes — designed with real users and conversion goals in mind.",
    tags: ["Figma", "Prototyping", "Wireframes", "Design Systems"],
    accent: "#FBBF24",
  },
];

function ServiceRow({ service, index }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        borderBottom: "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "28px 0",
          cursor: "pointer",
          gap: 24,
          transition: "all 0.2s ease",
        }}
      >
        {/* Index */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.15em",
            color: hovered ? service.accent : "var(--text-faint)",
            transition: "color 0.3s ease",
            minWidth: 28,
          }}
        >
          {service.idx}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3vw, 40px)",
            letterSpacing: "0.02em",
            color: hovered ? "var(--text)" : "rgba(238,238,240,0.7)",
            transition: "color 0.3s ease",
            flex: 1,
            margin: 0,
          }}
        >
          {service.title.toUpperCase()}
        </h3>

        {/* Short label — hidden on mobile */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            display: "block",
            minWidth: 180,
            textAlign: "right",
          }}
          className="service-short"
        >
          {service.short}
        </span>

        {/* Arrow */}
        <div
          style={{
            width: 36, height: 36,
            borderRadius: "50%",
            border: `1px solid ${hovered ? service.accent : "var(--border-hi)"}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.3s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: hovered ? service.accent : "var(--text-dim)",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Expanded detail */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: open ? 200 : 0,
          transition: "max-height 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          style={{
            padding: "0 0 32px",
            paddingLeft: 52,
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {/* Left: accent bar + desc */}
          <div style={{ flex: 1, minWidth: 260, display: "flex", gap: 16 }}>
            <div style={{ width: 2, background: service.accent, borderRadius: 1, flexShrink: 0, minHeight: "100%" }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7, color: "var(--text-dim)", margin: 0 }}>
              {service.desc}
            </p>
          </div>

          {/* Right: tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignSelf: "flex-start" }}>
            {service.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  padding: "5px 12px",
                  border: `1px solid ${service.accent}33`,
                  borderRadius: 100,
                  background: `${service.accent}0D`,
                  color: service.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      style={{
        background: "var(--bg)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top grid line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, var(--border) 30%, var(--border) 70%, transparent)" }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 28px" }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 80,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Services</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 90px)",
                letterSpacing: "0.02em",
                color: "var(--text)",
                margin: 0,
                lineHeight: 0.95,
              }}
            >
              WHAT<br />
              <span style={{ color: "var(--accent)" }}>WE DO</span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 320,
              margin: 0,
            }}
          >
            From concept to deployment — full-stack capability across web, mobile, and cloud platforms.
          </p>
        </div>

        {/* Service rows */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {services.map((s, i) => (
            <ServiceRow key={s.idx} service={s} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            marginTop: 60,
            padding: "36px 40px",
            border: "1px solid var(--border)",
            borderRadius: 16,
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Corner glow */}
          <div style={{
            position: "absolute",
            top: -80, right: -80,
            width: 200, height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,255,87,0.08), transparent 70%)",
            pointerEvents: "none",
          }} />

          <div>
            <div className="section-label" style={{ marginBottom: 10 }}>Let's collaborate</div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px, 3vw, 40px)",
              letterSpacing: "0.02em",
              color: "var(--text)",
              margin: 0,
            }}>
              HAVE A PROJECT IN MIND?
            </h3>
          </div>

          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Start a Project
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .service-short { display: none !important; }
        }
      `}</style>
    </section>
  );
}
