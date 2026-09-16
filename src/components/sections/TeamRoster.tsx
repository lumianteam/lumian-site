"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import SpotlightPanel from "@/components/ui/SpotlightPanel";

const members = [
    {
    name: "Aref Pourhashemi",
    initials: "AP",
    image: "/images/team/aref-pourhashemi.png",
  },
  {
    name: "Arefe Mousavi",
    initials: "AM",
    image: "/images/team/arefe-mousavi.png",
  },
    {
    name: "Mehran Hatami",
    initials: "MH",
    image: "/images/team/mehran-hatami.png",
  },
  {
    name: "Shirin Mohebi",
    initials: "SM",
    image: "/images/team/shirin-mohebi.png",
  },
  {
    name: "Mahdie Saffar",
    initials: "MS",
    image: "/images/team/mahdie-saffar.png",
  },
  { name: "Reyhane Firouzi", initials: "RF" },
];

export default function TeamRoster() {
  const { t } = useLang();
  const tp = t.teamPage;

  return (
    <section className="relative px-6 pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow-pill">
          <span className="eyebrow-pill__dot" />
          {tp.eyebrow}
        </span>
        <h1 className="display-title mt-6 text-4xl sm:text-5xl">{tp.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
          {tp.lead}
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: (i % 2) * 0.06 }}
            className="flex"
          >
            <SpotlightPanel className="roster-card flex w-full items-start gap-4 p-5 sm:p-6">
            <span className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] font-[var(--font-display)] text-lg font-bold text-foreground sm:h-24 sm:w-24">
              {m.image ? (
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                />
              ) : (
                m.initials
              )}
            </span>
            <div className="relative">
              <h3 className="text-base font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="mt-0.5 text-sm text-[#FFA63D]/90">
                {t.team.roles[i]}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {tp.bios[i]}
              </p>
            </div>
            </SpotlightPanel>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-3">
        <a href="mailto:lumian.team@gmail.com" className="btn-primary">
          {t.cta.primary}
        </a>
        <Link href="/" className="btn-ghost">
          {tp.back}
        </Link>
      </div>
    </section>
  );
}
