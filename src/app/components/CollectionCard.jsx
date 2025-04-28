// components/CollectionCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({ id, name, image }) {
  return (
    <Link href={`/collections/${id}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {name}
          </h3>
          <p className="mt-2 text-indigo-500 font-medium text-sm">
            View Collection →
          </p>
        </div>
      </div>
    </Link>
  );
}
