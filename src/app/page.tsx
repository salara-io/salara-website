import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AgencyBenefits } from "@/components/AgencyBenefits";
import { Pricing } from "@/components/Pricing";
import { Testimonial } from "@/components/Testimonial";
import { DemoForm } from "@/components/DemoForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <Features />
        <HowItWorks />
        <AgencyBenefits />
        <Pricing />
        <Testimonial />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
