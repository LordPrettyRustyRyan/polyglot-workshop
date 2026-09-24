import { FaStar } from "react-icons/fa";

export default function FeaturedReview({
    backgroundColor = "bg-white",
}) {
    return (
        <section className={`${backgroundColor} p-20`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* ==================== FEATURED IMAGE ==================== */}
                <div className="relative min-h-[420px] overflow-hidden md:min-h-[500px] lg:min-h-[600px]">
                    <img
                        src="/testimonial-featured.jpg"
                        alt="Featured yoga testimonial"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* ==================== IMAGE OVERLAY ==================== */}
                    <div className="absolute inset-0 bg-yoga-olive-dark/10" />
                </div>

                {/* ==================== REVIEW CONTENT ==================== */}
                <div className="flex items-center px-6 py-16 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                    <div className="max-w-xl">

                        {/* ==================== EYEBROW ==================== */}
                        <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-yoga-terracotta">
                            Featured Reviews
                        </p>

                        {/* ==================== TITLE ==================== */}
                        <h2 className="mt-4 font-serif text-4xl font-normal leading-tight text-yoga-olive-dark sm:text-5xl">
                            Yoga Studio Like No Others!
                        </h2>

                        {/* ==================== STARS ==================== */}
                        <div className="mt-6 flex gap-1 text-yoga-ochre">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="h-5 w-5" />
                            ))}
                        </div>

                        {/* ==================== REVIEW ==================== */}
                        <blockquote className="mt-6 font-serif text-xl leading-relaxed text-yoga-olive-dark/80 md:text-2xl">
                            "Aliquam faucibus scelerisque odio aliquet
                            platea scelerisque in metus nunc nunc nisl
                            lacus, nec dignissim et, ultricies vitae
                            suspendisse massa egestas velit in massa eget
                            nulla pharetra tortor sagittis sagittis massa
                            nec."
                        </blockquote>

                        {/* ==================== REVIEWER ==================== */}
                        <div className="mt-8">
                            <div className="h-px w-12 bg-yoga-terracotta" />

                            <p className="mt-4 font-sans text-sm font-bold uppercase tracking-[0.15em] text-yoga-olive-dark">
                                Jessica Lim
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}