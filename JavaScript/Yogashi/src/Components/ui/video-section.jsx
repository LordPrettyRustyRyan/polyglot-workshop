import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

function VideoSection({
  videoSrc,
  posterSrc,
  aspectRatio = "aspect-27/9",
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // ==================== PLAY VIDEO ====================
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full bg-yoga-frosted-mint">
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden bg-yoga-olive-dark ${aspectRatio}`}
      >
        {/* ==================== VIDEO ==================== */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          controls={isPlaying}
          className="h-full w-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* ==================== CUSTOM PLAY BUTTON ==================== */}
        {!isPlaying && (
          <button
            onClick={handlePlayClick}
            aria-label="Play video"
            className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-yoga-olive-dark text-yoga-frosted-mint shadow-2xl transition-transform hover:scale-110 focus:outline-none"
          >
            <FaPlay size={24} className="ml-1" />
          </button>
        )}
      </div>
    </section>
  );
}

export default VideoSection;