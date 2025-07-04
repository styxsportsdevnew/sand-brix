"use client";

import React from "react";
import BannerSlider from "./slider/BannerSlider";
import LiveHighlightSection from "./section/LiveHighlightSection";
import ViewAllSection from "./section/ViewAllSection";
import VideoPlaySection from "./section/VideoPlaySection";
import PopularLiveStreamingSection from "./section/PopularLiveStreamingSection";
import RecentlyViewedSection from "./section/RecentlyViewedSection";
import CarouselSlider from "./slider/CarouselSlider";

// News Images
import newsImage1 from "../assets/images/news-01.png";
import newsImage2 from "../assets/images/new-02.png";
import newsImage3 from "../assets/images/news-01.png";
import newsImage4 from "../assets/images/new-02.png";
import newsImage5 from "../assets/images/news-01.png";

// Trending Images
import trendingImage1 from "../assets/images/add-01.png";
import trendingImage2 from "../assets/images/add-02.png";
import trendingImage3 from "../assets/images/add-01.png";
import trendingImage4 from "../assets/images/add-02.png";
import trendingImage5 from "../assets/images/add-01.png";

const newsImages = [newsImage1, newsImage2, newsImage3, newsImage4, newsImage5];
const trendingImages = [
  trendingImage1,
  trendingImage2,
  trendingImage3,
  trendingImage4,
  trendingImage5,
];

const Home = () => {
  return (
    <>
      <div className="bg-[#180000]">
        <BannerSlider />
        <LiveHighlightSection />
        {/* News Section */}
        <CarouselSlider
          images={newsImages}
          altTextPrefix="News Image"
          showLoadMore={true}
          title="News & Politics"
          listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />
        {/* Trending Section */}
        <CarouselSlider
          images={trendingImages}
          altTextPrefix="Trending Image"
          showLoadMore={true}
          title="Trending Tv Shows"
          listItems={[
            { label: "Today", active: true },
            { label: "This Week" },
            { label: "This Month" },
            { label: "Last Month" },
          ]}
        />
        <ViewAllSection />
        <VideoPlaySection />
        <PopularLiveStreamingSection />
        <RecentlyViewedSection />
      </div>
    </>
  );
};

export default Home;
