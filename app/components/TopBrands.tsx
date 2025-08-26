export default function BrandSection() {
  const brands = [
    {
      src: "/topBrands/musceltech.png",
      alt: "Michael Kors luxury brand",
      size: "medium"
    },
    {
      src: "/topBrands/isopure.png",
      alt: "Michael Kors luxury brand",
      size: "small"
    },
    {
      src: "/topBrands/gnc.png",
      alt: "Michael Kors luxury brand - featured",
      size: "large"
    },
    {
      src: "/topBrands/isopure.png",
      alt: "Michael Kors luxury brand",
      size: "small"
    },
    {
      src: "/topBrands/on.png",
      alt: "Michael Kors luxury brand",
      size: "medium"
    }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-black text-center">
          TOP BRANDS
        </h2>

        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 items-center justify-center max-w-5xl mx-auto">
          {/* Top row for mobile, left for desktop */}
          <div className="col-span-3 md:col-span-1 row-start-1 md:row-start-1 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center">
            <img
              src={brands[0].src}
              alt={brands[0].alt}
              className="w-full h-78 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-900"
            />
            <img
              src={brands[1].src}
              alt={brands[1].alt}
              className="w-full h-56 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-900"
            />
          </div>

          {/* Center brand - largest */}
          <div className="col-span-3 md:col-span-1 row-start-2 md:row-start-1 flex justify-center">
            <img
              src={brands[2].src}
              alt={brands[2].alt}
              className="w-full max-w-xs md:max-w-none h-140 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 bg-gray-900 cursor-pointer z-10"
            />
          </div>

          {/* Bottom row for mobile, right for desktop */}
          <div className="col-span-3 md:col-span-1 row-start-3 md:row-start-1 flex flex-col gap-3 md:gap-4 lg:gap-6 items-center">
            <img
              src={brands[3].src}
              alt={brands[3].alt}
              className="w-full h-56 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-900"
            />
            <img
              src={brands[4].src}
              alt={brands[4].alt}
              className="w-full h-78 rounded-xl md:rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
}