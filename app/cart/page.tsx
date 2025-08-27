"use client";

import { useCart } from "@/app/cart/cartcontext"; // ✅ use global cart
import { useRouter } from "next/navigation";

export default function CartPage() {
    const router = useRouter();
    const { cart, updateQty,} = useCart(); // ✅ pull from context

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="min-h-screen bg-white py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                        Your Shopping Cart
                    </h1>

                    {cart.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="mt-4 text-xl text-gray-900">Your cart is empty.</p>
                            <button
                                onClick={() => router.push("/")}
                                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Cart Items */}
                            <ul className="divide-y divide-gray-200">
                                {cart.map((item) => (
                                    <li key={item.id} className="flex items-center justify-between py-4">
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">₹{item.price}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    onClick={() => updateQty(item.id, item.qty - 1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    -
                                                </button>
                                                <span>{item.qty}</span>
                                                <button
                                                    onClick={() => updateQty(item.id, item.qty + 1)}
                                                    className="px-2 py-1 border rounded"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* Total + Actions */}
                            <div className="mt-8">
                                <h2 className="text-xl font-bold">
                                    Total: ₹{total.toFixed(2)}
                                </h2>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium">
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={() => router.push("/")}
                                    className="px-6 py-3 border border-gray-900 text-gray-900 rounded-md hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
