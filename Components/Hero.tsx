"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-20 text-pink-800"
      style={{
        backgroundImage: "url('/images/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffe4e6", // fallback light pink
      }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
         Fashion Trends 2025
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-8 backdrop-blur-sm bg-white/50 rounded-md p-4">
        Discover styles that define you. Dive into the latest fashion tips &
        tricks!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/blog"
          className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
        >
          Explore Blogs
        </Link>
        <Link
          href="/#trending-categories"
          className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition"
        >
          Explore Categories
        </Link>
      </div>
    </motion.section>
  );
}