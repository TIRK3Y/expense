import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero/";
import Features from "@/components/landing/Features/Features";
import BentoGrid from "@/components/landing/BentoGrid";
import AISection from "@/components/landing/AISection";
// import Stats from "@/components/landing/Stats";
// import HowItWorks from "@/components/landing/HowItWorks";
// import Testimonials from "@/components/landing/Testimonials";
// import Pricing from "@/components/landing/Pricing";
// import FAQ from "@/components/landing/FAQ";
// import CTA from "@/components/landing/CTA";
// import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <BentoGrid />
      <AISection />
      {/* <Stats /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <CTA /> */}
      {/* <Footer /> */}
    </>
  );
}
