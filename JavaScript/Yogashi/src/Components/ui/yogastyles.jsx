export default function YogaStyles() {
  const styles = [
    {
      name: "ANUSARA",
      description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.",
    },
    {
      name: "HOT YOGA",
      description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.",
    },
    {
      name: "ASHTANGA",
      description: "Ultrices senectus nec neque id sed ultricies massa tristique tellus.",
    },
    {
      name: "IYENGAR",
      description: "Pellentesque amet lectus mattis enim et ut nisi vel tempor.",
    },
    {
      name: "BIKRAM",
      description: "Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit.",
    },
    {
      name: "RESTORATIVE",
      description: "Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae.",
    },
    {
      name: "HATHA",
      description: "Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit.",
    },
    {
      name: "VINYASA",
      description: "Odio proin facilisis ac feugiat leo aliquet nibh mauris sed.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-yoga-frosted-mint text-yoga-olive-dark py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading & Learn More */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl faculty-glyphic-regular font-bold tracking-tight text-yoga-olive-dark sm:text-4xl md:text-5xl">
              Many Styles Of Yoga To Suit Everyone
            </h2>
            <p className="text-sm font-light leading-relaxed text-yoga-olive-dark/80 sm:text-base">
              Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis.
            </p>
            <div>
              <a
                href="#classes"
                className="inline-block rounded-full border border-yoga-olive-dark px-8 py-3.5 text-center font-medium text-yoga-olive-dark transition-all hover:bg-yoga-olive-dark hover:text-yoga-frosted-mint"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column: Yoga Styles Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {styles.map((style) => (
              <div key={style.name} className="space-y-2">
                <h3 className="text-sm faculty-glyphic-regular font-semibold tracking-wider text-yoga-olive-dark">
                  {style.name}
                </h3>
                <p className="text-sm font-light leading-relaxed text-yoga-olive-dark/80">
                  {style.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}