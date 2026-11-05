import React from 'react';
import { Coffee } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-4 sm:py-6 px-4 max-w-7xl mx-auto" aria-hidden="true">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#183D32]/15 to-[#183D32]/20" />
      <div className="px-3 sm:px-5 flex items-center gap-2 text-[#C66A42]">
        <span className="w-1 h-1 rounded-full bg-[#C66A42]/60" />
        <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C66A42]" />
        <span className="w-1 h-1 rounded-full bg-[#C66A42]/60" />
      </div>
      <div className="flex-grow h-px bg-gradient-to-l from-transparent via-[#183D32]/15 to-[#183D32]/20" />
    </div>
  );
}

