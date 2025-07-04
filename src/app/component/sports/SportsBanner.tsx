
"use client";

import React, { useState,useRef }  from "react";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


interface Slide {
  image: StaticImageData;
  title: string;
  description: string;
  logo?: StaticImageData;
}

interface BannerSliderProps {
  slides: Slide[];
}



const SportsBanner: React.FC<BannerSliderProps> = ({ slides }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),

  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider */}
      <Slider {...settings} ref={(slider) => { sliderRef.current = slider; }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full relative">
            <div className="relative w-full h-[300px] md:h-[500px] bg-[#180000] overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover w-full h-full"
                placeholder="blur"
              />

              {/* Gradients */}
              <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-[#180000] to-transparent z-10" />
              <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-[#180000] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-20 z-20 bg-gradient-to-b from-transparent to-[#180000]" />

              {/* Text Overlay */}
              <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 z-20 max-w-[90%] md:max-w-[40%] text-white space-y-4">
               {slide.logo && (
    <Image
      src={slide.logo}
      alt="Banner Logo"
      width={280}
      height={160}
      className="object-contain"
    />
  )}
                <h2 className="text-xs font-bold leading-tight">
                  {slide.title}
                </h2>
<p className="text-xs md:text-xs text-[0.875rem] md:text-[1rem] leading-[1.4] max-h-[4.2em] overflow-hidden">
  {slide.description}
</p>

                {
                  slide?.title && slide?.description && (
                    <Link href="/sports/watch">
                   
                          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors cursor-pointer" >
               
                  Watch Now <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                 </Link>
                   )
                }

          
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Thumbnail Previews */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {slides.map((slide, idx) => {
          if (idx === currentSlide) return null;

          return (
            <div
              key={idx}
              className="w-14 h-9 md:w-16 md:h-10 border border-white rounded overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              onClick={() => sliderRef.current?.slickGoTo(idx)}
            >
              <Image
                src={slide.image}
                alt={`Thumbnail ${idx + 1}`}
                width={80}
                height={48}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SportsBanner;



