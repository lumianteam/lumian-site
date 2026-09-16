"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";

const EMAIL = "lumian.team@gmail.com";
const LINKEDIN = "https://www.linkedin.com/company/lumian-team/";

const avatars = ["AM", "AP", "MS", "MH", "SM", "RF"];

export default function CTASection() {
  const { t } = useLang();

  return (
    <section id="contact" className="section px-6">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="cta-card mx-auto max-w-5xl"
      >
        <div className="cta-card__inner">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
            {/* left: heading + body + social proof */}
            <div>
              <span className="eyebrow-pill">
                <span className="eyebrow-pill__dot" />
                {t.cta.eyebrow}
              </span>

              <h2 className="display-title mt-6 text-3xl sm:text-4xl lg:text-[2.6rem]">
                {t.cta.title}
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                {t.cta.body}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {avatars.map((a) => (
                    <span
                      key={a}
                      className="grid h-9 w-9 place-items-center rounded-full border border-[#100e14] bg-gradient-to-br from-white/25 to-white/5 text-[11px] font-semibold text-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-[#FFA63D]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted">{t.cta.trusted}</p>
                </div>
              </div>
            </div>

            {/* right: actions */}
            <div className="flex flex-col items-stretch gap-3">
              <a href={`mailto:${EMAIL}`} className="btn-primary">
                {t.cta.primary}
                <svg
                  width="16"
                  height="16"
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
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 10.5 22 14v7h-4v-6.2c0-1.5-.03-3.4-2.07-3.4-2.07 0-2.39 1.6-2.39 3.3V21H9V9Z" />
                </svg>
                {t.cta.linkedin}
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="text-center text-xs text-muted transition-colors hover:text-foreground"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.9l-5.8 3.05 1.1-6.47L2.6 9.9l6.5-.95L12 2.5Z" />
    </svg>
  );
}
