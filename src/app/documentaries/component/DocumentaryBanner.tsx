import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../assets/documentariesImages/portrait-terrifing-clown.png";
// import image1 from "../../assets/documentariesImages/portrait-terrifing-clown@2x.png";

//slider images
import preview1 from "../../assets/documentariesImages/previewSlider/portrait-terrifing-clown-small.png";
// import preview2 from "../../assets/documentariesImages/previewSlider/portrait-terrifing-clown-small@2x.png";
import preview2 from "../../assets/documentariesImages/previewSlider/agent_tamil_12march_landscape_Thumb.png";
import preview3 from "../../assets/documentariesImages/previewSlider/Cobra_set13_landscape_thumb_MultiLang_29sep.png";
import preview4 from "../../assets/documentariesImages/previewSlider/agent_tamil_12march_landscape_Thumb.png";

const DocumentaryBanner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = [
    { id: 1, src: preview1, alt: "Preview 1" },
    { id: 2, src: preview2, alt: "Preview 2" },
    { id: 3, src: preview3, alt: "Preview 3" },
    { id: 4, src: preview4, alt: "Preview 4" },
  ];

  return (
    <div className="relative h-full w-full overflow-hidden select-none">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image
          src={image1}
          alt="image"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row justify-center items-center p-8 md:p-12 lg:p-16 text-white">
        {/* Text Content */}
        {/* <div className="w-full md:w-2/3 lg:w-1/3 space-y-6 mt-20"> */}
        <div className="w-full md:w-2/3 lg:w-1/4 space-y-6 mt-10 md:mt-20">
          <div className="space-y-2">
            <h2 className="text-lg md:text-2xl font-semibold text-[#FFBB00]">Newly Added</h2>
            <h3 className="text-lg md:text-2xl font-semibold text-white pb-2">
              2025 · 2h 56m · 5 Languages
            </h3>

            <p className="text-sm md:text-lg">
              Excepteur sint occaecat cupidata non provident dolor sit amet, consectetur adipiscing
              elit. Excepteur sint occaecat cupidata non provident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="py-1 bg-transparent text-sm md:text-lg md:text-xl font-semibold">
                Horror &nbsp;
                <span className="text-[#9F9F9F]">|</span>
              </span>
              <span className="py-1 bg-transparent text-sm md:text-lg md:text-xl font-semibold">
                Reality &nbsp;
                <span className="text-[#9F9F9F]">|</span>
              </span>
              <span className="py-1 bg-transparent text-sm md:text-lg md:text-xl font-semibold">
                Light Hearted
              </span>
            </div>

            <button className="flex items-center cursor-pointer space-x-2 bg-red-600 hover:bg-red-700 px-4 md:px-14 py-2 rounded-md transition-colors mt-4 w-fit">
              <span className="font-medium text-sm md:text-lg">Watch Now</span>
              <span className="text-lg">►</span>
            </button>
          </div>
          {/* <div className="absolute bottom-0 left-0 w-full h-full bg-black md:opacity-30 opacity-20"></div> */}
          {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-black md:from-black/30 from-black/20 to-transparent"></div> */}
        </div>

        {/* Right Slider */}
        {/* <div className="flex flex-col items-center lg:items-end space-y-2 lg:w-1/3 mt-8 lg:mt-120"> */}
        <div className="flex flex-col items-center lg:items-end space-y-2 lg:w-1/2 mt-8 lg:mt-180">
          <div className="flex space-x-4">
            {sliderImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative w-18 h-10 md:w-20 md:h-20 lg:w-20 lg:h-10 cursor-pointer transition-all duration-300 rounded-sm ${
                  activeSlide === index ? "ring-2 ring-gray-500" : "opacity-70"
                }`}
                onClick={() => setActiveSlide(index)}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 lg:h-16 z-20 bg-gradient-to-b from-transparent to-[#180000] dark:to-[#180000]"></div>

      {/* Divider */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800"></div> */}
    </div>
  );
};

export default DocumentaryBanner;
