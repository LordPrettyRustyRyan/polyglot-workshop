import { FaStar } from "react-icons/fa";

export default function FeaturedReview({
    backgroundColor = "bg-white",
    accentColor = "text-yoga-terracotta",
    showButton = false,
}) {
    return (
        <section className={`${backgroundColor} py-16 lg:py-24`}>
            <div className="mx-auto grid max-w-[78%] grid-cols-1 gap-y-10 lg:grid-cols-[0.7fr_1fr] lg:gap-x-5 lg:gap-y-0">

                {/* ==================== FEATURED IMAGE ==================== */}
                <div className="relative aspect-square w-full max-w-full overflow-hidden lg:justify-self-end">
                    <img
                        src="/testimonial-featured.jpg"
                        alt="Featured yoga testimonial"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                {/* ==================== REVIEW CONTENT ==================== */}
                <div className="flex items-center sm:pl-10 sm:pr-10 md:pr-10 lg:pr-0">
                    <div className="max-w-xl">
                        <span className={`text-xs font-semibold uppercase tracking-[0.4rem] ${accentColor}`}>
                            Featured Reviews
                        </span>

                        <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-yoga-olive-dark sm:text-5xl">
                            Yoga Studio Like No Others!
                        </h2>

                        <div className={`mt-6 flex gap-1 ${accentColor}`}>
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="h-5 w-5" />
                            ))}
                        </div>

                        <blockquote className="mt-6 font-serif text-lg leading-relaxed text-yoga-olive-dark/90 md:text-xl">
                            "Aliquam faucibus scelerisque odio aliquet platea scelerisque in metus nunc nunc nisl lacus, nec
                            dignissim et, ultricies vitae suspendisse massa egestas velit in massa eget nulla pharetra tortor
                            sagittis sagittis massa nec."
                        </blockquote>

                        {showButton && (
                            <div className="mt-8 flex items-center justify-between">
                                <p className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-yoga-olive-dark">
                                    Jessica Lim
                                </p>

                                <button className="cursor-pointer rounded-full border border-yoga-olive-dark bg-yoga-olive-dark px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white 
                                    transition-all duration-300 hover:border-white hover:bg-white hover:text-yoga-olive-dark"
                                >
                                    Check All Reviews
                                </button>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}