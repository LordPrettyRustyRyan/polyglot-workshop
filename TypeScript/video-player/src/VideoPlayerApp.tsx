import { useEffect, useRef, useState } from "react";
import {
  Repeat,
  Volume2,
  Expand,
  CircleHelp,
} from "lucide-react";
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
  const windowRef = useRef<HTMLDivElement>(null);

  // ==================== NAVIGATION ====================

  const next = () => {
    setCurrent((v) => (v + 1) % videos.length);
  };

  const prev = () => {
    setCurrent((v) => (v - 1 + videos.length) % videos.length);
  };

  // ==================== VIDEO INITIALIZATION ====================

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.load();
    video.volume = volume / 100;

    video.play().catch(() => {});

    requestAnimationFrame(() => {
      const currentVideo = videoRef.current;

      if (!currentVideo) return;

      currentVideo.volume = volume / 100;
      currentVideo.play().catch(() => {});
    });
  }, [current]);

  // ==================== VOLUME ====================

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.volume = volume / 100;
  }, [volume]);

  // ==================== FULLSCREEN ====================

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await windowRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  // ==================== VIDEO CLICK ====================

  const clickVideo = (
    e: React.MouseEvent<HTMLVideoElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const third = rect.width / 3;

    if (x < third) {
      prev();
      return;
    }

    if (x > third * 2) {
      next();
      return;
    }

    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // ==================== RENDER ====================

  return (
    <div className="video-app-root">
      <div
        ref={windowRef}
        className="video-window"
      >

        {/* ==================================================
            TOOLBAR
        ================================================== */}

        <div className="video-toolbar">

          {/* LEFT CONTROLS */}

          <div className="toolbar-left">

            {/* Repeat */}

            <button
              onClick={() => setRepeat((v) => !v)}
              className={`toolbar-button ${
                repeat ? "toolbar-button-active" : ""
              }`}
              title="Repeat"
            >
              <Repeat size={18} />
            </button>

            {/* Volume */}

            <div className="volume-control">

              <button
                onClick={() =>
                  setShowVolume((v) => !v)
                }
                className={`toolbar-button ${
                  showVolume
                    ? "toolbar-button-open"
                    : ""
                }`}
                title="Volume"
              >
                <Volume2 size={18} />
              </button>

              <div
                className={`volume-popup ${
                  showVolume
                    ? "volume-popup-visible"
                    : ""
                }`}
              >
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={volume}
                  onChange={(e) =>
                    setVolume(Number(e.target.value))
                  }
                  className="volume-slider"
                />
              </div>

            </div>

          </div>

          {/* CENTER TABS */}

          <div className="toolbar-center">

            <div className="tab-switcher">

              <button
                onClick={() => setTab("player")}
                className={`tab-button ${
                  tab === "player"
                    ? "tab-button-active"
                    : ""
                }`}
              >
                Player
              </button>

              <button
                onClick={() => setTab("list")}
                className={`tab-button ${
                  tab === "list"
                    ? "tab-button-active"
                    : ""
                }`}
              >
                Videos
              </button>

            </div>

          </div>

          {/* RIGHT CONTROLS */}

          <div className="toolbar-right">

            {/* Fullscreen */}

            <button
              onClick={toggleFullscreen}
              className="toolbar-button"
              title="Fullscreen"
            >
              <Expand size={18} />
            </button>

            {/* Help */}

            <div className="help-control">

              <button
                onClick={() => setMenu((v) => !v)}
                className="toolbar-button"
                title="Controls"
              >
                <CircleHelp size={18} />
              </button>

              {menu && (
                <div className="help-menu">

                  <div className="help-title">
                    Controls
                  </div>

                  <div className="help-content">

                    <div>
                      <span>◀</span>
                      Left third → Previous
                    </div>

                    <div>
                      <span>⏯</span>
                      Middle → Pause / Play
                    </div>

                    <div>
                      <span>▶</span>
                      Right third → Next
                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="video-content">

          {/* ==================================================
              PLAYER
          ================================================== */}

          {tab === "player" && (
            <div className="player-stage">

              <video
                ref={videoRef}
                src={videos[current].file}
                onClick={clickVideo}
                onEnded={() => {
                  if (repeat) {
                    videoRef.current?.play();
                  } else {
                    next();
                  }
                }}
                controls={false}
                autoPlay
                playsInline
                className="player-video"
              />

            </div>
          )}


          {/* ==================================================
              VIDEO LIST
          ================================================== */}

          {tab === "list" && (
            <div className="video-list">

              <div className="video-grid">

                {videos.map((video, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrent(i);
                      setTab("player");
                    }}
                    className={`video-card ${
                      i === current
                        ? "video-card-selected"
                        : ""
                    }`}
                  >

                    <div className="video-thumbnail">

                      <img
                        src={video.thumb}
                        alt={video.title}
                      />

                      <div className="video-thumbnail-overlay">
                        <span>
                          {video.title}
                        </span>
                      </div>

                    </div>

                  </button>
                ))}

              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}