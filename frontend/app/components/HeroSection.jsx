"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const roles = ["Full-Stack Developer", "React Native Engineer", "API Architect", "UI/UX Craftsman"];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const glowRef  = useRef(null);

  // Typewriter role cycling
  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setRoleIdx(i => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Cursor-following ambient glow
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const stats = [
    { value: "30+", label: "Projects Shipped" },
    { value: "5+",  label: "Years Building" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
        }}
      />

      {/* Top-right ambient */}
      <div
        style={{
          position: "absolute",
          top: -120, right: -100,
          width: 600, height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-left coral ambient */}
      <div
        style={{
          position: "absolute",
          bottom: -60, left: -80,
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,95,87,0.06), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {[20, 40, 60, 80].map(pct => (
          <div key={pct} style={{
            position: "absolute",
            top: 0, bottom: 0,
            left: `${pct}%`,
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)",
          }} />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          padding: "0 28px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            border: "1px solid var(--accent-border)",
            borderRadius: 100,
            background: "var(--accent-dim)",
            marginBottom: 40,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <span style={{
            width: 7, height: 7,
            borderRadius: "50%",
            background: "var(--accent)",
            display: "block",
            boxShadow: "0 0 8px var(--accent)",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}>
            Available for new projects
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(68px, 11vw, 160px)",
            lineHeight: 0.92,
            letterSpacing: "0.01em",
            color: "var(--text)",
            marginBottom: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          WE BUILD<br />
          <span style={{ color: "var(--accent)" }}>DIGITAL</span><br />
          PRODUCTS
        </h1>

        {/* Role ticker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 28,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div style={{
            width: 40, height: 1,
            background: "var(--accent)",
          }} />
          <span
            key={roleIdx}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              animation: "fadeIn 0.4s ease both",
            }}
          >
            {roles[roleIdx]}
          </span>
          <span
            style={{
              display: "inline-block",
              width: 2, height: 18,
              background: "var(--accent)",
            }}
            className="cursor-blink"
          />
        </div>

        {/* Description + CTA row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "flex-end",
            marginTop: 56,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 440,
              margin: 0,
            }}
          >
            Full-stack development for modern businesses. React, Next.js, React Native, and Node.js — production-grade software that scales.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/projects" className="btn-primary" style={{ textDecoration: "none" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Work
            </Link>
            <Link href="/contact" className="btn-outline" style={{ textDecoration: "none" }}>
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            gap: 0,
            marginTop: 80,
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.9s",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                padding: "28px 0",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                paddingLeft: i === 0 ? 0 : 32,
              }}
            >
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

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.4,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, var(--text-dim), transparent)" }} />
      </div>
    </section>
  );
}
