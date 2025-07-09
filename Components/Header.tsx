"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setMenuOpen(false);
    }
  };

  return (
      <header className="bg-pink-100 text-pink-600 p-4 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Top Row: Logo + Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ml-2">
            <span className="text-2xl">👗</span>
            <Link href="/" className="text-2xl font-bold hover:text-pink-400">
              Fashionista
            </Link>
          </div>
          {/* Hamburger Button */}
          <button
            className="md:hidden text-2xl mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Nav Links & Search */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row md:items-center w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-2 md:mt-0 px-2 md:px-0">
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:text-pink-400" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 md:py-0 hover:text-pink-400" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
             <Link href="#category" className="block py-2 md:py-0 hover:text-pink-400" onClick={() => setMenuOpen(false)}>
  Categories
</Link>
            </li>
            <li>
              <Link href="/blog" className="block py-2 md:py-0 hover:text-pink-400" onClick={() => setMenuOpen(false)}>
                Trends
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="relative w-full md:w-64 mt-4 md:mt-0 px-2 md:px-0"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-10 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-600 hover:text-pink-800"
            >
              🔍
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}