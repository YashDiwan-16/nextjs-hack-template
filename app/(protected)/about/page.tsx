import AboutHero from "@/components/about/text";
import AboutAccordion from "@/components/about/accordion-card";
import TeamSection from "@/components/about/team-card";

export default function AboutPage() {
  return (
    <main className="min-h-[calc(100vh-64px-80px)] flex flex-col items-center py-12 px-4 md:px-8 lg:px-16">
      {/* Hero Section with Tagline */}
      <AboutHero />

      {/* Accordion Section */}
      <AboutAccordion />

      {/* Team Section */}
      <TeamSection />
    </main>
  );
}
