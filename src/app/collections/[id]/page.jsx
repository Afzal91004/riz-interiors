// src/app/collections/[id]/page.jsx
import { getCollections, getInteriorImagesByCollection } from "@/lib/api";
import ImageGrid from "@/app/components/ImageGrid";
import ImageViewer from "./ImageViewer";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // Revalidate this page every 60 seconds

export async function generateStaticParams() {
  const data = await getCollections();
  const collections = Array.isArray(data) ? data : data.collections || [];

  return collections.map((collection) => ({
    id: collection._id,
  }));
}

export default async function CollectionPage({ params }) {
  const { id } = params;

  // Get this collection's details
  const collectionsData = await getCollections();
  const collections = Array.isArray(collectionsData)
    ? collectionsData
    : collectionsData.collections || [];
  const collection = collections.find((c) => c._id === id);

  // Get interior images for this collection
  const imagesData = await getInteriorImagesByCollection(id);
  const images = imagesData.interiorImages || [];
  const totalPages = imagesData.totalPages || 1;

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
        <div className="max-w-md mx-auto text-center px-4 py-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <svg
              className="h-16 w-16 mx-auto text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900 mt-6">
              Collection Not Found
            </h1>
            <p className="mt-4 text-gray-600">
              The collection you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              href="/collections"
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/60" />

        {/* Floating Content Card */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-12 pt-24">
            <div className="bg-white/95 backdrop-blur-md rounded-t-3xl p-8 shadow-2xl max-w-4xl mx-auto transform translate-y-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    {collection.name}
                  </h1>
                  {collection.description && (
                    <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                      {collection.description}
                    </p>
                  )}
                </div>
                <div className="mt-6 md:mt-0 flex items-center justify-start md:justify-end text-indigo-700">
                  <svg
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                  <span className="text-xl font-semibold">
                    {images.length} designs
                  </span>
                </div>
              </div>

              {/* Navigation Breadcrumbs */}
              <div className="flex items-center mt-8 text-sm text-gray-500">
                <Link
                  href="/"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Home
                </Link>
                <svg
                  className="h-4 w-4 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <Link
                  href="/collections"
                  className="hover:text-indigo-600 transition-colors"
                >
                  Collections
                </Link>
                <svg
                  className="h-4 w-4 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-900 font-medium">
                  {collection.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 relative">
              Design Gallery
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-indigo-600"></span>
            </h2>

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

          {images.length === 0 ? (
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Gallery Coming Soon
              </h3>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">
                We're currently curating the perfect collection of interior
                designs for this space. Check back soon to be inspired by our
                latest creations.
              </p>
              <Link
                href="/collections"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Explore Other Collections
              </Link>
            </div>
          ) : (
            <ImageViewer
              images={images}
              totalPages={totalPages}
              collectionId={id}
            />
          )}
        </div>
      </section>

      {/* Related Collections Section */}
      {collections.length > 1 && (
        <section className="py-20 bg-[#050a30] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Explore More Collections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections
                .filter((c) => c._id !== id)
                .slice(0, 3)
                .map((relatedCollection) => (
                  <Link
                    href={`/collections/${relatedCollection._id}`}
                    key={relatedCollection._id}
                    className="group block bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-64">
                      <Image
                        src={relatedCollection.image}
                        alt={relatedCollection.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                        <div className="p-6 w-full">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {relatedCollection.name}
                          </h3>
                          <div className="flex items-center">
                            <span className="text-indigo-300 text-sm">
                              View collection
                            </span>
                            <svg
                              className="ml-2 w-4 h-4 text-indigo-300 group-hover:translate-x-1 transition-transform"
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

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
              href="/services/consultation"
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
