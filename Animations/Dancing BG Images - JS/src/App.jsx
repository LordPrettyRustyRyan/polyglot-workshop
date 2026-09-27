"use client"

import { motion, LayoutGroup } from "motion/react"

import { TextRotate } from "./components/ui/text-rotate"
import Floating, {
  FloatingElement,
} from "./components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://static.wikia.nocookie.net/the-pigora/images/0/08/Emma_Myers_-_A_Minecraft_Movie.jpg",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://i2-prod.somersetlive.co.uk/article10141337.ece/ALTERNATES/s1200f/1_A-Minecraft-Movie-World-Premiere-Arrivals.jpg",
    title: "Neon Palm",
  },
  {
    url: "https://instagram.fixc1-10.fna.fbcdn.net/v/t51.82787-15/610768748_18301451047258411_2107947328337073940_n.webp?_nc_cat=107&_nc_map=urlgen_bucketless&ig_cache_key=MzgwMDczNDM5NzM2NTEwMDI5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=J4fL5Fjdr0sQ7kNvwFXoSB4&_nc_oc=AdoIZcZzkAFGX_BcON0S-sQVj5tXRXMTbz7RT6taoGsx1gr6zhJnMJW3EuGizZrCNhM&_nc_zt=23&_nc_ht=instagram.fixc1-10.fna&_nc_gid=V_QF2dC2_amx1S6VjfZT4A&_nc_ss=7aa8c&oh=00_AQJkwu1vEaybdw5pCT7DVSHjTLiyZr1vqj2Qyb3PdH4X0g&oe=6AA5AB57",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://i.pinimg.com/736x/3e/48/e1/3e48e1961f503b90c95ba5b21456ca17.jpg",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://pbs.twimg.com/media/HFTJ1ktb0AAF4qU.jpg",
    title: "Man in black shirt under blue sky",
  },
]

export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden">

      {/* ========================================
          FLOATING IMAGE LAYER
      ======================================== */}

      <div className="absolute inset-0 z-10">
        <Floating
          sensitivity={-0.5}
          className="relative w-full h-full"
        >

          {/* Top Left */}
          <FloatingElement
            depth={0.5}
            className="top-[8%] left-[3%] md:top-[15%] md:left-[5%]"
          >
            <motion.img
              src={exampleImages[0].url}
              alt={exampleImages[0].title}
              className="w-24 h-16 sm:w-32 sm:h-24 md:w-40 md:h-28 object-cover rounded-xl shadow-2xl -rotate-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          {/* Top Left - Bigger */}
          <FloatingElement
            depth={1}
            className="top-[3%] left-[18%] md:top-[5%] md:left-[15%]"
          >
            <motion.img
              src={exampleImages[1].url}
              alt={exampleImages[1].title}
              className="w-32 h-24 sm:w-44 sm:h-32 md:w-56 md:h-40 object-cover rounded-xl shadow-2xl -rotate-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          {/* Bottom Left */}
          <FloatingElement
            depth={4}
            className="bottom-[5%] left-[4%] md:bottom-[8%] md:left-[8%]"
          >
            <motion.img
              src={exampleImages[2].url}
              alt={exampleImages[2].title}
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 object-cover rounded-xl shadow-2xl -rotate-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          {/* Top Right */}
          <FloatingElement
            depth={2}
            className="top-[3%] right-[3%] md:top-[5%] md:right-[8%]"
          >
            <motion.img
              src={exampleImages[3].url}
              alt={exampleImages[3].title}
              className="w-32 h-28 sm:w-44 sm:h-36 md:w-56 md:h-44 object-cover rounded-xl shadow-2xl rotate-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          {/* Bottom Right */}
          <FloatingElement
            depth={1}
            className="bottom-[5%] right-[4%] md:bottom-[8%] md:right-[8%]"
          >
            <motion.img
              src={exampleImages[4].url}
              alt={exampleImages[4].title}
              className="w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-xl shadow-2xl rotate-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>

        </Floating>
      </div>


      {/* ========================================
          CENTER CONTENT
      ======================================== */}

      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">

        <div className="flex flex-col items-center justify-center w-[90%] max-w-200">

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3,
            }}
          >

            <span>Make your </span>

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
                    "weird",
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            with a growing library of ready-to-use React
            components & microinteractions. free & open source.
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
              Check docs →
            </motion.a>

            <motion.a
              href="https://github.com/danielpetho/fancy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#0015ff] text-white font-semibold shadow-2xl"
              whileHover={{
                scale: 1.05,
              }}
            >
              ★ on GitHub
            </motion.a>

          </div>

        </div>

      </div>

    </main>
  )
}