'use client';
import React from "react";
import Image from "next/image";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";
import bigImage from "../../assets/images/4k-Ultra-HD.png";
import smallImage from "../../assets/images/a897fec3-538c-47d0-93a5-82e7d70d.jpg";
import SectionHeading from "../SectionHeading";

const PopularLiveStreamingSection: React.FC = () => {
  const matchInfo = {
    title: "Watch Live IPL Match & Highlights",
    teams: {
      team1: "CSK",
      team2: "RCB",
      fullMatch: "Chennai Super Kings VS Royal Challengers Bengaluru",
    },
    date: "30 Apr, 2025 |",
    highlights: Array(8).fill({
      title: "Narine's Delhi Magic - Runs, wickets, run out, catch",
      date: "25 Apr 2025 |",
    }),
  };

  return (
    <div
      className="bg-[#180000] shadow-sm w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Title */}
        <SectionHeading
          title="Popular Live Streaming"
          listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />

        {/* Main Content - Flex container */}
        <div className="flex flex-col lg:flex-row gap-0 min-h-[300px]">
          {/* Left Side */}
          <div className="w-full lg:w-[25%] flex-shrink-0 pr-0 lg:pr-2 mb-4 md:mb-0">
            <div className="h-[300px] md:h-[387px] w-full border border-[#9F9F9F] border-opacity-25 rounded-sm overflow-hidden cursor-pointer group bg-black relative">
              <Image
                src={bigImage}
                alt="Live Match"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[75%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pl-0 lg:pl-2">
            {matchInfo.highlights.map((highlight, index) => (
              <div key={index} className="col-span-1 cursor-pointer group">
                <div className="w-full h-[150px] sm:h-[190px] rounded-sm overflow-hidden bg-black relative">
                  <Image
                    src={smallImage}
                    alt="Highlight"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                    <p className="text-xs text-white font-semibold line-clamp-2">
                      {highlight.title}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] mt-1 text-white">
                      <span className="opacity-80">{highlight.date}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span>10.5K</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-6 w-full cursor-pointer">
          <button className="w-full text-center text-white text-sm font-semibold py-3 group bg-[#282828] rounded-sm cursor-pointer">
            <span className="inline-block relative text-[#9F9F9F]">
              Load More +
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularLiveStreamingSection;
