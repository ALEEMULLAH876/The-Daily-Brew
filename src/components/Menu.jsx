import React, { useState } from 'react';
import { Eye, Sparkles, Coffee, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menuData';
import QuickViewModal from './QuickViewModal';

/**
 * Menu Component
 * Exact PDF Requirements:
 * - Section Name: "Our Menu"
 * - Cappuccino – ₹150 (Image 2)
 * - Cold Coffee – ₹180 (Image 3)
 * - Classic Sandwich – ₹120 (Image 4)
 * - Chocolate Brownie – ₹100 (Image 5)
 * 
 * Image Alignment & Sizing:
 * Uniform aspect-square containers with edge-to-edge object-cover,
 * eliminating all white strips, gaps, and inconsistent sizing.
 */
export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter items without modifying original data
  const filteredItems = menuItems.filter((item) => {
    if (activeFilter === 'Coffee') return item.category === 'Coffee';
    if (activeFilter === 'Food') return item.category === 'Food';
    return true;
  });

  return (
    <section id="menu" className="scroll-mt-24 sm:scroll-mt-28 py-14 sm:py-24 bg-[#FAF5ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[#123329]/12 border border-[#123329]/25 text-[#102B23] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8552E]" />
            <span>Curated Selections</span>
          </div>

          <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#123329] tracking-tight mb-3">
            Our Menu
          </h2>

          <p className="text-xs sm:text-base text-[#382C24] leading-relaxed max-w-xl mx-auto font-normal">
            Crafted with passion, premium ingredients, and time-honored recipes. Every item on our menu is prepared to elevate your café moment.
          </p>

          {/* Interactive Filter Pills (Accessible touch targets >= 44px) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold rounded-full transition-all duration-200 active:scale-95 cursor-pointer ${
                activeFilter === 'All'
                  ? 'bg-[#123329] text-[#FFFFFF] shadow-sm border border-[#123329]'
                  : 'bg-[#FFFFFF] text-[#211915] border border-[#183D32]/20 hover:bg-[#E8D8C3]/50'
              }`}
            >
              All Offerings ({menuItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('Coffee')}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold rounded-full transition-all duration-200 active:scale-95 cursor-pointer ${
                activeFilter === 'Coffee'
                  ? 'bg-[#123329] text-[#FFFFFF] shadow-sm border border-[#123329]'
                  : 'bg-[#FFFFFF] text-[#211915] border border-[#183D32]/20 hover:bg-[#E8D8C3]/50'
              }`}
            >
              <Coffee className="w-3.5 h-3.5 text-[#B8552E]" />
              <span>Coffee</span>
            </button>
            <button
              onClick={() => setActiveFilter('Food')}
              className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold rounded-full transition-all duration-200 active:scale-95 cursor-pointer ${
                activeFilter === 'Food'
                  ? 'bg-[#123329] text-[#FFFFFF] shadow-sm border border-[#123329]'
                  : 'bg-[#FFFFFF] text-[#211915] border border-[#183D32]/20 hover:bg-[#E8D8C3]/50'
              }`}
            >
              <Utensils className="w-3.5 h-3.5 text-[#B8552E]" />
              <span>Food & Bakes</span>
            </button>
          </div>
        </motion.div>

        {/* 4 Compulsory Menu Items Grid with Uniform Sizing & Alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-[#FFFFFF] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#183D32]/15 shadow-sm hover:shadow-xl hover:border-[#183D32]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container: Consistent Aspect-Square Framing Across All Cards */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#F5EBDD]/80 border-b border-[#183D32]/15 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase bg-[#0B1E18]/90 backdrop-blur-md text-[#FFFFFF] rounded-full border border-white/20 shadow-md">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Quick View Floating Action */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedItem(item)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full text-xs font-bold bg-[#FFFFFF] text-[#123329] hover:bg-[#123329] hover:text-[#FFFFFF] active:scale-95 shadow-lg border border-[#183D32]/25 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B8552E]" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#123329] group-hover:text-[#B8552E] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#B8552E] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#382C24] line-clamp-2 leading-relaxed mb-3 font-normal">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Tag & Quick Modal Trigger */}
                <div className="pt-3 border-t border-[#183D32]/15 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#123329] bg-[#F5EBDD] px-2.5 py-1 rounded-full border border-[#183D32]/15">
                    {item.tags[0]}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    type="button"
                    className="text-xs font-bold text-[#B8552E] hover:text-[#9E4420] active:scale-95 transition-all cursor-pointer py-1.5 px-2 min-h-[44px] inline-flex items-center"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#382C24] font-medium">
            All prices are in Indian Rupees (₹) and inclusive of all applicable taxes. Freshly prepared to order in Chennai.
          </p>
        </div>
      </div>

      {/* Quick View Modal with smooth AnimatePresence exit animations */}
      <AnimatePresence>
        {selectedItem && (
          <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
