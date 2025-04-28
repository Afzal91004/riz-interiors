// src/app/collections/page.jsx
import { getCollections } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import CollectionCard from "@/app/components/CollectionCard";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function CollectionsPage() {
  // Get all collections
  const collectionsData = await getCollections();
  const collections = Array.isArray(collectionsData)
    ? collectionsData
    : collectionsData.collections || [];

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/collections-hero.jpg" // Replace with your hero image
          alt="Interior Design Collections"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40 " />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Collections
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Explore our curated interior design collections and find
              inspiration for your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 relative">
                Browse Our Collections
                <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                Discover our carefully curated collections of interior designs,
                created to inspire and transform your living spaces.
              </p>
            </div>

            {/* Filter/Sort Options - Could be made functional */}
            <div className="mt-6 md:mt-0 flex space-x-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Recently Added</option>
                  <option>Popular</option>
                  <option>Name A-Z</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>All Styles</option>
                  <option>Modern</option>
                  <option>Traditional</option>
                  <option>Contemporary</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {collections.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <svg
                className="h-20 w-20 mx-auto text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                No Collections Available
              </h3>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                We&apos;re currently working on curating amazing collections for
                you to explore. Please check back soon to see our latest
                designs.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <CollectionCard
                  key={collection._id}
                  id={collection._id}
                  name={collection.name}
                  image={collection.image}
                />
              ))}
            </div>
          )}

          {/* Pagination - Can be made functional */}
          {collections.length > 0 && (
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium">
                  1
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  2
                </button>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  3
                </button>
                <span className="px-2 text-gray-500">...</span>
                <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                  8
                </button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Featured Collection Section */}
      {collections.length > 0 && (
        <section className="py-20 bg-[#050a30] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Featured Collection</h2>
                <h3 className="text-2xl font-medium text-indigo-300 mb-4">
                  {collections[0].name}
                </h3>
                <p className="text-lg text-white/80 mb-8">
                  {collections[0].description ||
                    "Explore our most popular collection showcasing the perfect blend of style, comfort, and functionality. Each design is carefully crafted to transform ordinary spaces into extraordinary experiences."}
                </p>
                <Link
                  href={`/collections/${collections[0]._id}`}
                  className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:bg-indigo-100 transition-colors"
                >
                  <span>Explore Collection</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={collections[0].image}
                  alt={collections[0].name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated with Our New Collections
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates about our latest
              collections, design tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your space?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Get in touch with our design team to discuss how we can bring these
            stunning interior designs to your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all"
            >
              Request a Consultation
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-full border border-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
