// src/components/HeroSlideshow.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlideshow({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the common breakpoint for tablets
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Slideshow effect
  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex ===
        (isMobile ? images.mobile.length - 1 : images.desktop.length - 1)
          ? 0
          : prevIndex + 1
      );
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(slideshowInterval);
  }, [images, isMobile]);

  // Get the current image list based on device type
  const currentImages = isMobile ? images.mobile : images.desktop;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {currentImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1500 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Added overflow-hidden to contain the zoomed image */}
          <div
            className={`absolute inset-0 overflow-hidden ${
              index === currentImageIndex ? "motion-safe:animate-slow-zoom" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Riz Interiors Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/50"></div>
        </div>
      ))}
    </div>
  );
}
