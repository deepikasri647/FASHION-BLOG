"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-pink-50 text-pink-800 pt-8"
    >

       {/* ✅ Featured Categories Section */}
      <div  id="category" className="mt-14 mb-10 bg-pink-100 text-pink-800 py-10 px-4 sm:px-8 md:px-20 text-center rounded-t-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
           Explore Popular Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/categories/style-tips"
            className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full hover:bg-pink-300 transition text-sm sm:text-base"
          >
            Style Tips
          </Link>
          <Link
            href="/categories/makeup"
            className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full hover:bg-pink-300 transition text-sm sm:text-base"
          >
            Makeup
          </Link>
          <Link
            href="/categories/accessories"
            className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full hover:bg-pink-300 transition text-sm sm:text-base"
          >
            Accessories
          </Link>
          <Link
            href="/categories/outfits"
            className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full hover:bg-pink-300 transition text-sm sm:text-base"
          >
            Outfits
          </Link>
          <Link
            href="/categories/diy-fashion"
            className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full hover:bg-pink-300 transition text-sm sm:text-base"
          >
            DIY Fashion
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Brand / Title */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Deepikasri</h2>
          <p className="text-sm text-pink-700">
            Crafting blogs with love and tech.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-pink-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-pink-600">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-pink-600">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Connect with Me</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:youremail@gmail.com"
              className="hover:text-red-400"
            >
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

     

      {/* Newsletter Subscribe Section */}
      <div className="mt-12 bg-pink-100 text-pink-800 py-10 px-4 sm:px-8 md:px-20 text-center rounded-t-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Subscribe to Our Fashion Newsletter
        </h2>
        <p className="mb-6">
          Get the latest fashion trends, style tips, and beauty guides delivered
          to your inbox!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full w-full sm:w-80 text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mt-8 text-center text-pink-800  text-center text-sm">
        © {new Date().getFullYear()} Deepikasri. All rights reserved.
      </div>
    </motion.footer>
  );
}