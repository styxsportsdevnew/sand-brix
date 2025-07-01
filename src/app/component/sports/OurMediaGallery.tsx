"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import backgroundImage from "../../assets/backgroundImage/overlay-big.png";

import image1 from "@/app/assets/sports/gallary-1.jpg";
import image2 from "@/app/assets/sports/gallary-2.jpg";
import image3 from "@/app/assets/sports/gallary-3.jpg";
import image4 from "@/app/assets/sports/gallary-4.jpg";
import image5 from "@/app/assets/sports/gallary-5.jpg";
import image6 from "@/app/assets/sports/gallary-6.jpg";
import image7 from "@/app/assets/sports/gallary-7.jpg";
import image8 from "@/app/assets/sports/gallary-8.jpg";
import image9 from "@/app/assets/sports/gallary-9.jpg";
import image10 from "@/app/assets/sports/gallary-1.jpg";
import image11 from "@/app/assets/sports/gallary-1.jpg";
import image12 from  "@/app/assets/sports/gallary-2.jpg";


const imageSlides = [
  { src: image1, caption: "" },
  { src: image2, caption: "" },
  { src: image3, caption: "" },
  { src: image4, caption: "" },
{ src: image5, caption: "" },
  { src: image6, caption: "" },
  { src: image7, caption: "" },
  { src: image8, caption: "" },
  { src: image9, caption: "" },
  { src: image10, caption: "" },
  { src: image11, caption: "" },
  { src: image12, caption: "" },
]

export default function OurMediaGallery(){
  
  return (
     <div
      className="bg-[#180000] shadow-sm w-full mt-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url(${backgroundImage.src})`,
      }}>
      <div className=" custom-container mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">


        {/* Section Title */}
        <SectionHeading
          title="Our Media Gallery"
             listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />



        {/* Images*/}
   <div className="flex flex-wrap gap-x-2 gap-y-[4px]">
  {imageSlides.map((slide, index) => (
    <div
      key={index}
      className="w-[200px] h-[193px] overflow-hidden"
    >
      <Image
        src={slide.src}
        alt={`Gallery Image ${index + 1}`}
        width={200}
        height={193}
        className="w-full h-full object-cover block"
      />
    </div>
  ))}
</div>

<div className="mt-3">
  <button className="w-full text-white text-sm font-semibold py-2 bg-[#282828] rounded-sm">
    Load More +
  </button>
</div>

     
      </div>

      
    </div>
  )
}
