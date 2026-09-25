export default function Certifications() {
    const logos = [
        {
            name: 'logoipsum 1',
            icon: (
                <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2a15 15 0 010 20M2 12a15 15 0 0120 0" stroke="currentColor" strokeWidth="2" />
                </svg>
            ),
        },
        {
            name: 'logoipsum 2',
            icon: (
                <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="3" y="3" width="8" height="18" rx="1" />
                    <circle cx="17" cy="12" r="5" />
                </svg>
            ),
        },
        {
            name: 'logoipsum 3',
            icon: (
                <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h8v8H3zM13 7h8M13 17h8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            ),
        },
        {
            name: 'logoipsum 4',
            icon: (
                <svg className="w-8 h-8 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="12" cy="18" r="3" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full bg-[#f2f7f4] py-10 px-6 md:px-16 border-y border-[#e2ece5]">
            <div className="max-w-[86%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

                <div className="tracking-[0.4em] text-sm font-semibold text-[#2d7a60] uppercase whitespace-nowrap">
                    Our Certification
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 md:gap-16 w-full opacity-80">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300">
                            {logo.icon}
                            <span className="font-bold tracking-tight text-xl text-slate-800 font-sans">
                                logoipsum
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}