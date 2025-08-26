export default function BrandSection() {
  const brands = ["/brand1.png", "/brand2.png", "/brand3.png"];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">🏋️ Top Brands</h2>
      <div className="flex justify-center gap-12">
        {brands.map((logo, i) => (
          <img key={i} src={logo} alt="brand" className="h-12" />
        ))}
      </div>
    </section>
  );
}
