'use client';
import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import LanguageCard from './LanguageCard';
import MatchDetail from './MatchDetailCard';
import AdvertisementCard from './AdvertisementCard';
import LiveScoreCard from './LiveScoreCard';
import CommentaryCard from './CommentryCard';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function BottomSection() {
  const [activeFilter, setActiveFilter] = useState('Live');
  const filterButtons = [
    { label: 'Info', width: '48px' },
    { label: 'Live', width: '50px' },
    { label: 'Scorecard', width: '98px' },
    { label: 'Commentary', width: '104px' },
    { label: 'Point Table', width: '110px' },
  ];

  return (
    <div className="w-full flex justify-center mt-10 px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1200px] w-full">
        {/* Left side: ScoreCard + LiveScoreCard */}
        <div className="flex flex-col gap-4 flex-1">
          <ScoreCard />

          {/* Filter Buttons and Share Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
            {/* Desktop Filter Buttons */}
            <div className="hidden md:flex gap-[10px] w-full max-w-full ml-2">
              {filterButtons.map((btn) => (
                <div
                  key={btn.label}
                  onClick={() => setActiveFilter(btn.label)}
                  className={`flex items-center justify-center text-[#8D7575] text-[14px] cursor-pointer ${
                    activeFilter === btn.label ? 'text-white' : ''
                  }`}
                  style={{
                    width: btn.width,
                    height: '31px',
                    opacity: 1,
                    flexShrink: 0,
                    flexGrow: 0,
                  }}
                >
                  {btn.label}
                </div>
              ))}
            </div>

            {/* Mobile Filter Buttons */}
            <div className="flex flex-wrap md:hidden justify-start gap-2 w-full max-w-full">
              {filterButtons.map((btn) => (
                <div
                  key={btn.label}
                  onClick={() => setActiveFilter(btn.label)}
                  className={`flex items-center justify-center text-[#8D7575] text-[14px] cursor-pointer ${
                    activeFilter === btn.label ? 'text-white' : ''
                  }`}
                  style={{
                    minWidth: btn.width,
                    height: '31px',
                    opacity: 1,
                    flexShrink: 1,
                    flexGrow: 0,
                  }}
                >
                  {btn.label}
                </div>
              ))}
            </div>

            {/* Share With */}
            <div className="flex  text-[14px] underline cursor-pointer text-white whitespace-nowrap mt-2 sm:mt-0 mr-8">
              <p>Share With</p>&nbsp; <SquareArrowOutUpRight className="w-4 h-4 mt-0" />
            </div>
          </div>

          <LiveScoreCard />
          <CommentaryCard />
        </div>

        {/* Right side: stacked cards */}
        <div className="flex flex-col gap-4 pt-4 items-center flex-shrink-0 w-full sm:w-auto sm:max-w-[350px]">
          <LanguageCard />
          <MatchDetail /> {/* Ensure MatchDetail internally handles overflow */}
          <div className="flex justify-center items-center text-center text-[14px] text-white">
            <p>ADVERTISEMENT</p>
          </div>
          <AdvertisementCard />
        </div>
      </div>
    </div>
  );
}
