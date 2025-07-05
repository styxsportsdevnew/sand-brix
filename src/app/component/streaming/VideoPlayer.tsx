import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

type VideoPlayerProps = {
  src: string;
};

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  // Toggle Play
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Time update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (videoRef.current) {
      videoRef.current.volume = vol;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (videoRef.current) {
        setIsPlaying(!videoRef.current.paused);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (volumeRef.current && !volumeRef.current.contains(event.target as Node)) {
        setShowVolumeSlider(false);
      }

      if (speedRef.current && !speedRef.current.contains(event.target as Node)) {
        setShowSpeedMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full bg-black rounded-lg overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        onError={() => console.error("Failed to load video:", src)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full h-auto"
        // onClick={togglePlay}
      />

      {/* Center Play/Pause Button for Mobile */}
      <div className="absolute inset-0 flex items-center justify-center sm:hidden">
        <button onClick={togglePlay} className="bg-black/50 p-3 rounded-full backdrop-blur-sm">
          {isPlaying ? (
            <Pause size={32} className="text-white" />
          ) : (
            <Play size={32} className="text-white ml-1" />
          )}
        </button>
      </div>

      {/* Playback Speed - Top Right for Mobile */}
      <div className="absolute top-4 right-4 sm:hidden" ref={speedRef}>
        <button
          onClick={() => setShowSpeedMenu(!showSpeedMenu)}
          className="text-sm px-2 py-1 bg-black/50 text-white rounded backdrop-blur-sm">
          {playbackRate}x
        </button>
        {showSpeedMenu && (
          <div className="absolute top-8 right-0 bg-black border border-gray-600 rounded text-xs z-10 max-h-40 overflow-y-auto w-24">
            {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
              <div
                key={rate}
                className={`px-8 py-2 text-center cursor-pointer hover:bg-gray-700 ${
                  rate === playbackRate ? "bg-gray-800 text-red-500" : "text-white"
                }`}
                onClick={() => {
                  setPlaybackRate(rate);
                  setShowSpeedMenu(false);
                }}>
                {rate}x
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
        {/* Mobile Layout (sm and below) */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <span className="text-xs">{formatTime(currentTime)}</span>
              <span className="text-xs text-[#9F9F9F]">/</span>
              <span className="text-xs text-[#9F9F9F]">{formatTime(duration)}</span>
            </div>
            <div className="flex items-center gap-3">
              {/* Volume */}
              <div className="relative" ref={volumeRef}>
                <button
                  onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                  className="cursor-pointer">
                  {volume > 0 ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                {showVolumeSlider && (
                  <div className="absolute bottom-8 right-0 bg-black border border-gray-700 p-2 rounded">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 cursor-pointer"
                    />
                  </div>
                )}
              </div>
              {/* Fullscreen */}
              <button onClick={handleFullscreen} className="cursor-pointer mb-2">
                <Maximize size={18} />
              </button>
            </div>
          </div>

          {/* Bottom Row: Seek Bar */}
          <div className="w-full">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full appearance-none h-1 bg-[#272727] rounded [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ef4444 ${
                  (currentTime / duration) * 100 || 0
                }%, #272727 0%)`,
              }}
            />
          </div>
        </div>

        {/* Desktop Layout (sm and above) */}
        <div className="hidden sm:flex items-center gap-4 text-sm">
          {/* Play/Pause */}
          <button onClick={togglePlay} className="bg-[#B5B5B5] p-1 cursor-pointer">
            {isPlaying ? (
              <Pause size={20} className="text-red-500 fill-red-500" />
            ) : (
              <Play size={20} className="text-red-500 fill-red-500" />
            )}
          </button>

          {/* Current Time */}
          <span>{formatTime(currentTime)}</span>

          {/* Seek Bar */}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full appearance-none h-1 bg-[#272727] rounded [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full cursor-pointer"
            style={{
              background: `linear-gradient(to right, #ef4444 ${
                (currentTime / duration) * 100 || 0
              }%, #272727 0%)`,
            }}
          />

          {/* Total Duration */}
          <span>{formatTime(duration)}</span>

          {/* Volume */}
          <div className="relative" ref={volumeRef}>
            <button
              onClick={() => setShowVolumeSlider(!showVolumeSlider)}
              className="cursor-pointer">
              {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            {showVolumeSlider && (
              <div className="absolute bottom-8 right-0 bg-black border border-gray-700 p-2 rounded">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Playback Speed */}
          <div className="relative" ref={speedRef}>
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="text-sm px-2 cursor-pointer">
              {playbackRate}x
            </button>
            {showSpeedMenu && (
              <div className="absolute bottom-8 right-0 bg-black border border-gray-600 rounded text-xs z-10">
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
                  <div
                    key={rate}
                    className={`px-10 py-2 justify-start items-start text-left cursor-pointer hover:bg-gray-700 ${
                      rate === playbackRate ? "bg-gray-800 text-red-500" : ""
                    }`}
                    onClick={() => {
                      setPlaybackRate(rate);
                      setShowSpeedMenu(false);
                    }}>
                    {rate}x
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Fullscreen */}
          <button onClick={handleFullscreen} className="cursor-pointer">
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
