"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLang } from "@/i18n/LanguageProvider";

export type Product = {
  title: string;
  link?: string;
  thumbnail?: string;
};

/**
 * Keeps the original three-row scroll parallax, then hands control to the user
 * through an explicit horizontal project picker at the end of the page.
 */
export default function HeroParallax({ products }: { products?: Product[] }) {
  const list = products?.length ? products : defaultProducts;
  const row1 = list.filter((_, index) => index % 3 === 0);
  const row2 = list.filter((_, index) => index % 3 === 1);
  const row3 = list.filter((_, index) => index % 3 === 2);

  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });

  const spring = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-220, 850]),
    spring,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [220, -850]),
    spring,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    spring,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    spring,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    spring,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 160]),
    spring,
  );

  return (
    <>
      <div
        ref={parallaxRef}
        className="relative flex h-[300vh] flex-col overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />
        <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
          <ParallaxRow
            products={row1}
            translate={translateX}
            reverse
            startIndex={0}
          />
          <ParallaxRow
            products={row2}
            translate={translateXReverse}
            startIndex={1}
          />
          <ParallaxRow
            products={row3}
            translate={translateX}
            reverse
            startIndex={2}
            isLast
          />
        </motion.div>
      </div>

      <ProjectPicker products={list} />
    </>
  );
}

function Header() {
  const { t } = useLang();
  return (
    <div className="relative mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFA63D]">
        {t.worksPage.eyebrow}
      </p>
      <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight text-foreground md:text-7xl">
        {t.worksPage.title1} <br /> {t.worksPage.title2}
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        {t.worksPage.lead}
      </p>
    </div>
  );
}

function ParallaxRow({
  products,
  translate,
  reverse = false,
  startIndex,
  isLast = false,
}: {
  products: Product[];
  translate: MotionValue<number>;
  reverse?: boolean;
  startIndex: number;
  isLast?: boolean;
}) {
  return (
    <motion.div
      className={`flex min-w-max justify-center gap-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${isLast ? "" : "mb-20"}`}
    >
      {products.map((product, index) => (
        <ParallaxCard
          key={product.link ?? product.title}
          product={product}
          translate={translate}
          index={startIndex + index * 3}
        />
      ))}
    </motion.div>
  );
}

