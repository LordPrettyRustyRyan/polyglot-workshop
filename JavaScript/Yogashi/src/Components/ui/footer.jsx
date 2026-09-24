import { FaInstagram, FaPinterestP, FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Classes", href: "/classes" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact" },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your newsletter subscription logic here
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Brand Info, Navigation, and Newsletter/Socials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Brand / Logo & Bio (Left Column) */}
                    <div className="space-y-4 lg:col-span-1">
                        <h2 className="text-2xl font-bold text-white tracking-wider">Yogashi</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        </p>
                    </div>

                    {/* Navigation Links Column */}
                    <div className="space-y-4 lg:col-span-1">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Socials (Right Column) */}
                    <div className="space-y-6 lg:col-span-2">

                        {/* Newsletter Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Subscribe to our newsletter</h3>
                            <p className="text-sm text-gray-400 mb-4">Get the latest yoga tips, class schedules, and updates straight to your inbox.</p>

                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col sm:flex-row w-full max-w-xl gap-2"
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="bg-gray-800 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 grow border border-gray-700"
                                />
                                <button
                                    type="submit"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>Subscribe</span>
                                    <FaTelegramPlane className="w-4 h-4" />
                                </button>
                            </form>
                        </div>

                        {/* Social Media Links Grid */}
                        <div>
                            <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                            <div className="flex items-center gap-3">
                                {[
                                    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
                                    { icon: FaPinterestP, href: "https://pinterest.com", label: "Pinterest" },
                                    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
                                    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
                                    { icon: FaYoutube, href: "https://youtube.com", label: "Youtube" },
                                ].map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="bg-gray-800 hover:bg-emerald-600 text-gray-300 hover:text-white p-2.5 rounded-full transition-all duration-200 flex items-center justify-center"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="border-t border-gray-800 pt-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Yogashi. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;