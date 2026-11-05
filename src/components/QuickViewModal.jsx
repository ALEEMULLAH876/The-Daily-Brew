import React, { useEffect } from 'react';
import { X, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * QuickViewModal Component
 * Interactive item tasting & detail popup with clean responsive layout.
 * Guarantees zero price overlap with the close button on all screen sizes.
 */
export default function QuickViewModal({ item, onClose }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#FAF5ED] rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#183D32]/25 text-[#211915]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Fixed in top-right corner with dedicated spacing and tactile click */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-30 min-w-[44px] min-h-[44px] rounded-full bg-[#FFFFFF] hover:bg-[#123329] active:scale-90 text-[#123329] hover:text-[#FFFFFF] transition-all shadow-md border-2 border-[#183D32]/20 flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Item Image with pristine ratio and zero cropping */}
          <div className="relative min-h-[200px] sm:min-h-[260px] md:min-h-[360px] overflow-hidden bg-[#FFFFFF] border-b md:border-b-0 md:border-r border-[#183D32]/15 flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-[220px] sm:max-h-[280px] md:max-h-[340px] max-w-full object-contain rounded-xl"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#123329] text-[#FFFFFF] rounded-full shadow-sm border border-white/20">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-4 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Product Header: Flex layout with dedicated safe spacing (pr-12 md:pr-14) so price and title NEVER overlap the close button */}
              <div className="pr-12 md:pr-14 mb-3 sm:mb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#123329] leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#B8552E] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 text-[10px] sm:text-xs uppercase tracking-wider text-[#382C24] font-bold">
                <Clock className="w-3.5 h-3.5 text-[#B8552E]" />
                <span>{item.brewingTime}</span>
                <span>•</span>
                <span>{item.temperature}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#2E231D] leading-relaxed mb-4 sm:mb-5 font-normal">
                {item.shortDesc}
              </p>

              {/* Tasting Notes */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#123329]">
                  Sensory & Flavor Profile
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#FFFFFF] text-[#123329] border border-[#183D32]/20 shadow-xs"
                    >
                      <Sparkles className="w-3 h-3 text-[#B8552E]" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-3 border-t border-[#183D32]/15 flex items-center justify-between text-[10px] sm:text-xs text-[#382C24] font-medium">
              <span>Fresh Daily in Chennai</span>
              <span className="font-bold text-[#123329]">Order at Café Counter</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
