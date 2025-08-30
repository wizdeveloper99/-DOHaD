'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, X } from 'lucide-react';

export function DashboardPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [showPosterOverlay, setShowPosterOverlay] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

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

  // Auto-hide controls after 3s
  const triggerControls = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
        setShowPosterOverlay(false); // hide overlay once playing
      }
      triggerControls();
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setVideoProgress(0);
    setShowPosterOverlay(true); // show overlay again when finished
    triggerControls();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      triggerControls();
    }
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Force reload to show poster
      setIsPlaying(false);
    }
    setShowPosterOverlay(true);
    setVideoProgress(0);
  };

  return (
    <motion.div ref={containerRef} className="w-full">
      <motion.div
        className="relative rounded-xl border-2 border-gray-200/10 overflow-hidden 
        transition-transform duration-300 ease-out 
        md:hover:scale-110 md:hover:shadow-xl"
        onMouseEnter={triggerControls}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Close Button */}
        <motion.button
          onClick={closeVideo}
          className="absolute top-2 right-2 z-20 
                     flex items-center justify-center 
                     w-8 h-8 rounded-full 
                     bg-black/50 backdrop-blur-sm
                     border border-white/20 
                     hover:bg-black/70 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls || showPosterOverlay ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-4 h-4 text-white" />
        </motion.button>

        {/* Main video container */}
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <video
            ref={videoRef}
            src="/What is DOHaD.mp4"
            poster="/2151426832.jpg"
            loop
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
            onEnded={handleVideoEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Black overlay with Play button (only on poster) */}
         {showPosterOverlay && (
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <motion.button
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center 
                 w-14 h-14 md:w-20 md:h-20 rounded-full 
                 bg-white/20 backdrop-blur-md
                 border border-white/40 
                 shadow-lg hover:shadow-xl
                 transition-all duration-300"
    >
      <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 drop-shadow-md" />
    </motion.button>
  </div>
)}


          {/* Play/Pause Button (auto-hide during playback) */}
          <motion.button
            className="absolute inset-0 m-auto flex items-center justify-center pointer-events-auto"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls && !showPosterOverlay ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isPlaying ? (
              <Pause className="w-10 h-10 text-white" />
            ) : (
              <Play className="w-10 h-10 text-white" />
            )}
          </motion.button>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 bg-black/30 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls && !showPosterOverlay ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleProgressClick}
          >
            <motion.div
              className="h-full bg-white rounded-r-full"
              style={{ width: `${videoProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}