export default function PopularClasses() {
    const classesData = [
        {
            title: "Bend & Stretch",
            description: "Tincidunt nisl amet in urna integer feugiat amet.",
            image: "/classes_1.jpg",
        },
        {
            title: "Rise & Shine",
            description: "Sed eget commodo ipsum id egestas malesuada nisl.",
            image: "/classes_2.jpg",
        },
        {
            title: "Foundation in Flow",
            description: "Scelerisque vivamus aliquam, vulputate nisl arcu orci in.",
            image: "/classes_3.jpg",
        },
        {
            title: "Vinyasa for Vitality",
            description: "Massa integer eu mattis neque interdum ut fusce.",
            image: "/classes_4.jpg",
        },
    ];

    return (
        <section className="w-full overflow-x-hidden bg-[#f4f7f4] px-6 py-20 font-sans md:px-12 md:py-24">
            <div className="mx-auto max-w-[86%]">

                <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div>
                        <span className="text-xs tracking-[0.4rem] font-semibold uppercase text-[#2b6452]">
                            Explore Our Practice
                        </span>

                        <h2 className="my-4 font-serif text-4xl font-normal tracking-tight text-yoga-olive-dark sm:text-5xl">
                            Popular Classes
                        </h2>

                        <p className="max-w-xl text-sm leading-relaxed text-yoga-olive-dark/70 md:text-base">
                            Morbi lobortis morbi dignissim sodales eget mauris turpis
                            interdum sagittis sed cursus nunc nulla congue quis.
                        </p>
                    </div>

                    <div>
                        <button
                            className="cursor-pointer whitespace-nowrap border border-yoga-olive-dark bg-yoga-olive-dark
                                px-6 py-3 md:px-7 text-xs font-medium uppercase tracking-[0.15em] text-white rounded-full
                                transition-all duration-300 hover:bg-yoga-olive-light hover:border-yoga-olive-light
                            "
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>

                {/* ==================== CLASSES GRID ==================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {classesData.map((item, index) => (
                        <div
                            key={index}
                            className="group flex h-full flex-col shadow-sm transition-all duration-500 ease-out bg-white
                                hover:-translate-y-2 hover:border-yoga-olive-dark/30 hover:shadow-xl
                            "
                        >

                            {/* ==================== IMAGE ==================== */}
                            <div className="relative aspect-4/3 overflow-hidden bg-yoga-frosted-mint">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

                                {/* ==================== IMAGE OVERLAY ==================== */}
                                <div className="absolute inset-0 bg-yoga-olive-dark/0 transition-all duration-500 group-hover:bg-yoga-olive-dark/10" />

                                <span className="absolute left-4 top-4 bg-white/60 px-2 py-1 font-serif font-semibold text-sm text-[#2b6452] opacity-0 backdrop-blur-md drop-shadow-md transition-all duration-500 group-hover:opacity-100">
                                    0{index + 1}
                                </span>
                            </div>

                            {/* ==================== CARD CONTENT ==================== */}
                            <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                                <div className=" mb-5 h-px w-8 bg-yoga-terracotta transition-all duration-500 group-hover:w-14" />

                                <h3 className=" mb-3 font-serif text-xl font-normal text-yoga-olive-dark transition-colors duration-300 group-hover:text-[#2b6452] sm:text-2xl">
                                    {item.title}
                                </h3>

                                <p className="mb-6 line-clamp-2 text-xs leading-relaxed text-yoga-olive-dark/65 md:text-sm">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <a href="#learn-more"
                                        className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.12em] text-yoga-olive-dark 
                                            transition-colors duration-300 group-hover:text-yoga-terracotta
                                        "
                                    >
                                        <span>Learn More</span>
                                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2"> → </span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}