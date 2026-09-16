"use client";

/* ============================================================================
   INSTALL (already in package.json — for reference):
     npm i three @react-three/fiber @react-three/drei @react-three/postprocessing
     npm i gsap lenis
   ============================================================================ */

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WorksWithBar from "./WorksWithBar";
import useScrollScene from "@/hooks/useScrollScene";
import { useLang } from "@/i18n/LanguageProvider";

// The WebGL scene is lazy + client-only, and never server-rendered.
const GravityScene = dynamic(() => import("./GravityScene"), { ssr: false });

// The faces behind the "6 builders" proof chip — same people as /team.
const FACES = [
  { initials: "AP", image: "/images/team/aref-pourhashemi.png" },
  { initials: "AM", image: "/images/team/arefe-mousavi.png" },
  { initials: "MH", image: "/images/team/mehran-hatami.png" },
  { initials: "SM", image: "/images/team/shirin-mohebi.png" },
  { initials: "MS", image: "/images/team/mahdie-saffar.png" },
  { initials: "RF" },
];

// One shared entrance curve; each block just picks a delay off the ladder.
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  // Plain mutable ref the 3D scene reads each frame — never React state.
  const progress = useRef(0);

  const [mounted, setMounted] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(true);

  // client-only environment checks (avoids any hydration mismatch)
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 768px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setIsMobile(mq.matches);
      setReduced(rm.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    rm.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      rm.removeEventListener("change", sync);
    };
  }, []);

  // pause the render loop when the hero is scrolled out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setActive(e.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Phase 1: static scene — scroll-pin disabled (kept wired for a later phase).
  useScrollScene({
    trigger: sectionRef,
    overlay: overlayRef,
    progress,
    enabled: false,
  });

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero__scene">
        {mounted && !reduced ? (
          <GravityScene
            progress={progress}
            active={active}
            reduced={reduced}
            isMobile={isMobile}
          />
        ) : (
          // static, animation-free fallback (reduced-motion / SSR)
          <div className="hero__fallback" aria-hidden />
        )}
      </div>

      <div className="hero__vignette" aria-hidden />
      {/* soft scrim behind the copy so it stays readable over the bright grid */}
      <div className="hero__scrim" aria-hidden />

      <div className="hero__content">
        <div ref={overlayRef} className="hero__overlay">
          <motion.span className="eyebrow-pill" {...rise(0)}>
            <span className="eyebrow-pill__dot" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            className="hero__title display-title"
            {...rise(0.08)}
          >
            {t.hero.title1}{" "}
            <span className="hero__title-accent">{t.hero.title2}</span>
          </motion.h1>

          <motion.p className="hero__subtitle" {...rise(0.16)}>
            {t.hero.subtitle}
          </motion.p>

          <motion.div className="hero__actions" {...rise(0.24)}>
            <Link href="/#contact" className="btn-primary">
              {t.hero.ctaPrimary}
              <Arrow />
            </Link>
            <Link href="/works" className="btn-ghost">
              {t.hero.ctaSecondary}
              <Arrow />
            </Link>
          </motion.div>

          {/* social proof — the team behind the work, with the headline numbers */}
          <motion.div className="hero__proof" {...rise(0.32)}>
            <div className="hero__proof-avatars">
              {FACES.map((f) => (
                <span key={f.initials} className="hero__proof-avatar">
                  {f.image ? (
                    <Image
                      src={f.image}
                      alt=""
                      fill
                      sizes="30px"
                      className="object-cover"
                    />
                  ) : (
                    f.initials
                  )}
                </span>
              ))}
            </div>
            <span className="hero__proof-text">
              <b>{t.hero.proofTeam}</b> · {t.hero.proofRest}
            </span>
          </motion.div>

          {/* the categories we actually build in */}
          <motion.div className="hero__pills" {...rise(0.38)}>
            {t.hero.pills.map((p) => (
              <span key={p} className="hero__pill">
                {p}
              </span>
            ))}
          </motion.div>
        </div>

        <WorksWithBar />
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="rtl-flip"
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
