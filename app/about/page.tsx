import AboutHero from "@/app/(website)/components/about/AboutHero";
import AboutCompany from "@/app/(website)/components/about/AboutCompany";
import Stats from "@/app/(website)/components/about/Stats";
import Mission from "@/app/(website)/components/about/Mission";
import Testimonials from "@/app/(website)/components/about/Testimonials";


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