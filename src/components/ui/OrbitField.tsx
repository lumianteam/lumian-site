"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import LogoMark from "@/components/ui/LogoMark";

export type OrbitPerson = {
  name: string;
  role: string;
  initials: string;
  image?: string;
};

/** A chip pinned to the figure, positioned in % of the square. */
type Chip = { label: string; top: string; left?: string; right?: string; delay: string };

const CHIP_SLOTS: Omit<Chip, "label">[] = [
  { top: "5%", left: "4%", delay: "0s" },
  { top: "23%", right: "3%", delay: "1.4s" },
  { top: "69%", left: "3%", delay: "2.6s" },
  { top: "87%", right: "6%", delay: "0.8s" },
];

/**
 * The team, orbiting the Lumian mark — the visual anchor of the team section.
 *
 * The first four people ride the outer ring, the rest the inner one, spinning
 * in opposite directions. Each face sits inside a counter-rotating wrapper so
 * it stays upright no matter where it is on its ring.
 */
export default function OrbitField({
  people,
  chips = [],
}: {
  people: OrbitPerson[];
  chips?: string[];
}) {
  const outer = people.slice(0, 4);
  const inner = people.slice(4);

  return (
    <div className="orbit">
      <div className="orbit__glow" aria-hidden />

      {/* dashed guide rings, drawn in a 0–100 user-space square */}
      <svg className="orbit__rings" viewBox="0 0 100 100" aria-hidden>
        <circle className="orbit__guide" cx="50" cy="50" r="40" />
        <circle className="orbit__guide" cx="50" cy="50" r="25" />
      </svg>

      <Ring people={outer} radius="40%" duration="52s" />
      <Ring people={inner} radius="25%" duration="38s" reverse />

      <div className="orbit__core">
        <LogoMark className="h-1/2 w-1/2" size={96} />
      </div>

      {chips.slice(0, CHIP_SLOTS.length).map((label, i) => (
        <span
          key={label}
          className="orbit__chip"
          style={
            {
              top: CHIP_SLOTS[i].top,
              left: CHIP_SLOTS[i].left,
              right: CHIP_SLOTS[i].right,
              animationDelay: CHIP_SLOTS[i].delay,
            } as CSSProperties
          }
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function Ring({
  people,
  radius,
  duration,
  reverse = false,
}: {
  people: OrbitPerson[];
  radius: string;
  duration: string;
  reverse?: boolean;
}) {
  if (people.length === 0) return null;
  const step = 360 / people.length;

  return (
    <div
      className={`orbit__ring${reverse ? " orbit__ring--reverse" : ""}`}
      style={{ "--orbit-duration": duration } as CSSProperties}
    >
      {people.map((p, i) => (
        <div
          key={p.name}
          className="orbit__node"
          style={
            {
              "--a": `${i * step - 90}deg`,
              "--r": radius,
              "--orbit-duration": duration,
            } as CSSProperties
          }
        >
          <div className="orbit__anchor">
            <div className="orbit__counter">
              <div className="orbit__upright">
                <div className="orbit__face">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  ) : (
                    p.initials
                  )}
                </div>
                <span className="orbit__tag">
                  {p.name}
                  <small>{p.role}</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
