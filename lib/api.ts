import { BlogPost, Category } from "@/types";

// --- MOCK DATA (Fashion Blog) ---


const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'summer-outfit-ideas',
    title: 'Top 10 Summer Outfit Ideas',
    excerpt: 'Stay cool and stylish this summer with these outfit inspirations.',
    content: `Full blog content here...`,
    category: 'Outfits',
    imageUrl: '/images/summer-outfit.jpg',
    date: '2025-07-01',
    author: 'Deepikasri'
  },
  {
    id: '2',
    slug: 'winter-layering-tips',
    title: 'Winter Layering Tips for a Cozy Look',
    excerpt: 'Master the art of layering with these winter styling hacks.',
    content: `Full blog content here...`,
    category: 'Outfits',
    imageUrl: '/images/winter-layering.jpg',
    date: '2025-07-02',
    author: 'Rithu'
  },
  {
    id: '3',
    slug: 'evening-party-dresses',
    title: 'Stunning Evening Party Dresses',
    excerpt: 'Discover the latest evening party dresses to make you shine.',
    content: `Full blog content here...`,
    category: 'Outfits',
    imageUrl: '/images/party-dresses1.jpg',
    date: '2025-07-03',
    author: 'Mathu'
  },
  {
    id: '4',
    slug: 'boho-chic-style',
    title: 'Boho Chic Style Guide',
    excerpt: 'A complete guide to mastering the boho chic style.',
    content: `Full blog content here...`,
    category: 'Style Tips',
    imageUrl: '/images/boho-style.jpg',
    date: '2025-07-04',
    author: 'Gokul'
  },
  {
    id: '5',
    slug: 'workwear-fashion-trends',
    title: 'Workwear Fashion Trends 2025',
    excerpt: 'Upgrade your office looks with these trending workwear styles.',
    content: `Full blog content here...`,
    category: 'Trends',
    imageUrl: '/images/workwear-trends.jpg',
    date: '2025-07-05',
    author: 'Sangeetha'
  },
  {
    id: '6',
    slug: 'accessories-to-elevate-look',
    title: 'Accessories to Elevate Your Look',
    excerpt: 'From bags to jewelry, see how accessories transform your outfit.',
    content: `Full blog content here...`,
    category: 'Accessories',
    imageUrl: '/images/fashion-accessories.jpg',
    date: '2025-07-06',
    author: 'Vaishnavi'
  },
  {
    id: '7',
    slug: 'easy-diy-fashion-projects',
    title: 'Easy DIY Fashion Projects',
    excerpt: 'Try these fun and creative fashion DIY projects.',
    content: `Full blog content here...`,
    category: 'DIY Fashion',
    imageUrl: '/images/diy-fashion1.jpg',
    date: '2025-07-07',
    author: 'Harish'
  },
  {
    id: '8',
    slug: 'makeup-looks-2025',
    title: 'Top Makeup Looks of 2025',
    excerpt: 'Stay updated with the trending makeup looks for the year.',
    content: `Full blog content here...`,
    category: 'Makeup',
    imageUrl: '/images/makeup-trends.jpg',
    date: '2025-07-08',
    author: 'Priya'
  },
  {
    id: '9',
    slug: 'accessorize-right-guide',
    title: 'How to Accessorize Right',
    excerpt: 'Guide to choosing the perfect accessories for every occasion.',
    content: `Full blog content here...`,
    category: 'Accessories',
    imageUrl: '/images/accessroize1.jpg',
    date: '2025-07-09',
    author: 'Gowtham'
  },
  {
    id: '10',
    slug: 'seasonal-fashion-trends',
    title: 'Seasonal Fashion Trends You Need to Know',
    excerpt: 'A quick overview of must-know seasonal fashion trends.',
    content: `Full blog content here...`,
    category: 'Trends',
    imageUrl: '/images/seasonal-trends.jpg',
    date: '2025-07-10',
    author: 'Srimathi'
  }
];

const MOCK_CATEGORIES: Category[] = [
  { id: "1", slug: "style-tips", name: "Style Tips" },
  { id: "2", slug: "makeup", name: "Makeup" },
  { id: "3", slug: "accessories", name: "Accessories" },
  { id: "4", slug: "outfits", name: "Outfits" },
  { id: "5", slug: "diy-fashion", name: "DIY Fashion" },
  { id: "6", slug: "trends", name: "Trends" },
  { id: "7", slug: "beauty", name: "Beauty" },
  { id: "8", slug: "shopping-guides", name: "Shopping Guides" },
  { id: "9", slug: "celebrity-style", name: "Celebrity Style" },
  { id: "10", slug: "sustainable-fashion", name: "Sustainable Fashion" }
];

// --- SIMULATED API CALLS ---

export async function getAllPosts(): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_POSTS;
}

export async function getLatestPosts(count: number = 6): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_POSTS.find(post => post.slug === slug) || null;
}

export async function getAllCategories(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_CATEGORIES;
}

export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const foundCategory = MOCK_CATEGORIES.find(cat => cat.slug === categorySlug);
  if (!foundCategory) return [];

  return MOCK_POSTS.filter(post =>
    post.category.toLowerCase().replace(/\s/g, '-') === categorySlug
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export async function getAllCategorySlugs(): Promise<{ categorySlug: string }[]> {
  const categories = await getAllCategories();
  return categories.map(category => ({ categorySlug: category.slug }));
}