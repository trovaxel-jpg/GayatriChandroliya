import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Instructor } from "@/components/Instructor";
import { Benefits } from "@/components/Benefits";
// Programs, WhyChooseUs and Transformations are intentionally left out —
// shortened homepage to mirror Kamya's leaner structure. Component files
// are still in components/ if you want to bring any of them back later.
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
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
