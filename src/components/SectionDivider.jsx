import React from 'react';
import { Coffee } from 'lucide-react';

export default function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-3 sm:py-5 px-4 max-w-7xl mx-auto" aria-hidden="true">
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#183D32]/25 to-[#183D32]/35" />
      <div className="px-3 sm:px-5 flex items-center gap-2 text-[#B8552E]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B8552E]/75" />
        <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B8552E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#B8552E]/75" />
      </div>
      <div className="flex-grow h-px bg-gradient-to-l from-transparent via-[#183D32]/25 to-[#183D32]/35" />
    </div>
  );
}

