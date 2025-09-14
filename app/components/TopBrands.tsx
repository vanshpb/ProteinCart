export default function BrandSection() {
  const brands = [
    { src: "/topBrands/musceltech.png", alt: "MuscleTech", size: "medium" },
    { src: "/topBrands/isopure.png", alt: "Isopure", size: "small" },
    { src: "/topBrands/gnc.png", alt: "GNC", size: "large" },
    { src: "/topBrands/isopure.png", alt: "Isopure", size: "small" },
    { src: "/topBrands/on.png", alt: "Optimum Nutrition", size: "medium" }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-black text-center">
          TOP BRANDS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] w-full bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={brands[0].src}
                alt={brands[0].alt}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="aspect-[4/3] w-full bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={brands[1].src}
                alt={brands[1].alt}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>

          {/* Center (main brand) */}
          <div className="flex justify-center items-center">
            <div className="aspect-[3/4] w-4/5 sm:w-3/4 bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <img
                src={brands[2].src}
                alt={brands[2].alt}
                className="w-full h-full object-contain p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/3] w-full bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={brands[3].src}
                alt={brands[3].alt}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="aspect-[4/3] w-full bg-gray-900 rounded-xl overflow-hidden">
              <img
                src={brands[4].src}
                alt={brands[4].alt}
                className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
