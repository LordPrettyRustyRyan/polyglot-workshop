export default function PopularClasses() {
  const classesData = [
    {
      title: "Bend & Stretch",
      description: "Tincidunt nisl amet in urna integer feugiat amet.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Rise & Shine",
      description: "Sed eget commodo ipsum id egestas malesuada nisl.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Foundation in Flow",
      description: "Scelerisque vivamus aliquam, vulputate nisl arcu orci in.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Vinyasa for Vitality",
      description: "Massa integer eu mattis neque interdum ut fusce.",
      image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="w-full bg-[#f4f7f4] py-16 px-6 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-yoga-olive-dark font-normal mb-4">
              Popular Classes
            </h2>
            <p className="text-yoga-olive-dark/70 text-sm md:text-base max-w-xl leading-relaxed">
              Morbi lobortis morbi dignissim sodales eget mauris turpis interdum <br className="hidden sm:inline" />
              sagittis sed cursus nunc nulla congue quis.
            </p>
          </div>

          {/* Book Appointment Button */}
          <div>
            <button className="bg-yoga-olive-dark hover:bg-yoga-olive-light text-white text-xs md:text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap">
              Book Appointment
            </button>
          </div>
        </div>

        {/* 4-Column Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classesData.map((item, index) => (
            <div key={index} className="flex flex-col group">
              
              {/* Class Image Card */}
              <div className="overflow-hidden rounded-lg shadow-md mb-5 aspect-[4/3] bg-yoga-frosted-mint">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Class Title */}
              <h3 className="font-serif text-xl text-yoga-olive-dark mb-2">
                {item.title}
              </h3>

              {/* Class Description */}
              <p className="text-yoga-olive-dark/70 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2">
                {item.description}
              </p>

              {/* Learn More Action Link */}
              <div className="mt-auto">
                <a 
                  href="#learn-more" 
                  className="inline-flex items-center text-xs md:text-sm font-semibold text-yoga-olive-dark hover:text-yoga-terracotta transition-colors group/link"
                >
                  Learn More 
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}