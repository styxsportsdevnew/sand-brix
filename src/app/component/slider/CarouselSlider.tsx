"use client";

import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import SectionHeading from "../SectionHeading";

// Arrow Button Component
interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronLeft size={40} />
  </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all">
    <ChevronRight size={40} />
  </button>
);

// Props for the slider
interface CarouselSliderProps {
  images: StaticImageData[];
  altTextPrefix?: string;
  showLoadMore?: boolean;
  title?: string;
  listItems?: { label: string; active?: boolean }[];
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  images,
  altTextPrefix = "Slide",
  showLoadMore = false,
  title = "",
  listItems = [],
}) => {
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
      { breakpoint: 1024, settings: { slidesToShow: 4, autoplay: true } },
      { breakpoint: 768, settings: { slidesToShow: 3, autoplay: true } },
      { breakpoint: 640, settings: { slidesToShow: 2, autoplay: true } },
      { breakpoint: 480, settings: { slidesToShow: 2, autoplay: true } },
    ],
  };

  return (
    <section className="bg-black shadow-sm w-full">
      <div className="container custom-container mx-auto px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-14">
        {title && <SectionHeading className="md:ml-2" title={title} listItems={listItems} />}

        <div className="px-6 md:px-0 py-2 relative">
          <div className="relative">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="px-2">
                  <div className="rounded-md overflow-hidden cursor-pointer border-2 border-[#282828] hover:border-white transition-all duration-300">
                    <Image
                      src={image.src}
                      alt={`${altTextPrefix} ${index + 1}`}
                      className="object-cover"
                      loading="lazy"
                      width={500}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {showLoadMore && (
          <div className="mt-1 px-8 md:px-2 w-full cursor-pointer">
            <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
              <span className="inline-block relative text-[#9F9F9F]">
                Load More +
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarouselSlider;
