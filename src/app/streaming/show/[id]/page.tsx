"use client";
import { useParams } from "next/navigation";
import React from "react";
import Streaming from "@/app/component/streaming/Streaming";
import ContinueWatching from "@/app/documentaries/component/ContinueWatching";
import RelatedVideo from "@/app/component/relatedVideo/RelatedVideo";

const Page = () => {
  const params = useParams();
  const id = params.id;

  return (
    <>
      {id === "7" && <Streaming />}
      <RelatedVideo headingTitle="Related Videos" />
      <ContinueWatching />
    </>
  );
};

export default Page;
