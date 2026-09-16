/**
 * The site-wide ambient backdrop: three slowly drifting aurora beams over a
 * warm/cool base wash, a faded grid, and a film-grain layer that kills the
 * banding large dark gradients otherwise show.
 *
 * Entirely CSS (see `.ambient` in globals.css) — no WebGL context, no JS on
 * the main thread, and it honours prefers-reduced-motion.
 */
export default function AmbientBackground() {
  return (
    <div className="ambient" aria-hidden>
      <div className="ambient__beam ambient__beam--a" />
      <div className="ambient__beam ambient__beam--b" />
      <div className="ambient__beam ambient__beam--c" />
      <div className="ambient__grid" />
      <div className="ambient__grain" />
    </div>
  );
}
