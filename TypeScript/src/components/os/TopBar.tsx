import { Volume2, VolumeX, GithubIcon, LinkedinIcon, Maximize, Minimize, } from "lucide-react";
import { useEffect, useState } from "react";
import { useSystemStore } from "@/stores/systemStore";
import { soundManager } from "@/lib/sounds";

export function TopBar() {
    // ==================== STATES ====================
    const { currentTime, settings, updateSettings } = useSystemStore();

    const [isFullscreen, setIsFullscreen] = useState(
        !!document.fullscreenElement
    );

    // ==================== EFFECTS / LOGIC ====================
    const formattedTime = currentTime.toLocaleTimeString("en-US", { weekday: "short", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

    function toggleSound() {
        const newState = !settings.soundEnabled;
        updateSettings({ soundEnabled: newState });
        soundManager.setEnabled(newState);
        soundManager.playTick();
    }

    useEffect(() => {
        const handler = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handler);
        return () =>
            document.removeEventListener("fullscreenchange", handler);
    }, []);

    async function toggleFullscreen() {
        soundManager.playTick();

        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    }

    return (
        <header className="top-bar">
            {/* ==================== RENDER ==================== */}
            <div className="topbar-left">
                <img src="/icon.png" alt="Imagine OS" className="topbar-logo" draggable={false} />
                <span className="topbar-title">Imagine OS</span>
            </div>

            <div className="topbar-right">
                <button
                    className="topbar-icon"
                    onClick={toggleFullscreen}
                    title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                >
                    {isFullscreen ? (
                        <Minimize size={16} />
                    ) : (
                        <Maximize size={16} />
                    )}
                </button>
                <button className="topbar-icon" onClick={toggleSound}>
                    {settings.soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <a href="https://github.com/LordPrettyRustyRyan" target="_blank" rel="noreferrer" className="topbar-icon" onClick={() => soundManager.playTick()}>
                    <GithubIcon size={16} />
                </a>
                <a href="https://www.linkedin.com/in/sidharath-51a4b13a2/" target="_blank" rel="noreferrer" className="topbar-icon" onClick={() => soundManager.playTick()}>
                    <LinkedinIcon size={16} />
                </a>
                {/* <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto cursor-pointer text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-2 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:border-solid text-center flex items-center justify-center"
                  >
                    View Resume
                  </a> */}
                <span className="topbar-time">{formattedTime}</span>
            </div>
        </header>
    );
}