import BlogPostCard from '@/Components/BlogPostCard';
import { getPostsByCategory, getAllCategorySlugs } from '@/lib/api';
import { BlogPost } from '@/types';
import { notFound } from 'next/navigation';

// This function pre-renders category pages at build time
export async function generateStaticParams() {
  const slugs = await getAllCategorySlugs();
  return slugs; // Expected: [{ categorySlug: 'web-development' }, { categorySlug: 'css' }]
}

interface PostsByCategoryPageProps {
  params: { categorySlug: string };
}

export default async function PostsByCategoryPage({ params }: PostsByCategoryPageProps) {
  const posts: BlogPost[] = await getPostsByCategory(params.categorySlug);

  // You might choose to show a "no posts" message or a 404 if the category slug itself is invalid
  if (posts.length === 0) {
    // Optionally, if you want a 404 for non-existent categories uncomment notFound()
    // For now, it will render "No posts found" if the category exists but has no posts
    // notFound();
  }

  // Derive a user-friendly category name for the heading
  const categoryName = posts.length > 0
    ? posts[0].category // Use the category name from a post if available
    : params.categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Fallback: capitalize slug

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Posts in "{categoryName}"
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No posts found for this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}