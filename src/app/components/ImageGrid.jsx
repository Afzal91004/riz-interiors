// components/ImageGrid.jsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageGrid({ images, onImageClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map((img, index) => (
        <motion.div
          key={img.id}
          className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
          onClick={() => onImageClick(img.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={img.image}
            alt={img.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="w-full">
              <h3 className="text-white font-semibold text-lg">{img.name}</h3>
              <div className="w-10 h-1 bg-indigo-400 mt-2"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
