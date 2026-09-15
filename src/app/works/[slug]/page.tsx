import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import ResizableNavbar from "@/components/nav/ResizableNavbar";
import SiteFooter from "@/components/layout/SiteFooter";
import ProjectDetail from "@/components/work/ProjectDetail";
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) return {};

  return {
    title: `${project.name.fa} — نمونه‌کار لومیان`,
    description: project.summary.fa,
    openGraph: {
      title: `${project.name.fa} — Lumian`,
      description: project.summary.fa,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) notFound();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0908] text-foreground">
        <ResizableNavbar />
        <ProjectDetail project={project} />
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
