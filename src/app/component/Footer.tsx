'use client'
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import logo from "../assets/logo/logo.png";
import facebookIcon from "../assets/footer/facebook_icon.png";
import instagramIcon from "../assets/footer/instagram_icon.png";
import youtubeIcon from "../assets/footer/media_social_video_youtube_icon.png";
import vimeoIcon from "../assets/footer/vimeo_vimeo logo_icon.png";
import footerBg from "../assets/footer/footer-bg.png";
import { Facebook, Plus, Minus } from "lucide-react";

interface ImageItem {
  image: StaticImageData;
  alt: string;
  link: string;
}

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    liveStreaming: false,
    ourSites: false,
    support: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const brandLogo: ImageItem = { image: logo, alt: "Brand Logo", link: "/" };

  const socialIcons: ImageItem[] = [
    { image: facebookIcon, alt: "facebook", link: "https://facebook.com" },
    { image: instagramIcon, alt: "instagram", link: "https://instagram.com" },
    { image: youtubeIcon, alt: "youtube", link: "https://youtube.com" },
    { image: vimeoIcon, alt: "vimeo", link: "https://vimeo.com" },
  ];

  return (
    <footer className="bg-black w-full mt-4 text-white">
      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Brand Logo */}
          <a href={brandLogo.link}>
            <Image
              src={brandLogo.image}
              alt={brandLogo.alt}
              width={140}
              height={140}
              className="h-7"
            />
          </a>

          {/* Right: Social Media Icons */}
          <div className="flex space-x-4 md:space-x-6">
            {socialIcons.map((icon, idx) => (
              <a
                key={idx}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm">
                {icon.alt === "facebook" ? (
                  <Facebook className="w-4 h-4 text-white fill-white" />
                ) : (
                  <Image src={icon.image} alt={icon.alt} className="h-4 w-4" />
                )}
                <span className="text-sm text-[#9F9F9F]">{icon.alt}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#7070705E]" />

      <div className="container custom-container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="container pb-0 lg:pb-8 sm:pb-0 pt-4 lg:pt-8 flex flex-col md:flex-row gap-8 lg:gap-12 text-sm text-neutral-300">
          {/* Live Streaming and Our Sites on left (80% width) */}
          <div className="w-full md:w-[80%] flex flex-col md:flex-row gap-4 lg:gap-8">
            {/* Live Streaming Section */}
            <div className="flex-1">
              <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection("liveStreaming")}>
                <h3 className="text-white font-bold text-lg mb-4">Live Streaming</h3>
                <div className="md:hidden">
                  {openSections.liveStreaming ? (
                    <Minus className="w-5 h-5 text-white mb-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-white mb-4" />
                  )}
                </div>
              </div>
              {/* Mobile: 2 columns layout when expanded */}
              <div className={`${openSections.liveStreaming ? "block" : "hidden"} md:hidden`}>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3 text-[#9F9F9F]">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Live TV
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Hot & News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Premium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Advertise
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-[#9F9F9F]">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Hot & News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Premium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Advertising
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Desktop: Single column layout */}
              <ul className="hidden md:block space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Live TV
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hot & News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>

            {/* Second Live Streaming Column (Hidden on mobile) */}
            <div className="flex-1 hidden md:block">
              <h3 className="text-white font-bold text-lg mb-4 invisible">Live Streaming</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hot & News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Premium
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertising
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Sites Section */}
            <div className="flex-1">
              <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection("ourSites")}>
                <h3 className="text-white font-bold text-lg md:mb-4">Our Sites</h3>
                <div className="md:hidden">
                  {openSections.ourSites ? (
                    <Minus className="w-5 h-5 text-white mb-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-white mb-4" />
                  )}
                </div>
              </div>
              {/* Mobile: 2 columns layout when expanded */}
              <div className={`${openSections.ourSites ? "block" : "hidden"} md:hidden`}>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <ul className="space-y-3 text-[#9F9F9F]">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Learn About Our Impact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Masthead
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Support Our Mission
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Press Room
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Advertise With Us
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-3 text-[#9F9F9F]">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Attend a Live Event
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Buy Maps
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Inspire Your Kids
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Shop Nat Geo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Watch TV
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Desktop: Single column layout */}
              <ul className="hidden md:block space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Learn About Our Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Masthead
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press Room
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Advertise With Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 hidden md:block">
              <h3 className="text-white font-bold text-lg mb-4 invisible">Our Sites</h3>
              <ul className="space-y-3 text-[#9F9F9F]">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Attend a Live Event
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Buy Maps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inspire Your Kids
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shop Nat Geo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Watch TV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block w-px bg-[#7070705E] mx-4"></div>

          {/* Support Section */}
          <div className="w-full md:w-[20%]">
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-default"
              onClick={() => toggleSection("support")}>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <div className="md:hidden">
                {openSections.support ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </div>
            </div>
            <ul
              className={`space-y-3 text-[#9F9F9F] ${
                openSections.support ? "block" : "hidden"
              } md:block`}>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ&apos;s
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="relative w-full h-52 bg-cover bg-center text-sm text-neutral-300"
        style={{ backgroundImage: `url(${footerBg.src})` }}>
        <div className="absolute w-full top-28 left-1/2 transform -translate-x-1/2 w-16 h-px bg-white opacity-20" />

        <div className="absolute bottom-4 left-0 right-0 px-4 container custom-container mx-auto flex flex-col md:flex-row gap-4 justify-between items-center py-3">
          <span className="text-xs">
            Copyright &copy; {new Date().getFullYear()} Sandbrix. All Rights Reserved.
          </span>
          <div className="flex space-x-2 text-xs">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy |
            </a>
            <a href="/terms-and-conditions" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
