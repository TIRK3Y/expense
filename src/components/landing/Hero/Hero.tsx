"use client";

import FloatingCards from "./FloatingCards";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroDashboard from "./HeroDashboard";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background */}
      <HeroBackground />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] xl:gap-20">
          {/* Left */}
          <div className="order-2 mx-auto w-full max-w-2xl lg:order-1 lg:mx-0">
            <HeroContent />
          </div>

          {/* Right */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-[620px]">
              <HeroDashboard />
              <FloatingCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
