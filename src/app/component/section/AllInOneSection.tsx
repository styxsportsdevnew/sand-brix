'use client';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import bgImage from "../../assets/banner/Group 2416.png";
import image1 from "../../assets/banner/20x10_collage-new.jpg";
import image2 from "../../assets/banner/20x10_collage-scaled.jpg";

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-30px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden md:block">
      <ChevronLeft size={40} />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-30px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden md:block">
      <ChevronRight size={40} />
    </button>
  );
};

const AllInOneSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const bannerContent = [
    {
      image: image1,
      heading: <>All-in-One OTT Magic Only in Sri Lanka</>,
      description: (
        <>
          All your favorite shows, movies, and live events—streamed anytime, anywhere.
          <br />
          Experience world-class entertainment tailored for{" "}
          <span className="text-white">Sri Lanka.</span>
        </>
      ),
    },
    {
      image: image2,
      heading: <>Ultimate Streaming World Now in Sri Lanka</>,
      description: (
        <>
          Explore global blockbusters, local hits, and exclusive content.
          <br />
          Your entertainment journey starts <span className="text-white">here</span>.
        </>
      ),
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="pt-4">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`mt-4 h-2 w-2 rounded-full ${
          currentSlide === i ? "bg-red-500 w-4" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <section className="relative w-full bg-black py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-100">
        <Image src={bgImage} alt="Background" fill className="object-cover" quality={100} />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center select-none">
        <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
          {bannerContent[currentSlide].heading}
        </h2>

        <p className="mb-8 max-w-3xl text-md text-[#9F9F9F] md:text-lg">
          {bannerContent[currentSlide].description}
        </p>

        <button className="mb-12 rounded-md shadow-xl bg-red-600 cursor-pointer px-8 md:px-10 py-2 md:py-3 text-md font-semibold text-white transition-all hover:bg-red-700">
          Watch Now
        </button>

        {/* Slider */}
        <div className="w-full max-w-7xl mb-2 md:mb-6">
          <Slider {...sliderSettings}>
            {bannerContent.map((item, index) => (
              <div key={index} className="px-2">
                <div className="rounded-md">
                  <Image
                    src={item.image}
                    alt={`Content ${index + 1}`}
                    width={800}
                    height={450}
                    // className="h-auto w-full object-cover"
                    className="h-[270px] sm:h-[400px] w-full object-cover border-2 border-white rounded-md cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AllInOneSection;
