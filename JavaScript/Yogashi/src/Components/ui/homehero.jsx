import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Optional: npm install react-icons

export default function Hero() {
  return (
    <section className="relative bg-yoga-cream text-yoga-olive-dark overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings, Subtext, and CTA Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 z-10 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-yoga-olive-dark">
              Yoga <br />
              Studio
            </h1>
            
            <p className="text-yoga-olive-dark/80 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              Amet, sodales ac congue fusce mattis quis praesent sollicitudin mauris est tortor pulvinar augue rhoncus nulla pellentesque nulla eget nunc[cite: 2].
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-yoga-olive-dark hover:bg-yoga-olive-light text-yoga-cream px-8 py-3.5 rounded-full font-medium transition-all shadow-md text-center"
              >
                Join Class Today
              </a>
              <a
                href="#about"
                className="group flex items-center justify-center space-x-2 text-yoga-olive-dark hover:text-yoga-terracotta font-medium py-3.5 transition-colors"
              >
                <span>Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Circular Backdrop & Yoga Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Soft Green Circular Backdrop */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] bg-yoga-olive-light/15 rounded-full z-0"></div>
            
            {/* Image from Public Folder */}
            <div className="relative z-10 w-full max-w-md lg:max-w-lg flex justify-center">
              <img
                src="/hero-bg.png"
                alt="Yogashi Studio Pose"
                className="w-full h-auto object-cover max-h-[550px] drop-shadow-xl"
              />
            </div>

            {/* Floating Social Media Sidebar (Desktop) */}
            <div className="hidden xl:flex flex-col space-y-4 absolute right-0 top-1/2 -translate-y-1/2 text-yoga-olive-dark">
              <a href="#" className="hover:text-yoga-terracotta transition-colors p-2"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-yoga-terracotta transition-colors p-2"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-yoga-terracotta transition-colors p-2"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-yoga-terracotta transition-colors p-2"><FaYoutube size={18} /></a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}