'use client';
import { CircleSmall } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import IndiaImg from '../../../assets/sports/india-flag.jpg';
import EngImg from '../../../assets/sports/england-flag.jpg';

export default function ScoreCard() {
  return (
    <div className="w-full max-w-[800px] mx-auto mt-8 px-4 py-6 rounded-md bg-[#2D0000] text-white shadow-md">
      {/* Live Status */}
      <div className="flex justify-center items-center text-center px-2">
        <p className="text-[14px] md:text-[16px] inline-flex items-center gap-2 flex-wrap justify-center">
          <CircleSmall width={15} height={15} color="red" fill="red" />
          <span className="text-[#FF0000] font-semibold">Live</span>
          2nd Test, Delhi (DCA), June 25 - 29, 2025, England tour of India
        </p>
      </div>

      {/* Score Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-6 text-center">
        {/* India */}
        <div className="flex items-center gap-2">
          <Image
            src={IndiaImg}
            alt="India"
            width={48}
            height={48}
            className="rounded-full w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover"
          />
          <div className="flex flex-col items-start text-[15px] md:text-[17px]">
            <p>India</p>
            <p>616</p>
          </div>
        </div>

        {/* Center Score */}
        <div className="text-[40px] md:text-[60px] font-bold">4</div>

        {/* England */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end text-[15px] md:text-[17px]">
            <p>England</p>
            <p>378/9 (108 ov.)</p>
          </div>
          <Image
            src={EngImg}
            alt="England"
            width={48}
            height={48}
            className="rounded-full w-[48px] h-[48px] md:w-[64px] md:h-[64px] object-cover"
          />
        </div>
      </div>

      {/* Match Status */}
      <div className="flex justify-center items-center text-center mt-6 px-2">
        <p className="text-[14px] md:text-[16px]">
          Day 3 - Session 2: India lead by 238 runs.
        </p>
      </div>

      {/* Additional Stats */}
      <div className="flex justify-center items-center text-center mt-2 px-2">
        <p className="text-[14px] md:text-[16px]">
          Current RR: 3.86 • Min. Ov. Rem: 58 • Last 10 ov (RR): 38/1 (3.80)
        </p>
      </div>
    </div>
  );
}
