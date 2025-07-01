
"use client";

import React, { useState,useRef }  from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";




interface BannerSliderProps {
  slides: StaticImageData[];
}

const SportsBanner: React.FC<BannerSliderProps> = ({ slides }) => {

    const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    prevArrow: <ChevronLeft size={32} className="text-white z-10 cursor-pointer" />,
    nextArrow: <ChevronRight size={32} className="text-white z-10 cursor-pointer" />,
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <Slider {...settings}
        ref={(slider) => { sliderRef.current = slider; }}
      >
        {slides.map((img, index) => (
          <div key={index} className="w-full">
<div className="relative w-full h-[300px] md:h-[500px] bg-[#180000] overflow-hidden">
  {/* Image */}
  <Image
    src={img}
    alt={`Banner ${index + 1}`}
    fill
    className="object-cover w-full h-full "
    placeholder="blur"
  />

  {/* Left gradient */}
  <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-[#180000] to-transparent z-10" />

  {/* Right gradient */}
  <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-[#180000] to-transparent z-10" />

  {/* Bottom gradient — connects to next section */}
  <div className="absolute bottom-0 left-0 w-full h-20 z-20 
                  bg-gradient-to-b from-transparent to-[#180000] 
                  dark:to-[#0f0f0f]" />
</div>

            </div>
        ))}
      </Slider>

      {/* Next Thumbnail Preview */}
<div className="absolute bottom-4 right-4 flex gap-2 z-20">
  {slides.map((thumb, idx) => {
    if (idx === currentSlide) return null; 

    return (
      <div
        key={idx}
        className="w-16 h-10 border-1 border-white rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform"
         onClick={() => sliderRef.current?.slickGoTo(idx)} 
      >
        <Image
          src={thumb}
          alt={`Thumbnail ${idx + 1}`}
          width={80}
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
    );
  })}
</div>

    </div>
  );
};

export default SportsBanner;
