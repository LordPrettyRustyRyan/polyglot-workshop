import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="bg-yoga-frosted-mint sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="shrink-0">
            <a href="#" className="text-[1.7rem] faculty-glyphic-regular text-yoga-olive-dark">
              Yog<u>a</u>shi
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name} href={link.href}
                className="text-yoga-olive-dark hover:text-yoga-terracotta font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Phone Button */}
          <div className="hidden lg:flex items-center">
            <a href="#" className="bg-yoga-olive-dark hover:bg-yoga-olive-light text-yoga-frosted-mint px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              PHONE NUMBER
            </a>
          </div>

          {/* Mobile / Tablet Menu Button (Visible on sm and md screens) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} type="button" aria-label="Toggle menu"
              className="text-yoga-olive-dark hover:text-yoga-olive-light focus:outline-none p-2 rounded-md"
            >
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile & Tablet Overlay (sm and md screens) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-yoga-olive-light flex flex-col justify-between px-4 py-1.5 lg:hidden animate-fadeIn">
          
          {/* Overlay Top Bar: Logo & Close Button */}
          <div className="flex items-center justify-between">
            <a href="#" onClick={() => setIsOpen(false)} className="text-[1.7rem] faculty-glyphic-regular text-yoga-frosted-mint">
              Yog<u>a</u>shi
            </a>

            <button
              onClick={() => setIsOpen(false)} type="button" aria-label="Close menu"
              className="text-yoga-frosted-mint hover:text-yoga-ochre focus:outline-none p-2"
            >
              <HiX size={34} />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="flex flex-col items-center justify-center space-y-6 my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold text-yoga-frosted-mint hover:text-yoga-ochre transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Overlay Bottom CTA Button */}
          <div className="flex flex-col items-center pb-6">
            <a
              href="#" onClick={() => setIsOpen(false)}
              className="w-full text-center bg-yoga-terracotta text-yoga-frosted-mint py-3.5 rounded-full font-semibold text-lg shadow-lg hover:bg-[#a55d1f] transition-all"
            >
              PHONE NUMBER
            </a>
          </div>

        </div>
      )}
    </header>
  );
}