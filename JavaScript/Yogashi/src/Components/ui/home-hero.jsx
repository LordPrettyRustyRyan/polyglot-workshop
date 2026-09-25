import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-yoga-frosted-mint text-yoga-olive-dark py-10 sm:py-12 lg:py-14">

      {/* ==================== MANDALA DECORATIONS ==================== */}
      {/* TOP LEFT MANDALA */}
      <img src="/mandala-left.png" alt="" aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 z-0 w-60 opacity-15 sm:-left-28 sm:-top-28 sm:w-96 lg:-left-32 lg:-top-32 lg:w-120"
      />

      {/* TOP RIGHT MANDALA */}
      <img src="/mandala-right.png" alt="" aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 z-0 w-60 opacity-15 sm:-right-28 sm:-top-28 sm:w-96 lg:-right-32 lg:-top-32 lg:w-120"
      />

      {/* SMALL CENTER TOP MANDALA */}
      <img src="/mandala-top.png" alt="" aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-y-70 z-0 w-16 -translate-x-1/2 opacity-20 sm:w-80 lg:w-96"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center lg:min-h-175 lg:flex-row lg:items-center lg:justify-center">

          {/* TEXT CONTENT */}
          <div className="relative z-20 order-1 w-full text-center lg:absolute lg:left-0 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2 lg:text-left">
            <h1 className="faculty-glyphic-550 text-4xl tracking-tight text-yoga-olive-dark sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-yoga-terracotta">Ashi's</span> <br />
              Yoga Studio
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-yoga-olive-dark/80 sm:mt-6 sm:text-base md:text-lg lg:mx-0">
              i started my own studio, cause everywhere else you'll find assholes for colleagues (they're as bad as trainers),
              so if y'all want a trainer who's not a bitch :
            </p>

            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:justify-start">
              <a href="#contact" className="w-[80%] rounded-full bg-yoga-olive-dark px-8 py-3.5 text-center font-medium text-yoga-frosted-mint shadow-md transition-all hover:bg-yoga-olive-light sm:w-auto">
                Join Class Today
              </a>
              <a href="#about" className="group flex items-center justify-center space-x-2 py-3.5 font-medium text-yoga-olive-dark transition-colors hover:text-yoga-terracotta">
                <span>Learn More</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* CENTRAL IMAGE */}
          <div className="relative z-10 order-2 mt-8 flex w-full items-center justify-center sm:mt-10 lg:mt-0">
            <div className="absolute left-1/2 top-1/2 z-0 aspect-square w-[80vw] max-w-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yoga-olive-light/15 sm:w-[70vw] sm:max-w-165 lg:w-[75vw] lg:max-w-175" />
            <img src="/hero-bg.png" alt="Yogashi Studio Pose"
              className="relative z-10 h-auto w-auto max-w-[82%] object-contain drop-shadow-xl sm:max-w-[75%] md:max-w-[68%] lg:max-w-full"
            />
          </div>

          {/* SOCIAL MEDIA */}
          <div className="absolute right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col space-y-4 text-yoga-olive-dark xl:flex">
            <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta"><FaFacebookF size={20} /></a>
            <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta"><FaTwitter size={20} /></a>
            <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta"><FaInstagram size={20} /></a>
            <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta"><FaYoutube size={20} /></a>
          </div>

        </div>
      </div>
    </section>
  );
}