"use client";

import HeroSection  from "./components/HeroSection";
import Services     from "./components/Services";
import Projects     from "./components/Projects";
import TechStrip    from "./components/TechStrip";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <HeroSection />
      <TechStrip />
      <Services />
      <Projects />
    </div>
  );
}
