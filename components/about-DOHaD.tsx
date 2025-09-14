"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import type { ChangeEvent, MouseEvent } from "react";

export default function AboutDOHaD() {
  const [email, setEmail] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [showControls, setShowControls] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);

    if (newVolume === 0) {
      setIsMuted(true);
      video.muted = true;
    } else {
      setIsMuted(false);
      video.muted = false;
    }
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className="w-full px-8 md:px-12 py-12 md:py-20 relative overflow-hidden flex items-center">
      {/* Modern SVG Background */}

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto mx-4 md:mx-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center items-center lg:items-start space-y-8">
              {/* Heading */}
              <div className="text-center lg:text-left w-full sm:max-w-2xl">
                <div className="inline-block px-4 py-2 bg-secondary-100 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 text-sm font-medium rounded-full mb-6">
                  Health & Development Research
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                  <span className="text-secondary ">
                    What is
                  </span>{" "}
                  <span className="text-gray-900 dark:text-gray-100">DOHaD?</span>
                </h1>
                <p className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-300 text-gray-700 dark:text-gray-300 leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto lg:mx-0">
                  The Developmental Origins of Health and Disease (DOHaD) explores how early-life experiences, from conception through childhood, influence long-term health outcomes and disease risk.
                </p>
              </div>

              {/* Desktop / Tablet: Big pill (shows from sm). Centered until lg, then left. */}
              <div className="hidden sm:flex w-full max-w-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-white/20 dark:border-secondary-500/20 justify-center mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent outline-none px-5 py-4 text-gray-700 dark:text-gray-300 text-lg"
                />
                <button className="px-8 py-4 bg-secondary dark:to-secondary-300 text-white rounded-full hover:from-secondary-700 dark:hover:from-secondary-500 hover:to-secondary-600 dark:hover:to-secondary-400 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started
                </button>
              </div>

              {/* Mobile: Two pills stacked (centered) */}
              <div className="flex sm:hidden flex-col w-full max-w-md gap-3 mx-auto">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 rounded-full px-4 py-3 text-gray-700 dark:text-gray-300 text-base outline-none shadow"
                />
                <button className="w-full px-6 py-3 bg-secondary text-white rounded-full hover:from-secondary-700 dark:hover:from-secondary-500 hover:to-secondary-600 dark:hover:to-secondary-400 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm">
                  Get Started
                </button>
              </div>
            </div>


            {/* Right Section - Video with Custom Controls */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-2xl">
                <div
                  className="relative group"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  <video
                    ref={videoRef}
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full object-cover rounded-2xl"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/What is DOHaD.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Video Controls */}
                  <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div
                        className="w-full h-1 bg-white/30 dark:bg-slate-700/30 rounded-full cursor-pointer"
                        onClick={handleSeek}
                      >
                        <div
                          className="h-full bg-secondary-500 dark:bg-secondary-400 rounded-full transition-all duration-150"
                          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        />
                      </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {/* Play/Pause */}
                        <button
                          onClick={togglePlay}
                          className="bg-white/20 dark:bg-secondary-900/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 dark:hover:bg-secondary-800/30 transition-all duration-200"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>

                        {/* Volume */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={toggleMute}
                            className="text-white hover:text-secondary-400 transition-colors duration-200"
                          >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-16 h-1 bg-white/30 dark:bg-slate-700/30 rounded-full appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #00645E 0%, #00645E ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
                            }}
                          />
                        </div>

                        {/* Time Display */}
                        <div className="text-white text-sm font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </div>
                      </div>

                      {/* Fullscreen */}
                      <button
                        onClick={toggleFullscreen}
                        className="text-white hover:text-secondary-400 transition-colors duration-200"
                      >
                        <Maximize size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Large Play Button Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlay}
                        className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-6 rounded-full text-secondary-600 dark:text-secondary-400 hover:bg-white dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300 shadow-2xl"
                      >
                        <Play size={32} className="ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background: #00645E;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #00645E;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}
