"use client";

const techs = [
  "React.js", "Next.js", "React Native", "Node.js", "Express.js",
  "MySQL", "MongoDB", "Tailwind CSS", "Figma", "TypeScript",
  "REST API", "JWT", "Razorpay", "AWS", "GSAP",
];

export default function TechStrip() {
  const doubled = [...techs, ...techs];

  return (
    <div
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 80,
        background: "linear-gradient(90deg, var(--surface), transparent)",
        zIndex: 1, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 80,
        background: "linear-gradient(270deg, var(--surface), transparent)",
        zIndex: 1, pointerEvents: "none",
      }} />

      <div
        className="marquee-track"
        style={{
          display: "flex",
          gap: 40,
          width: "max-content",
        }}
      >
        {doubled.map((tech, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              whiteSpace: "nowrap",
            }}>
              {tech}
            </span>
            <span style={{
              width: 4, height: 4,
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}
