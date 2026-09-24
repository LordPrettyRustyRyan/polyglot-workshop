export default function YogaStyles() {
  const styles = [
    {
      number: "01.",
      name: "Anusara",
      description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.",
    },
    {
      number: "02.",
      name: "Ashtanga",
      description: "Ultrices senectus nec neque id sed ultricies massa tristique tellus.",
    },
    {
      number: "03.",
      name: "Bikram",
      description: "Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit.",
    },
    {
      number: "04.",
      name: "Hatha",
      description: "Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit.",
    },
    {
      number: "05.",
      name: "Hot Yoga",
      description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.",
    },
    {
      number: "06.",
      name: "Iyengar",
      description: "Pellentesque amet lectus mattis enim et ut nisi vel tempor.",
    },
    {
      number: "07.",
      name: "Restorative",
      description: "Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae.",
    },
    {
      number: "08.",
      name: "Vinyasa",
      description: "Odio proin facilisis ac feugiat leo aliquet nibh mauris sed.",
    },
  ];

  return (
    <section className="bg-white text-yoga-olive-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm tracking-[0.2em] text-emerald-600 font-medium uppercase">
            Yoga Styles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight font-serif text-yoga-olive-dark">
            Explore The Styles Of Yoga
          </h2>
        </div>

        {/* 4-Column Grid Section with Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-200 gap-px border border-gray-200">
          {styles.map((style) => (
            <div 
              key={style.name} 
              className="bg-white p-8 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-sm font-medium text-emerald-600 block">
                  {style.number}
                </span>
                <h3 className="text-xl font-normal font-serif text-yoga-olive-dark">
                  {style.name}
                </h3>
                <p className="text-sm font-light leading-relaxed text-yoga-olive-dark/80">
                  {style.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}