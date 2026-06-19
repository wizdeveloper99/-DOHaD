"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

type PastEventsGalleryVideoProps = {
  youtubeVideoId: string;
  title: string;
  description: string;
};

export default function PastEventsGalleryVideo({
  youtubeVideoId,
  title,
  description,
}: PastEventsGalleryVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;

  return (
    <div className="mb-12 sm:mb-16">
      <div className="relative w-full max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-slate-900 aspect-video group">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-2xl"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="relative block w-full h-full"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-5 sm:p-6 rounded-full text-secondary group-hover:scale-110 transition-all duration-300 shadow-2xl"
                aria-hidden="true"
              >
                <Play size={32} className="ml-1 fill-current" />
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="mt-6 sm:mt-8 text-center max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
