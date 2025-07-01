"use client";
import React from "react";
import { Play } from "lucide-react";
import Image from "next/image";

// Import your images
import backgroundImage from "../../assets/backgroundImage/video-bg.png";
import playIconImage from "../../assets/images/play-icon.png";

const VideoPlaySection = () => {
  return (
    <section className="relative w-full xxl:h-[737px] lg:h-[650px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-100"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-[1100px] w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              {/* Heading */}
              {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-normal leading-[82px] text-white mb-6">
                SHOW
              </h2> */}
              <h3 className="text-xl md:text-3xl font-bold sm:text-4xl md:text-5xl font-sora leading-[60px] text-white mb-6">
                The Dark Towel
              </h3>

              {/* Description Text */}
              <p className="text-white text-sm md:text-lg mb-8 max-w-[498px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et magna aliqua. Excepteur sint occaecat.
              </p>

              {/* Watch Now Button */}
              <button className="flex items-center justify-center lg:justify-start gap-2 bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-md transition-colors cursor-pointer">
                <span>Watch Now</span>
                <Play className="h-4 w-4" />
              </button>
            </div>

            {/* Right Column - Play Icon Image */}
            <div className="hidden lg:flex md:w-1/14 justify-center md:justify-end">
              <div className="relative w-[300px] h-[300px] sm:w-[100px] sm:h-[100px]">
                <Image
                  src={playIconImage}
                  alt="Play Icon"
                  layout="fill"
                  objectFit="contain"
                  className="opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlaySection;
