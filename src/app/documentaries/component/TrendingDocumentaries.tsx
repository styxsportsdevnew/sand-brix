"use client";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../../component/SectionHeading";
import Image from "next/image";

// import image1 from "../../assets/documentariesImages/trendingDocumentaries/ozark-season-1.jpg";
import image2 from "../../assets/documentariesImages/trendingDocumentaries/blackMirror.jpg";
import image3 from "../../assets/documentariesImages/trendingDocumentaries/cabeza.jpg";
import image4 from "../../assets/documentariesImages/trendingDocumentaries/thegreathack.jpg";
import image5 from "../../assets/documentariesImages/trendingDocumentaries/blackMirror.jpg";
import image6 from "../../assets/documentariesImages/trendingDocumentaries/thegreathack.jpg";

const TrendingDocumentariesImages = [image2, image3, image4, image5, image6];

interface ArrowProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick?: () => void;
}

// Custom arrow components positioned outside the slider
const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
      <ChevronLeft size={40} />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-[-32px] top-1/2 z-10 -translate-y-1/2 transform bg-transparent cursor-pointer bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all hidden">
      <ChevronRight size={40} />
    </button>
  );
};

const TrendingDocumentaries = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 4,
          // autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          // autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          // autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          // autoplay: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-[#180000] shadow-sm w-full">
        <div className="container custom-container mx-auto px-4 py-4 sm:px-4 lg:px-8 sm:py-6 lg:py-8 mb-6">
          <SectionHeading
            className="ml-2"
            title="Trending Documentaries"
            listItems={[
              { label: "Today", active: true },
              { label: "This Week" },
              { label: "This Month" },
              { label: "Last Month" },
            ]}
          />

          {/* Slider */}
          <div className="px-6 md:px-0 py-2 relative">
            <div className="relative">
              <Slider {...settings}>
                {TrendingDocumentariesImages.map((image, index) => (
                  <div key={index} className="px-2">
                    <div className="rounded-md overflow-hidden cursor-pointer border-2 border-[#282828] hover:border-white transition-all duration-300">
                      <Image
                        src={image.src}
                        alt={`Trending Documentaries ${index + 1}`}
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

          {/* Load More Button */}
          <div className="mt-1 px-8 md:px-2 w-full cursor-pointer">
            <button className="w-full text-center text-white text-sm font-semibold py-2 group bg-[#282828] rounded-sm cursor-pointer">
              <span className="inline-block relative text-[#9F9F9F]">
                Load More +
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9F9F9F] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingDocumentaries;
