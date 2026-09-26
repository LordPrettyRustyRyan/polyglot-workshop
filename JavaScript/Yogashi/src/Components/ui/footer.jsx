import {
    FaInstagram,
    FaPinterestP,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaTelegramPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Classes", href: "/classes" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
    ];

    const socialLinks = [
        {
            icon: FaInstagram,
            href: "https://instagram.com",
            label: "Instagram",
        },
        {
            icon: FaPinterestP,
            href: "https://pinterest.com",
            label: "Pinterest",
        },
        {
            icon: FaFacebookF,
            href: "https://facebook.com",
            label: "Facebook",
        },
        {
            icon: FaTwitter,
            href: "https://twitter.com",
            label: "Twitter",
        },
        {
            icon: FaYoutube,
            href: "https://youtube.com",
            label: "YouTube",
        },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your newsletter subscription logic here
    };

    return (
        <footer className="relative overflow-hidden bg-yoga-olive-dark text-yoga-frosted-mint">

            {/* ==================== DECORATIVE BACKGROUND ==================== */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-yoga-frosted-mint/5" />
            <div className="pointer-events-none absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border border-yoga-frosted-mint/5" />

            <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10">

                {/* ==================== TOP SECTION ==================== */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">

                    {/* ==================== BRAND ==================== */}
                    <div className="lg:col-span-4">

                        {/* ==================== LOGO ==================== */}
                        <Link
                            to="/"
                            className="inline-block font-serif text-4xl tracking-wide text-yoga-frosted-mint transition-colors duration-300 hover:text-yoga-terracotta"
                        >
                            Yogashi
                        </Link>

                        {/* ==================== ACCENT LINE ==================== */}
                        <div className="mt-5 h-[2px] w-12 bg-yoga-terracotta" />

                        {/* ==================== DESCRIPTION ==================== */}
                        <p className="mt-6 max-w-sm text-sm leading-7 text-yoga-frosted-mint/65 sm:text-base">
                            A peaceful space to move, breathe, and reconnect.
                            Discover mindful practices designed to bring balance
                            to your body and everyday life.
                        </p>

                        {/* ==================== ADDRESS ==================== */}
                        <p className="mt-6 max-w-sm text-xs uppercase tracking-[0.15em] text-yoga-frosted-mint/50">
                            123 Fifth Avenue
                            <br />
                            New York, NY 12004, USA
                        </p>

                    </div>

                    {/* ==================== QUICK LINKS ==================== */}
                    <div className="lg:col-span-2">

                        <h3 className="font-serif text-xl text-yoga-frosted-mint">
                            Explore
                        </h3>

                        <div className="mt-5 h-px w-8 bg-yoga-frosted-mint/20" />

                        <ul className="mt-6 space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="group inline-flex items-center text-sm text-yoga-frosted-mint/65 transition-colors duration-300 hover:text-yoga-terracotta"
                                    >
                                        <span className="mr-0 w-0 overflow-hidden text-yoga-terracotta transition-all duration-300 group-hover:mr-2 group-hover:w-2">
                                            —
                                        </span>

                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* ==================== NEWSLETTER ==================== */}
                    <div className="lg:col-span-6">

                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-yoga-terracotta">
                            Stay Connected
                        </span>

                        <h3 className="mt-3 font-serif text-3xl leading-tight text-yoga-frosted-mint sm:text-4xl">
                            Keep your practice
                            <br />
                            close to you.
                        </h3>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-yoga-frosted-mint/60">
                            Get yoga tips, studio updates, class schedules,
                            and mindful inspiration delivered to your inbox.
                        </p>

                        {/* ==================== NEWSLETTER FORM ==================== */}
                        <form
                            onSubmit={handleSubscribe}
                            className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="min-w-0 flex-1 border border-yoga-frosted-mint/20 bg-yoga-frosted-mint/5 px-5 py-3.5 text-sm text-yoga-frosted-mint placeholder:text-yoga-frosted-mint/35 outline-none transition-colors duration-300 focus:border-yoga-terracotta"
                            />

                            <button
                                type="submit"
                                className="inline-flex cursor-pointer items-center justify-center gap-2 bg-yoga-terracotta px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-yoga-ochre"
                            >
                                <span>Subscribe</span>
                                <FaTelegramPlane className="h-3.5 w-3.5" />
                            </button>
                        </form>

                        {/* ==================== SOCIAL LINKS ==================== */}
                        <div className="mt-8">

                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yoga-frosted-mint/50">
                                Follow Us
                            </span>

                            <div className="mt-4 flex items-center gap-2.5">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex h-9 w-9 items-center justify-center border border-yoga-frosted-mint/15 text-yoga-frosted-mint/60 transition-all duration-300 hover:border-yoga-terracotta hover:bg-yoga-terracotta hover:text-white"
                                        >
                                            <Icon className="h-3.5 w-3.5" />
                                        </a>
                                    );
                                })}
                            </div>

                        </div>

                    </div>

                </div>

                {/* ==================== BOTTOM DIVIDER ==================== */}
                <div className="mt-14 border-t border-yoga-frosted-mint/10 pt-6 sm:mt-16">

                    <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">

                        {/* ==================== COPYRIGHT ==================== */}
                        <p className="text-xs tracking-wide text-yoga-frosted-mint/40">
                            © {new Date().getFullYear()} Yogashi. All rights reserved.
                        </p>

                        {/* ==================== BOTTOM TAGLINE ==================== */}
                        <p className="font-serif text-sm italic text-yoga-frosted-mint/40">
                            Move · Breathe · Be
                        </p>

                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;