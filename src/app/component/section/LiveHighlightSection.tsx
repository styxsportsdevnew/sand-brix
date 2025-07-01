"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Image from "next/image";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";
import teamImageOne from "../../assets/images/teamImage1.png";
import teamImageTwo from "../../assets/images/teamImage2.png";
import bigImage from "../../assets/images/livematchImage.jpg";
import SectionHeading from "../SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const HighlightsPrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
      <ChevronLeft size={40} />
    </button>
  );
};

const HighlightsNextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
      <ChevronRight size={40} />
    </button>
  );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
      <ChevronLeft size={40} />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
      <ChevronRight size={40} />
    </button>
  );
};

const LiveHighlightSection: React.FC = () => {
  const matchInfo = {
    title: "Watch Live IPL Match & Highlights",
    teams: {
      team1: "CSK",
      team2: "RCB",
      fullMatch: "Chennai Super Kings VS Royal Challengers Bengaluru",
    },
    date: "30 Apr, 2025 |",
    highlights: Array(6).fill({
      title: "Narine's Delhi Magic - Runs, wickets, run out, catch",
      date: "25 Apr 2025 |",
    }),
  };

  // const teams = [
  //   {
  //     name: "CHAMBAL",
  //     subname: "GHARIYALS",
  //     stadiumLocation: "Stadium B, Location B",
  //   },
  //   {
  //     name: "JABALPUR",
  //     subname: "ROYAL LIONS",
  //     stadiumLocation: "Stadium A, Location A",
  //   },
  // ];

  const mainSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <HighlightsPrevArrow />,
    nextArrow: <HighlightsNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div
      className="bg-[#180000] shadow-sm w-full mt-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">
        {/* Section Title */}
        <SectionHeading
          title="Watch Live IPL Match & Highlights"
          listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />

        {/* Match Highlights */}
        <div className="px- mt-4">
          <Slider {...mainSetting}>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <div key={index} className="w-full px-1">
                    <div
                      className={`border-2 ${
                        index === 0 ? "border-red-500" : "border-gray-700"
                      } border-opacity-25 rounded-md overflow-hidden cursor-pointer group bg-black relative`}>
                      <Image
                        src={bigImage}
                        alt="Live Match"
                        width={562}
                        height={340}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-[#101010] md:opacity-10 opacity-20"></div>
                      <div className="absolute bottom-0 left-0 w-full h-full bg-black md:opacity-30 opacity-20"></div>

                      {/* Match Info Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-3 text-white flex justify-between items-center text-sm gap-2">
                        <div className="flex items-center text-[#FFFFFF] gap-2 text-xs">
                          <span>{matchInfo.date}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white opacity-80"
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
                          <span>23.5K</span>
                        </div>

                        {index === 0 && (
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-center gap-1 bg-red-500 text-white px-2 py-0.5 rounded-md">
                              <span className="flex h-2 w-2">
                                <span className="animate-ping inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="inline-flex rounded-full h-2 w-2 bg-white"></span>
                              </span>
                              <span className="text-xs font-bold">LIVE</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-3 justify-center">
                    <div className="font-semibold text-center text-white text-sm md:text-lg cursor-pointer">
                      {index === 0 ? (
                        <span className="uppercase">TATA IPL 2025 T20 MATCH</span>
                      ) : (
                        <span className="uppercase">Upcoming tata IPL 2025 T20 MATCH</span>
                      )}
                    </div>
                    <div className="text-white flex justify-center items-center gap-2 text-xs md:text-sm cursor-pointer">
                      <span>Match - 15</span>
                      <span className="text-gray-300">|</span>
                      <span>Match starts at - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>

        {/* Slider */}
        <div className="mt-5 px-6 md:px-1">
          <Slider {...settings}>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="px-1">
                  <div className="bg-[#2D0000] rounded">
                    <div className=" rounded-sm px-3 md:px-8 py-5 text-white relative">
                      <div className="absolute top-2 right-4 bg-red-600 text-white text-[10px] font-semibold px-2 rounded-sm">
                        LIVE
                      </div>

                      <div className="flex items-center space-x-2 text-xs md:text-sm font-semibold mb-1 mt-2">
                        <div className="text-red-500">STUMPS</div>
                        <div className="text-white">• Starts 3:30 PM • 1st TEST • Leeds</div>
                      </div>

                      <div className="flex justify-between items-center gap-3 text-sm mb-1 mt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Image src={teamImageOne} alt="India" width={24} height={24} />
                          <span>
                            INDIA <span className="text-red-500">•</span>
                          </span>
                        </div>
                        <div className="text-right whitespace-nowrap">
                          <span className="inline text-[#FFFFFF75]">(23.5 ov) 471 &nbsp;</span>
                          <span className="inline font-semibold">& 90/2</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center gap-3 text-sm mb-5">
                        <div className="flex items-center gap-2">
                          <Image src={teamImageTwo} alt="England" width={24} height={24} />
                          <span>ENGLAND</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-[#8D7575]">465</span>
                        </div>
                      </div>

                      <div className="text-xs md:text-sm text-white mb-1">
                        Day 3 - India lead by 96 runs.
                      </div>
                    </div>
                    <hr className="w-full border-t border-[#492F2F] opacity" />

                    <div className="flex justify-around text-xs md:text-sm text-[#8D7575] font-medium mx-4 py-4">
                      <span className="cursor-pointer underline">Series</span>
                      <span className="cursor-pointer underline">Schedule</span>
                      <span className="cursor-pointer underline">Commentary</span>
                      <span className="cursor-pointer underline">Table</span>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>

        {/* Load More Button */}
        <div className="mt-5 px-7 md:px-2 w-full cursor-pointer">
          <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
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

export default LiveHighlightSection;
