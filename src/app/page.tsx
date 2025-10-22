'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const videoUrl = 'https://blob.vercel-storage.com/videos/memory.mp4';
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-950 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* SLOW, SCATTERED ORBS */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 80 + 40; // 40px to 120px
          const duration = Math.random() * 30 + 40; // 40s to 70s
          const delay = Math.random() * 20;
          const top = Math.random() * 100;
          const left = Math.random() * 100;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-blue-900 opacity-15 animate-slow-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm"
      >
        {isMuted ? 'Tap to unmute' : 'Muted'}
      </button>

      {/* VIDEO ONLY — NO TEXT */}
      <div className="relative z-10 w-full max-w-md md:max-w-lg">
        <div className="relative w-full pt-[75%] rounded-2xl overflow-hidden shadow-inner">
          <video
            ref={videoRef}
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </div>
      </div>
    </main>
  );
}