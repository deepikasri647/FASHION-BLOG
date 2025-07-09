import { getPostBySlug, getAllPostSlugs } from '@/lib/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// This function tells Next.js to pre-render these pages at build time (SSG)
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs; // Expects an array like [{ slug: 'post-1' }, { slug: 'post-2' }]
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  // If the post is not found (e.g., direct access to a non-existent slug), show 404
  if (!post) {
    notFound(); // Triggers Next.js's built-in 404 page
  }

  return (
    <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <Image
        src={post.imageUrl || '/images/placeholder-image.jpg'}
        alt={post.title}
        width={800} // Set appropriate dimensions for your images
        height={450}
        className="w-full h-auto rounded-lg mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-6">Category: <span className="font-medium text-blue-700">{post.category}</span></p>
      <div
        className="prose prose-blue max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}