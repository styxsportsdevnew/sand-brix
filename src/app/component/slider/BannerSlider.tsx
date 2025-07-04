"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { StaticImageData } from "next/image";

import image1 from "../../assets/banner/banner-01.png";
import image2 from "../../assets/banner/banner-02.png";
import image3 from "../../assets/banner/banner-01.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Banner {
  id: number;
  image: StaticImageData;
  alt: string;
}

const banners: Banner[] = [
  { id: 1, image: image1, alt: "Banner 1" },
  { id: 2, image: image2, alt: "Banner 2" },
  { id: 3, image: image3, alt: "Banner 3" },
];

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 cursor-pointer hidden sm:block"
    aria-label="Next slide">
    <ChevronRight className="text-black" size={28} />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 cursor-pointer hidden sm:block"
    aria-label="Previous slide">
    <ChevronLeft className="text-black" size={28} />
  </button>
);

const BannerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const sliderRef = React.useRef<Slider>(null);

  const goToBanner = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    centerMode: true,
    centerPadding: "22%",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1994,
        settings: {
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 1800,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 1224,
        settings: {
          centerPadding: "8%",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "7%",
        },
      },
      {
        breakpoint: 800,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <div className="w-full mt-5">
      <Slider {...settings} ref={sliderRef}>
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="px-2"
            onClick={() => {
              if (index !== currentIndex) {
                goToBanner(index);
              }
            }}>
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[550px]">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className={`object-cover rounded shadow-lg cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? "border-2 border-white" : "opacity-50"
                } ${index !== currentIndex ? "hover:opacity-80" : ""}`}
                sizes="(max-width: 600px) 100vw, (max-width: 1224px) 90vw, 70vw"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentIndex ? "bg-red-500 w-4 scale-125" : "bg-gray-300"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .slick-prev,
        .slick-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.6);
          border: none;
          padding: 0.5rem;
          border-radius: 9999px;
          cursor: pointer;
        }
        .slick-prev {
          left: 1rem;
        }
        .slick-next {
          right: 1rem;
        }
        .slick-prev:hover,
        .slick-next:hover {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
};

export default BannerSlider;
