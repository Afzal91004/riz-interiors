// components/ImageModal.jsx
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getInteriorImageById } from "../../lib/api";

export default function ImageModal({ imageId, onClose }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!imageId) return;

    const fetchImage = async () => {
      setLoading(true);
      const response = await getInteriorImageById(imageId);
      if (response?.success) {
        setImage(response.interiorImage);
      }
      setLoading(false);
    };

    fetchImage();
  }, [imageId]);

  return (
    <AnimatePresence>
      {imageId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          <motion.div
            className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {loading ? (
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
              </div>
            ) : image ? (
              <>
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={image.image}
                    alt={image.name}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {image.name}
                      </h3>
                      <p className="text-indigo-600 mt-1">
                        {image.collectionRef?.name || "No collection"}
                      </p>
                    </div>
                    <button
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      onClick={onClose}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  {image.description && (
                    <p className="mt-4 text-gray-600">{image.description}</p>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center p-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-gray-400"
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
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  Image not found
                </h3>
                <p className="mt-2 text-gray-600">
                  The requested image could not be loaded
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
