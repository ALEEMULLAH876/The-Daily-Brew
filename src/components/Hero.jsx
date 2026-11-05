import React from 'react';
import { ArrowDown, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero Component (Homepage Banner)
 * Exact PDF Content:
 * - Heading: "Your Everyday Coffee Destination."
 * - Description: "From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect."
 * - Button: "Explore Our Menu"
 * - Image 1: 01_alternate_hero_banner.jpg
 */
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
    <section id="home" className="scroll-mt-24 sm:scroll-mt-28 relative pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden bg-[#F5EBDD]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#C66A42]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-[#183D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Editorial Eyebrow with responsive layout */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-6 sm:mb-8 pb-3.5 border-b border-[#183D32]/10 text-left"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#183D32]">
            <Sparkles className="w-3.5 h-3.5 text-[#C66A42] shrink-0" />
            <span>Artisan Roastery & Neighborhood Café</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-wider uppercase text-[#66554B]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C66A42]" /> 7:00 AM – 11:00 PM
            </span>
            <span className="w-1 h-1 rounded-full bg-[#183D32]/30" />
            <span>Chennai</span>
          </div>
        </motion.div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            {/* Main Headline - Exact PDF Requirement */}
            <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#183D32] leading-[1.14]">
              Your Everyday <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C66A42]">Coffee Destination.</span>
            </h1>

            {/* Description - Exact PDF Requirement */}
            <p className="text-sm sm:text-base md:text-lg text-[#30251F]/85 max-w-2xl font-normal leading-relaxed">
              From freshly brewed coffee to delicious bites, discover your favourite spot to relax, recharge and reconnect.
            </p>

            {/* Action Buttons: Responsive full-width on mobile, auto on desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              {/* Button: Explore Our Menu - Exact PDF Requirement */}
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] active:scale-[0.98] rounded-full shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer text-center min-h-[48px]"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-200" />
              </a>

              <a
                href="#about"
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#183D32] hover:text-[#C66A42] active:scale-[0.98] transition-all min-h-[44px] cursor-pointer text-center"
              >
                <span>Our Philosophy</span>
                <span className="text-[#C66A42] transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Sensory Highlight Card (Araku inspired editorial touch) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FAF5ED] border border-[#183D32]/12 rounded-2xl p-4 sm:p-7 shadow-sm hover:shadow-md transition-shadow space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-[#183D32]/10 pb-3">
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#183D32]">Daily Craft Experience</span>
                <span className="px-2.5 py-0.5 text-[9px] sm:text-[11px] font-medium bg-[#183D32] text-[#FAF5ED] rounded-full">Estate Blends</span>
              </div>
              <p className="font-serif text-sm sm:text-base md:text-lg text-[#30251F] italic leading-snug">
                “Crafted with meticulous attention to origin, temperature, and texture for coffee purists and casual sippers alike.”
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="p-2 sm:p-3 bg-[#F5EBDD]/70 rounded-xl hover:bg-[#E8D8C3]/50 transition-colors">
                  <div className="font-serif text-base sm:text-xl font-bold text-[#183D32]">100%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">Arabica</div>
                </div>
                <div className="p-2 sm:p-3 bg-[#F5EBDD]/70 rounded-xl hover:bg-[#E8D8C3]/50 transition-colors">
                  <div className="font-serif text-base sm:text-xl font-bold text-[#C66A42]">4</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">House Classics</div>
                </div>
                <div className="p-2 sm:p-3 bg-[#F5EBDD]/70 rounded-xl hover:bg-[#E8D8C3]/50 transition-colors">
                  <div className="font-serif text-base sm:text-xl font-bold text-[#183D32]">Daily</div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wide text-[#66554B] mt-0.5">Fresh Bakes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 01_alternate_hero_banner.jpg: Proportional & Uncropped across all screen sizes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-[#183D32]/15 bg-[#183D32] group"
        >
          <div className="w-full aspect-[1672/545] relative overflow-hidden flex items-center justify-center bg-[#183D32]">
            <img
              src="/images/01_alternate_hero_banner.jpg"
              alt="The Daily Brew - Good Coffee. Good Food. Good Moments."
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
