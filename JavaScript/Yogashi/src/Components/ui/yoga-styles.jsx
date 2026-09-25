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
      description: "Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu.",
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
      description: "Nullam non egestas maecenas convallis etiam integer sed adipiscing.",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-serif text-emerald-600 font-medium uppercase">
            Yoga Styles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mt-4 font-normal tracking-tight font-serif text-yoga-olive-dark">
            Explore The Styles Of Yoga
          </h2>
        </div>

        {/* ==================== YOGA STYLES GRID ==================== */}
        <div className="grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {styles.map((style) => (
            <div key={style.name}
              className="group relative flex flex-col justify-between space-y-4 overflow-hidden bg-white p-8 sm:p-9
                transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#edf4ee] hover:shadow-xl
              "
            >
              <div className="absolute left-0 top-0 h-1 w-0 bg-yoga-terracotta transition-all duration-500 ease-out group-hover:w-full" />

              <div className="space-y-3">
                <span className="block font-serif text-sm font-medium text-yoga-olive-light transition-colors duration-300 group-hover:text-yoga-terracotta">
                  {style.number}
                </span>
                <h3 className="font-serif text-xl text-yoga-olive-dark transition-transform duration-300 group-hover:translate-x-1">
                  {style.name}
                </h3>
                <p className="text-sm leading-relaxed text-yoga-olive-dark/80 transition-colors duration-300 group-hover:text-yoga-olive-dark">
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