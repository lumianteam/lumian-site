import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ResizableNavbar from "@/components/nav/ResizableNavbar";
import HeroParallax, { type Product } from "@/components/work/HeroParallax";
import SiteFooter from "@/components/layout/SiteFooter";

// Each project is shown once in the user-controlled gallery.
const projectShots: Product[] = [
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

export const metadata: Metadata = {
  title: "Work — Lumian",
  description:
    "Selected products, platforms, and data systems engineered by Lumian.",
};

export default function WorksPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0908] text-foreground">
        <ResizableNavbar />
        <main>
          <HeroParallax products={projectShots} />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
