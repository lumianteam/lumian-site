import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ResizableNavbar from "@/components/nav/ResizableNavbar";
import HeroParallax from "@/components/work/HeroParallax";
import { showcase } from "@/data/showcase";
import SiteFooter from "@/components/layout/SiteFooter";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Work — Lumian",
  description:
    "Selected products, platforms, and data systems engineered by Lumian.",
};

export default function WorksPage() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#07070a] text-foreground">
        <AmbientBackground />
        <ResizableNavbar />
        <main className="relative z-[2]">
          <HeroParallax products={showcase} />
        </main>
        <div className="relative z-[2]">
          <SiteFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
