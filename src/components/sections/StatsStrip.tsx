"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";

/**
 * A four-up numbers band that sits between the hero and the services grid —
 * the "key metrics" beat, giving the page a hard fact before the pitch.
 */
export default function StatsStrip() {
  const { t } = useLang();

  return (
    <section className="relative px-6 pb-4 pt-10 sm:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="stats mx-auto max-w-5xl"
      >
        {t.stats.items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08 * i, duration: 0.6 }}
            className="stats__cell"
          >
            <div className="stats__value">{item.value}</div>
            <div className="stats__label">{item.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
