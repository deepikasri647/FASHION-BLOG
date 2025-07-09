import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Make sure this path is correct based on your structure
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fashion-Blog',
  description: 'A developer-focused blog sharing tutorials, tips, and insights on web development, React, APIs, CSS, and more. Perfect for learners and tech enthusiasts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col m-0 min-h-screen bg-gray-100`}>
        <Header />
        
          {children}
        
        <Footer />
      </body>
    </html>
  );
}