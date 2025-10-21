export default function Home() {
  // PASTE YOUR VIDEO URL HERE
  const videoUrl = 'https://vhzepgxvplwatq5w.public.blob.vercel-storage.com/IMG_1977.mov';

  return (
    <main className="relative min-h-screen bg-khaki-500 flex items-center justify-center p-4">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-khaki-300 opacity-20 animate-float"
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

      {/* Video Box */}
      <div className="relative z-10 bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl ring-2 ring-khaki-700 w-[50vw] max-w-lg">
        <div className="relative w-full pt-[75%] rounded-2xl overflow-hidden">
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        </div>
        <p className="mt-3 text-center text-khaki-800 font-medium text-sm">
          Scanned with NFC
        </p>
      </div>
    </main>
  );
}