function ParallaxCard({
  product,
  translate,
  index,
}: {
  product: Product;
  translate: MotionValue<number>;
  index: number;
}) {
  const content = (
    <ProjectVisual product={product} index={index} compact />
  );

  return (
    <motion.article
      style={{ x: translate }}
      whileHover={{ y: -16 }}
      className="group/product relative h-72 w-[24rem] shrink-0"
    >
      {product.link ? (
        <Link
          href={product.link}
          className="block h-full w-full rounded-xl outline-none ring-[#FFA63D] focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0908]"
          aria-label={product.title}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.article>
  );
}

function ProjectPicker({ products }: { products: Product[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const autoDirectionRef = useRef<1 | -1>(1);
  const autoPausedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [interactionVersion, setInteractionVersion] = useState(0);
  const { lang } = useLang();

  const labels =
    lang === "fa"
      ? {
          title: "پروژه موردنظر را انتخاب کنید",
          lead: "پروژه‌ها آرام حرکت می‌کنند؛ با اسکرول، درگ یا دکمه‌ها نیز کنترل را در دست بگیرید.",
          previous: "پروژه قبلی",
          next: "پروژه بعدی",
          view: "مشاهده پروژه",
        }
      : {
          title: "Choose a project to explore",
          lead: "Projects move slowly on their own; use the wheel, drag, or buttons anytime.",
          previous: "Previous project",
          next: "Next project",
          view: "View project",
        };

  useEffect(() => {
    if (interactionVersion === 0) return;

    autoPausedRef.current = true;
    const timer = window.setTimeout(() => {
      autoPausedRef.current = false;
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [interactionVersion]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(rail);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || !isInView || isDragging) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame = 0;
    let previousTime = performance.now();
    const speed = 12 / 1000;

    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!autoPausedRef.current) {
        const maxScroll = rail.scrollWidth - rail.clientWidth;

        if (maxScroll > 0) {
          rail.scrollLeft += autoDirectionRef.current * elapsed * speed;

          if (rail.scrollLeft >= maxScroll - 1) {
            rail.scrollLeft = maxScroll;
            autoDirectionRef.current = -1;
          } else if (rail.scrollLeft <= 1) {
            rail.scrollLeft = 0;
            autoDirectionRef.current = 1;
          }
        }
      }

      animationFrame = window.requestAnimationFrame(move);
    };

    animationFrame = window.requestAnimationFrame(move);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isDragging, isInView]);

  // Drag is tracked on the window so it keeps working when the cursor leaves
  // the rail, without the click-swallowing side effects of pointer capture.
  useEffect(() => {
    if (!isDragging) return;

    const rail = railRef.current;
    if (!rail) return;

    const handleMove = (event: globalThis.PointerEvent) => {
      const drag = dragRef.current;
      if (!drag.active) return;

      const distance = event.clientX - drag.startX;
      if (Math.abs(distance) > 5) drag.moved = true;
      rail.scrollLeft = drag.startScrollLeft - distance;
    };

    const handleEnd = () => {
      if (!dragRef.current.active) return;

      dragRef.current.active = false;
      setIsDragging(false);
      setInteractionVersion((version) => version + 1);

      // Runs after the click that follows pointerup, so a real drag is still
      // able to cancel navigation in onClickCapture.
      window.setTimeout(() => {
        dragRef.current.moved = false;
      }, 0);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleEnd);
    window.addEventListener("pointercancel", handleEnd);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleEnd);
      window.removeEventListener("pointercancel", handleEnd);
    };
  }, [isDragging]);

  function pauseAutoScroll() {
    setInteractionVersion((version) => version + 1);
  }

  function getCards() {
    return Array.from(
      railRef.current?.querySelectorAll<HTMLElement>("[data-project-card]") ?? [],
    );
  }

  function scrollToProject(index: number) {
    const rail = railRef.current;
    const card = getCards()[index];
    if (!rail || !card) return;

    pauseAutoScroll();

    rail.scrollTo({
      left: card.offsetLeft - (rail.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
    setActiveIndex(index);
  }

  function updateActiveProject() {
    const rail = railRef.current;
    if (!rail) return;

    const viewportCenter = rail.scrollLeft + rail.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    getCards().forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft + card.clientWidth / 2 - viewportCenter,
      );
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    pauseAutoScroll();

    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const canMoveForward = event.deltaY > 0 && rail.scrollLeft < maxScroll - 1;
    const canMoveBack = event.deltaY < 0 && rail.scrollLeft > 1;

    if (canMoveForward || canMoveBack) {
      event.preventDefault();
      rail.scrollLeft += event.deltaY;
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pauseAutoScroll();
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const rail = railRef.current;
    if (!rail) return;

    // No setPointerCapture here: capturing retargets pointerdown/pointerup to
    // the rail, so the browser would dispatch the resulting click on the rail
    // instead of the project link and navigation would never happen.
    dragRef.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startScrollLeft: rail.scrollLeft,
    };
    setIsDragging(true);
  }

  return (
    <section className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(255,166,61,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFA63D]">
              {lang === "fa" ? "همه پروژه‌ها" : "All projects"}
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold text-foreground sm:text-5xl">
              {labels.title}
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">{labels.lead}</p>
          </div>
          <p className="shrink-0 font-mono text-xs text-white/55" aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
        </div>

        <div
          ref={railRef}
          dir="ltr"
          onScroll={updateActiveProject}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onDragStart={(event) => event.preventDefault()}
          onFocusCapture={pauseAutoScroll}
          onClickCapture={(event) => {
            if (dragRef.current.moved) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
          className={`flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7 ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
          aria-label={lang === "fa" ? "انتخاب پروژه" : "Choose a project"}
        >
          {products.map((product, index) => (
            <PickerCard
              key={product.link ?? product.title}
              product={product}
              index={index}
              viewLabel={labels.view}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-5">
          <div className="flex items-center gap-2" dir="ltr">
            {products.map((product, index) => (
              <button
                key={product.link ?? product.title}
                type="button"
                onClick={() => scrollToProject(index)}
                aria-label={`${lang === "fa" ? "پروژه" : "Project"} ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#FFA63D]"
                    : "w-1.5 bg-white/20 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2" dir="ltr">
            <ControlButton
              label={labels.previous}
              disabled={activeIndex === 0}
              onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
              direction="previous"
            />
            <ControlButton
              label={labels.next}
              disabled={activeIndex === products.length - 1}
              onClick={() =>
                scrollToProject(Math.min(products.length - 1, activeIndex + 1))
              }
              direction="next"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PickerCard({
  product,
  index,
  viewLabel,
}: {
  product: Product;
  index: number;
  viewLabel: string;
}) {
  const content = (
    <ProjectVisual
      product={product}
      index={index}
      viewLabel={viewLabel}
    />
  );

  return (
    <article
      data-project-card
      className="group/product w-[82vw] max-w-[620px] shrink-0 snap-center sm:w-[560px] lg:w-[620px]"
    >
      {product.link ? (
        <Link
          href={product.link}
          className="block rounded-2xl outline-none ring-[#FFA63D] focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0a0908]"
          aria-label={product.title}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}

function ProjectVisual({
  product,
  index,
  compact = false,
  viewLabel,
}: {
  product: Product;
  index: number;
  compact?: boolean;
  viewLabel?: string;
}) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden border border-white/10 bg-gradient-to-br from-[#16130f] to-[#100d0a] ${
        compact ? "rounded-xl" : "aspect-[3/2] rounded-2xl"
      }`}
    >
      {product.thumbnail ? (
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes={compact ? "384px" : "(max-width: 640px) 82vw, 620px"}
          className="object-cover transition-transform duration-700 group-hover/product:scale-[1.025]"
          draggable={false}
        />
      ) : (
        <Placeholder index={index} />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent opacity-80 transition-opacity group-hover/product:opacity-100" />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${
          compact ? "p-5" : "p-5 sm:p-7"
        }`}
      >
        <div dir="auto">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/50">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className={`mt-1 font-semibold text-white ${compact ? "text-sm" : "text-base sm:text-xl"}`}>
            {product.title}
          </h3>
        </div>
        {!compact && product.link && viewLabel ? (
          <span className="hidden shrink-0 items-center gap-2 text-xs font-medium text-white/70 sm:flex">
            {viewLabel} <span aria-hidden>↗</span>
          </span>
        ) : null}
      </div>
    </div>
  );
}

function ControlButton({
  label,
  disabled,
  onClick,
  direction,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  direction: "previous" | "next";
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:border-[#FFA63D]/50 hover:bg-[#FFA63D]/10 disabled:cursor-not-allowed disabled:opacity-25"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d={direction === "previous" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function Placeholder({ index }: { index: number }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center gap-1.5 p-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFA63D]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
      </div>
      <div className="flex flex-1 items-end gap-1.5 px-6 pb-6">
        {[40, 65, 50, 80, 60, 90, 55, 70].map((height, bar) => (
          <span
            key={bar}
            className="flex-1 rounded-sm bg-[#FFA63D]/15"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <span className="sr-only">Project {index + 1}</span>
    </div>
  );
}

const defaultProducts: Product[] = [
  { title: "Nexus Platform" },
  { title: "Pulse Analytics" },
  { title: "Vertex Commerce" },
];
