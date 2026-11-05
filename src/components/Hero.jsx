import React from 'react';
import { ArrowDown, Sparkles, Coffee, Clock, Heart } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-[#F5EBDD]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#C66A42]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#183D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#183D32]/10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#183D32]">
            <Sparkles className="w-3.5 h-3.5 text-[#C66A42]" />
            <span>Artisan Roastery & Neighborhood Café</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs tracking-wider uppercase text-[#66554B]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C66A42]" /> 7:00 AM – 11:00 PM
            </span>
            <span className="w-1 h-1 rounded-full bg-[#183D32]/30" />
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline - Exact PDF Requirement */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#183D32] leading-[1.08]">
              Your Everyday <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C66A42]">Coffee Destination.</span>
            </h1>

            {/* Description - Exact PDF Requirement */}
            <p className="text-base sm:text-lg md:text-xl text-[#30251F]/85 max-w-2xl font-normal leading-relaxed">
              From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect.
            </p>

            {/* CTA Button and Secondary Micro-Pill */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Button: Explore Our Menu - Exact PDF Requirement */}
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-[#183D32] hover:text-[#C66A42] transition-colors"
              >
                <span>Our Philosophy</span>
                <span className="text-[#C66A42]">→</span>
              </a>
            </div>
          </div>

          {/* Sensory Highlight Card (Araku inspired editorial touch) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF5ED] border border-[#183D32]/10 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5 relative">
              <div className="flex items-center justify-between border-b border-[#183D32]/10 pb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#183D32]">Daily Craft Experience</span>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-[#183D32] text-[#FAF5ED] rounded-full">Estate Blends</span>
              </div>
              <p className="font-serif text-lg text-[#30251F] italic leading-snug">
                “Crafted with meticulous attention to origin, temperature, and texture for coffee purists and casual sippers alike.”
              </p>
              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="p-3 bg-[#F5EBDD]/60 rounded-xl">
                  <div className="font-serif text-xl font-bold text-[#183D32]">100%</div>
                  <div className="text-[11px] uppercase tracking-wide text-[#66554B] mt-0.5">Arabica</div>
                </div>
                <div className="p-3 bg-[#F5EBDD]/60 rounded-xl">
                  <div className="font-serif text-xl font-bold text-[#C66A42]">4</div>
                  <div className="text-[11px] uppercase tracking-wide text-[#66554B] mt-0.5">House Classics</div>
                </div>
                <div className="p-3 bg-[#F5EBDD]/60 rounded-xl">
                  <div className="font-serif text-xl font-bold text-[#183D32]">Daily</div>
                  <div className="text-[11px] uppercase tracking-wide text-[#66554B] mt-0.5">Fresh Bakes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE 1: Hero Banner (Compulsory Image 1 - Preserved Original Quality) */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-[#FAF5ED] group">
          <div className="relative aspect-[16/7] sm:aspect-[21/9] w-full max-h-[560px] overflow-hidden bg-[#183D32]">
            <img
              src="/images/hero-banner.jpg"
              alt="The Daily Brew - Good Coffee. Good Food. Good Moments."
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle Gradient Framing to harmonize with editorial theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E251E]/70 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between text-[#FAF5ED] text-xs sm:text-sm font-medium bg-[#0E251E]/60 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/10">
              <span className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#C66A42]" />
                <span className="font-serif italic text-[#FAF5ED]">The Daily Brew Experience</span>
              </span>
              <span className="text-[#FAF5ED]/80 hidden sm:inline">
                Good Coffee · Good Food · Good Moments
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

