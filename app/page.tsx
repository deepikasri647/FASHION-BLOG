import Hero from "@/Components/Hero";
import { getLatestPosts } from "@/lib/api";
import BlogPostCard from "@/Components/BlogPostCard";

export default async function HomePage() {
  const latestPosts = await getLatestPosts(6);

  return (
    <div className="bg-pink-50 min-h-screen">
      <Hero />
      <section className="py-16 px-4 sm:px-8 md:px-20">
        <h2 className="text-3xl font-bold text-pink-700 mb-8 text-center">
           Latest Fashion Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}