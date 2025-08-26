export default function BlogSection() {
  const posts = [
    {
      img: "/category/MBgold.png",
      title: "Best Supplements for Beginners",
      desc: "Discover the top 5 supplements every beginner should start with to boost performance and recovery.",
      tag: "Supplements",
    },
    {
      img: "/category/MBgold.png",
      title: "How to Gain Muscle Fast",
      desc: "A step-by-step guide to building lean muscle mass with the right diet and workout routine.",
      tag: "Fitness",
    },
    {
      img: "/category/MBgold.png",
      title: "Protein Myths Busted",
      desc: "We debunk the most common myths about protein intake and reveal the real facts.",
      tag: "Nutrition",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center">
        📚 From Our Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={post.img}
                alt={post.title}
                className="rounded-t-2xl w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {post.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {post.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{post.desc}</p>

              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
