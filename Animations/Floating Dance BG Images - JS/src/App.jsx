"use client"

import { motion, LayoutGroup } from "motion/react"

import { TextRotate } from "./components/ui/text-rotate"
import FloatingComponent from "./components/ui/floating-dance"


const exampleImages = [
  {
    src: "https://64.media.tumblr.com/b73273e035b127a3fa783eebe74aaff6/8a6c4d624a1a5502-65/s1280x1920/65fbeb9726ac822a201a13efe36f32a1d0df222c.gifv",
    alt: "Emma Myers",
    className:
      "top-[8%] left-[3%] md:top-[15%] md:left-[5%] w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-28 -rotate-3",
    depth: 0.5,
    duration: 7,
    distance: 14,
  },

  {
    src: "https://i2-prod.somersetlive.co.uk/article10141337.ece/ALTERNATES/s1200f/1_A-Minecraft-Movie-World-Premiere-Arrivals.jpg",
    alt: "Minecraft Movie premiere",
    className:
      "top-[3%] left-[18%] md:top-[5%] md:left-[15%] w-32 h-24 sm:w-44 sm:h-32 md:w-56 md:h-40 -rotate-12",
    depth: 1,
    duration: 6,
    distance: 20,
  },

  {
    src: "https://c.tenor.com/zBWhjEXPQXAAAAAC/tenor.gif",
    alt: "Crowd",
    className:
      "bottom-[5%] left-[4%] md:bottom-[8%] md:left-[8%] w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 -rotate-4",
    depth: 4,
    duration: 8,
    distance: 24,
  },

  {
    src: "https://64.media.tumblr.com/4d58d486eb02d080329a4eabb68145cf/5a74efa53187f8c2-70/s500x750/7e6ff76554529de93441a384ab14f72654c40264.gifv",
    alt: "Crystal blue water",
    className:
      "top-[3%] right-[3%] md:top-[5%] md:right-[8%] w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-44 rotate-6",
    depth: 2,
    duration: 7,
    distance: 18,
  },

  {
    src: "https://pbs.twimg.com/media/HFTJ1ktb0AAF4qU.jpg",
    alt: "Man under blue sky",
    className:
      "bottom-[5%] right-[4%] md:bottom-[8%] md:right-[8%] w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rotate-[12deg]",
    depth: 1,
    duration: 9,
    distance: 22,
  },
]


export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden">

      {/* ========================================
          FLOATING + DANCING IMAGES
      ======================================== */}

      <FloatingComponent
        images={exampleImages}
        className="absolute inset-0 min-h-0 h-full py-0"
      />


      {/* ========================================
          CENTER CONTENT
      ======================================== */}

      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">

        <div className="flex flex-col items-center justify-center w-[90%] max-w-200">

          {/* Heading */}

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center leading-tight tracking-tight"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3,
            }}
          >

            <span>
              Make your{" "}
            </span>

            <LayoutGroup>

              <motion.span
                layout
                className="flex justify-center whitespace-pre"
              >

                <motion.span
                  layout
                  className="whitespace-pre"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                >
                  website{" "}
                </motion.span>

                <TextRotate
                  texts={[
                    "fancy",
                    "fun",
                    "lovely ♥",
                    "🪩 funky",
                    "💃🕺",
                    "sexy",
                    "🕶️ cool",
                    "go 🚀",
                    "🔥🔥🔥",
                    "over-animated?",
                    "pop ✨",
                    "rock 🤘",
                  ]}
                  mainClassName="overflow-hidden text-[#0015ff]"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                />

              </motion.span>

            </LayoutGroup>
          </motion.h1>


          {/* Description */}
          <motion.p
            className="mt-6 text-sm sm:text-lg md:text-xl text-center max-w-xl"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            i was just testing some website animations with motion, gsap, and shadcn,
            but forget that, look how cute is Emma Myers....
            Agree?
          </motion.p>


          {/* Buttons */}
          <div className="flex gap-4 mt-10 pointer-events-auto">

            <motion.a
              href="#"
              className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow-2xl"
              whileHover={{
                scale: 1.05,
              }}
            >
              Yes, Affirmative
            </motion.a>

            <motion.a
              href="#"
              className="px-6 py-3 rounded-full bg-[#1626d7] text-white font-semibold shadow-2xl"
              whileHover={{
                scale: 1.05,
              }}
            >
              Yes, but in Blue
            </motion.a>

          </div>

        </div>

      </div>

    </main>
  )
}