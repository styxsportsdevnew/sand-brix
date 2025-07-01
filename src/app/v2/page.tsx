"use client";
import React from "react";
import LiveHighlightSection from "../component/section/LiveHighlightSection";
import NewsSection from "../component/section/NewsSection";
import TrendingSection from "../component/section/TrendingSection";
import ViewAllSection from "../component/section/ViewAllSection";
import VideoPlaySection from "../component/section/VideoPlaySection";
import PopularLiveStreamingSection from "../component/section/PopularLiveStreamingSection";
import RecentlyViewedSection from "../component/section/RecentlyViewedSection";
import AllInOneSection from "../component/section/AllInOneSection";

const page = () => {
  return (
    <>
      <AllInOneSection />
      <LiveHighlightSection />
      <NewsSection />
      <TrendingSection />
      <ViewAllSection />
      <VideoPlaySection />
      <PopularLiveStreamingSection />
      <RecentlyViewedSection />
    </>
  );
};

export default page;
