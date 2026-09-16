"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThreeDMarquee from "./ThreeDMarquee";
import WorkCarousel from "./WorkCarousel";
import { showcase } from "@/data/showcase";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useLang } from "@/i18n/LanguageProvider";

const marqueeImages = showcase.map((p) => p.thumbnail);

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/**
 * Home-page "selected work" section: a 3D marquee of project thumbnails on
 * desktop, a swipeable carousel on phones, with a CTA into the full /works page.
 */
export default function WorkShowcaseSection() {
  const { t } = useLang();
  // The tilted 3D grid only reads well with room to breathe; phones get a
  // swipeable rail instead. Rendering just one of the two keeps a phone from
  // downloading the marquee's eight thumbnails as well.
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="work" className="section">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.span className="eyebrow-pill" {...rise()}>
          <span className="eyebrow-pill__dot" />
          {t.work.eyebrow}
        </motion.span>
        <motion.h2
          className="display-title mt-6 text-3xl sm:text-4xl lg:text-[2.9rem]"
          {...rise(0.05)}
        >
          {t.work.title}
        </motion.h2>
        <motion.p
          className="mt-5 text-base leading-relaxed text-muted"
          {...rise(0.1)}
        >
          {t.work.lead}
        </motion.p>
      </div>

      <div className="mt-12 w-full overflow-hidden">
        {isDesktop ? (
          <ThreeDMarquee images={marqueeImages} />
        ) : (
          <WorkCarousel projects={showcase} label={t.work.swipe} />
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/works" className="btn-ghost">
          {t.work.cta}
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
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
