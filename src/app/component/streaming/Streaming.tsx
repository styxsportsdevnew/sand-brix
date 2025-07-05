import {
  Eye,
  MessageSquare,
  Folder,
  Gift,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Flag,
  Star,
  Circle,
  X,
} from "lucide-react";
import { useState } from "react";

type Comment = {
  id: number;
  user: string;
  avatar: string;
  comment: string;
  time: string;
  isLiked: boolean;
};

export default function Streaming() {
  const [activeTab, setActiveTab] = useState<"live" | "comments">("comments");
  const [isCommentsExpanded, setIsCommentsExpanded] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: "John Dives",
      avatar: "JD",
      comment: "anybody here",
      time: "11:00",
      isLiked: false,
    },
    {
      id: 2,
      user: "Emily",
      avatar: "EM",
      comment: "@John Dives I am joined. This video is awesome",
      time: "12:44",
      isLiked: false,
    },
    {
      id: 3,
      user: "John Dives",
      avatar: "JD",
      comment: "I love it",
      time: "14:37",
      isLiked: false,
    },
    {
      id: 4,
      user: "Rebecca",
      avatar: "RB",
      comment: "@John Dives @Emily how are you?",
      time: "15:22",
      isLiked: false,
    },
    {
      id: 5,
      user: "John Dives",
      avatar: "JD",
      comment: "More people please",
      time: "15:30",
      isLiked: false,
    },
    {
      id: 6,
      user: "John Dives",
      avatar: "JD",
      comment: "I enjoy here",
      time: "16:00",
      isLiked: false,
    },
    {
      id: 7,
      user: "New",
      avatar: "N",
      comment: "same",
      time: "16:00",
      isLiked: false,
    },
  ]);

  const toggleLike = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, isLiked: !comment.isLiked } : comment
      )
    );
  };

  const firstComment = comments[0];

  return (
    <div className="bg-[#180000] text-white">
      <div className="container custom-container mx-auto flex flex-col md:flex-row gap-4">
        {/* Left Section - Video (70%) */}
        <div className="w-full md:w-[70%] md:pl-6">
          {/* Video Player */}
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/18QQWa5MEcs?si=9oR8NC6SHZN1rrfV"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe> */}
            <video
              className="w-full h-full object-cover"
              controls
              src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164">
              Once available, the video will play automatically.
            </video>
          </div>

          {/* Video Title */}
          <h1 className="text-lg md:text-xl font-bold mt-4 pl-4 md:pl-0">
            Fantastic Four: First Steps | Final Trailer
          </h1>

          {/* Video Stats */}
          <div className="flex items-center gap-4 mt-2 text-xs sm:text-sm text-[#9F9F9F] pl-4 md:pl-0">
            <div className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>7 Comments</span>
            </div>
            <div className="flex items-center gap-1">
              <Folder size={16} />
              <span>Gaming</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={16} />
              <span>2.7K views</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-4 pb-4">
            <button className="flex flex-col items-center gap-1 text-sm bg-[#2f1a1a] hover:bg-[#3f1a1a] px-3 py-3 cursor-pointer">
              <Gift size={20} />
              {/* <span>Gift</span> */}
            </button>
            <button className="flex flex-col items-center gap-1 text-sm bg-[#2f1a1a] hover:bg-[#3f1a1a] px-3 py-3 cursor-pointer">
              <ThumbsUp size={20} />
              {/* <span>Like</span> */}
            </button>
            <button className="flex flex-col items-center gap-1 text-sm bg-[#2f1a1a] hover:bg-[#3f1a1a] px-3 py-3 cursor-pointer">
              <ThumbsDown size={20} />
              {/* <span>Dislike</span> */}
            </button>
            <button className="flex flex-col items-center gap-1 text-sm bg-[#2f1a1a] hover:bg-[#3f1a1a] px-3 py-3 cursor-pointer">
              <Share2 size={20} />
              {/* <span>Share</span> */}
            </button>
            <button className="flex flex-col items-center gap-1 text-sm bg-[#2f1a1a] hover:bg-[#3f1a1a] px-3 py-3 cursor-pointer">
              <Flag size={20} />
              {/* <span>Report</span> */}
            </button>
          </div>

          {/* Mobile Comments Section (Collapsed) */}
          <div className="md:hidden px-4 pb-4 mt-4">
            {!isCommentsExpanded ? (
              <div
                className="bg-[#2f1a1a] rounded-lg p-4 cursor-pointer"
                onClick={() => setIsCommentsExpanded(true)}>
                <h3 className="text-white font-semibold mb-3">Comments 7</h3>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    {firstComment.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-xs text-white">{firstComment.user}</p>
                    <p className="text-sm text-white">{firstComment.comment}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#180000] rounded-lg">
                {/* Expanded Comments Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold text-lg">Comments</h3>
                  <button
                    className="text-[#9F9F9F] text-sm"
                    onClick={() => setIsCommentsExpanded(false)}>
                    <X size={24} />
                  </button>
                </div>
                <hr className="border-t border-[#404040] w-full mt-2" />

                {/* Video Info */}
                <div className="flex items-start gap-4 mt-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xs font-bold text-white">
                    F4
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold">
                      Fantastic Four: First Steps | Final Trailer
                    </h2>
                    <p className="text-xs text-red-500">7 participants</p>
                  </div>
                </div>

                <hr className="border-[#404040] my-3" />
                <p className="text-sm text-white text-center pb-2">Start of conversation</p>
                <div className="justify-center text-center pb-2">
                  <span className="text-xs text-[#9F9F9F] bg-[#2f1a1a] p-2 text-center">
                    June 28, 2025
                  </span>
                </div>

                {/* Comments Section */}
                <div className="space-y-4 mt-4 overflow-y-auto max-h-[400px]">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex justify-between items-start gap-3">
                      {/* Left Side */}
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                          {comment.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-xs sm:text-sm">{comment.user}</p>
                          <p className="text-sm mt-0.5 text-white">{comment.comment}</p>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="flex items-center gap-2 mt-1">
                        <button className="cursor-pointer" onClick={() => toggleLike(comment.id)}>
                          <Star
                            fill={comment.isLiked ? "yellow" : "transparent"}
                            className={`${
                              comment.isLiked ? "text-yellow-400" : "text-gray-400"
                            } w-3 h-3 sm:w-4 sm:h-4`}
                          />
                        </button>
                        <span className="text-xs text-white">{comment.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Comments (30%) - Desktop Only */}
        <div className="hidden md:block w-full md:w-[30%] bg-[#180000] rounded-lg px-6">
          {/* Tabs */}
          <div className="flex border border-[#7070705E] bg-[#261010] h-[40px] sm:h-[50px]">
            <button
              className={`w-1/2 flex items-center gap-2 px-4 py-1 cursor-pointer justify-center text-sm ${
                activeTab === "live" ? "text-red-500" : "text-[#9F9F9F]"
              }`}
              onClick={() => setActiveTab("live")}>
              <Circle
                size={12}
                fill={activeTab === "live" ? "#ef4444" : "transparent"}
                className="text-red-500"
              />
              <span>Live Chat</span>
            </button>
            <div className="w-px bg-[#404040]"></div>

            <button
              className={`w-1/2 px-4 py-1 cursor-pointer justify-center text-sm ${
                activeTab === "comments" ? "text-white" : "text-[#9F9F9F]"
              }`}
              onClick={() => setActiveTab("comments")}>
              Comments
            </button>
          </div>

          {/* Video Info */}
          <div className="flex items-start gap-4 mt-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-xs font-bold text-white">
              F4
            </div>
            <div>
              <h2 className="text-sm font-semibold">Fantastic Four: First Steps | Final Trailer</h2>
              <p className="text-xs text-red-500">7 participants</p>
            </div>
          </div>

          <hr className="border-[#404040] my-3" />
          <p className="text-sm text-white text-center pb-2">Start of conversation</p>
          <div className="justify-center text-center pb-2">
            <span className="text-xs text-[#9F9F9F] bg-[#2f1a1a] p-2 text-center">
              June 28, 2025
            </span>
          </div>

          {/* Comments Section */}
          <div className="space-y-4 mt-4 overflow-y-auto max-h-[500px]">
            {comments.map((comment) => (
              <div key={comment.id} className="flex justify-between items-start gap-3">
                {/* Left Side */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    {comment.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">{comment.user}</p>
                    <p className="text-sm mt-0.5 text-white">{comment.comment}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-2 mt-1">
                  <button className="cursor-pointer" onClick={() => toggleLike(comment.id)}>
                    <Star
                      fill={comment.isLiked ? "yellow" : "transparent"}
                      className={`${
                        comment.isLiked ? "text-yellow-400" : "text-gray-400"
                      } w-3 h-3 sm:w-4 sm:h-4`}
                    />
                  </button>
                  <span className="text-xs text-white">{comment.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="text-[#3b2d2d] w-full mt-4" />
    </div>
  );
}
