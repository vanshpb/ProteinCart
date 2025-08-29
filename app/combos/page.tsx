"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/cart/cartcontext";  // ✅ Import cart context

interface ComboProduct {
  title: string;
  price: string;
  image: string;
  link: string;
}

interface Combo {
  brand: string;
  comboName: string;
  products: ComboProduct[];
  comboPrice: string;
}

export default function CombosPage() {
  const [combos, setCombos] = useState<Combo[]>([]);
  const { addToCart } = useCart(); // ✅ Cart function

  // ✅ Fetch combos.json
  useEffect(() => {
    fetch("/jsonFiles/combos.json")
      .then((res) => res.json())
      .then((data) => setCombos(data))
      .catch((err) => console.error("Error loading combos:", err));
  }, []);

  // ✅ Add whole combo as single cart item
  const handleAddCombo = (combo: Combo) => {
    addToCart({
      id: `combo-${combo.brand}-${combo.comboName}`, // unique combo id
      name: combo.comboName,
      price: parseFloat(combo.comboPrice.replace(/[^0-9.]/g, "")), // extract number
      image: combo.products[0]?.image || "/default-combo.png", // first product image as thumbnail
      quantity: 1,
      details: combo.products.map((p) => p.title).join(", "), // extra info (optional for cart display)
    });
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Combos</h1>
        <p className="text-gray-600 mb-12">
          Get the best value with our specially curated supplement combos!
        </p>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, idx) => (
            <div
              key={idx}
              className="border rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col bg-white"
            >
              {/* Combo Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {combo.comboName}
              </h2>

              {/* Products Inside Combo */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {combo.products.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-24 h-24 object-contain"
                    />
                    <p className="text-sm text-gray-700 mt-2 text-center">{p.title}</p>
                    <p className="text-xs text-gray-500">{p.price}</p>
                  </a>
                ))}
              </div>

              {/* Combo Price */}
              <p className="text-lg font-bold text-indigo-600 mt-auto">
                Combo Price: {combo.comboPrice}
              </p>

              {/* Add Combo Button */}
              <button
                onClick={() => handleAddCombo(combo)}
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition"
              >
                Add Combo to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
