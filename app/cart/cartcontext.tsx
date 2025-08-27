"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// ✅ Define CartItem type
export type CartItem = {
  id: number;
  name: string;     // we use "name" in CartPage
  price: number;
  qty: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  updateQty: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Add product to cart
  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ✅ Update quantity
  const updateQty = (id: number, qty: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(qty, 1) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  // ✅ Remove item completely
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// ✅ Hook to use cart anywhere
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
