import React from 'react';
import { Coffee, Utensils, Heart, Sparkles, Award, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5EBDD] relative overflow-hidden">
      {/* Decorative Warm Ambient Circles */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#183D32]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-[#C66A42]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Philosophy & Story */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#183D32]/10 text-[#183D32]">
              <Sparkles className="w-3.5 h-3.5 text-[#C66A42]" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D32] tracking-tight leading-[1.15]">
              Crafting Moments, <br />
              <span className="italic font-normal text-[#C66A42]">One Brew at a Time.</span>
            </h2>

            {/* Exact PDF Text prominently showcased in an Araku-style editorial quote */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C66A42] py-2">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#30251F] font-medium leading-relaxed italic">
                “At The Daily Brew, we believe every great day starts with a good cup of coffee. Enjoy freshly brewed beverages, delicious food and a welcoming atmosphere.”
              </blockquote>
              <div className="mt-3 text-xs uppercase tracking-widest text-[#66554B] font-semibold">
                — The Daily Brew Promise
              </div>
            </div>

            {/* Three Brand Pillars directly reflecting the PDF philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#FAF5ED] rounded-2xl p-5 border border-[#183D32]/10 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                  <Coffee className="w-5 h-5 text-[#C66A42]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#183D32]">
                  Freshly Brewed
                </h4>
                <p className="text-xs text-[#66554B] leading-relaxed">
                  Carefully sourced Arabica beans ground fresh for every order to ensure pristine aromatic depth.
                </p>
              </div>

              <div className="bg-[#FAF5ED] rounded-2xl p-5 border border-[#183D32]/10 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                  <Utensils className="w-5 h-5 text-[#C66A42]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#183D32]">
                  Delicious Food
                </h4>
                <p className="text-xs text-[#66554B] leading-relaxed">
                  Wholesome gourmet toasties and decadent bakery treats prepared daily in-house.
                </p>
              </div>

              <div className="bg-[#FAF5ED] rounded-2xl p-5 border border-[#183D32]/10 shadow-sm space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#183D32]/10 flex items-center justify-center text-[#183D32]">
                  <Heart className="w-5 h-5 text-[#C66A42]" />
                </div>
                <h4 className="font-serif text-base font-bold text-[#183D32]">
                  Welcoming Space
                </h4>
                <p className="text-xs text-[#66554B] leading-relaxed">
                  A serene sanctuary crafted with warm wood, soothing music, and heartfelt hospitality in Chennai.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Atmosphere Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#183D32] text-[#FAF5ED] rounded-3xl p-8 sm:p-10 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C66A42]/20 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/10 text-[#FAF5ED]">
                  <Award className="w-3.5 h-3.5 text-[#C66A42]" />
                  <span>Chennai Neighborhood Café</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                  A Place to Relax, Recharge & Reconnect.
                </h3>

                <p className="text-sm text-[#FAF5ED]/80 leading-relaxed font-light">
                  Whether you are beginning your morning with our creamy Cappuccino, catching up with friends over our signature Classic Sandwich, or treating yourself to our rich Chocolate Brownie, The Daily Brew is designed to feel like your second home.
                </p>

                <div className="pt-6 border-t border-white/15 grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-serif text-2xl font-bold text-[#C66A42]">Chennai</div>
                    <div className="text-xs text-[#FAF5ED]/70 uppercase tracking-wider mt-0.5">Flagship Café</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-[#FAF5ED]">7 AM – 11 PM</div>
                    <div className="text-xs text-[#FAF5ED]/70 uppercase tracking-wider mt-0.5">Everyday Service</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C66A42] hover:text-[#FAF5ED] transition-colors"
                  >
                    <span>Visit Our Chennai Café</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

