'use client';

import React from 'react';
import {
  ChevronLeft,
  CircleSmall,
  EllipsisVertical,
  Eye,
  Flag,
  Folder,
  Gift,
  Lightbulb,
  Maximize2,
  MessageCircle,
  Share2,
  Star,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';
import chatlogo from '@/app/assets/sports/gallary-3.jpg';
import BottomSection from './BottomSection';

export default function WatchNow() {
  const chats = React.useMemo(() =>
    Array.from({ length: 25 }).map((_, i) => ({
      id: i + 1,
      avatar: chatlogo,
      username: ['John Doe', 'Jane Smith', 'Mike Johnson'][i % 3],
      message: `Test message ${i + 1} 🎯`,
      time: `9:${40 + (i % 20)}`,
      fill: i % 2 === 0,
    })),
    []
  );

  function getInitials(name: string) {
    const names = name.trim().split(' ');
    return names.map((n) => n[0]?.toUpperCase() || '').join('');
  }

  return (
    <div
      className="bg-[#180000] w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `linear-gradient(rgba(23, 0, 0, 0.5), rgba(23, 0, 0, 0.5)), url('img/402633.png')`,
      }}
    >
      <div className="w-full py-2">
        {/* Parent flex container stacks on small, row on large, but min height on all */}
        <div className="flex flex-col lg:flex-row items-start border-b border-[#7070705E] overflow-hidden min-h-[calc(120vh-130px)]">

          {/* Left: Video and Info */}
          <div className="w-full lg:w-[70%] flex flex-col border-b lg:border-b-0 lg:border-r border-[#7070705E]">

            {/* Video */}
            <div className="aspect-video bg-cover bg-center relative border border-[#7070705E]">
              <video
                className="w-full h-full object-cover"
                controls
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Match Info Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 mt-2 px-4 text-white">
              <p className="text-xs sm:text-sm md:text-md">
                England vs India, 1st Test at Leeds, ENG vs IND, Jun 20 2025 - Full Scorecard
              </p>
              <div className="flex gap-2">
                {[Lightbulb, ChevronLeft].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-[#250F0F] flex items-center justify-center rounded cursor-pointer hover:scale-105 transition"
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-[10px] text-gray-400 mt-1 ml-4">
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span>2 Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <Folder className="w-3 h-3" />
                <span>Gaming</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>1.3k Views</span>
              </div>
            </div>

            {/* Action Icons */}
            <div className="flex justify-center gap-3 mt-3 pb-4">
              {[Gift, ThumbsUp, ThumbsDown, Share2, Flag].map((Icon, index) => {
                const isThumb = Icon === ThumbsUp || Icon === ThumbsDown;
                const count = Icon === ThumbsUp ? 123 : Icon === ThumbsDown ? 12 : null;

                return (
                  <div
                    key={index}
                    className="relative w-9 h-9 bg-[#250F0F] flex items-center justify-center rounded cursor-pointer hover:scale-105 transition"
                  >
                    <Icon className="w-4 h-4 text-white" />
                    {isThumb && (
                      <div className="absolute -top-1 -right-1 bg-[#2B2B2B] text-[8px] text-white w-4 h-4 flex items-center justify-center rounded">
                        {count}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Chat */}
<div
  className="w-full lg:w-[30%] flex flex-col bg-[#170000] min-h-0"
  style={{ height: 'calc(120vh - 130px)' }}
>
  {/* Chat Header */}
  <div className="h-[55px] border-b border-[#7070705E] flex justify-center items-center text-white bg-[#250F0F] flex-shrink-0">
    <div className="w-full h-full grid grid-cols-2 text-sm">
      <div className="flex items-center justify-center border-r border-[#7070705E]">
        <CircleSmall width={15} height={15} color="red" fill="red" /> &nbsp; Live Chat
      </div>
      <div className="flex items-center justify-center">Comments</div>
    </div>
  </div>

  {/* Match Info */}
  <div className="h-[50px] px-4 flex justify-between items-center text-white mt-2 flex-shrink-0">
    <div className="flex items-center gap-3">
      <Image
        src={chatlogo}
        alt="India national flag"
        width={50}
        height={50}
        className="rounded-full w-[50px] h-[50px] object-cover"
      />
      <div className="flex flex-col leading-tight">
        <p className="text-sm font-medium">England vs India</p>
        <p className="text-xs text-[#E60019]">7 Participants</p>
      </div>
    </div>
    <Maximize2 className="w-4 h-4 cursor-pointer hover:scale-105 transition" />
  </div>

  {/* Start of conversation */}
  <div className="flex flex-col items-center text-white text-[10px] space-y-1 my-2 flex-shrink-0">
    <p>Start of conversation</p>
    <div className="bg-[#250F0F] w-24 h-6 flex items-center justify-center">
      <p>June 28, 2025</p>
    </div>
  </div>

  {/* Scrollable Chat List */}
  <div className="flex-grow min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-[#863535] scrollbar-track-[#1c0505]">
    {chats.length > 0 ? (
      chats.map(({ id, username, message, time }, index) => (
        <div
          key={`${id}-${index}`}
          className="flex justify-between items-center px-4 text-white py-2"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#863535] flex items-center justify-center text-white font-semibold text-sm select-none">
              {getInitials(username)}
            </div>
            <div className="flex flex-col leading-tight">
              <p className="text-[12px] font-semibold">{username}</p>
              <p className="text-[10px] text-gray-300">{message}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <EllipsisVertical className="w-3 h-3 cursor-pointer hover:scale-105 transition" />
            <Star className="w-3 h-3 cursor-pointer hover:scale-105 transition" color="yellow" />
            <p className="text-[10px] leading-none">{time}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="flex justify-center items-center py-8 text-gray-500 text-sm">
        No conversations yet.
      </div>
    )}
  </div>
</div>

        </div>
      </div>

      <BottomSection />
    </div>
  );
}
