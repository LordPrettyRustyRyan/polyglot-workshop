import Footer from "../Components/ui/footer";
import Navbar from "../Components/ui/navbar";
import PopularClasses from "../Components/ui/popular-classes";
import VideoSection from "../Components/ui/video-section";
import YogaStyles from "../Components/ui/yoga-styles";

export default function Classes() {
    return (
        <>
            <Navbar />

            <div className="w-full bg-yoga-frosted-mint min-h-screen font-sans overflow-x-hidden">

                <div className="relative bg-yoga-tropical-teal py-24 px-6 md:px-12 text-center overflow-hidden flex items-center justify-center">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                        <img src="/mandala-right.png" alt="" aria-hidden="true"
                            className="h-auto w-[320px] max-w-[90%] object-contain sm:w-112.5 md:w-137.5 lg:w-180"
                        />
                    </div>

                    <h1 className="relative z-10 font-serif text-5xl md:text-7xl text-yoga-olive-dark font-normal tracking-wide">
                        Classes
                    </h1>
                </div>

                {/* ==================== MAIN CONTENT ==================== */}
                <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">

                        {/* ==================== IMAGE ==================== */}
                        <div className="order-1 mb-4 flex justify-center lg:order-2 lg:col-span-5">
                            <div className="relative flex w-full items-center justify-center -mt-16 -mb-10 
                                sm:-mt-20 sm:-mb-10 md:-mt-24 md:-mb-10 lg:-mt-44 lg:-mb-20"
                            >
                                {/* ==================== CIRCULAR BACKDROP ==================== */}
                                <div className="absolute left-1/2 top-1/2 z-0 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white sm:w-[60%] md:w-[60%] lg:w-[90%]" />

                                {/* ==================== YOGA IMAGE ==================== */}
                                <img src="/classes-hero.png" alt="Yoga Pose" className="relative z-10 h-auto w-auto max-w-[60%] object-contain drop-shadow-xl sm:max-w-[70%] md:max-w-[60%] lg:max-w-[110%]" />
                            </div>
                        </div>

                        {/* ==================== TEXT CONTENT ==================== */}
                        <div className="order-2 z-10 lg:order-1 lg:col-span-7">
                            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.4rem] text-yoga-olive-light">
                                Yoga For Everyone
                            </span>

                            <h2 className="mt-4 mb-6 font-serif text-3xl text-yoga-olive-dark md:text-5xl"> What You Will Get </h2>

                            <p className="mb-10 max-w-xl text-base leading-relaxed text-yoga-olive-dark/80 md:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            {/* ==================== FEATURE GRID ==================== */}
                            <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <div>
                                    <h3 className="mb-2 faculty-glyphic-400 text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        IMPROVE FLEXIBILITY
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 faculty-glyphic-400 text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        MUSCLES STRENGTH
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 faculty-glyphic-400 text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        PERFECTS POSTURE
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 faculty-glyphic-400 text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        INCREASE BLOOD FLOW
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>
                            </div>


                            {/* ==================== ACTION BUTTON ==================== */}
                            <button className="cursor-pointer rounded-full bg-yoga-olive-dark px-8 py-4 text-xs uppercase tracking-widest text-white shadow-md 
                                transition-all duration-300 hover:bg-yoga-olive-light md:text-sm"
                            >
                                Join Class Today
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <YogaStyles />

            <PopularClasses />

            <VideoSection videoSrc="/classes-video.mp4" posterSrc="/classes-video-poster.png" />

            <Footer />
        </>
    );
}