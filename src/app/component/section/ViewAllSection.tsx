"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/backgroundImage/new-bg-with-logo.png";

import image1 from "../../assets/images/add-04.png";
import image2 from "../../assets/images/add-05.png";
import image3 from "../../assets/images/add-04.png";
import image4 from "../../assets/images/add-05.png";
import Image from "next/image";

const contentItems = [
  { image: image1, title: "Jana Handa - Episode 01" },
  { image: image2, title: "Jana Handa - Episode 02" },
  { image: image3, title: "Jana Handa - Episode 03" },
  { image: image4, title: "Jana Handa - Episode 04" },
];

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-[-30px] cursor-pointer top-1/4 md:top-1/2 z-10 -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-[-30px] cursor-pointer top-1/4 md:top-1/2 z-10 -translate-y-1/2 bg-transparent bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronRight size={24} />
  </button>
);

const ViewAllSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative w-full overflow-hidden mb-0 md:mb-8 mt-12 md:mt-0">
      {/* Background Image */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={backgroundImage.src}
          alt="Background"
          width={1800}
          height={1800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="-mt-[40%] md:-mt-[20%] lg:-mt-[13.5%] xl:-mt-[8%] absolute z-10 relative container custom-container mx-auto px-4">
        <div className="bg-opacity-80 p-6 rounded-md"> 
          <div className="flex justify-center items-center mb-6">
            <button className="text-white bg-red-600 cursor-pointer hover:bg-red-700 px-8 py-2 rounded-sm transition-colors">
              View All
            </button>
          </div>

          <div className="relative mt-6">
            <Slider {...settings}>
              {contentItems.map((item, index) => (
                <div key={index} className="px-2">
                  <div className="group cursor-pointer">
                    <div className="rounded-sm overflow-hidden border border-gray-600 group-hover:border-white transition-all duration-300 mb-2">
                      <Image
                        src={item.image.src}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                    </div>
                    <h3 className="text-white text-center text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllSection;
