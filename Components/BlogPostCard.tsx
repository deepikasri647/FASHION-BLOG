"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlogPost } from "@/types";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-pink-50 border border-pink-200 rounded-xl overflow-hidden shadow-md flex flex-col h-full"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={post.imageUrl || "/images/placeholder-image.jpg"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold text-pink-700 mb-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{post.category}</span>
          <span>🖊 {post.author}</span>
        </div>
      </div>
    </motion.article>
  );
}