import React from "react";
import DocumentaryBanner from "./DocumentaryBanner";
import PopularCategory from "./PopularCategory";
import ClassicDocumentaries from "./ClassicDocumentaries";
import ContinueWatching from "./ContinueWatching";
import TrendingDocumentaries from "./TrendingDocumentaries";
import EditorsPick from "./EditorsPick";

const Documentaries = () => {
  return (
    <>
      <DocumentaryBanner />
      <PopularCategory />
      <TrendingDocumentaries />
      <EditorsPick />
      <ClassicDocumentaries />
      <ContinueWatching />
    </>
  );
};

export default Documentaries;
