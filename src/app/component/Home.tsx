"use client";

import React from "react";
import Banner from "./Banner";
import LiveHighlightSection from "./section/LiveHighlightSection";
import NewsSection from "./section/NewsSection";
import TrendingSection from "./section/TrendingSection";
import ViewAllSection from "./section/ViewAllSection";
import VideoPlaySection from "./section/VideoPlaySection";
import PopularLiveStreamingSection from "./section/PopularLiveStreamingSection";
import RecentlyViewedSection from "./section/RecentlyViewedSection";

const Home = () => {
  return (
    <>
      <div className="bg-[#180000]">
        <Banner />
        <LiveHighlightSection />
        <NewsSection />
        <TrendingSection />
        <ViewAllSection />
        <VideoPlaySection />
        <PopularLiveStreamingSection />
        <RecentlyViewedSection />
      </div>
    </>
  );
};

export default Home;
