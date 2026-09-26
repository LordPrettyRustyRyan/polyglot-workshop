import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Navbar from "../Components/ui/navbar";
import Footer from "../Components/ui/footer";

export default function Contacts() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-yoga-frosted-mint text-yoga-olive-dark">

        {/* ==================== DECORATIVE BACKGROUND IMAGE ==================== */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-300 w-300
            -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat opacity-7"
          style={{
            backgroundImage: "url('/mandala-right.png')",
          }}
        />
        <div className="mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Heading, Info, and Contact Details */}
            <div className="lg:col-span-6 flex flex-col space-y-8 z-10">
              <div>
                <h1 className="font-serif text-8xl tracking-tight text-yoga-olive-dark sm:text-7xl md:text-9xl">
                  Contact
                </h1>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-yoga-olive-dark/80 sm:text-md">
                  Convallis mi volutpat odio semper tincidunt nisi, tincidunt lorem hac et elementum, adipiscing sed mi, tempus metus amet elementum quis orci massa fermentum vel.
                </p>
              </div>

              <hr className="border-yoga-olive-dark/20" />

              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yoga-terracotta text-yoga-frosted-mint shadow-md">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2rem] uppercase text-yoga-terracotta">
                    Our Location
                  </span>
                  <p className="faculty-glyphic-400 text-xl sm:text-2xl font-bold text-yoga-olive-dark mt-1 leading-snug">
                    123 Fifth Avenue, New York, NY 12004, USA.
                  </p>
                </div>
              </div>

              <hr className="border-yoga-olive-dark/20" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yoga-terracotta text-yoga-frosted-mint shadow-md">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2rem] uppercase text-yoga-terracotta">
                      Call Us
                    </span>
                    <p className="faculty-glyphic-400 text-lg font-bold text-yoga-olive-dark mt-1">
                      +1 123 456 78 90
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yoga-terracotta text-yoga-frosted-mint shadow-md">
                    <FaEnvelope size={15} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-[0.2rem] uppercase text-yoga-terracotta">
                      Email Us
                    </span>
                    <p className="faculty-glyphic-400 text-lg font-bold text-yoga-olive-dark mt-1 break-all">
                      hello@example.com
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-yoga-olive-dark/20" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="text-xs font-semibold tracking-[0.2rem] uppercase text-yoga-olive-dark">
                  Keep in Touch
                </span>
                <div className="flex items-center space-x-4 text-yoga-olive-dark">
                  <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta" aria-label="Facebook"> <FaFacebookF size={18} /> </a>
                  <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta" aria-label="Twitter"> <FaTwitter size={18} /> </a>
                  <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta" aria-label="Instagram"> <FaInstagram size={18} /> </a>
                  <a href="#" className="p-2 transition-colors hover:text-yoga-terracotta" aria-label="YouTube"> <FaYoutube size={18} /> </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Contact Form Card */}
            <div className="lg:col-span-6 z-10">
              <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-yoga-olive-dark/10">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-yoga-olive-dark mb-2">
                      Name <span className="text-yoga-terracotta">*</span>
                    </label>
                    <input type="text" required
                      className="w-full rounded-md border border-yoga-olive-dark/20 px-4 py-3 text-yoga-olive-dark 
                        focus:border-yoga-terracotta focus:outline-none focus:ring-1 focus:ring-yoga-terracotta transition-all
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-yoga-olive-dark mb-2">
                      Email <span className="text-yoga-terracotta">*</span>
                    </label>
                    <input type="email" required
                      className="w-full rounded-md border border-yoga-olive-dark/20 px-4 py-3 text-yoga-olive-dark 
                        focus:border-yoga-terracotta focus:outline-none focus:ring-1 focus:ring-yoga-terracotta transition-all
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-yoga-olive-dark mb-2">
                      Subject
                    </label>
                    <input type="text"
                      className="w-full rounded-md border border-yoga-olive-dark/20 px-4 py-3 text-yoga-olive-dark 
                        focus:border-yoga-terracotta focus:outline-none focus:ring-1 focus:ring-yoga-terracotta transition-all
                      "
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-yoga-olive-dark mb-2">
                      Message
                    </label>
                    <textarea rows={3}
                      className="w-full rounded-md border border-yoga-olive-dark/20 px-4 py-3 text-yoga-olive-dark 
                        focus:border-yoga-terracotta focus:outline-none focus:ring-1 focus:ring-yoga-terracotta transition-all resize-none
                      "
                    />
                  </div>

                  <button type="submit"
                    className="w-full rounded-full bg-yoga-olive-dark px-8 py-3.5 text-center font-medium text-yoga-frosted-mint shadow-md 
                      transition-all hover:bg-yoga-olive-light
                    "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* ==================== LOCATION MAP ==================== */}
        <div className="relative mt-7 h-137.5 w-full overflow-hidden">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6859.810089191818!2d76.77683664279807!3d30.721069748359067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed003f30b893%3A0x8dcca9661b404807!2sSector%2020%2C%20Chandigarh%2C%20160020!5e0!3m2!1sen!2sin!4v1767557063686!5m2!1sen!2sin"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Yogashi location map"
          />

          <div className="absolute right-6 top-1/2 z-10 w-65.75 -translate-y-1/2 p-3 sm:right-10 lg:right-47.5">
            <div className="flex min-h-64 w-full flex-col items-center justify-center bg-yoga-terracotta px-5 py-12 text-center text-white shadow-lg">
              <span className="block faculty-glyphic-400 text-base font-semibold leading-snug">
                One & Only in the <br /> Whole Wide World
              </span>

              <ul className="mt-14 space-y-1">
                <li className="text-base faculty-glyphic-400 font-bold leading-7.5 tracking-[0.2px]">
                  +91 00000 00000
                </li>

                <li className="text-base faculty-glyphic-400 font-bold leading-7.5 tracking-[0.2px]">
                  it'sMeBruv@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}