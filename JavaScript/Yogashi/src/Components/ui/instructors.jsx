import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Instructors() {
  const instructorsData = [
    {
      name: "Ellen Sherman",
      image: "/instructor-1.jpg",
      socials: { facebook: "#", twitter: "#", youtube: "#" },
    },
    {
      name: "Christina Latham",
      image: "/instructor-2.jpg",
      socials: { facebook: "#", twitter: "#", youtube: "#" },
    },
    {
      name: "Lucie Stryker",
      image: "/instructor-3.jpg",
      socials: { facebook: "#", twitter: "#", youtube: "#" },
    },
    {
      name: "Gloria Benner",
      image: "/instructor-4.jpg",
      socials: { facebook: "#", twitter: "#", youtube: "#" },
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#f4f7f4] px-6 py-20 font-sans md:px-12 md:py-24">
      <div className="mx-auto max-w-[86%]">

        {/* ==================== SECTION HEADING ==================== */}
        <div className="mb-12 text-center lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.4rem] text-[#2b6452]">
            Meet The Team
          </span>

          <h2 className="my-4 font-serif text-4xl font-normal tracking-tight text-yoga-olive-dark sm:text-5xl">
            Our Instructors
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-yoga-olive-dark/70 md:text-base">
            Morbi lobortis morbi dignissim sodales eget mauris turpis
            interdum sagittis sed cursus nunc nulla congue quis.
          </p>
        </div>

        {/* ==================== INSTRUCTORS GRID ==================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {instructorsData.map((instructor, index) => (
            <div key={index} className="group flex h-full flex-col bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">

              {/* ==================== INSTRUCTOR IMAGE ==================== */}
              <div className="relative aspect-3/4 overflow-hidden bg-yoga-frosted-mint">
                <img
                  src={instructor.image} alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* ==================== INSTRUCTOR INFO ==================== */}
              <div className="flex flex-1 flex-col items-center px-4 pb-6 pt-6">
                <div className="mb-5 h-px w-8 bg-yoga-terracotta transition-all duration-500 group-hover:w-14" />

                <h3 className="mb-4 text-center font-serif text-xl font-normal text-yoga-olive-dark transition-colors duration-300 group-hover:text-[#2b6452]">
                  {instructor.name}
                </h3>

                <div className="mt-auto flex items-center justify-center gap-5 text-yoga-olive-dark/70">
                  <a href={instructor.socials.facebook} aria-label={`${instructor.name} on Facebook`}
                    className="transition-all duration-300 hover:scale-110 hover:text-yoga-terracotta"
                  >
                    <FaFacebookF size={14} />
                  </a>

                  <a href={instructor.socials.twitter} aria-label={`${instructor.name} on Twitter`}
                    className="transition-all duration-300 hover:scale-110 hover:text-yoga-terracotta"
                  >
                    <FaTwitter size={14} />
                  </a>

                  <a href={instructor.socials.youtube} aria-label={`${instructor.name} on YouTube`}
                    className="transition-all duration-300 hover:scale-110 hover:text-yoga-terracotta"
                  >
                    <FaYoutube size={14} />
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