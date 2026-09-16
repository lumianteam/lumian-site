"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ShowcaseProject } from "@/data/showcase";

/**
 * The mobile view of the project showcase: a snap-scrolling rail of project
 * shots. The 3D marquee is unreadable on a phone — here each project gets a
 * full card with its title and a tap target through to its case study.
 *
 * Dragging is native scroll-snap (smooth, thumb-driven, zero main-thread
 * cost); an IntersectionObserver only watches which card is centred so the
 * focus styling and indicators can follow along.
 */
export default function WorkCarousel({
  projects,
  label,
}: {
  projects: ShowcaseProject[];
  label?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const items = Array.from(rail.querySelectorAll<HTMLElement>(".wcar__item"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = items.indexOf(entry.target as HTMLElement);
          if (i >= 0) setActive(i);
        }
      },
      { root: rail, threshold: 0.6 },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [projects.length]);

  const hintHidden = swiped || active > 0;

  function goTo(i: number) {
    const rail = railRef.current;
    const item = rail?.querySelectorAll<HTMLElement>(".wcar__item")[i];
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setSwiped(true);
  }

  return (
    <div>
      <div ref={railRef} className="wcar">
        {projects.map((p, i) => {
          const card = (
            <>
              <Image
                src={p.thumbnail}
                alt={p.title}
                width={1536}
                height={960}
                sizes="82vw"
                className="wcar__img"
              />
              <div className="wcar__meta">
                <span className="wcar__title">{p.title}</span>
                {p.link && (
                  <span className="wcar__go" aria-hidden>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
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
                )}
              </div>
            </>
          );

          return (
            <div
              key={p.thumbnail}
              className="wcar__item"
              data-active={i === active}
            >
              {p.link ? (
                <Link href={p.link} className="wcar__card">
                  {card}
                </Link>
              ) : (
                <div className="wcar__card">{card}</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="wcar__dots">
        {projects.map((p, i) => (
          <button
            key={p.thumbnail}
            type="button"
            className="wcar__dot"
            data-active={i === active}
            aria-label={p.title}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      <p className="wcar__count">
        <b>{String(active + 1).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")}
      </p>

      {label && (
        <p className="wcar__hint" style={{ opacity: hintHidden ? 0 : 1 }}>
          {label}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14m0 0-6-6m6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      )}
    </div>
  );
}
