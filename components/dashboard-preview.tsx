'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function DashboardPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  // Video progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setVideoProgress(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="w-[calc(100vw-32px)] md:w-[1160px] mx-auto my-20"
      style={{ scale, opacity }}
    >
      <motion.div 
        className="relative bg-white/5 rounded-2xl p-2 shadow-lg border border-gray-200/20 overflow-hidden"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Main video container */}
        <div className="relative rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            src="/What is DOHaD.mp4"
            loop
            muted
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleVideoClick}
            onEnded={handleVideoEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Video Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Play/Pause Button */}
            <motion.button
              className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/30 pointer-events-auto"
              onClick={handleVideoClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls || !isPlaying ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isPlaying ? (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </motion.button>
          </div>

          {/* Progress Bar */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-2 bg-black/30 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleProgressClick}
          >
            <motion.div 
              className="h-full bg-white rounded-r-full"
              style={{ width: `${videoProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>

          {/* Mobile Touch Indicator */}
          <div className="md:hidden absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-white text-xs">Tap to play/pause</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
