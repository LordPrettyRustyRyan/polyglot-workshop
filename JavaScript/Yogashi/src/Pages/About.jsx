import { HiArrowRight } from "react-icons/hi";
import Certifications from "../Components/ui/certifications";
import Footer from "../Components/ui/footer";
import Instructors from "../Components/ui/instructors";
import Navbar from "../Components/ui/navbar";
import StudioInfo from "../Components/ui/studio-info";

export default function About() {
    return (
        <main className="w-full">
            <Navbar />

            {/* ==================== TITLE ==================== */}
            <div className="relative flex items-center justify-center overflow-hidden bg-yoga-tropical-teal px-6 py-24 text-center md:px-12">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                    <img
                        src="/mandala-right.png" alt="" aria-hidden="true"
                        className="h-auto w-[320px] max-w-[90%] object-contain sm:w-112.5 md:w-137.5 lg:w-180"
                    />
                </div>

                <h1 className="relative z-10 font-serif text-5xl font-normal tracking-wide text-yoga-olive-dark md:text-7xl">
                    About Us
                </h1>
            </div>

            <StudioInfo />

            <section className="bg-[#edf4ee] px-6 pb-10 text-[#1a2e26] sm:pb-10 md:px-16 lg:px-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-2 lg:grid-cols-12 lg:gap-16">

                    <div className="relative flex min-h-95 items-center justify-center sm:min-h-110 lg:col-span-6 lg:min-h-140">
                        <div className="absolute h-72 w-72 rounded-full bg-white shadow-sm sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-112.5 lg:w-112.5" />

                        <div className="relative z-10 flex h-full w-full items-end justify-center">
                            <img src="/founder.png" alt="Aashivani, Founder and Instructor"
                                className="relative z-10 h-87.5 w-auto max-w-[90%] object-contain object-bottom sm:h-102.5 md:h-115 lg:h-130"
                            />
                        </div>

                        <div className="absolute rotate-350 right-[8%] z-20 sm:bottom-5 sm:right-[10%] md:right-[12%] lg:bottom-8 lg:right-[8%]">
                            <span className="whitespace-nowrap signature text-3xl italic text-[#b89753] select-none sm:text-4xl md:text-5xl">
                                Aashivani
                            </span>
                        </div>
                    </div>

                    {/* ==================== RIGHT: QUOTE & AUTHOR INFO ==================== */}
                    <div className="space-y-6 lg:col-span-6">
                        <div className="h-0.5 w-12 bg-yoga-terracotta" />

                        <blockquote className="font-serif text-lg italic leading-relaxed text-[#1a2e26] sm:text-xl lg:text-2xl">
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua dolore magna aliqua ut enim ad minim veniam.&rdquo;
                        </blockquote>

                        <div className="space-y-1 pt-4">
                            <h4 className="faculty-glyphic-400 text-md font-semibold uppercase tracking-widest text-[#1a2e26]">
                                Aashivani
                            </h4>

                            <p className="text-sm tracking-wide text-[#52685e]">
                                Founder, Instructor
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full min-h-150 lg:min-h-175 flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1600')` }}
                >
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full py-16">
                    <div className="max-w-md bg-[#edf4ee] text-[#1a2e26] p-8 sm:p-12 shadow-2xl">
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight mb-6">
                            Discover Our Yoga Studio
                        </h2>

                        <p className="font-sans text-sm sm:text-base leading-relaxed text-[#2c4037] mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <a
                            href="#discover"
                            className="inline-flex items-center space-x-2 font-semibold text-sm tracking-wide text-[#2b6452] hover:text-yoga-terracotta transition-colors group"
                        >
                            <span>Discover Now</span>
                            <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            <Certifications />
            <Instructors />
            <Footer />

        </main>
    );
}