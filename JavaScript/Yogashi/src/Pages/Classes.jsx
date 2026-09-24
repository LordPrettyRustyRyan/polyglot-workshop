import Footer from "../Components/ui/footer";
import Navbar from "../Components/ui/navbar";
import PopularClasses from "../Components/ui/popularclasses";
import VideoSection from "../Components/ui/videosection";
import YogaStyles from "../Components/ui/yogastyles";

export default function Classes() {
    return (
        <>
            <Navbar />
            <div className="w-full bg-yoga-frosted-mint min-h-screen font-sans overflow-x-hidden">

                {/* Classes Header Section with Mandala Background */}
                <div className="relative bg-yoga-tropical-teal py-24 px-6 md:px-12 text-center overflow-hidden flex items-center justify-center">
                    {/* Subtle decorative background mandala outline effect */}
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                        <div className="w-[600px] h-[600px] rounded-full border-2 border-yoga-olive-dark"></div>
                        <div className="absolute w-[450px] h-[450px] rounded-full border border-yoga-olive-dark"></div>
                    </div>

                    {/* Main Title (leaving bottom padding so the overlapping image has space) */}
                    <h1 className="relative z-10 font-serif text-5xl md:text-7xl text-yoga-olive-dark font-normal tracking-wide pb-12 md:pb-16">
                        Classes
                    </h1>
                </div>

                {/* ==================== MAIN CONTENT ==================== */}
                <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:py-24">

                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">

                        {/* ==================== IMAGE ==================== */}
                        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end">

                            <div
                                className="
                    relative
                    flex
                    w-full
                    max-w-sm
                    items-center
                    justify-center
                    md:max-w-md
                    lg:-mt-44
                    lg:max-w-md
                "
                            >

                                {/* ==================== YOGA IMAGE ==================== */}
                                <img
                                    src="/classes-hero.png"
                                    alt="Yoga Pose"
                                    className="
                    relative
                    z-10
                    h-auto
                    w-full
                    object-contain
                    scale-105
                    "
                                />

                                {/* ==================== CIRCULAR BACKDROP ==================== */}
                                <div
                                    className="
                                            absolute
                                            z-0
                                            h-72
                                            w-72
                                            rounded-full
                                            translate-y-14
                                            bg-white
                                            md:h-96
                                            md:w-96
                                            lg:h-[26rem]
                                            lg:w-[26rem]
                                        "
                                />

                            </div>
                        </div>


                        {/* ==================== TEXT CONTENT ==================== */}
                        <div className="order-2 z-10 lg:order-1 lg:col-span-7">

                            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-yoga-olive-light">
                                Yoga For Everyone
                            </span>

                            <h2 className="mb-6 font-serif text-3xl text-yoga-olive-dark md:text-5xl">
                                What You Will Get
                            </h2>

                            <p className="mb-10 max-w-xl text-base leading-relaxed text-yoga-olive-dark/80 md:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                                dapibus leo.
                            </p>


                            {/* ==================== FEATURE GRID ==================== */}
                            <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2">

                                <div>
                                    <h3 className="mb-2 font-serif text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        IMPROVE FLEXIBILITY
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 font-serif text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        MUSCLES STRENGTH
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 font-serif text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        PERFECTS POSTURE
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-2 font-serif text-sm font-semibold tracking-wider text-yoga-olive-dark md:text-base">
                                        INCREASE BLOOD FLOW
                                    </h3>

                                    <p className="text-xs leading-relaxed text-yoga-olive-dark/70 md:text-sm">
                                        Eu egestas nunc, congue et mauris sed venenatis at volutpat.
                                    </p>
                                </div>

                            </div>


                            {/* ==================== ACTION BUTTON ==================== */}
                            <button
                                className="
                    cursor-pointer
                    rounded-full
                    bg-yoga-olive-dark
                    px-8
                    py-4
                    text-xs
                    uppercase
                    tracking-widest
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-yoga-olive-light
                    md:text-sm
                "
                            >
                                Join Class Today
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <YogaStyles />

            <PopularClasses />

            <VideoSection
                videoSrc="/classes-video.mp4"
                posterSrc="/classes-video-poster.png"
            />

            <Footer />
        </>
    );
}