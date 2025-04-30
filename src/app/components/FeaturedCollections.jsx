import Link from "next/link";

export default function FeaturedCollections({ featuredCollections }) {
  <div className="container mx-auto">
    <div className="text-center mb-16 motion-safe:animate-fade-in">
      <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
        PORTFOLIO
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
        Featured Collections
      </h2>
      <p className="text-xl text-gray-800 max-w-2xl mx-auto">
        Discover our most popular interior design collections, crafted with
        passion and precision
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {featuredCollections.map((collection, index) => (
        <Link
          key={collection._id}
          href={`/collections/${collection._id}`}
          className={`group motion-safe:animate-fade-in`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white text-lg font-medium bg-[#050a30] px-3 py-1 rounded-full">
                  View Collection
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#050a30] transition-colors duration-300">
                {collection.name}
              </h3>
              <p className="mt-2 text-gray-800 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                Explore our {collection.name.toLowerCase()} designs that embody
                elegance and functionality
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>

    <div className="text-center mt-16">
      <Link
        href="/portfolio"
        className="inline-block bg-[#050a30] text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        View All Collections
      </Link>
    </div>
  </div>;
}
