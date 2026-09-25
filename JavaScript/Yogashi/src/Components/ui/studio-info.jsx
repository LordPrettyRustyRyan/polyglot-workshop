import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function StudioInfo({ variant = "about" }) {
    const isHome = variant === "home";

    return (
        <section className="bg-[#edf4ee] px-6 py-16 text-[#1a2e26] sm:py-20 md:px-16 lg:px-24">

            {/* ==================== HOME LAYOUT ==================== */}
            {isHome ? (
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* ==================== LEFT: STUDIO INFO ==================== */}
                    <div className="space-y-6 lg:col-span-6">

                        {/* ==================== LABEL ==================== */}
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b6452]">
                            Our Studio
                        </span>

                        {/* ==================== HEADING ==================== */}
                        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                            Yoga Studio in the City of New York
                        </h2>

                        {/* ==================== LOCATION ==================== */}
                        <div className="flex items-start gap-2 pt-2 text-[#1a2e26]">
                            <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-[#2b6452]" />

                            <span className="font-medium text-base sm:text-lg">
                                123 5th Avenue, New York, NY 12004, USA.
                            </span>
                        </div>

                        {/* ==================== MAP BUTTON ==================== */}
                        <div className="pt-2">
                            <a
                                href="#map"
                                className="inline-flex items-center gap-2 rounded-full border border-[#2b6452] px-5 py-2.5 text-sm font-medium text-[#1a2e26] transition-colors hover:bg-[#2b6452] hover:text-white sm:px-6 sm:py-3"
                            >
                                <span>Find Us On Map</span>
                                <FaExternalLinkAlt className="h-3.5 w-3.5" />
                            </a>
                        </div>

                    </div>


                    {/* ==================== RIGHT: DESCRIPTION ==================== */}
                    <div className="space-y-6 pt-2 lg:col-span-6">

                        {/* ==================== ACCENT LINE ==================== */}
                        <div className="mb-8 h-0.5 w-12 bg-[#2b6452]" />

                        {/* ==================== FIRST PARAGRAPH ==================== */}
                        <p className="font-sans text-base leading-relaxed text-[#2c4037] sm:text-base">
                            Commodo eu hendrerit facilisis viverra vulputate sed turpis odio natoque justo semper mauris enim lorem mattis risus imperdiet pretium, sed vel facilisi arcu, turpis pharetra, eu euismod amet, vestibulum scelerisque bibendum massa.
                        </p>

                        {/* ==================== SECOND PARAGRAPH ==================== */}
                        <p className="font-sans text-base leading-relaxed text-[#2c4037] sm:text-base">
                            Neque felis cras nunc magna turpis tincidunt enim facilisi orci sed id est mauris felis parturient accumsan sapien nunc nibh dignissim neque nec, molestie vel magna at et urna vulputate ut etiam in mattis est egestas penatibus vitae maecenas interdum sed arcu donec risus vestibulum aliquet auctor quam.
                        </p>

                    </div>

                </div>
            ) : (

                /* ==================== ABOUT LAYOUT ==================== */
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">

                    {/* ==================== COLUMN 1: HEADING ==================== */}
                    <div>
                        <h2 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                            Yoga Studio in the City of New York
                        </h2>
                    </div>

                    {/* ==================== COLUMN 2: FIRST PARAGRAPH ==================== */}
                    <div>
                        <p className="font-sans text-base leading-relaxed text-[#2c4037] sm:text-lg">
                            Est suspendisse laoreet morbi donec dictumst quam. Et in donec pulvinar ullamcorper ante. Erat in scelerisque sed nulla tellus, massa eu elementum. Tortor, in risus euismod diam, egestas in at volutpat fusce. Habitant adipiscing elementum ultrices laoreet nullam potenti malesuada rhoncus semper. Nam integer ac mauris ipsum tortor.
                        </p>
                    </div>

                    {/* ==================== COLUMN 3: SECOND PARAGRAPH ==================== */}
                    <div>
                        <p className="font-sans text-base leading-relaxed text-[#2c4037] sm:text-lg">
                            Leo sagittis consequat donec nulla vel aliquet cursus odio sed. Id enim turpis quis lectus. Pulvinar sed cras amet, tincidunt. Vitae mattis enim velit enim, dui enim. Est porta sit ullamcorper non morbi aliquam phasellus. Porttitor sed adipiscing sem congue consequat commodo mi in pretium.
                        </p>
                    </div>

                </div>
            )}

        </section>
    );
}