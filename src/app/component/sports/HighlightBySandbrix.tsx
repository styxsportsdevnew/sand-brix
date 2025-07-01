"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";



import image1 from "@/app/assets/sports/asset-1.jpg"
import image2 from "@/app/assets/sports/asset-2.jpg"
import image3 from "@/app/assets/sports/asset-3.jpg"
import image4 from "@/app/assets/sports/asset-4.jpg"




const imageSlides = [
  { src: image1, caption: "1st Test: ENG vs IND, Full Match Highlights" },
  { src: image2, caption: "ENG vs IND: 1st Test - Day 5, Highlights" },
  { src: image3, caption: "ENG Beat IND Take 1-0 Lead" },
  { src: image4, caption: "Duckett's 62 & 149 vs IND in 1st Test" },
]

export default function HighlightsBySandbrix() {

    interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
      onClick?: () => void;
    }
     
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


     const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
      className="bg-[#180000] shadow-sm w-full mt-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">


        {/* Section Title */}
        <SectionHeading
          title="Highlights by Sandbrix"
             listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />



        {/* Slider */}
       <div className="mt-5 px-4 sm:px-6 md:px-1 [&_.slick-slide>div]:flex [&_.slick-slide>div]:justify-center">
<Slider {...settings}>

{imageSlides.map((slide, index) => (
  <div key={index} className="px-2">
    <div className="flex flex-col items-center w-full max-w-[416px] mx-auto">
      
      {/* Image wrapper */}
      <div
        className="relative w-full aspect-[416/237] border border-gray-400 rounded-md shadow-md overflow-hidden"
        style={{ boxShadow: '0px 0px 6px #00000029' }}
      >
        <Image
          src={slide.src}
          alt={slide.caption}
          fill
          className="object-cover"
          placeholder="blur"
          priority={index === 0}
        />
      </div>

      {/* Caption */}
      <p className="mt-2 text-sm text-white text-center w-full">
        {slide.caption}
      </p>
    </div>
  </div>
))}




</Slider>

        </div>

      </div>
    </div>
  )
}
