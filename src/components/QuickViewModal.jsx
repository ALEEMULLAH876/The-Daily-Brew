import React, { useEffect } from 'react';
import { X, Sparkles, Clock, Flame, Check } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF5ED] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#183D32]/15 text-[#30251F]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FAF5ED]/80 hover:bg-[#FAF5ED] text-[#183D32] hover:text-[#C66A42] transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Item Image with pristine ratio */}
          <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden bg-[#183D32]/5">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#183D32] text-[#FAF5ED] rounded-full shadow-sm">
                {item.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#183D32]">
                  {item.name}
                </h3>
                <span className="font-serif text-2xl font-bold text-[#C66A42]">
                  {item.price}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4 text-xs uppercase tracking-wider text-[#66554B]">
                <Clock className="w-3.5 h-3.5 text-[#C66A42]" />
                <span>{item.brewingTime}</span>
                <span>•</span>
                <span>{item.temperature}</span>
              </div>

              <p className="text-sm sm:text-base text-[#30251F]/80 leading-relaxed mb-6">
                {item.shortDesc}
              </p>

              {/* Tasting Notes */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#183D32]">
                  Sensory & Flavor Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F5EBDD] text-[#183D32] border border-[#183D32]/10"
                    >
                      <Sparkles className="w-3 h-3 text-[#C66A42]" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-4 border-t border-[#183D32]/10 flex items-center justify-between text-xs text-[#66554B]">
              <span>Served Fresh Daily at Chennai</span>
              <span className="font-medium text-[#183D32]">Order at Café Counter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

