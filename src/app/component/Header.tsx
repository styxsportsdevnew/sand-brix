"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Search, Globe, Bell, User, ChevronDown, SquareCheck, X } from "lucide-react";
import { TbCricket } from "react-icons/tb";
import logo from "../assets/logo/logo.png";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

interface Image {
  image: StaticImageData;
  alt: string;
}

const Header = () => {
  const image: Image[] = [{ image: logo, alt: "logo-image" }];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const mobileMenuButton = document.querySelector(".mobile-menu-button");

      if (mobileMenuButton && mobileMenuButton.contains(target)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdownOpen(false);
      }

      if (languageRef.current && !languageRef.current.contains(target)) {
        setLanguageOpen(false);
      }

      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-[#400303] text-white text-sm px-4 py-2 overflow-hidden">
        {/* Marquee from medium screens */}
        <div
          className="flex md:flex lg:hidden whitespace-nowrap flex space-x-2 animate-marquee justify-center items-center"
          style={{
            animation: "marquee 10s linear infinite",
          }}>
          <div className="flex items-center space-x-2">
            <SquareCheck className="w-4 h-4 mt-0.5 mr-1 mb-1" />
            <span>Accurate Predictions.</span>
          </div>
          <div className="flex items-center space-x-2">
            <TbCricket className="w-4 h-4 lg:mx-1 mt-0.5 mr-1 mb-1" />
            <span>Fast Live Scores. Free Streaming. Zero Lag.</span>
          </div>
          <div className="flex items-center">
            <span>Only On SandBrix!</span>
            <Link href="/details" className="underline ml-1 mt-1 sm:mt-0 mb-1 sm:mb-0">
              View Details
            </Link>
          </div>
        </div>

        {/* Static */}
        <div className="hidden lg:flex justify-center items-center space-x-2">
          <div className="flex items-center space-x-2">
            <SquareCheck className="w-4 h-4 mt-0.5 mr-1 mb-1" />
            <span>Accurate Predictions.</span>
          </div>
          <div className="flex items-center space-x-2">
            <TbCricket className="w-4 h-4 lg:mx-1 mt-0.5 mr-1 mb-1" />
            <span>Fast Live Scores. Free Streaming. Zero Lag.</span>
          </div>
          <div className="flex items-center">
            <span>Only On SandBrix!</span>
            <Link href="/details" className="underline ml-1 mt-1 sm:mt-0 font-semibold">
              View Details
            </Link>
          </div>
        </div>
      </div>

      <header className="bg-[#180000] shadow-sm w-full pt-2 sticky top-0 z-50">
        <div className="custom-container mx-auto px-2 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <div className="lg:hidden mr-4 show-mobile">
                <button
                  className="mobile-menu-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}>
                  <svg
                    className="w-7 h-7 text-white cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Logo */}
              <div className="w-auto lg:h-[38px] mb-1">
                <Link href="/">
                  <Image
                    src={image[0].image.src}
                    width={100}
                    height={100}
                    alt="SandBrix Logo"
                    className="h-full w-auto object-contain cursor-pointer"
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="hidden lg:flex lg:space-x-8 md:space-x-6 lg:ml-10 md:ml-8 relative items-end mt-2 hide-desktop">
                {[
                  { href: "/", label: "Home" },
                  { href: "/shows", label: "Shows" },
                  { href: "/documentaries", label: "Documentaries" },
                  { href: "/news", label: "News & Politics" },
                  { href: "/sports", label: "Sports" },
                ].map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <div key={item.href} className="relative pb-1">
                      <Link
                        href={item.href}
                        className={`text-base ${
                          isActive ? "text-white font-semibold" : "text-[#9F9F9F]"
                        } hover:text-gray-200 transition`}>
                        {item.label}
                      </Link>
                      {isActive && (
                        <div className="absolute left-0 right-0 h-[2px] bg-red-600 bottom-[-22px]"></div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center space-x-2 md:space-x-6">
              {/* Search */}
              {/* <div className="hidden lg:block relative w-[200px] xl:w-[300px] h-[40px]"> */}
              <div className="hidden md:block relative w-[150px] sm:w-[100px] md:w-[200px] lg:w-[250px] xl:w-[300px] lg:h-[40px] md:h-[34px]">
                <input
                  type="text"
                  placeholder="Search for Title"
                  className="w-full h-full bg-transparent border border-[#9F9F9F] rounded-full pl-4 pr-10 text-white placeholder:text-[#9F9F9F] text-sm focus:outline-none"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              {/* Small Screen Search */}
              <div className="relative cursor-pointer mr-4 block md:hidden">
                <Search
                  className="text-white h-[21px] w-[21px] stroke-2"
                  onClick={() => setSearchOpen(!searchOpen)}
                />
              </div>
              {searchOpen && (
                <div
                  ref={searchRef}
                  className="absolute top-[68px] left-0 w-full bg-[#180000] z-10 block md:hidden"
                  style={{ padding: "0 16px" }}>
                  <div className="relative w-full lg:w-[300px] mx-auto h-[40px] md:h-[34px] mb-4">
                    <input
                      type="text"
                      placeholder="Search for Title"
                      className="w-full h-full bg-transparent border border-[#9F9F9F] rounded-full pl-4 pr-10 text-white placeholder:text-[#9F9F9F] text-sm focus:outline-none"
                    />
                    <X
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                      onClick={() => setSearchOpen(false)}
                    />
                  </div>
                </div>
              )}

              {/* Language Dropdown */}
              <div className="flex items-center relative" ref={languageRef}>
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => setLanguageOpen(!languageOpen)}>
                  <Globe className="text-white h-[20px] md:h-[18px] w-[20px] md:w-[18px]" />
                  <span className="text-white text-[14px] hidden md:inline">English</span>
                  <ChevronDown className="text-white h-4 w-4" />
                </div>

                {languageOpen && (
                  <div className="absolute right-0 border border-gray-500 top-10 w-36 bg-[#180000] rounded-md shadow-lg z-50">
                    <button className="block w-full rounded-t-md text-left px-4 py-2 text-sm text-white hover:bg-[#400303] cursor-pointer">
                      සිංහල
                    </button>
                    <button className="block rounded-md w-full text-left px-4 py-2 text-sm text-white hover:bg-[#400303] cursor-pointer">
                      English
                    </button>
                  </div>
                )}
              </div>
              {/* Notification Icon */}
              <div className="relative cursor-pointer mr-4">
                <Bell className="text-white h-[20px] w-[20px] stroke-[2px]" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </div>
              {/* User Icon with Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <div
                  className="flex items-center cursor-pointer space-x-1"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <div className="w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center">
                    <User className="text-gray-600 h-5 w-5" />
                  </div>
                  <ChevronDown className="text-white h-4 w-4" />
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 border border-gray-500 mt-2 w-44 bg-[#180000] rounded-md shadow-lg z-50">
                    <Link
                      href="/profile"
                      className="block rounded-t-md px-4 py-2  text-white text-sm text-gray-700 hover:bg-[#400303]">
                      My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2  text-white text-sm text-gray-700 hover:bg-[#400303]">
                      Settings
                    </Link>
                    <button
                      className="w-full rounded-md text-left text-white cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-[#400303]"
                      onClick={() => {
                        alert("Logged out!");
                      }}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div className="relative" ref={mobileMenuRef}>
          <hr className="text-[#404040] mt-2" />
          {mobileMenuOpen && (
            <div
              className={`lg:hidden absolute top-full left-0 w-full bg-[#180000] p-4 z-40 show-mobile ${
                mobileMenuOpen ? "mobile-menu-open" : "hidden"
              }`}>
              <nav className="flex flex-col space-y-4 ml-1 md:ml-3">
                <div className="flex justify-between items-center">
                  <Link
                    href="/"
                    className={`text-sm ${
                      pathname === "/"
                        ? "text-red-500 hover:text-red-600"
                        : "text-[#9F9F9F] hover:text-gray-300"
                    } `}
                    onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </Link>
                  <X
                    className="w-5 h-5 stroke-3 text-white cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileMenuOpen(false);
                    }}
                  />
                </div>
                {[
                  { href: "/shows", label: "Shows" },
                  { href: "/documentaries", label: "Documentaries" },
                  { href: "/news", label: "News & Politics" },
                  { href: "/sports", label: "Sports" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`w-fit text-sm ${
                      pathname === item.href
                        ? "text-red-500 hover:text-red-600"
                        : "text-[#9F9F9F] hover:text-gray-300"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        // header nav items
        @media (max-width: 1370px) {
          .show-mobile {
            display: block !important;
          }
          .hide-desktop {
            display: none !important;
          }
        }
        @media (min-width: 1371px) {
          .show-mobile {
            display: none !important;
          }
          .hide-desktop {
            display: flex !important;
          }
        }
        // mobile list
        @keyframes slideDownFade {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-menu-open {
          animation: slideDownFade 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
