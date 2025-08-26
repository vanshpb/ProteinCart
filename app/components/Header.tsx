"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-black sticky top-0 z-50 bg-white border-b border-black/10">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-12 py-2">

        {/* Logo */}
        <div className="flex items-center h-[60px] lg:h-[72px] mb-2 lg:mb-0">
          <img
            src="/logo.png"
            alt="ProteinCart Logo"
            className="h-[27px] lg:h-max w-auto object-contain"
          />
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-4xl lg:mx-6 px-3 lg:px-0">
          <div className="relative">
            <input
              type="text"
              placeholder="UPGRADE YOUR FITNESS FUEL"
              className="w-full px-10 py-2 rounded-lg border border-gray-600 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-black text-sm lg:text-base"
            />
            <button className="absolute left-3 top-2.5 text-gray-800 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 lg:h-6 lg:w-6"
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
        <div className="flex justify-end items-center space-x-4 px-3 lg:px-0 mt-2 lg:mt-0">
          {/* Account */}
          <button className="text-gray-400 hover:text-black transition-colors p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 
                00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button className="relative text-gray-400 hover:text-black transition-colors p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 
                  13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 
                  1.707.707 1.707H17m0 0a2 2 0 100 
                  4 2 2 0 000-4zm-8 2a2 2 0 
                  11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
        className={`flex flex-col lg:flex-row justify-center lg:justify-center space-y-3 lg:space-y-0 space-x-0 lg:space-x-8 px-3 lg:px-0 transition-all duration-300 ${
          menuOpen ? "block py-3" : "hidden lg:flex"
        }`}
      >
        {["Home", "About Us", "Brands", "Nutrition", "Combos", "Contact"].map(
          (item) => (
            <a
              key={item}
              href="#"
              className="relative group text-gray-800 hover:text-black font-medium transition-colors"
            >
              {item}
              <span className="absolute-bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          )
        )}
      </nav>
    </header>
  );
}
