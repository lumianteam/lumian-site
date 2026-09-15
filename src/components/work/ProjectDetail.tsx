"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Lang } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageProvider";
import type { LocalizedText, PortfolioProject } from "@/data/portfolio";

const labels = {
  en: {
    back: "All work",
    overview: "Product overview",
    challenge: "The challenge",
    solution: "Our approach",
    capabilities: "Core capabilities",
    gallery: "Inside the product",
    galleryLead:
      "A consistent experience for people booking legal advice and lawyers managing their practice.",
    demoNote:
      "All names, portraits, case details, and figures shown in these images are fictional demo data.",
    next: "Have a product in mind?",
    nextBody: "Tell us what you need and we will map a clear path from idea to launch.",
    contact: "Start a project",
  },
  fa: {
    back: "همه نمونه‌کارها",
    overview: "معرفی محصول",
    challenge: "مسئله پروژه",
    solution: "راهکار لومیان",
    capabilities: "قابلیت‌های اصلی",
    gallery: "داخل محصول",
    galleryLead:
      "تجربه‌ای یکپارچه برای کاربران متقاضی خدمات حقوقی و وکلایی که امور حرفه‌ای خود را مدیریت می‌کنند.",
    demoNote:
      "تمام نام‌ها، تصاویر اشخاص، مشخصات پرونده‌ها و اعداد نمایش‌داده‌شده در تصاویر، داده‌های نمایشی و ساختگی هستند.",
    next: "برای ساخت محصول خود آماده‌اید؟",
    nextBody: "نیازتان را با ما در میان بگذارید تا مسیر روشنی از ایده تا انتشار طراحی کنیم.",
    contact: "شروع همکاری",
  },
};

function localize(value: LocalizedText, lang: Lang) {
  return value[lang];
}

export default function ProjectDetail({ project }: { project: PortfolioProject }) {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <main className="overflow-hidden pt-28 sm:pt-36">
      <section className="relative px-6 pb-20 sm:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-[#f59e0b]/[0.08] blur-[140px]"
        />
        <div className="mx-auto max-w-6xl">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <span aria-hidden>{lang === "fa" ? "→" : "←"}</span>
            {l.back}
          </Link>

          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFA63D]">
                {localize(project.category, lang)}
              </p>
              <h1 className="mt-5 max-w-4xl font-[var(--font-display)] text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
                {localize(project.name, lang)}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="text-base leading-8 text-muted sm:text-lg"
            >
              {localize(project.summary, lang)}
            </motion.p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {project.services.map((service) => (
              <span
                key={service.en}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs text-foreground/80"
              >
                {localize(service, lang)}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#11100e] shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:rounded-[2rem]"
          >
            <Image
              src={project.cover.src}
              alt={localize(project.cover.alt, lang)}
              width={project.cover.width}
              height={project.cover.height}
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018] px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFA63D]">
              {l.overview}
            </p>
            <p className="mt-5 text-lg leading-9 text-foreground/90">
              {localize(project.overview, lang)}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <StoryCard title={l.challenge} body={localize(project.challenge, lang)} />
            <StoryCard title={l.solution} body={localize(project.solution, lang)} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFA63D]">
            {l.capabilities}
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <div key={feature.title.en} className="bg-[#0d0c0b] p-7 sm:p-8">
                <span className="text-xs font-medium text-[#FFA63D]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-lg font-semibold text-foreground">
                  {localize(feature.title, lang)}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {localize(feature.description, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          {project.gallery.length > 0 && (
            <>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFA63D]">
                  {l.gallery}
                </p>
                <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
                  {l.galleryLead}
                </p>
              </div>

              <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.55fr_0.75fr]">
                {project.gallery.map((image, index) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-[#11100e]"
                  >
                    <Image
                      src={image.src}
                      alt={localize(image.alt, lang)}
                      width={image.width}
                      height={image.height}
                      sizes={index === 0 ? "(max-width: 1024px) 100vw, 720px" : "(max-width: 1024px) 100vw, 390px"}
                      className="h-auto w-full"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-6 rounded-xl border border-[#FFA63D]/15 bg-[#FFA63D]/[0.05] px-5 py-4 text-xs leading-6 text-muted">
                {l.demoNote}
              </p>
            </>
          )}

          <div
            className={`${project.gallery.length > 0 ? "mt-20" : ""} flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_45%),rgba(255,255,255,0.025)] p-8 sm:flex-row sm:items-center sm:p-12`}
          >
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {l.next}
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-muted">{l.nextBody}</p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0908] transition-transform hover:-translate-y-0.5"
            >
              {l.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StoryCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
    </article>
  );
}
