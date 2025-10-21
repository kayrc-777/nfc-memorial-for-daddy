'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const videoUrl = 'https://vhzepgxvplwatq5w.public.blob.vercel-storage.com/IMG_1977.mov'; // ← Your Blob URL
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="relative min-h-screen bg-slate-950 flex items-center justify-center p-4">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-900 opacity-20 animate-float"
            style={{
              width: '60px',
              height: '60px',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i}s`,
            }}
          />
        ))}
      </div>

      {/* Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all backdrop-blur-sm"
      >
        {isMuted ? '🔇 Tap to unmute' : '🔊 Muted'}
      </button>

      {/* Memorial Box */}
      <div className="relative z-10 bg-transparent p-6 rounded-3xl ring-1 ring-white/50 shadow-lg">

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

      {/* <p className="mt-4 text-slate-700 font-medium text-sm">
          Scanned with NFC
        </p>*/}
      </div>
    </main>
  );
}