'use client';

import React from 'react';

export default function LiveScoreCard() {
  const batters = [
    {
      name: 'Rohit Sharma',
      r: 45,
      b: 60,
      fours: 6,
      sixes: 1,
      sr: 75.0,
      thisBowler: '11(17)',
      last10: '26(34)',
      mat: 73,
      runs: 4716,
      hs: 245,
      ave: 36.84,
    },
    {
      name: 'Shubman Gill',
      r: 30,
      b: 42,
      fours: 4,
      sixes: 0,
      sr: 71.4,
      thisBowler: '9(13)',
      last10: '15(28)',
      mat: 36,
      runs: 1900,
      hs: 129,
      ave: 47.5,
      isStriker: true,
    },
  ];

  const bowlers = [
    {
      name: 'James Anderson',
      o: 8,
      m: 2,
      r: 21,
      w: 1,
      eco: 2.63,
      os: 69,
      fours: 4,
      sixes: 0,
      spell: '2-0-6-0',
      mat: 179,
      wkts: 700,
      bbi: '7/42',
      ave: 25.6,
    },
    {
      name: 'Chris Woakes',
      o: 8,
      m: 2,
      r: 21,
      w: 1,
      eco: 2.63,
      os: 69,
      fours: 4,
      sixes: 1,
      spell: '2-0-6-0',
      mat: 50,
      wkts: 165,
      bbi: '6/17',
      ave: 29.3,
    },
  ];

  const batterColumnLayout = `
    120px 35px 35px 35px 35px 45px
    80px 110px
    1px
    50px 50px 50px 50px
  `;

  const bowlerColumnLayout = `
    120px 35px 35px 35px 35px 45px
    45px 35px 35px 75px
    50px 50px 55px 60px
  `;

  return (
   <div className="w-full overflow-x-auto">
    <div className="w-[800px] mx-auto rounded-md bg-[#2D0000] text-white px-4 py-5">
      <div>
        <div className="space-y-6">

          {/* Batters Table */}
          <div className="space-y-1 border-t border-[#492F2F]">

            {/* Test Career Header above last four columns */}
            <div
              className="grid text-[14px] ml-120 text-center text-[#8D7575] mt-2"
              style={{ gridTemplateColumns: batterColumnLayout }}
            >
              {/* Empty columns before the border */}
              <span className="col-span-9" />
              {/* Border column */}
              <span className="bg-[#492F2F] w-[1px] h-full" />
              {/* Last four columns header */}
              <span className="col-span-4 text-center">Test Career</span>
            </div>

            {/* Header Row */}
            <div
              className="grid border-b border-[#492F2F] text-[#8D7575] pb-[2px] text-[13px] font-medium"
              style={{ gridTemplateColumns: batterColumnLayout }}
            >
              <span>Batters</span>
              <span className="text-center">R</span>
              <span className="text-center">B</span>
              <span className="text-center">4s</span>
              <span className="text-center">6s</span>
              <span className="text-center">SR</span>
              <span className="text-center border-l border-[#492F2F] ">This Bowler</span>
              <span className="text-center">Last 10 Ovs</span>
              <span className="bg-[#492F2F] w-[1px] h-full" />
              <span className="text-center">Mat</span>
              <span className="text-center">Runs</span>
              <span className="text-center">HS</span>
              <span className="text-center">Ave</span>
            </div>

            {batters.map((batter, index) => (
              <div
                key={index}
                className="grid text-[13px] hover:bg-[#3a1e1e] transition"
                style={{
                  gridTemplateColumns: batterColumnLayout,
                  minHeight: '30px',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="truncate">
                  {batter.name}{batter.isStriker && ' *'}
                </span>
                <span className="text-center font-mono">{batter.r}</span>
                <span className="text-center font-mono">{batter.b}</span>
                <span className="text-center font-mono">{batter.fours}</span>
                <span className="text-center font-mono">{batter.sixes}</span>
                <span className="text-center font-mono">{batter.sr.toFixed(1)}</span>
                <span className="text-center border-l border-[#492F2F]">{batter.thisBowler}</span>
                <span className="text-center">{batter.last10}</span>
                <span className="bg-[#492F2F] w-[1px] h-full" />
                <span className="text-center font-mono">{batter.mat}</span>
                <span className="text-center font-mono">{batter.runs}</span>
                <span className="text-center font-mono">{batter.hs}</span>
                <span className="text-center font-mono">{batter.ave}</span>
              </div>
            ))}
          </div>

          {/* Bowlers Table */}
          <div className="space-y-1">
            <div
              className="grid border-b border-[#492F2F] text-[#8D7575] pb-[2px] text-[13px] font-medium"
              style={{ gridTemplateColumns: bowlerColumnLayout }}
            >
              <span>Bowlers</span>
              <span className="text-center">O</span>
              <span className="text-center">M</span>
              <span className="text-center">R</span>
              <span className="text-center">W</span>
              <span className="text-center">ECO</span>
              <span className="text-center border-l border-[#492F2F]">Os</span>
              <span className="text-center">4s</span>
              <span className="text-center">6s</span>
              <span className="text-center">Spell</span>
              <span className="text-center border-l border-[#492F2F]">Mat</span>
              <span className="text-center">Wkts</span>
              <span className="text-center">BBI</span>
              <span className="text-center">Ave</span>
            </div>

            {bowlers.map((bowler, index) => (
              <div
                key={index}
                className="grid text-[13px] hover:bg-[#3a1e1e] transition"
                style={{
                  gridTemplateColumns: bowlerColumnLayout,
                  minHeight: '30px',
                  alignItems: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="truncate">{bowler.name}</span>
                <span className="text-center font-mono">{bowler.o}</span>
                <span className="text-center font-mono">{bowler.m}</span>
                <span className="text-center font-mono">{bowler.r}</span>
                <span className="text-center font-mono">{bowler.w}</span>
                <span className="text-center font-mono">{bowler.eco.toFixed(2)}</span>
                <span className="text-center border-l border-[#492F2F] font-mono">{bowler.os}</span>
                <span className="text-center font-mono">{bowler.fours}</span>
                <span className="text-center font-mono">{bowler.sixes}</span>
                <span className="text-center">{bowler.spell}</span>
                <span className="text-center border-l border-[#492F2F] font-mono">{bowler.mat}</span>
                <span className="text-center font-mono">{bowler.wkts}</span>
                <span className="text-center font-mono">{bowler.bbi}</span>
                <span className="text-center font-mono">{bowler.ave}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
        </div>
  );
}
