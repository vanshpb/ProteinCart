"use client";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Help & Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Contact Us</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">FAQ</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Shipping & Return</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">My Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">My Account</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">My Orders</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">My Addresses</a></li>
          </ul>
        </div>

        {/* The Protein Cart */}
        <div>
          <h3 className="font-semibold text-lg mb-4">The Protein Cart</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">About Us</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Authenticity Check</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Delivery</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Store Locator</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Sell on HealthXP</a></li>
            <li><a href="#" className="hover:shadow-md hover:shadow-gray-500 transition">Sitemap</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p className="mb-2">Email: <a href="mailto:care@Theproteincart.in" className="hover:shadow-md hover:shadow-gray-500 transition">care@Theproteincart.in</a></p>
          <p className="mb-2">Phone: <a href="tel:+911234567890" className="hover:shadow-md hover:shadow-gray-500 transition">+91-1234567890</a></p>
          <p>Address: 123, New Delhi, India</p>
        </div>

      </div>
      <div className="text-center text-gray-600 mt-8 pt-6 text-sm">
        © {new Date().getFullYear()} The Protein Cart. All rights reserved.
      </div>
    </footer>
  );
}
