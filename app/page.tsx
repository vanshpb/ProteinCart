"use client";

import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import TrendingProducts from "@/app/components/TrendingProducts";
import TopBrands from "@/app/components/TopBrands";
import DealsSection from "@/app/components/DealsSection";
import BlogSection from "@/app/components/BlogSection";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <TrendingProducts />
      <TopBrands />
      <DealsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
