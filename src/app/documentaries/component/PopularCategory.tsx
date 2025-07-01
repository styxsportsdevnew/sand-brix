"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../../component/SectionHeading";
import Image from "next/image";

import image1 from "../../assets/documentariesImages/popularCategory/history.png";
import image2 from "../../assets/documentariesImages/popularCategory/nature.png";
import image3 from "../../assets/documentariesImages/popularCategory/lucian-walk-musical-fiesta-et000.png";
import image4 from "../../assets/documentariesImages/popularCategory/scientist-lab-coat-carefully-observing-specimens-through-microscope-welllit-laborator.png";
import image5 from "../../assets/documentariesImages/popularCategory/prathiba2024.png";

const popularCategoryImages = [image1, image2, image3, image4, image5];

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

// Custom arrow components positioned outside the slider
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

const PopularCategory = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand" as LazyLoadTypes,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
    ],
  };

  const heading = ["History", "Nature", "Biography", "Science", "Culture"];

  return (
    <>
      <section className="bg-[#180000] shadow-sm w-full">
        <div className="container custom-container mx-auto px-4 py-4 sm:px-4 lg:px-8 sm:py-6 lg:py-8">
          <SectionHeading className="md:ml-2" title="Popular Category" />

          {/* Slider */}
          <div className="px-6 md:px-0 py-2 relative">
            <div className="relative">
              <Slider {...settings}>
                {popularCategoryImages.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="rounded-md overflow-hidden cursor-pointer border-2 border-[#282828] hover:border-white transition-all duration-300">
                      <Image
                        src={image.src}
                        alt={`Popular Category ${index + 1}`}
                        className="object-cover"
                        loading="lazy"
                        width={500}
                        height={300}
                      />
                    </div>
                    <h2 className="text-white text-center mt-4 cursor-pointer text-sm md:text-lg">
                      {heading[index].length > 20
                        ? `${heading[index].slice(0, 17)}...`
                        : heading[index]}
                    </h2>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCategory;
