"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
  img: string;
  title: string;
  desc: string;
  tag: string;
  date: string;
  readTime: string;
  slug: string;
  content?: string; // full content (add in your JSON)
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/jsonFiles/blogs.json")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const found = data.find((p) => p.slug === slug);
        setPost(found || null);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [slug]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading blog...</p>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Blog not found.</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={post.img}
            alt={post.title}
            width={800}   // fixed width
            height={400}  // fixed height
            className="w-full h-[400px] object-cover object-center"
          />
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            {post.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span className="mr-4">{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content || post.desc}
          </p>

          <div className="mt-8">
            <Link
              href="/blogs"
              className="text-blue-600 font-semibold hover:underline"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
