export default function DealsSection() {
  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">💥 Deals of the Month</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <h3 className="font-bold">50% Off Proteins</h3>
          <p className="text-gray-600">Grab the best deals now!</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl text-center">
          <h3 className="font-bold">Creatine Combos</h3>
          <p className="text-gray-600">Buy 1 Get 1 Free</p>
        </div>
      </div>
    </section>
  );
}
