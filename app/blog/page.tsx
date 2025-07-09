import { getAllPosts } from '@/lib/api';
import BlogPostCard from '@/Components/BlogPostCard';
import { BlogPost } from '@/types';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams?: {
    search?: string;
  };
}

export default async function BlogListPage({ searchParams }: Props) {
  const search = searchParams?.search?.toLowerCase() || '';
  const allPosts: BlogPost[] = await getAllPosts();

  const filteredPosts = search
    ? allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(search) ||
          post.category.toLowerCase().includes(search) ||
          post.excerpt.toLowerCase().includes(search)
      )
    : allPosts;

  return (
    <div className="py-12 px-4 sm:px-8 md:px-16 bg-pink-50 min-h-screen">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-10 text-center">
        {search ? `Results for "${search}"` : ' Fashion Blogs'}
      </h1>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-pink-600 text-lg">No fashion posts found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}