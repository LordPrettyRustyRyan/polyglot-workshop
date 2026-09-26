import Hero from "../Components/ui/home-hero";
import Navbar from "../Components/ui/navbar";
import YogaStyles from "../Components/ui/yoga-styles";
import PopularClasses from "../Components/ui/popular-classes";
import VideoSection from "../Components/ui/video-section";
import FeaturedReview from "../Components/ui/featured-review";
import Footer from "../Components/ui/footer";
import Instructors from "../Components/ui/instructors";
import Certifications from "../Components/ui/certifications";
import StudioInfo from "../Components/ui/studio-info";
import { useEffect, useRef, useState } from "react";

/* ==================== SCROLL FADE TEXT ==================== */
function ScrollFadeText({ children, className = "" }) {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.7, }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className={`transition-opacity duration-2200 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {children}
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="relative hidden md:block">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 translate-y-10 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[87%] grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">

            {/* ==================== LEFT COLUMN ==================== */}
            <div className="space-y-12">
              <ScrollFadeText className="text-center md:text-left">
                <div className="mx-auto max-w-sm md:mx-0">
                  <div className="mx-auto mb-4 h-px w-10 bg-yoga-terracotta md:mx-0" />

                  <p className="font-serif text-lg italic leading-relaxed text-yoga-olive-dark">
                    "A space to slow down, breathe deeply, and return to yourself."
                  </p>

                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-yoga-olive-light">
                    Move gently. Live fully.
                  </span>
                </div>
              </ScrollFadeText>

              <ScrollFadeText className="text-center md:text-left">
                <div className="mx-auto max-w-sm md:mx-0">
                  <div className="mx-auto mb-4 h-px w-10 bg-yoga-terracotta md:mx-0" />

                  <p className="font-serif text-lg italic leading-relaxed text-yoga-olive-dark">
                    "Every practice is an invitation to listen, reconnect, and grow with intention."
                  </p>

                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-yoga-olive-light">
                    Breathe. Connect. Grow.
                  </span>
                </div>
              </ScrollFadeText>
            </div>

            {/* ==================== RIGHT COLUMN ==================== */}
            <div className="space-y-12">
              <ScrollFadeText className="text-center md:text-right">
                <div className="mx-auto max-w-sm md:ml-auto md:mr-0">
                  <div className="mx-auto mb-4 h-px w-10 bg-yoga-terracotta md:ml-auto md:mr-0" />

                  <p className="font-serif text-lg italic leading-relaxed text-yoga-olive-dark">
                    "There is no perfect pose. Only the next breath,
                    the next movement, the next moment."
                  </p>

                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-yoga-olive-light">
                    Come as you are.
                  </span>
                </div>
              </ScrollFadeText>

              <ScrollFadeText className="text-center md:text-right">
                <div className="mx-auto max-w-sm md:ml-auto md:mr-0">
                  <div className="mx-auto mb-4 h-px w-10 bg-yoga-terracotta md:ml-auto md:mr-0" />

                  <p className="font-serif text-lg italic leading-relaxed text-yoga-olive-dark">
                    "Strength begins with stillness, and transformation
                    begins with showing up."
                  </p>

                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-yoga-olive-light">
                    Be present. Be patient.
                  </span>
                </div>
              </ScrollFadeText>
            </div>

          </div>
        </div>
      </div>

      <YogaStyles />

      <VideoSection videoSrc="/home-video.mp4" posterSrc="/home-video-poster.png" />

      <StudioInfo variant="home" />

      <PopularClasses />

      <FeaturedReview backgroundColor="bg-dog" accentColor="text-white" showButton/>

      <Certifications />

      <Instructors />

      <Footer />
    </>
  );
}

export default Home;