import React from 'react';

export default function MatchDetail() {
  const matchDetails = [
        { label: 'Toss', value: 'India, elected to bat first' },
        {
          label: 'Series',
          value: (
            <div className="flex flex-col gap-2">
              <p>Sachin-Anderson Series</p>
              <p className="border-t border-[#492F2F] pt-2">ICC World Test Championship</p>
            </div>
          )
        },
        { label: 'Season', value: '2025' },
        { label: 'Match Number', value: 'Test 2 of 5' },
        { label: 'Match Days', value: 'July 1 – July 5, Jaipur, Rajasthan' },
        {
          label: 'TV Umpire',
          value: (
            <div className="flex flex-wrap items-center gap-2">
              <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-4" />
              <span>Simon Taufel</span>
            </div>
          )
        },
        {
          label: 'Reserve Umpire',
          value: (
            <div className="flex flex-wrap items-center gap-2">
              <img src="https://flagcdn.com/w40/au.png" alt="Australia" className="w-5 h-4" />
              <span>Rod Tucker</span>
            </div>
          )
        },
        {
          label: 'Test Debut',
          value: (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
                <p>Nitish Reddy (India)</p>
              </div>
              <div className="border-t border-[#492F2F] pt-2 flex items-center gap-2 flex-wrap pb-6">
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-5 h-4" />
                <p>Sai Sudarshan (India)</p>
              </div>
            </div>
          )
        }
      ]
  return (
    <div className="w-full max-w-[419px] bg-[#2D0000] rounded-[5px] text-white overflow-hidden">
      <div className="p-4">
        <h2 className="mb-4 text-[16px]">Match Details</h2>
      </div>

      {matchDetails.map((item, idx) => (
        <div key={idx} className="w-full">
          <div className="w-full border-t border-[#492F2F] mt-4" />
          <div className="grid grid-cols-[110px_1fr] gap-4 text-[14px] px-4 mt-4 items-start min-w-0">
            <div className="text-[#8D7575] break-words">{item.label}</div>
            <div className="text-white break-words min-w-0">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
