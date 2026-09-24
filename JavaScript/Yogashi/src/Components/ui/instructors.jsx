import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Instructors() {
  const instructorsData = [
    {
      name: "Ellen Sherman",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
      socials: { facebook: "#", twitter: "#", youtube: "#" }
    },
    {
      name: "Christina Latham",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
      socials: { facebook: "#", twitter: "#", youtube: "#" }
    },
    {
      name: "Luke Stryker",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
      socials: { facebook: "#", twitter: "#", youtube: "#" }
    },
    {
      name: "Gloria Benner",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600",
      socials: { facebook: "#", twitter: "#", youtube: "#" }
    }
  ];

  return (
    <div className="w-full bg-[#f4f7f4] py-20 px-6 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-yoga-olive-dark font-normal tracking-wide">
            Yoga Instructors
          </h2>
        </div>

        {/* 4-Column Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorsData.map((instructor, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* Instructor Image Card with Hover Scaling */}
              <div className="overflow-hidden rounded-md shadow-md mb-6 aspect-[3/4] bg-yoga-frosted-mint relative">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Instructor Name */}
              <h3 className="font-serif text-sm md:text-base tracking-widest text-yoga-olive-dark text-center font-medium mb-3">
                {instructor.name}
              </h3>

              {/* Social Media Links with Hover Effects */}
              <div className="flex items-center justify-center space-x-5 text-yoga-olive-dark/70">
                <a 
                  href={instructor.socials.facebook} 
                  aria-label="Facebook"
                  className="hover:text-yoga-terracotta hover:scale-110 transition-all duration-200"
                >
                  <FaFacebookF size={14} />
                </a>
                <a 
                  href={instructor.socials.twitter} 
                  aria-label="Twitter"
                  className="hover:text-yoga-terracotta hover:scale-110 transition-all duration-200"
                >
                  <FaTwitter size={14} />
                </a>
                <a 
                  href={instructor.socials.youtube} 
                  aria-label="YouTube"
                  className="hover:text-yoga-terracotta hover:scale-110 transition-all duration-200"
                >
                  <FaYoutube size={14} />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}