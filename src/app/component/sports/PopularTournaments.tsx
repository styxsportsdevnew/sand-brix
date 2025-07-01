"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import Image from "next/image";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";
import SectionHeading from "../SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";


import img1 from "@/app/assets/sports/01.jpg"
import img2 from "@/app/assets/sports/02.jpg"
import img3 from "@/app/assets/sports/03.jpg"
import img4 from "@/app/assets/sports/04.jpg"
import img5 from "@/app/assets/sports/05.jpg"
import img6 from "@/app/assets/sports/06.jpg"

const imgSlides =   [img1, img2, img3, img4, img5, img6];

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

const PopularTournaments: React.FC = () => {

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  lazyLoad: "ondemand" as LazyLoadTypes,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
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
        centerMode: true, // ✅ Centers the slide
        centerPadding: "0px", // ✅ No weird padding
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
          title="Popular Tournaments"
          listItems={[
   
          ]}
        />



        {/* Slider */}
       <div className="mt-5 px-4 sm:px-6 md:px-1 [&_.slick-slide>div]:flex [&_.slick-slide>div]:justify-center">
<Slider {...settings}>

  {imgSlides.map((img, index) => (
 <div key={index} className="px-2 flex justify-center">
  <div
    className="relative w-full max-w-[276px] h-[157px] border border-gray-400 rounded-md shadow-md overflow-hidden"
    style={{ boxShadow: '0px 0px 6px #00000029' }}
  >
    <Image
      src={img}
      alt={`Tournament ${index + 1}`}
      fill
      className="object-cover"
      placeholder="blur"
      priority
    />
  </div>
</div>

  ))}


</Slider>

        </div>

      </div>
    </div>
  );
};

export default PopularTournaments;
