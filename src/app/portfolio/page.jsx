// src/app/portfolio/page.jsx
import { getCollections } from "@/lib/api";
import CollectionCard from "../components/CollectionCard";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function PortfolioPage() {
  const data = await getCollections();
  const collections = Array.isArray(data) ? data : data.collections || [];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Collections</h1>

      {collections.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No collections found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </main>
  );
}
