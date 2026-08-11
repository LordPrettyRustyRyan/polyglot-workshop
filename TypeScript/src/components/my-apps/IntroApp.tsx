import { Link } from "react-scroll";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export function IntroApp() {
  return (
    // <section id="home" className="h-400 w-380 flex items-center justify-center pb-10 overflow-hidden">
    <section id="home" className="h-full w-full overflow-y-auto overflow-x-hidden">

      <div className="min-h-full flex items-center justify-center">

        {/* h-screen px-4 md:px-8 */}
        {/* <div className="max-w-4xl w-full mx-auto"> */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_var(--foreground)] text-foreground overflow-hidden rounded-none transition-all duration-300">

            {/* Retro Window Header */}
            <div className="flex items-center justify-between bg-foreground text-background px-4 py-3 border-b-4 border-foreground select-none font-mono">
              <div className="flex items-center gap-2">
                {/* <span className="w-3 h-3 rounded-full border-2 border-background bg-background" />
                <span className="w-3 h-3 rounded-full border-2 border-background bg-background/50" />
                <span className="w-3 h-3 rounded-full border-2 border-background bg-transparent" /> */}
              </div>
              {/* <span className="text-xs font-bold tracking-widest uppercase opacity-90">
                INTRODUCTION.EXE
              </span> */}
              <div className="text-[10px] sm:text-xs font-bold border-2 border-background bg-background text-foreground px-2 py-0.5 select-none hidden sm:block">
                SYS_INIT
              </div>
            </div>

            {/* Main Content */}
            <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-6 text-left">

              {/* Greeting Badge */}
              <div className="self-start inline-flex items-center gap-2 px-2.5 py-1 border-3 border-foreground bg-foreground/5 text-foreground font-mono text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[3px_3px_0px_0px_var(--foreground)]">
                Hi, my name is
              </div>

              {/* Name */}
              <div className="space-y-1">
                <h1 className="text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight select-none leading-none">
                  Sidharth<span className="text-foreground/30">.</span>
                </h1>
                <div className="w-24 sm:w-28 h-2.5 bg-foreground mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
              </div>

              {/* Terminal Typing Prompt */}
              <div className="border-3 border-foreground bg-background p-3 shadow-[4px_4px_0px_0px_var(--foreground)] text-foreground font-mono">
                <div className="flex items-center gap-2 text-foreground/40 text-[10px] sm:text-xs mb-1 select-none">
                  <span className="w-2 h-2 rounded-full bg-foreground/60 animate-pulse" />
                  <span>terminal_status: active</span>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold flex items-center min-h-8 leading-relaxed">
                  <span className="text-foreground mr-2 select-none">&gt;</span>
                  <TypeAnimation
                    sequence={[
                      'i am a Software Engineer.', 2000,
                      'i love building end-to-end Products.', 2000,
                      'i enjoy learning new technologies.', 2000
                    ]}
                    speed={50}
                    style={{ display: 'inline' }}
                    repeat={Infinity}
                  />
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
                Developed and deployed end-to-end products ranging from SaaS platforms and cross-platform mobile apps to desktop utilities and automation tools.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1 w-full font-mono">
                <Link
                  to="#"
                  smooth={true}
                  duration={600}
                  offset={-64}
                  className="w-full sm:w-auto cursor-pointer border-3 border-foreground bg-card text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center"
                >
                  View My Projects
                </Link>

                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto cursor-pointer border-3 border-dashed border-foreground bg-card text-foreground text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-none shadow-[4px_4px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:border-solid hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                >
                  <IoDocumentTextOutline className="size-4 shrink-0" />
                  View Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 sm:space-x-4 pt-2">
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
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
