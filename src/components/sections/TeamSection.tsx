"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";
import OrbitField from "@/components/ui/OrbitField";

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

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/**
 * The team section: copy on one side, the orbiting faces on the other.
 * On mobile the orbit stacks under the copy and shrinks with the viewport.
 */
export default function TeamSection() {
  const { t } = useLang();
  const people = members.map((member, i) => ({
    ...member,
    role: t.team.roles[i],
  }));

  return (
    <section id="team" className="section">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">
        {/* ---- copy ---- */}
        <div className="text-center lg:text-start">
          <motion.span className="eyebrow-pill" {...rise()}>
            <span className="eyebrow-pill__dot" />
            {t.team.eyebrow}
          </motion.span>

          <motion.h2
            className="display-title mt-6 text-3xl sm:text-4xl lg:text-[2.9rem]"
            {...rise(0.05)}
          >
            {t.team.title}
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted lg:mx-0"
            {...rise(0.1)}
          >
            {t.team.lead}
          </motion.p>

          <motion.div className="mt-9" {...rise(0.16)}>
            <Link href="/team" className="btn-ghost">
              {t.team.cta}
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
          </motion.div>
        </div>

        {/* ---- the orbit ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <OrbitField people={people} chips={t.team.disciplines} />
        </motion.div>
      </div>
    </section>
  );
}
