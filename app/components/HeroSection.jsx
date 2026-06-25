"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const roles = [
  "Full-Stack Developer",
  "React Native Engineer",
  "API Architect",
  "UI/UX Craftsman",
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const glowRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const shim1Ref = useRef(null);
  const shim2Ref = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [btn1Ref.current, btn2Ref.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      },
    );
  }, []);

  const handleHover = (btnRef, shimRef, arrowRef, entering) => {
    if (entering) {
      gsap.to(btnRef.current, {
        scale: 1.06,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.fromTo(
        shimRef.current,
        { x: "-100%" },
        { x: "200%", duration: 0.5, ease: "power1.inOut" },
      );
      gsap.to(arrowRef.current, { x: 4, duration: 0.25, ease: "power2.out" });
    } else {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(arrowRef.current, { x: 0, duration: 0.2, ease: "power2.in" });
    }
  };

  const handlePress = (btnRef, down) => {
    gsap.to(btnRef.current, {
      scale: down ? 0.97 : 1.06,
      duration: down ? 0.1 : 0.15,
      ease: down ? "power2.in" : "back.out(2)",
    });
  };

  useEffect(() => {
    setVisible(true);
    const onMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const btnBase = `
    cursor-pointer inline-flex items-center justify-center gap-2 shrink-0
    outline-none text-sm whitespace-nowrap font-semibold h-11 rounded-xl px-6 sm:px-8
    relative z-10 mt-5 overflow-hidden
    bg-[length:200%] [background-clip:padding-box,border-box,border-box]
    [background-origin:border-box] [border:2px_solid_transparent]
    before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5
    before:w-3/5 before:-translate-x-1/2 before:bg-[var(--btn-gradient)]
    before:blur-xl before:opacity-70
    after:absolute after:top-0 after:left-[10%] after:w-[80%] after:h-[1px]
    after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]
    after:rounded-full
  `;

  const darkBtn = `${btnBase} text-white
    bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),var(--btn-gradient)]
    dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),var(--btn-gradient)]`;

  const lightBtn = `${btnBase} text-black
    bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),var(--btn-gradient)]
    dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),var(--btn-gradient)]
    dark:text-white`;

  const stats = [
    { value: "30+", label: "Projects Shipped" },
    { value: "5+", label: "Years Building" },
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
          background:
            "radial-gradient(circle, rgba(168,255,87,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)",
          zIndex: 0,
        }}
      />

      {/* Top-right ambient */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(168,255,87,0.06), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-left coral ambient */}
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,95,87,0.06), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid lines — hidden on mobile */}
      <div
        className="hidden md:block"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        {[20, 40, 60, 80].map((pct) => (
          <div
            key={pct}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${pct}%`,
              width: 1,
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          padding: "0 20px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <img
          alt="Pen Programmer Logo"
          loading="lazy"
          width="700"
          height="300"
          decoding="async"
          className="mx-auto w-[200px] sm:w-[260px] md:w-[340px] h-10 sm:h-14 md:h-16 object-contain"
          style={{ color: "transparent" }}
          src="https://www.penprogrammer.com/assets/logo-light.svg"
        />

        {/* Headline */}
        <h1 className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-6 px-2">
          We build{" "}
          <span
            className="relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 pb-1 dark:from-green-500 dark:to-sky-500 px-2"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left center",
              display: "inline",
              backgroundSize: "100% 100%",
            }}
          >
            secure, scalable, and performance-driven
          </span>{" "}
          web and mobile platforms for businesses across India
        </h1>

        {/* Role ticker — centered */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginTop: 28,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div style={{ width: 32, height: 1, background: "var(--accent)" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              minWidth: 220,
              textAlign: "center",
            }}
          >
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                pauseFor: 2000,
              }}
            />
          </span>
          <div style={{ width: 32, height: 1, background: "var(--accent)" }} />
        </div>

        {/* Buttons — centered, responsive */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 48,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link aria-label="Services" href="/services">
              <button
                ref={btn1Ref}
                className={darkBtn}
                onMouseEnter={() =>
                  handleHover(btn1Ref, shim1Ref, arrow1Ref, true)
                }
                onMouseLeave={() =>
                  handleHover(btn1Ref, shim1Ref, arrow1Ref, false)
                }
                onMouseDown={() => handlePress(btn1Ref, true)}
                onMouseUp={() => handlePress(btn1Ref, false)}
              >
                <span
                  ref={shim1Ref}
                  className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] -translate-x-full pointer-events-none z-20"
                />
                Explore Services
                <svg
                  ref={arrow1Ref}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>

            <Link aria-label="Projects" href="/projects">
              <button
                ref={btn2Ref}
                className={lightBtn}
                onMouseEnter={() =>
                  handleHover(btn2Ref, shim2Ref, arrow2Ref, true)
                }
                onMouseLeave={() =>
                  handleHover(btn2Ref, shim2Ref, arrow2Ref, false)
                }
                onMouseDown={() => handlePress(btn2Ref, true)}
                onMouseUp={() => handlePress(btn2Ref, false)}
              >
                <span
                  ref={shim2Ref}
                  className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] -translate-x-full pointer-events-none z-20"
                />
                Explore Projects
                <svg
                  ref={arrow2Ref}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            marginTop: 64,
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
                flex: "1 1 33%",
                padding: "24px 0",
                borderRight:
                  i < stats.length - 1 ? "1px solid var(--border)" : "none",
                paddingLeft: i === 0 ? 0 : "clamp(16px, 3vw, 32px)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 56px)",
                  lineHeight: 1,
                  color: "var(--accent)",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-faint)",
                  marginTop: 6,
                }}
              >
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
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(180deg, var(--text-dim), transparent)",
          }}
        />
      </div>
    </section>
  );
}
