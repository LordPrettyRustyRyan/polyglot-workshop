import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ==================== SCROLL DETECTION ====================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-yoga-frosted-mint transition-colors duration-300">

      {/* ==================== NAVBAR CONTENT ==================== */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ==================== LOGO ==================== */}
          <div className="shrink-0">
            <Link to="/" className="faculty-glyphic-400 text-[1.7rem] text-yoga-olive-dark">
              Yog<u>a</u>shi
            </Link>
          </div>

          {/* ==================== DESKTOP NAVIGATION LINKS ==================== */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="font-medium text-yoga-olive-dark transition-colors hover:text-yoga-terracotta">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ==================== DESKTOP CTA ==================== */}
          <div className="hidden items-center lg:flex">
            <a href="#" className="rounded-full bg-yoga-olive-dark px-6 py-2.5 font-medium text-yoga-frosted-mint shadow-md transition-all hover:bg-yoga-olive-light hover:shadow-lg">
              CALL
            </a>
          </div>

          {/* ==================== MOBILE MENU BUTTON ==================== */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button" aria-label="Toggle Menu"
              className="rounded-md p-2 text-yoga-olive-dark hover:text-yoga-olive-light focus:outline-none"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* ==================== ANIMATED BOTTOM BORDER ==================== */}
      <div
        className={` absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-yoga-ochre transition-all duration-700 ease-out
          ${isScrolled ? "w-[81%]" : "w-[25%]"}
        `}
      />

      {/* ==================== MOBILE / TABLET OVERLAY ==================== */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-yoga-olive-light px-4 py-1.5 lg:hidden animate-fadeIn">
          {/* ==================== OVERLAY TOP BAR ==================== */}
          <div className="flex items-center justify-between">
            <Link to="/" onClick={() => setIsOpen(false)} className="faculty-glyphic-regular text-[1.7rem] text-yoga-frosted-mint">
              Yog<u>a</u>shi
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              type="button" aria-label="Close menu"
              className="p-2 text-yoga-frosted-mint hover:text-yoga-ochre focus:outline-none"
            >
              <HiX size={34} />
            </button>
          </div>

          {/* ==================== MOBILE NAVIGATION LINKS ==================== */}
          <div className="my-auto flex flex-col items-center justify-center space-y-6">

            {navLinks.map((link) => (
              <Link
                key={link.name} to={link.href} onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold text-yoga-frosted-mint transition-colors hover:text-yoga-ochre"
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* ==================== OVERLAY BOTTOM CTA ==================== */}
          <div className="flex flex-col items-center pb-6">
            <a href="#" onClick={() => setIsOpen(false)} className="w-full rounded-full bg-yoga-terracotta py-3.5 text-center text-lg font-semibold text-yoga-frosted-mint shadow-lg transition-all hover:bg-[#a55d1f]">
              CALL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}