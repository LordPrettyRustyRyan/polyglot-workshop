import { useEffect, useRef, useState } from "react";
import { Repeat, Volume2, Expand, CircleHelp } from "lucide-react";
import { videos } from "./videos";
import "./videos.css";

export function VideoPlayerApp() {
  // ==================== STATE ====================
  const [tab, setTab] = useState<"player" | "list">("player");
  const [menu, setMenu] = useState(false);
  const [volume, setVolume] = useState(100);
  const [showVolume, setShowVolume] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // ==================== LOGIC ====================
  const next = () => setCurrent((v) => (v + 1) % videos.length);
  const prev = () => setCurrent((v) => (v - 1 + videos.length) % videos.length);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.volume = volume / 100;
    v.play().catch(() => { });
    requestAnimationFrame(() => {
      if (!videoRef.current) return;
      videoRef.current.volume = volume / 100;
      videoRef.current.play().catch(() => { });
    });
  }, [current]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.volume = volume / 100;
  }, [volume, tab]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const clickVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const third = rect.width / 3;
    if (x < third) return prev();
    if (x > third * 2) return next();
    if (videoRef.current?.paused) videoRef.current.play();
    else videoRef.current?.pause();
  };

  // ==================== RENDER ====================
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="old-window w-full h-full flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="h-8 px-1 bg-zinc-800/90 backdrop-blur-xl flex items-center">
          {/* Left Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setRepeat(!repeat)}
              className={`h-7 w-7 rounded-md transition flex items-center justify-center ${repeat ? "bg-blue-500/20 text-blue-400" : "hover:bg-zinc-700"}`}
            >
              <Repeat size={18} />
            </button>
            <div className="relative flex items-center">
              <button
                onClick={() => setShowVolume(v => !v)}
                className={`h-7 w-7 rounded-md transition flex items-center justify-center ${showVolume ? "bg-zinc-700" : "hover:bg-zinc-700"
                  }`}
              >
                <Volume2 size={18} className="text-zinc-300" />
              </button>

              <div
                className={`absolute left-10 -translate-y-0.5 transition-all duration-200 overflow-hidden ${showVolume
                    ? "w-32 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                  }`}
              >
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="volume-slider w-full"
                />
              </div>
            </div>
          </div>
          {/* Center */}
          <div className="flex-1 flex justify-center">
            <div className="flex bg-zinc-900 rounded-lg p-[0.15rem]">
              <button
                onClick={() => setTab("player")}
                className={`px-4 py-0.4 rounded-md text-sm transition ${tab === "player" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                Player
              </button>
              <button
                onClick={() => setTab("list")}
                className={`px-4 py-0.4 rounded-md text-sm transition ${tab === "list" ? "bg-zinc-700 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                Videos
              </button>
            </div>
          </div>
          {/* Right Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleFullscreen}
              className="h-7 w-7 rounded-md hover:bg-zinc-700 transition flex items-center justify-center"
            >
              <Expand size={18} />
            </button>
            <div className="relative">
              <button
                onClick={() => setMenu(!menu)}
                className="h-7 w-7 rounded-md hover:bg-zinc-700 transition flex items-center justify-center"
              >
                <CircleHelp size={18} />
              </button>
              {menu && (
                <div className="absolute right-0 top-10 w-64 rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl p-3 text-sm z-50">
                  <div className="font-semibold mb-2">Controls</div>
                  <div className="space-y-1 text-zinc-400">
                    <div>◀ — Left third → Previous</div>
                    <div>⏯ — Middle → Pause / Play</div>
                    <div>▶ — Right third → Next</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 min-h-0 overflow-hidden">
          {tab === "player" && (
            <div className="flex h-full w-full items-center justify-center bg-black overflow-hidden">
              <div className="aspect-[4/3] h-full max-w-full">
                <video
                  ref={videoRef}
                  src={videos[current].file}
                  onClick={clickVideo}
                  onEnded={() => { if (repeat) videoRef.current?.play(); else next(); }}
                  controls={false}
                  autoPlay
                  className="h-full w-full object-contain bg-black"
                />
              </div>
            </div>
          )}
          {tab === "list" && (
            <div className="h-full overflow-y-auto p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 auto-rows-max">
              {videos.map((video, i) => (
                <div
                  key={i}
                  onClick={() => { setCurrent(i); setTab("player"); }}
                  className={`relative group overflow-hidden rounded-xl cursor-pointer bg-zinc-900 aspect-video transition hover:scale-[1.02] hover:shadow-xl ${i === current ? "ring-2 ring-blue-500" : "ring-1 ring-white/5"}`}
                >
                  <img src={video.thumb} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                    <span className="text-white text-center text-sm font-medium">{video.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}