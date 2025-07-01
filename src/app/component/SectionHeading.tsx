"use client";

import React from "react";

interface SectionHeadingProps {
  title: string; // The main title for the section
  listItems?: { label: string; active?: boolean }[]; // Array of items with optional active state
  // onListItemClick?: (itemLabel: string) => void; // Optional click handler
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, listItems, className = "" }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full py-4">
      {/* Left side: Title */}
      <h2
        className={`text-xl md:text-2xl font-normal text-white mb-2 sm:mb-0 pr-4 flex-shrink-0 ${className}`}>
        {title}
      </h2>

      {/* Middle: Horizontal line */}
      <div className="flex-grow h-px bg-[#282828] mx-1 hidden sm:block"></div>

      {/* Right side: List of items */}
      <ul className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm md:text-sm text-[#9F9F9F] md:pl-4 flex-shrink-0">
        {listItems?.map((item) => (
          <li
            key={item.label}
            className={`cursor-pointer transition-colors duration-200 ${
              item.active ? "text-red-500 font-bold" : "hover:text-white"
            }`}
            // onClick={() => onListItemClick && onListItemClick(item.label)}
          >
            {item.label}
            {/* {index < listItems.length - 1 && (
              <span className="ml-4 text-[#9F9F9F] hidden md:inline">|</span>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionHeading;
