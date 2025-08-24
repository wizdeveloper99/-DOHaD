'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

export function DashboardPreview() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreenPlaying, setIsFullscreenPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null); // Separate ref for fullscreen
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

  // Keyboard controls for fullscreen
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isFullscreen && e.code === 'Space') {
        e.preventDefault();
        if (fullscreenVideoRef.current) {
          if (isFullscreenPlaying) {
            fullscreenVideoRef.current.pause();
            setIsFullscreenPlaying(false);
          } else {
            fullscreenVideoRef.current.play();
            setIsFullscreenPlaying(true);
          }
        }
      }
      // ESC key to close fullscreen
      if (isFullscreen && e.key === 'Escape') {
        setIsFullscreen(false);
        if (fullscreenVideoRef.current) {
          fullscreenVideoRef.current.pause();
          fullscreenVideoRef.current.muted = true;
          fullscreenVideoRef.current.currentTime = 0;
        }
        setIsFullscreenPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen, isFullscreenPlaying]);

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

  // Auto-scroll to center on hover
  const scrollToCenter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const scrollOffset = elementCenter - viewportCenter;
      
      window.scrollBy({
        top: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = async () => {
    setIsHovered(true);
    scrollToCenter();
    
    if (videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.volume = 0.8;
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay prevented:', error);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isFullscreen) {
      setIsFullscreen(true);
    } else {
      if (fullscreenVideoRef.current) {
        if (isFullscreenPlaying) {
          fullscreenVideoRef.current.pause();
          setIsFullscreenPlaying(false);
        } else {
          fullscreenVideoRef.current.play();
          setIsFullscreenPlaying(true);
        }
      }
    }
  };

  const closeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(false);

    if (fullscreenVideoRef.current && videoRef.current) {
      // Sync time from fullscreen to preview video
      videoRef.current.currentTime = fullscreenVideoRef.current.currentTime;
      videoRef.current.pause();
      videoRef.current.muted = true;
      setIsPlaying(false);
    }

    setIsFullscreenPlaying(false);
  };

  return (
    <>
      <motion.div 
        ref={containerRef}
        className="w-[calc(100vw-32px)] md:w-[1160px] mx-auto my-20"
        style={{ scale, opacity }}
      >
        <motion.div 
          className="relative bg-white/5 rounded-2xl p-2 shadow-lg border border-gray-200/20 overflow-hidden"
          animate={{
            scale: isHovered ? 1.08 : 1, 
            zIndex: isHovered ? 50 : 1,
          }}
          transition={{ 
            duration: 0.25, 
            ease: "easeOut"
          }}
          onHoverStart={handleMouseEnter}
          onHoverEnd={handleMouseLeave}
          onClick={handleVideoClick}
        >
          {/* Main video container */}
          <motion.div 
            className="relative rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ 
              boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.4)",
            }}
          >
            <video
              ref={videoRef}
              src="/What is DOHaD.mp4"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/dashboard-preview.png"
            >
              {/* <img
                src="/images/dashboard-preview.png"
                alt="Dashboard preview"
                className="w-full h-full object-cover"
              /> */}
            </video>

            {/* Overlay with play icon / progress bar */}
            <AnimatePresence>
              {(!isPlaying || isHovered) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center"
                >
                  {!isPlaying ? (
                    // Play Icon when video is NOT playing
                    <motion.div 
                      className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-8 h-8 text-white drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  ) : (
                    // Progress bar only while playing & hovered
                    isHovered && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-black/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div 
                          className="h-full bg-white"
                          style={{ width: `${videoProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </motion.div>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence mode="wait">
        {isFullscreen && (
          <motion.div 
            className="fixed inset-0 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeFullscreen}
          >
            {/* Background */}
            <motion.div 
              className="absolute inset-0 bg-black/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Fullscreen video */}
            <motion.div 
              className="relative w-[95vw] h-[95vh] md:w-[90vw] md:h-[90vh] rounded-lg md:rounded-2xl overflow-hidden"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={fullscreenVideoRef}
                src="/What is DOHaD.mp4"
                autoPlay
                loop
                muted={false}
                playsInline
                className="w-full h-full object-cover rounded-lg md:rounded-2xl"
                poster="/images/dashboard-preview.png"
                onLoadedData={() => {
                  if (fullscreenVideoRef.current) {
                    fullscreenVideoRef.current.currentTime = 0;
                    fullscreenVideoRef.current.volume = 0.8;
                    fullscreenVideoRef.current.play();
                    setIsFullscreenPlaying(true);
                  }
                }}
                onPlay={() => setIsFullscreenPlaying(true)}
                onPause={() => setIsFullscreenPlaying(false)}
              >
                <img
                  src="/images/dashboard-preview.png"
                  alt="Dashboard preview"
                  className="w-full h-full object-cover rounded-lg md:rounded-2xl"
                />
              </video>

              {/* Spacebar hint */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 3, duration: 1 }}
              >
                Press <kbd className="bg-white/20 px-2 py-1 rounded text-xs">SPACE</kbd> to pause • <kbd className="bg-white/20 px-2 py-1 rounded text-xs">ESC</kbd> to close
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
