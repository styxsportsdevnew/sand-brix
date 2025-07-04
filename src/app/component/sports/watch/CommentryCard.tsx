'use client';
import React, { useState } from 'react';

export default function CommentaryCard() {
  const commentary = [
    { over: '35.5', text: 'Anderson to S.Gill', commentry: 'Perfect, Cover Drive on the ball', ball: '4nb' },
    { over: '35.4', text: 'Anderson to S.Gill', commentry: 'Defended back to the bowler. Good line and length.', ball: '0' },
    { over: '35.3', text: 'Anderson to S.Gill', commentry: 'Single taken to deep midwicket.', ball: '6' },
    { over: '35.2', text: 'Anderson to S.Gill', commentry: 'Short and wide, left alone by the batter.', ball: '1' },
    { over: '34.1', text: 'Anderson to S.Gill', commentry: 'Dot ball. Tight over from Anderson.', ball: '4' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = [
    'All', 'Highlights', 'Overs', 'W', '4s', '6s', 'Inn 1', 'Milestone',
  ];

  return (
    <div className="w-full max-w-[800px] bg-[#2D0000] rounded-md text-white px-4 py-5 ml-4">
      <h2 className="text-lg font-semibold mb-4">Commentary</h2>

      {/* Filters */}
      <div className="flex overflow-x-auto gap-2 mb-4 pb-1">
        {filterButtons.map((label) => (
          <div
            key={label}
            onClick={() => setActiveFilter(label)}
            className={`flex items-center justify-center text-[14px] whitespace-nowrap cursor-pointer px-3 py-1 rounded border ${
              activeFilter === label ? 'border-white' : 'border-[#3B1717]'
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Commentary List */}
      <div className="space-y-4 mt-6">
        {commentary.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row justify-between gap-4 border-b border-[#492F2F] pb-3"
          >
            {/* Over and Ball */}
            <div className="flex flex-col items-center min-w-[50px]">
              <div className="text-[16px]">{item.over}</div>
              <div
                className={`mt-1 px-2 py-[2px] text-[14px] ${
                  item.ball.includes('nb')
                    ? 'bg-[#E60019] text-white'
                    : 'bg-white text-black'
                } rounded-full text-center min-w-[28px]`}
              >
                {item.ball}
              </div>
            </div>

            {/* Commentary Text */}
            <div className="flex-1">
              <div className="text-[#8D7575] text-[14px] mb-[2px]">{item.text}</div>
              <div className="text-white text-[15px]">{item.commentry}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
