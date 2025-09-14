import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      img: "/category/Bcaa.png",
      title: "Best Supplements",
      desc: "Discover the top 5 supplements every beginner should start with to boost performance and recovery.",
      tag: "Supplements",
      date: "March 15, 2024",
      readTime: "5 min read",
    },
    {
      img: "/category/MBgold.png",
      title: "How to Gain Muscle Fast",
      desc: "A step-by-step guide to building lean muscle mass with the right diet and workout routine.",
      tag: "Fitness",
      date: "March 12, 2024",
      readTime: "7 min read",
    },
    {
      img: "/category/MBgold.png",
      title: "Protein Myths Busted",
      desc: "We debunk the most common myths about protein intake and reveal the real facts.",
      tag: "Nutrition",
      date: "March 8, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            BLOGS
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="text-[10px] sm:text-xs font-medium text-white bg-blue-600 px-2.5 sm:px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {/* Date and Read Time */}
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                  {post.desc}
                </p>

                {/* Read More + Bookmark */}
                <div className="mt-auto flex items-center justify-between">
                  <button className="text-blue-600 font-medium text-sm sm:text-base hover:text-blue-700 transition-colors duration-300 flex items-center">
                    Read Article
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>

                  {/* Bookmark Icon */}
                  <button
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    aria-label="Save article"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/blogs"
            className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 inline-flex items-center text-sm sm:text-base"
          >
            View All Articles
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
