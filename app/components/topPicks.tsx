"use client";

import Image from "next/image";

export default function TopPick() {
  const images: string[] = [
    "https://framerusercontent.com/images/ebFlIHWgVtnLP8e5eSSPu6FUJg.webp?scale-down-to=1024",
    "https://framerusercontent.com/images/KnizXNNCETOVwGnwyOhYsXS3M.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/rqqneRGFRcHOXdha5HludQsmZCI.jpg?scale-down-to=1024",
    "https://framerusercontent.com/images/IHZDramr8TQCzgC854mJwXQQ8ug.webp?scale-down-to=1024",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 text-center mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
        TOP PICKS FOR YOU
      </h2>

      {/* Uniform Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={src}
              alt={`Top Pick ${index + 1}`}
              width={300}   // ✅ fixed width
              height={300}  // ✅ fixed height
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
