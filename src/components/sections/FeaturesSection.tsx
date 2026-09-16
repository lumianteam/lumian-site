"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import SpotlightPanel from "@/components/ui/SpotlightPanel";

const AMBER = "#FFA63D";

const visuals: ReactNode[] = [
  <BrowserVisual key="b" />,
  <DataVisual key="d" />,
  <FlowVisual key="f" />,
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function FeaturesSection() {
  const { t } = useLang();
  const features = t.features.items.map((item, i) => ({
    title: item.title,
    description: item.desc,
    visual: visuals[i],
  }));

  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.span className="eyebrow-pill" {...rise()}>
          <span className="eyebrow-pill__dot" />
          {t.features.eyebrow}
        </motion.span>

        <motion.h2
          className="display-title mt-6 text-3xl sm:text-4xl lg:text-[2.9rem]"
          {...rise(0.05)}
        >
          {t.features.title}
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted"
          {...rise(0.1)}
        >
          {t.features.lead}
        </motion.p>
      </div>

      <div className="svc-grid mx-auto mt-14 max-w-6xl px-6 sm:mt-16">
        {features.map((f, i) => (
          <motion.div key={f.title} {...rise(0.08 * i)} className="flex">
            <SpotlightPanel className="svc-card group w-full">
              <span className="svc-card__index">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="svc-card__visual">{f.visual}</div>

              <h3 className="svc-card__title">{f.title}</h3>
              <p className="svc-card__desc">{f.description}</p>

              <span className="svc-card__foot">
                {t.features.more}
                <svg
                  width="14"
                  height="14"
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
              </span>
            </SpotlightPanel>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- illustrations (CSS skeletons) ---------------- */

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-40 w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-[#0c0b10]/90 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg]">
      {children}
    </div>
  );
}

function Bar({ w, amber = false }: { w: string; amber?: boolean }) {
  return (
    <div
      className="h-2 rounded-full"
      style={{ width: w, background: amber ? AMBER : "rgba(255,255,255,0.12)" }}
    />
  );
}

// A faux browser window with code-ish skeleton lines.
function BrowserVisual() {
  return (
    <Panel>
      <div className="flex gap-1.5">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      <div className="mt-5 space-y-2.5">
        <Bar w="80%" />
        <Bar w="55%" amber />
        <Bar w="68%" />
        <Bar w="40%" />
        <Bar w="60%" />
      </div>
    </Panel>
  );
}

// A faux dashboard with animated bars + a sparkline.
function DataVisual() {
  const bars = [40, 70, 52, 88, 64, 78];
  return (
    <Panel>
      <div className="flex h-20 items-end justify-between gap-2">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-sm"
            style={{
              background: i === 3 ? AMBER : "rgba(255,255,255,0.16)",
            }}
          />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <Bar w="70%" />
        <Bar w="45%" />
      </div>
    </Panel>
  );
}

// A faux scrape→table flow.
function FlowVisual() {
  return (
    <Panel>
      <div className="flex items-center gap-3">
        {/* source page */}
        <div className="flex-1 space-y-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
          <Bar w="80%" />
          <Bar w="60%" />
          <Bar w="70%" />
        </div>
        {/* arrow */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/40">
          <path d="M4 12h15m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* extracted rows */}
        <div className="flex-1 space-y-1.5">
          {[0, 1, 2, 3].map((r) => (
            <div
              key={r}
              className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: r === 1 ? AMBER : "rgba(255,255,255,0.3)" }}
              />
              <span className="h-1.5 flex-1 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
