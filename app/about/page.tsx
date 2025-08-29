export default function AboutPage() {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          About <span className="text-blue-600">The Protein Cart</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your trusted destination for 100% authentic health supplements, 
          helping fitness enthusiasts achieve their goals with quality, 
          affordability, and transparency.
        </p>
      </div>

      {/* Mission / Vision Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold">The Protein Cart</span>, our mission 
              is to empower individuals by providing the highest-quality supplements 
              from trusted global brands. We aim to make fitness simple, accessible, 
              and result-driven for everyone.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a healthier, stronger community where everyone has 
              access to safe and genuine nutrition products, helping them push 
              boundaries and achieve greatness.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">
              100% genuine products sourced directly from authorized distributors.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Wide Range</h3>
            <p className="text-gray-600">
              From proteins to vitamins, find everything for your fitness journey.
            </p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Dedicated team to assist you with queries and product guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
