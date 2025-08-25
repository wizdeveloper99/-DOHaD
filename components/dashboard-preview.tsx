'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';

export function DashboardPreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
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
      }
      triggerControls();
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setVideoProgress(0);
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

  return (
    <motion.div 
      ref={containerRef}
      className="w-[calc(100vw-32px)] md:w-[1160px] mx-auto my-20"
    >
      <motion.div 
        className="relative  
 rounded-xl border-2 border-gray-200/10 overflow-hidden  
transition-transform duration-300 ease-out  
hover:scale-110 hover:shadow-xl
"
        onMouseEnter={triggerControls}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* Main video container */}
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <video
            ref={videoRef}
            src="/What is DOHaD.mp4"
            poster="https://octet-gatsby.in2.cdn-alpha.com/wp-content/uploads/2024/04/Image-23-1536x864.webp"
            loop
            playsInline
            className="w-full h-full object-cover cursor-pointer"
            onClick={handleVideoClick}
            onEnded={handleVideoEnded}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Play/Pause Button (auto-hide) */}
          <motion.button
  className="absolute inset-0 m-auto flex items-center justify-center pointer-events-auto"
  onClick={handleVideoClick}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: showControls ? 1 : 0 }}
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
        </div>
      </motion.div>
    </motion.div>
  );
}
