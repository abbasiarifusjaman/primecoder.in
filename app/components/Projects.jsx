"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    num: "01",
    title: "Income & Expense Tracker",
    category: "Web App",
    stack: ["HTML", "CSS", "JavaScript"],
    desc: "A clean finance tracking tool for logging income and expenses. Visual dashboards help users stay ahead of their financial goals.",
    link: "https://thriving-lokum-d1ea1f.netlify.app/index.html",
    accent: "#A8FF57",
    year: "2024",
    imgColor: "linear-gradient(135deg, #1a2a1a, #0d1f0d)",
  },
  {
    num: "02",
    title: "Google Search Clone",
    category: "Web App",
    stack: ["React", "API Integration"],
    desc: "A functional Google Search UI replica with real search results. Clean recreation of the iconic interface with modern tooling.",
    link: "https://www.search.imdos.in/",
    accent: "#38BDF8",
    year: "2024",
    imgColor: "linear-gradient(135deg, #0d1a2a, #0a1520)",
  },
  {
    num: "03",
    title: "Spotify Clone",
    category: "Music Streaming UI",
    stack: ["React", "Tailwind CSS"],
    desc: "Immersive music streaming interface with curated playlists, personalized recommendations, and a vast virtual library.",
    link: "#",
    accent: "#1DB954",
    year: "2024",
    imgColor: "linear-gradient(135deg, #0d2a12, #081a0c)",
  },
  {
    num: "04",
    title: "Threads Clone",
    category: "Social Platform UI",
    stack: ["React", "Next.js"],
    desc: "Dynamic social platform replica with meticulous attention to interaction design and seamless thread-based conversation flow.",
    link: "#",
    accent: "#F472B6",
    year: "2024",
    imgColor: "linear-gradient(135deg, #2a0d1a, #1a0810)",
  },
  {
    num: "05",
    title: "Assam Job Portal",
    category: "Full-Stack Platform",
    stack: ["Next.js", "Node.js", "MySQL"],
    desc: "Employment platform connecting job seekers across Assam with top employers. Full-stack solution with listings, applications, and employer dashboards.",
    link: "https://www.assamjobportal.com/",
    accent: "#FB923C",
    year: "2023",
    imgColor: "linear-gradient(135deg, #2a1a0d, #1a1008)",
  },
  {
    num: "06",
    title: "Darrang Mobile Shop",
    category: "E-Commerce",
    stack: ["Next.js", "Tailwind CSS"],
    desc: "Modern e-commerce site for a mobile retail brand. Product catalog, service pages, and seamless customer experience.",
    link: "https://darrang-mobile.vercel.app/",
    accent: "#A78BFA",
    year: "2023",
    imgColor: "linear-gradient(135deg, #1a0d2a, #100820)",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? project.accent + "33" : "var(--border)"}`,
        borderRadius: 16,
        overflow: "hidden",
        background: hovered ? "var(--surface)" : "rgba(255,255,255,0.015)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 0.07}s`,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image placeholder with gradient */}
      <div
        style={{
          height: 200,
          background: project.imgColor,
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        {/* Decorative pattern inside placeholder */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Large number watermark */}
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: 120,
            letterSpacing: "0.02em",
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
          }}>
            {project.num}
          </span>
        </div>

        {/* Category tag overlay */}
        <div style={{
          position: "absolute",
          top: 16, left: 16,
          padding: "5px 12px",
          border: `1px solid ${project.accent}33`,
          borderRadius: 100,
          background: `${project.accent}15`,
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: project.accent,
        }}>
          {project.category}
        </div>

        {/* Year badge */}
        <div style={{
          position: "absolute",
          top: 16, right: 16,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
        }}>
          {project.year}
        </div>

        {/* Link arrow - appears on hover */}
        {project.link && project.link !== "#" && (
          <div style={{
            position: "absolute",
            bottom: 16, right: 16,
            width: 36, height: 36,
            borderRadius: "50%",
            background: project.accent,
            display: "flex", alignItems: "center", justifyContent: "center",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0.6)",
            transition: "all 0.3s ease",
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px, 2vw, 26px)",
              letterSpacing: "0.02em",
              color: hovered ? "var(--text)" : "rgba(238,238,240,0.8)",
              margin: 0,
              transition: "color 0.2s ease",
              lineHeight: 1.1,
            }}
          >
            {project.title.toUpperCase()}
          </h3>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: `linear-gradient(90deg, ${project.accent}40, transparent)`,
          marginBottom: 14,
          width: hovered ? "100%" : "40%",
          transition: "width 0.4s ease",
        }} />

        {/* Description */}
        <p style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          lineHeight: 1.65,
          color: "var(--text-faint)",
          margin: "0 0 20px",
          flex: 1,
        }}>
          {project.desc}
        </p>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map(tech => (
            <span
              key={tech}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.08em",
                padding: "4px 10px",
                border: "1px solid var(--border-hi)",
                borderRadius: 100,
                color: "var(--text-dim)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom action */}
      {project.link && project.link !== "#" && (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            borderTop: "1px solid var(--border)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: hovered ? project.accent : "var(--text-faint)",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
        >
          <span>View Live</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}
    </div>
  );
}

export default function Projects() {
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
      id="work"
      style={{
        background: "var(--surface)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top line */}
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
            marginBottom: 64,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>Portfolio</div>
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
              SELECTED<br />
              <span style={{ color: "var(--accent)" }}>WORK</span>
            </h2>
          </div>

          <Link href="/projects" className="btn-outline" style={{ textDecoration: "none", alignSelf: "flex-end" }}>
            All Projects
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
