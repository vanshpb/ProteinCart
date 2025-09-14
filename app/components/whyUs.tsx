"use client";

import { Mail, Star, Flag } from "lucide-react";

export default function WhyUs() {
    const stats = [
        {
            icon: <Mail className="w-8 h-8 text-gray-700" />,
            title: "60K+ Units Sold",
            description: "Our speakers have reached over 60,000 satisfied customers.",
        },
        {
            icon: <Star className="w-8 h-8 text-gray-700" />,
            title: "4.9/5 Average Rating",
            description: "Thousands of reviews praise our unmatched sound quality.",
        },
        {
            icon: <Flag className="w-8 h-8 text-gray-700" />,
            title: "100+ Countries",
            description:
                "Our products are loved and shipped across more than 100 countries.",
        },
    ];

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-12 text-center">
            {/* Small Tag */}
            <div className="inline-block px-3 py-1 text-sm border rounded-full mb-4 text-gray-600">
                Why us?
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-600">
                Trusted by Thousands, Engineered for Excellence
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
                    >
                        <div className="mb-4 p-3 rounded-full bg-gray-200">{stat.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-600">{stat.title}</h3>
                        <p className="text-gray-600 mt-2 text-sm">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
