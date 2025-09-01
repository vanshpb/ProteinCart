import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      img: "/category/Bcaa.png",
      title: "Best Supplements",
      desc: "Discover the top 5 supplements every beginner should start with to boost performance and recovery.",
      tag: "Supplements",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      img: "/category/MBgold.png",
      title: "How to Gain Muscle Fast",
      desc: "A step-by-step guide to building lean muscle mass with the right diet and workout routine.",
      tag: "Fitness",
      date: "March 12, 2024",
      readTime: "7 min read"
    },
    {
      img: "/category/MBgold.png",
      title: "Protein Myths Busted",
      desc: "We debunk the most common myths about protein intake and reveal the real facts.",
      tag: "Nutrition",
      date: "March 8, 2024",
      readTime: "4 min read"
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-1">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            BLOGS
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1.5 rounded-full">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date and Read Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.desc}
                </p>

                {/* Read More Button */}
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 flex items-center">
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  
                  {/* Bookmark Icon */}
                  <button className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="Save article">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 inline-flex items-center"
          >
            View All Articles
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
}
