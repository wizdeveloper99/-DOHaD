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
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-green-50 px-4 py-12 md:py-20 relative overflow-hidden flex items-center">
      {/* Modern SVG Background */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Floating circles */}
          <circle cx="100" cy="100" r="120" fill="url(#gradient1)" opacity="0.1"/>
          <circle cx="1100" cy="200" r="200" fill="url(#gradient2)" opacity="0.08"/>
          <circle cx="200" cy="600" r="150" fill="url(#gradient3)" opacity="0.12"/>
          <circle cx="1000" cy="700" r="180" fill="url(#gradient1)" opacity="0.06"/>
          
          {/* Organic shapes */}
          <path d="M300,50 Q500,100 400,250 T600,200 Q800,150 700,350 T500,300 Q300,250 300,50" fill="url(#gradient4)" opacity="0.05"/>
          <path d="M800,400 Q1000,450 900,600 T1100,550 Q1200,500 1100,650 T900,600 Q700,550 800,400" fill="url(#gradient5)" opacity="0.08"/>
          
          {/* DNA-like helix pattern */}
          <path d="M50,300 Q150,250 250,300 T450,300 Q550,250 650,300 T850,300 Q950,250 1050,300" 
                stroke="url(#gradient6)" strokeWidth="3" fill="none" opacity="0.15"/>
          <path d="M50,320 Q150,370 250,320 T450,320 Q550,370 650,320 T850,320 Q950,370 1050,320" 
                stroke="url(#gradient6)" strokeWidth="3" fill="none" opacity="0.15"/>
          
          {/* Grid pattern */}
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="#10b981" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          
          {/* Gradients */}
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#059669"/>
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399"/>
              <stop offset="100%" stopColor="#10b981"/>
            </radialGradient>
            <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6ee7b7"/>
              <stop offset="100%" stopColor="#34d399"/>
            </radialGradient>
            <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a7f3d0"/>
              <stop offset="100%" stopColor="#6ee7b7"/>
            </radialGradient>
            <radialGradient id="gradient5" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d1fae5"/>
              <stop offset="100%" stopColor="#a7f3d0"/>
            </radialGradient>
            <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="50%" stopColor="#34d399"/>
              <stop offset="100%" stopColor="#6ee7b7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-200 rounded-full animate-pulse opacity-30" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]"></div>
      
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Section - Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Heading */}
              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-6">
                  Health & Development Research
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                  <span className="text-green-600 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">What is</span>{" "}
                  <span className="text-gray-900">DOHaD?</span>
                </h1>
                <p className="mt-6 text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-300 text-gray-700 leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
                  The Developmental Origins of Health and Disease (DOHaD) explores how early-life experiences, from conception through childhood, influence long-term health outcomes and disease risk.
                </p>
              </div>
              
              {/* Input Field */}
              <div className="flex w-full max-w-md bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-white/20">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="flex-grow bg-transparent outline-none px-5 py-4 text-gray-700 text-lg"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
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
                        className="w-full h-1 bg-white/30 rounded-full cursor-pointer"
                        onClick={handleSeek}
                      >
                        <div 
                          className="h-full bg-green-500 rounded-full transition-all duration-150"
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
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-all duration-200"
                        >
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        
                        {/* Volume */}
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={toggleMute}
                            className="text-white hover:text-green-400 transition-colors duration-200"
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
                            className="w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #10b981 0%, #10b981 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
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
                        className="text-white hover:text-green-400 transition-colors duration-200"
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
                        className="bg-white/90 backdrop-blur-sm p-6 rounded-full text-green-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-2xl"
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
          background: #10b981;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: #10b981;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}
