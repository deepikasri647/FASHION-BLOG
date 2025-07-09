export default function TrendingCategories() {
  const categories = ['Style Tips', 'Makeup', 'Accessories', 'Outfits', 'DIY', 'Trends'];

  return (
    <section id="trending-categories" className="bg-[#fff4f7] py-16 px-4 sm:px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
          Trending <span className="text-pink-600">Categories</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-pink-100 text-pink-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-pink-200 transition"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}