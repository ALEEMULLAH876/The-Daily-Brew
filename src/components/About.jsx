import React from 'react';
import { Coffee, Utensils, Heart, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * About Component
 * Exact PDF Content:
 * "At The Daily Brew, we believe every great day starts with a good cup of coffee.
 *  Enjoy freshly brewed beverages, delicious food and a welcoming atmosphere."
 */
export default function About() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (!element) return;
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 70;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, elementTop - headerHeight - 12),
      behavior: 'smooth'
    });
  };

  const pillars = [
    {
      icon: Coffee,
      title: 'Freshly Brewed',
      desc: 'Carefully sourced beans ground fresh for every order to ensure pristine aromatic depth.'
    },
    {
      icon: Utensils,
      title: 'Delicious Food',
      desc: 'Wholesome gourmet toasties and decadent bakery treats prepared daily in-house.'
    },
    {
      icon: Heart,
      title: 'Welcoming Space',
      desc: 'A serene sanctuary crafted with warm wood, soothing ambience, and heartfelt hospitality.'
    }
  ];

  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-24 bg-[#EFE5D8] relative overflow-hidden">
      {/* Decorative Warm Ambient Circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#123329]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#B8552E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Editorial Philosophy & Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[#123329]/12 border border-[#123329]/25 text-[#102B23]">
              <Sparkles className="w-3.5 h-3.5 text-[#B8552E]" />
              <span>About Us</span>
            </div>

            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#123329] tracking-tight leading-[1.16]">
              Crafting Moments, <br />
              <span className="italic font-normal text-[#B8552E]">One Brew at a Time.</span>
            </h2>

            {/* Exact PDF Text prominently showcased in an Araku-style editorial quote */}
            <div className="relative pl-4 sm:pl-7 border-l-4 border-[#B8552E] py-3 bg-[#FAF5ED] border-y border-r border-[#183D32]/15 rounded-r-2xl pr-4 sm:pr-6 shadow-sm">
              <blockquote className="font-serif text-base sm:text-xl md:text-2xl text-[#211915] font-medium leading-relaxed italic">
                “At The Daily Brew, we believe every great day starts with a good cup of coffee. Enjoy freshly brewed beverages, delicious food and a welcoming atmosphere.”
              </blockquote>
              <div className="mt-2.5 sm:mt-3 text-[10px] sm:text-xs uppercase tracking-widest text-[#382C24] font-bold">
                — The Daily Brew Philosophy
              </div>
            </div>

            {/* Three Brand Pillars with Staggered Entrance */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {pillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border-2 border-[#183D32]/12 shadow-sm hover:shadow-md transition-shadow space-y-1.5 sm:space-y-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#123329]/12 border border-[#123329]/20 flex items-center justify-center text-[#123329]">
                      <IconComponent className="w-4 h-4 text-[#B8552E]" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#123329]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#382C24] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Editorial Atmosphere Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#0B1E18] text-[#FAF5ED] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl overflow-hidden border border-[#183D32]/35 group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8552E]/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/15 text-[#FFFFFF] border border-white/25">
                  <Award className="w-3.5 h-3.5 text-[#DD7F55]" />
                  <span>Chennai Flagship Café</span>
                </div>

                <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold leading-snug text-[#FFFFFF]">
                  A Place to Relax, Recharge & Reconnect.
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF5ED]/95 leading-relaxed font-normal">
                  Whether you are beginning your morning with our creamy Cappuccino, catching up with friends over our signature Classic Sandwich, or treating yourself to our rich Chocolate Brownie, The Daily Brew is designed to feel like your second home.
                </p>

                <div className="pt-3.5 sm:pt-4 border-t border-white/20 grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <div className="font-serif text-lg sm:text-2xl font-bold text-[#DD7F55]">Chennai</div>
                    <div className="text-[10px] sm:text-xs text-[#FAF5ED]/85 uppercase tracking-wider font-semibold mt-0.5">Flagship Café</div>
                  </div>
                  <div>
                    <div className="font-serif text-lg sm:text-2xl font-bold text-[#FFFFFF]">7 AM – 11 PM</div>
                    <div className="text-[10px] sm:text-xs text-[#FAF5ED]/85 uppercase tracking-wider font-semibold mt-0.5">Everyday Service</div>
                  </div>
                </div>

                <div className="pt-1.5 sm:pt-2">
                  <a
                    href="#menu"
                    onClick={scrollToMenu}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#DD7F55] hover:text-[#FFFFFF] active:scale-[0.98] transition-all min-h-[44px] cursor-pointer"
                  >
                    <span>View Our Offerings Below</span>
                    <span className="transform group-hover:translate-y-1 transition-transform font-bold">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
