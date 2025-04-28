// components/ImageViewer.jsx
"use client";
import { useState, useEffect } from "react";
import ImageGrid from "@/app/components/ImageGrid";
import ImageModal from "@/app/components/ImageModal";
import { getInteriorImagesByCollection } from "../../../lib/api";

export default function ImageViewer({
  images: initialImages,
  totalPages,
  collectionId,
}) {
  const [images, setImages] = useState(initialImages);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadPage = async (page) => {
    if (page < 1 || page > totalPages) return;

    setLoading(true);
    const response = await getInteriorImagesByCollection(collectionId, page);
    if (response.interiorImages) {
      setImages(response.interiorImages);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setLoading(false);
  };

  const handleImageClick = (id) => {
    setSelectedImageId(id);
  };

  const closeModal = () => {
    setSelectedImageId(null);
  };

  return (
    <div className="py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <>
          <ImageGrid
            images={images.map((img) => ({
              id: img._id,
              name: img.name,
              image: img.image,
            }))}
            onImageClick={handleImageClick}
          />

          {totalPages > 1 && (
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => loadPage(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="px-6 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => loadPage(page)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        page === currentPage
                          ? "bg-indigo-600 text-white"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                      } transition-colors`}
                      disabled={loading}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => loadPage(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
                className="px-6 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 flex items-center gap-2 transition-colors"
              >
                Next
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      )}

      <ImageModal imageId={selectedImageId} onClose={closeModal} />
    </div>
  );
}
