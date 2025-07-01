"use client";

import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import bgImage from "../../assets/documentariesImages/editorsPick/documentarybg.jpg";
import image1 from "../../assets/documentariesImages/editorsPick/01.jpg";
import image2 from "../../assets/documentariesImages/editorsPick/02.jpg";
import image3 from "../../assets/documentariesImages/editorsPick/03.jpg";
import image4 from "../../assets/documentariesImages/editorsPick/04.jpg";
import image5 from "../../assets/documentariesImages/editorsPick/01.jpg";

const editorsPickImage = [image1, image2, image3, image4, image5];

// Custom arrow components
interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
    aria-label="Previous slide">
    <ChevronLeft size={40} />
  </button>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
    aria-label="Next slide">
    <ChevronRight size={40} />
  </button>
);

const EditorsPick = () => {
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
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const heading = [
    "Taj - Reign of Revenge",
    "United Kacche",
    "Sengalam",
    "Shabash Feluda",
    "Taj - Reign of Revenge",
  ];

  return (
    <div className="relative w-full">
      <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
        <Image src={bgImage} alt="Editor's Pick" fill className="object-cover z-0" />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20 select-none flex flex-col items-center justify-center px-10 z-10 text-white">
          <div className="text-center">
            <h2 className="text-lg md:text-4xl font-bold uppercase">Editor&apos;s Pick</h2>
            <p className="mx-auto mt-2 max-w-md text-sm md:text-base">
              Excepteur sint occaecat cupidatat non provident dolor sit amet, consectetur adipiscing
              elit.
            </p>
            <button className="text-white cursor-pointer bg-red-600 hover:bg-red-700 px-8 py-2 mt-2 md:mt-8 rounded-sm transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent py-2 px-4 -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto custom-container container px-4">
          <Slider {...settings}>
            {editorsPickImage.map((image, index) => (
              <div key={index} className="px-2">
                <div className="bg-transparent rounded shadow overflow-hidden flex flex-col h-full">
                  <div className="relative aspect-video w-full h-[534px]">
                    <Image
                      src={image}
                      alt={`Editors Pick ${index + 1}`}
                      fill
                      className="object-cover cursor-pointer"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 text-white text-center cursor-pointer text-sm md:text-lg">
                      {heading[index].length > 20
                        ? `${heading[index].slice(0, 17)}...`
                        : heading[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
