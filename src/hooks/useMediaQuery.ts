"use client";

import { useEffect, useState } from "react";

/**
 * Tracks a media query on the client.
 *
 * Always returns `false` on the server and for the first client render, so the
 * markup matches during hydration; the real value lands in the effect that
 * runs straight after mount.
 */
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [query]);

  return matches;
}
