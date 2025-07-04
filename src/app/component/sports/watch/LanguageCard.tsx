import { ChevronDown } from 'lucide-react';
import React from 'react';

export default function LanguageCard() {
  return (
    <div className="w-full max-w-[419px] h-auto bg-[#2D0000] rounded-[5px] opacity-100 flex items-center justify-center text-white text-sm mt-4 px-4 py-3">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-28 items-center w-full">
        <div className="text-[14px]">
          <p>Language</p>
        </div>

        {/* Dropdown Wrapper */}
        <div className="relative w-full sm:w-[198px] h-[40px]">
          <select
            className="w-full h-full appearance-none pl-4 pr-10 text-white text-[14px] rounded-full border border-[#492F2F] bg-[#2D0000]"
          >
    
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>

          {/* ChevronDown Icon */}
          <ChevronDown
            size={20}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
