import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 text-center hover:bg-blue-50 transition-colors duration-200">
        <h3 className="text-xl font-semibold text-blue-700">{category.name}</h3>
      </div>
    </Link>
  );
}