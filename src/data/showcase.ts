/**
 * The single source of truth for the project showcase.
 *
 * Both the home-page work section (3D marquee on desktop, carousel on mobile)
 * and the /works parallax gallery read this list, so a project only ever has
 * to be added in one place.
 */
export type ShowcaseProject = {
  title: string;
  thumbnail: string;
  link?: string;
};

export const showcase: ShowcaseProject[] = [
  {
    title: "وکیل‌وکیل · Lawyer Platform",
    thumbnail: "/images/projects/lawyer-platform/poster-blurred.png",
    link: "/works/vakilvakil",
  },
  {
    title: "تنیسور · Racket Sports Platform",
    thumbnail: "/images/projects/tennisor/poster-v2.png",
    link: "/works/tennisor",
  },
  {
    title: "سلامتطب · Clinic Management",
    thumbnail: "/images/projects/salamatab/poster.png",
    link: "/works/salamatab",
  },
  { title: "Rahdari", thumbnail: "/images/projects/rahdari.png" },
  {
    title: "سامانه پیش‌فاکتور · Proforma System",
    thumbnail: "/images/projects/pishfactor.png",
    link: "/works/pishfactor",
  },
  {
    title: "فروشگاه‌بازی · Game Account Bot",
    thumbnail: "/images/projects/game-account-bot/poster.png",
    link: "/works/game-account-bot",
  },
  {
    title: "سامانه اترک · Tile Operations",
    thumbnail: "/images/projects/atrak/poster.png",
    link: "/works/atrak",
  },
  {
    title: "آکادمی تاگ · Photography Education",
    thumbnail: "/images/projects/tog-academy/poster.png",
    link: "/works/tog-academy",
  },
];
