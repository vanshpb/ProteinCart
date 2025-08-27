"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/cart/cartcontext"; // ✅ global cart hook

type Product = {
  title: string;
  price: string;
  image: string;
};

type ProductCardProps = Product & {
  onAddToCart: (product: Product) => void;
};

function ProductCard({ title, price, image, onAddToCart }: ProductCardProps) {
  return (
    <div className="w-[320px] h-[400px] rounded-xl shadow-md border flex flex-col items-center justify-center p-4 text-center bg-white hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={140}
        height={140}
        className="object-contain"
      />
      <h3 className="text-base font-semibold mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">₹{price}</p>
      <button
        onClick={() => onAddToCart({ title, price, image })}
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default function TrendingProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // ✅ use global cart

  useEffect(() => {
    fetch("/jsonFiles/trendingProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleAddToCart = (product: Product) => {
    // ✅ don't send qty directly, let context handle it
    addToCart({
      id: Date.now(),
      name: product.title,
      price: Number(product.price),
      image: product.image,
    });
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold mb-10 text-center text-black">
        TRENDING NOW
      </h2>

      {/* Scroll Buttons */}
      <button
        type="button"
        onClick={() => scrollBy(-320)}
        className="absolute left-9 top-1/2 -translate-y-1/2 bg-white/60 border rounded shadow-md p-3 z-20 hover:bg-gray-100 transition active:scale-90"
      >
        <img
          src="/trendNowImage/arrow-left-5-svgrepo-com.svg"
          alt="Left"
          className="w-5 h-5 pointer-events-none"
        />
      </button>

      <button
        type="button"
        onClick={() => scrollBy(320)}
        className="absolute right-9 top-1/2 -translate-y-1/2 bg-white/60 border rounded shadow-md p-3 z-20 hover:bg-gray-100 transition active:scale-90"
      >
        <img
          src="/trendNowImage/arrow-left-5-svgrepo-com.svg"
          alt="Right"
          className="w-5 h-5 rotate-180 pointer-events-none"
        />
      </button>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-14 scroll-smooth hide-scrollbar w-full max-w-5xl mx-auto"
      >
        {products.map((p, i) => (
          <div key={i} className="flex-shrink-0">
            <ProductCard {...p} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}
