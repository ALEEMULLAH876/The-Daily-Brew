import React, { useEffect } from 'react';
import { X, Sparkles, Clock } from 'lucide-react';

export default function QuickViewModal({ item, onClose }) {
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
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF5ED] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#183D32]/15 text-[#30251F]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button: Positioned in top-right corner with dedicated spacing */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 min-w-[44px] min-h-[44px] rounded-full bg-[#FAF5ED] hover:bg-white text-[#183D32] hover:text-[#C66A42] transition-colors shadow-md border border-[#183D32]/15 flex items-center justify-center cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Item Image with pristine ratio and zero cropping */}
          <div className="relative min-h-[240px] sm:min-h-[280px] md:min-h-[360px] overflow-hidden bg-[#F5EBDD]/60 flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-[320px] max-w-full object-contain rounded-xl"
            />
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[#183D32] text-[#FAF5ED] rounded-full shadow-sm">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-5 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Product Header: Flex layout with dedicated safe spacing (pr-12 md:pr-14) so price and title NEVER overlap the close button */}
              <div className="pr-12 md:pr-14 mb-3 sm:mb-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#183D32] leading-tight">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#C66A42] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 text-[11px] sm:text-xs uppercase tracking-wider text-[#66554B]">
                <Clock className="w-3.5 h-3.5 text-[#C66A42]" />
                <span>{item.brewingTime}</span>
                <span>•</span>
                <span>{item.temperature}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#30251F]/80 leading-relaxed mb-5">
                {item.shortDesc}
              </p>

              {/* Tasting Notes */}
              <div className="space-y-2 mb-5">
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#183D32]">
                  Sensory & Flavor Profile
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#F5EBDD] text-[#183D32] border border-[#183D32]/10"
                    >
                      <Sparkles className="w-3 h-3 text-[#C66A42]" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-3 border-t border-[#183D32]/10 flex items-center justify-between text-[11px] sm:text-xs text-[#66554B]">
              <span>Fresh Daily in Chennai</span>
              <span className="font-medium text-[#183D32]">Order at Café Counter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
