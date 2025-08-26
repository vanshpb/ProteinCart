"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["Proteins", "Creatine", "Pre-Workout", "Gainers", "Multivitamins"];

//product images (place them in /public/products/)
const products = [
  { id: 1, img: "/category/MBgold.png" },
  { id: 2, img: "/category/MassGainer.png" },
  { id: 3, img: "/category/FishOil.png" },
  { id: 4, img: "/category/Creatine.png" },
  { id: 5, img: "/category/bcaa.png" },
  { id: 6, img: "/category/PreWorkout.png" },
  { id: 7, img: "/category/FatBurner.png" },
  { id: 8, img: "/category/PeanutButter.png" },
  { id: 9, img: "/category/Multivitamins.png" },
  { id: 10, img: "/category/Collagen.png" },
];

export default function HeroSection() {
  const [active, setActive] = useState("Proteins");

  return (
    <section className="text-center py-20 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} // hidden + blurred
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}   // visible + clear
        transition={{ delay: 0.5, duration: 0.8, ease: "linear" }}
        className="text-4xl sm:text-5xl lg:text-6xl mb-5 font-bold text-black max-w-4xl mx-auto leading-tight mt-5"
      >
        Upgrade Your Fitness Fuel
      </motion.h1>


      {/* Categories */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "linear" }} // comes after the first
        className="text-2xl sm:text-3xl lg:text-[46px]  font-[800] mb-6 text-black mt-21"
      >
        CATEGORY
      </motion.h1>

      {/* product button  */}
      <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 sm:px-4 py-0 rounded-xl border font-extrabold text-sm sm:text-base transition ${active === cat
              ? "bg-black text-white"
              : "bg-white text-black border-black border-2 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* Product Images */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-full mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden flex items-center justify-center"
            >
              <Image
                src={product.img}
                alt="Product Image"
                width={410}
                height={210}
                className="object-contain w-[200px] h-[220px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}