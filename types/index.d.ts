export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML content or Markdown
  category: string;
  imageUrl: string;
  date: string;
  author: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
}