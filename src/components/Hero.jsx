import React from 'react';
import { ArrowDown, Sparkles, Coffee, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden bg-[#F5EBDD]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#C66A42]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-[#183D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-3.5 border-b border-[#183D32]/10">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#183D32]">
            <Sparkles className="w-3.5 h-3.5 text-[#C66A42] shrink-0" />
            <span>Artisan Roastery & Neighborhood Café</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs tracking-wider uppercase text-[#66554B]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C66A42]" /> 7:00 AM – 11:00 PM
            </span>
            <span className="w-1 h-1 rounded-full bg-[#183D32]/30" />
            <span>Chennai</span>
          </div>
        </div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Main Headline - Exact PDF Requirement */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#183D32] leading-[1.12]">
              Your Everyday <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C66A42]">Coffee Destination.</span>
            </h1>

            {/* Description - Exact PDF Requirement */}
            <p className="text-sm sm:text-base md:text-lg text-[#30251F]/85 max-w-2xl font-normal leading-relaxed">
              From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              {/* Button: Explore Our Menu - Exact PDF Requirement */}
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center min-h-[48px]"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200" />
              </a>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#183D32] hover:text-[#C66A42] transition-colors min-h-[44px]"
              >
                <span>Our Philosophy</span>
                <span className="text-[#C66A42]">→</span>
              </a>
            </div>
          </div>

          {/* Sensory Highlight Card (Araku inspired editorial touch) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF5ED] border border-[#183D32]/12 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#183D32]/10 pb-3">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#183D32]">Daily Craft Experience</span>
                <span className="px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium bg-[#183D32] text-[#FAF5ED] rounded-full">Estate Blends</span>
              </div>
              <p className="font-serif text-base sm:text-lg text-[#30251F] italic leading-snug">
                “Crafted with meticulous attention to origin, temperature, and texture for coffee purists and casual sippers alike.”
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2.5 sm:p-3 bg-[#F5EBDD]/70 rounded-xl">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#183D32]">100%</div>
                  <div className="text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">Arabica</div>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#F5EBDD]/70 rounded-xl">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#C66A42]">4</div>
                  <div className="text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">House Classics</div>
                </div>
                <div className="p-2.5 sm:p-3 bg-[#F5EBDD]/70 rounded-xl">
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#183D32]">Daily</div>
                  <div className="text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">Fresh Bakes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 01_alternate_hero_banner.jpg: Proportional, Uncropped & Visually Clear */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#183D32]/15 bg-[#183D32]">
          <div className="w-full aspect-[1672/545] relative overflow-hidden flex items-center justify-center bg-[#183D32]">
            <img
              src="/images/01_alternate_hero_banner.jpg"
              alt="The Daily Brew - Good Coffee. Good Food. Good Moments."
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
