import { HeroSection, FeaturesSection } from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
