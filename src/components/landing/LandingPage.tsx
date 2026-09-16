"use client";

import dynamic from "next/dynamic";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ResizableNavbar from "@/components/nav/ResizableNavbar";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Hero from "@/components/hero/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import WorkShowcaseSection from "@/components/work/WorkShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import SiteFooter from "@/components/layout/SiteFooter";
import "./landing.css";

// Fixed full-page particle field — client only.
const ParticleBackground = dynamic(
  () => import("@/components/three/ParticleBackground"),
  { ssr: false },
);

export default function LandingPage() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="landing">
          {/* backdrop: CSS aurora first, then the WebGL particle field on top */}
          <AmbientBackground />
          <ParticleBackground reduced={prefersReduced} />

          {/* resizable, scroll-aware navbar */}
          <ResizableNavbar />

          <main className="landing__main">
            <Hero />
            <StatsStrip />
            <FeaturesSection />
            <TeamSection />
            <WorkShowcaseSection />
            <CTASection />
          </main>

          <SiteFooter />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}
