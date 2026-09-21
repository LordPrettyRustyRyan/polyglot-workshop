import { useState, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Navbar from "./Components/ui/navbar";
import Hero from "./Components/ui/homehero";
import YogaStyles from "./Components/ui/yogastyles";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <YogaStyles />

      {/* Video Section */}
      <section className="relative w-full bg-yoga-frosted-mint py-6">
          <div className="relative overflow-hidden aspect-27/9 w-full flex items-center justify-center bg-yoga-olive-dark">
            <video
              ref={videoRef}
              src="/yoga-video.mp4"
              poster="/video-poster.png"
              controls={isPlaying}
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Custom Play Overlay Button (Hidden once playing) */}
            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                aria-label="Play video"
                className="absolute z-20 flex items-center justify-center w-20 h-20 rounded-full bg-yoga-olive-dark text-yoga-frosted-mint shadow-2xl transition-transform hover:scale-110 focus:outline-none"
              >
                <FaPlay size={24} className="ml-1" />
              </button>
            )}
          </div>
      </section>
    </>
  );
}

export default App;