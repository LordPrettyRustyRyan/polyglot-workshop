import { Link } from "react-scroll";
import { IoDocument, IoDocumentTextOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaVectorSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { FaTerminal } from "react-icons/fa";
import { MdMemory } from "react-icons/md";
import { IoHomeOutline, IoPlayOutline, IoExpandOutline, } from "react-icons/io5";

export function IntroApp() {
  return (
    <section id="home" className="h-full w-full overflow-hidden">

      <div className="flex w-full h-full items-center justify-center overflow-auto">

        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] text-foreground overflow-hidden rounded-none transition-all duration-300">

            {/* Retro Window Header */}
            <div className="flex items-center justify-between bg-foreground text-background px-4 border-b-4 border-foreground select-none font-mono">

              <span className="text-xs font-bold tracking-widest uppercase opacity-90">
                here are SOME INTRUCTIONS for better navigation and experience
              </span>

              <div className="text-[10px] sm:text-xs font-bold border-2 border-background bg-background text-foreground ml-1 px-2 py-0.5 select-none hidden sm:block">
                SYS_INIT
              </div>

            </div>

            {/* Main Content */}
            <div className="p-2 sm:p-4 md:p-6 flex flex-col gap-2 md:gap-4 text-left">

              {/* Name */}
              <div className="self-start px-2.5 py-1 mr-2 border-3 border-foreground bg-foreground/5 text-foreground font-mono text-xs sm:text-xs font-bold tracking-wider uppercase shadow-[3px_3px_0px_0px_var(--foreground)]">
                Hi, my name is
              </div>

              <div className="flex flex-row -space-y-1">

                <div className="flex flex-col mr-6">
                  <h1 className="text-foreground text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight select-none leading-none">
                    Sidharath<span className="text-foreground/30">.</span>
                  </h1>

                  <div className="w-24 sm:w-28 h-1 bg-foreground mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 sm:space-x-2 pt-2">
                  <a
                    href="https://github.com/Sxein"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <AiFillGithub className="size-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zayar-shein-980bb6286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <FaLinkedin className="size-6" />
                  </a>
                  <a
                    href="mailto:zayarshein.mmdev@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Address"
                    className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <MdEmail className="size-6" />
                  </a>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Resume"
                    className="p-2.5 border-3 border-foreground bg-card text-foreground rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <IoDocument className="size-6" />
                  </a>
                </div>

              </div>

              {/* Terminal Typing Prompt */}
              <div className="border-3 border-foreground bg-background p-3 shadow-[4px_4px_0px_0px_var(--foreground)] text-foreground font-mono">
                <div className="flex items-center gap-2 text-foreground/40 text-[10px] sm:text-xs mb-1 select-none">
                  <span className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse" />
                  <span>terminal_status: active</span>
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold flex items-center min-h-8 leading-relaxed">
                  <span className="text-foreground mr-2 select-none">&gt;</span>
                  <TypeAnimation
                    sequence={[
                      'i am a Software Engineer.', 2000,
                      'i like building end-to-end Products.', 2000,
                      'i enjoy learning new technologies.', 2000
                    ]}
                    speed={50}
                    style={{ display: 'inline' }}
                    repeat={Infinity}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl">
                a Software Engineer who enjoys building practical products across <span className="text-[#719ca1]">desktop, web, and mobile platforms</span>. I build software that <span className="text-[#719ca1]">solves real problems</span>.
              </p>

              {/* Navigation Guide */}
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 md:gap-4 pt-2">

                {/* App Icons Guide */}
                <div className="border-3 border-foreground bg-background p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--foreground)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                      <span className="text-[#22d3ee]">
                        system_apps
                      </span>
                    </div>

                    <div className="text-[9px] sm:text-[10px] font-mono border-2 border-foreground px-1.5 py-0.5">
                      05 APPS
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {[
                      {
                        label: "VSCode",
                        description: "Code",
                        icon: <FaVectorSquare className="size-5 sm:size-6" />,
                      },
                      {
                        label: "Terminal",
                        description: "CLI",
                        icon: <FaTerminal className="size-5 sm:size-6" />,
                      },
                      {
                        label: "BIOS",
                        description: "System",
                        icon: <MdMemory className="size-5 sm:size-6" />,
                      },
                      {
                        label: "Intro",
                        description: "About",
                        icon: <IoHomeOutline className="size-5 sm:size-6" />,
                      },
                      {
                        label: "Videos",
                        description: "Media",
                        icon: <IoPlayOutline className="size-5 sm:size-6" />,
                      },
                    ].map((app) => (
                      <div
                        key={app.label}
                        className="flex flex-col items-center justify-center gap-1 border-2 border-foreground bg-card p-2 sm:p-3 text-center"
                      >
                        <div className="text-foreground">
                          {app.icon}
                        </div>

                        <span className="font-mono text-[8px] sm:text-[10px] font-bold uppercase leading-tight">
                          {app.label}
                        </span>

                        <span className="hidden sm:block font-mono text-[8px] text-muted-foreground uppercase">
                          {app.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 font-mono text-[9px] sm:text-[10px] text-muted-foreground uppercase leading-relaxed">
                    select an app from the dock to explore the system
                  </p>
                </div>

                {/* Fullscreen Guide */}
                <div className="border-3 border-foreground bg-background p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--foreground)] flex flex-col justify-between">

                  <div>
                    <div className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-3">
                      <span className="text-[#22d3ee]">
                        display_mode
                      </span>
                    </div>

                    <div className="flex flex-row space-y-1">

                      <div className="flex flex-col items-center justify-center py-1">
                        <div className="border-3 border-foreground bg-card p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--foreground)]">
                          <IoExpandOutline className="size-7 sm:size-8" />
                        </div>

                        <div className="mt-3 text-center">
                          <div className="font-mono text-xs sm:text-sm font-black uppercase">
                            Fullscreen
                          </div>
                        </div>
                      </div>

                      <p className="mt-3 ml-4 font-mono text-[9px] sm:text-[10px] text-muted-foreground uppercase leading-relaxed">
                        enter fullscreen mode using the fullscreen icon in the top bar for Better Experience and easy Navigation
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
