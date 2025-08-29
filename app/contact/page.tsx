"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen py-12 px-6 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-12">
          Have questions or need support? Reach out to us — we’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white border p-8 rounded-2xl shadow-md text-left"
          >
            <div className="mb-4">
              <label className="block font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg transition hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center bg-white text-left">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-800 mb-6">
              Whether it’s about your order, partnerships, or general queries,
              our team is here to help you.
            </p>

            <div className="space-y-4">
              <p>
                <span className="font-medium">📍 Address:</span> 123, New Delhi, India
              </p>
              <p>
                <span className="font-medium">📧 Email:</span>{" "}
                <a href="mailto:care@theproteincart.com" className="underline">
                  care@theproteincart.com
                </a>
              </p>
              <p>
                <span className="font-medium">📞 Phone:</span>{" "}
                <a href="tel:+911234567890" className="underline">
                  +91 12345 67890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
