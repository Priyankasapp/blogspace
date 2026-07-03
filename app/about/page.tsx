import AboutHero from "@/components/about/AboutHero";
import AboutCompany from "@/components/about/AboutCompany";
import Stats from "@/components/about/Stats";
import Mission from "@/components/about/Mission";
import Testimonials from "@/components/about/Testimonials";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutCompany />
      <Stats />
      <Mission />
      <Testimonials />
    </main>
  );
}