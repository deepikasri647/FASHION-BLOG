export default function AboutUsPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About My Simple Blog</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Welcome to My Simple Blog! This is a minimalist blog built to demonstrate a clean and efficient structure using Next.js 14, the App Router, and TypeScript. We focus on delivering straightforward content without unnecessary complexities.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Our goal is to provide insightful articles on various topics, from web development tips to technology trends. We believe in keeping things simple and functional.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        Thank you for visiting!
      </p>
    </div>
  );
}