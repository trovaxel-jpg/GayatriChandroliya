import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Instructor } from "@/components/Instructor";
import { Benefits } from "@/components/Benefits";
import { Programs } from "@/components/Programs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// Transformations (student testimonials) is intentionally left out of the
// page for now — the component uses placeholder names/quotes. Re-add the
// <Transformations /> import + JSX once you have real student testimonials
// to swap in (component file is still in components/Transformations.tsx).
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <Instructor />
        <Benefits />
        <Programs />
        <WhyChooseUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
