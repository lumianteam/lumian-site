import type { Metadata } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ResizableNavbar from "@/components/nav/ResizableNavbar";
import TeamRoster from "@/components/sections/TeamRoster";
import SiteFooter from "@/components/layout/SiteFooter";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Team — Lumian",
  description:
    "Meet Lumian — a senior, hands-on software & data studio. The people who design and build your project are the people you talk to.",
};

export default function TeamPage() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#07070a] text-foreground">
        <AmbientBackground />
        <ResizableNavbar />
        <main className="relative z-[2]">
          <TeamRoster />
        </main>
        <div className="relative z-[2]">
          <SiteFooter />
        </div>
      </div>
    </LanguageProvider>
  );
}
