"use client";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-black sticky top-0 z-50 bg-white border-b border-black/10">
      {/* Top Section */}
      <div className="flex items-center justify-between px-3 lg:px-8 xl:px-12 py-2 h-[60px] lg:h-[72px]">

        {/* Logo - Height matches header */}
        <div className="flex-shrink-0 flex items-center h-full">
          <div className="relative w-[150px] lg:w-[250px] h-[60px] lg:h-[160px]">
            <Image
              src="/logo.png"
              alt="ProteinCart Logo"
              fill
              className="object-contain object-left lg:object-center"
              priority
              sizes="(max-width: 1024px) 150px, 250px"
            />
          </div>
        </div>

        {/* Search Bar - Reduced width on mobile */}
        <div className="flex-1 max-w-[140px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-2xl xl:max-w-3xl mx-2 lg:mx-4 xl:mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="UPGRADE YOUR FITNESS FUEL"
              className="w-full px-8 lg:px-10 py-1.5 lg:py-2 rounded-lg border border-black bg-white text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-xs lg:text-base"
            />
            <button
              className="absolute left-2 lg:left-3 top-1/2 transform -translate-y-1/2 text-black hover:text-black transition-colors"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 lg:h-4 lg:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* User Actions + Mobile Menu Button */}
        <div className="flex-shrink-0 flex items-center space-x-1.5 sm:space-x-2 lg:space-x-4">
          {/* Account - Now visible on mobile */}
          <button
            className="text-gray-500 hover:text-black transition-colors p-1.5 lg:p-2.5 rounded-full hover:bg-gray-100"
            aria-label="Account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button
            className="relative text-gray-500 hover:text-black transition-colors p-1.5 lg:p-2.5 rounded-full hover:bg-gray-100"
            aria-label="Shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`flex flex-col lg:flex-row justify-center lg:justify-center space-y-2 lg:space-y-0 space-x-0 lg:space-x-6 xl:space-x-8 px-4 lg:px-0 transition-all duration-300 bg-white lg:bg-transparent ${menuOpen ? "block py-3 lg:py-0 border-t border-gray-200 lg:border-t-0" : "hidden lg:flex"
          }`}
        aria-label="Main navigation"
      >
        {["Home", "About Us", "Brands", "Nutrition", "Combos", "Contact"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="relative group text-gray-700 hover:text-black font-medium transition-colors py-2 lg:py-3 text-center lg:text-left"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-3/4 lg:group-hover:w-full"></span>
            </a>
          )
        )}
      </nav>
    </header>
  );
}