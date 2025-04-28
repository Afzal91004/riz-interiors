"use client";

import { useEffect } from "react";

const InstagramFeed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const instagramPosts = [
    {
      id: 1,
      url: "https://www.instagram.com/p/C_h9gfOIytA/?utm_source=ig_embed&utm_campaign=loading",
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/C0y91eHSmgh/?utm_source=ig_embed&utm_campaign=loading",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/C7_Mv2oydI4/?utm_source=ig_embed&utm_campaign=loading",
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/Cw4lNeWSR8T/?utm_source=ig_embed&utm_campaign=loading",
    },
    {
      id: 5,
      url: "https://www.instagram.com/reel/Cq2dYBjLjDq/?utm_source=ig_embed&utm_campaign=loading",
    },
    {
      id: 6,
      url: "https://www.instagram.com/reel/CtW8aJ7oUjF/?utm_source=ig_embed&utm_campaign=loading",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Follow Our Journey
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Get inspired by our latest projects and behind-the-scenes moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="instagram-post-container rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ minHeight: "450px" }} // Added fixed minimum height
            >
              <blockquote
                className="instagram-media w-full h-full m-0"
                data-instgrm-permalink={post.url}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: "0",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  margin: "0",
                  padding: "0",
                  width: "100%",
                  height: "100%", // Make sure it fills the container
                  minWidth: "unset", // Override Instagram's default minWidth
                  maxWidth: "100%",
                  minHeight: "450px", // Match the container's minimum height
                }}
              >
                <div style={{ padding: "0", height: "100%" }}>
                  <a
                    href={post.url}
                    style={{
                      background: "#FFFFFF",
                      lineHeight: "0",
                      padding: "0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "450px", // Match the container's minimum height
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "12px",
                      }}
                    >
                      <svg
                        style={{
                          height: "28px",
                          width: "28px",
                          marginRight: "10px",
                        }}
                        fill="#E1306C"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                        <path d="M12 6.865c-2.841 0-5.145 2.303-5.145 5.144s2.304 5.145 5.145 5.145 5.145-2.304 5.145-5.145-2.304-5.144-5.145-5.144zm0 8.485c-1.848 0-3.341-1.494-3.341-3.341s1.493-3.341 3.341-3.341 3.341 1.494 3.341 3.341-1.493 3.341-3.341 3.341z" />
                        <circle cx="17.335" cy="6.665" r="1.2" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "600",
                          color: "#262626",
                          fontSize: "16px",
                        }}
                      >
                        Loading Instagram Post...
                      </span>
                    </div>
                    <div
                      style={{
                        width: "90%",
                        height: "80%",
                        background: "#f9f9f9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 50 50"
                        style={{ color: "#ccc" }}
                      >
                        <circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="5"
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            dur="1.5s"
                            repeatCount="indefinite"
                            values="1,200;90,200;1,200"
                            keyTimes="0;0.5;1"
                          />
                          <animate
                            attributeName="stroke-dashoffset"
                            dur="1.5s"
                            repeatCount="indefinite"
                            values="0;-35;-125"
                            keyTimes="0;0.5;1"
                          />
                        </circle>
                      </svg>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/riz_interiors/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2"
            >
              <path d="M12 2.2c3.2 0 3.6.01 4.9.07 3.2.15 4.7 1.7 4.9 4.9.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.15 3.2-1.7 4.7-4.9 4.9-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-3.2-.15-4.7-1.7-4.9-4.9C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.9c.15-3.2 1.7-4.7 4.9-4.9C8.4 2.21 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3.01 7 .07 2.7.27.27 2.7.07 7 .01 8.3 0 8.7 0 12c0 3.3.01 3.7.07 5 .2 4.3 2.7 6.7 7 6.9 1.3.06 1.7.07 5 .07s3.7-.01 5-.07c4.3-.2 6.7-2.7 6.9-7 .06-1.3.07-1.7.07-5s-.01-3.7-.07-5c-.2-4.3-2.7-6.7-7-6.9C15.7.01 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.7a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
            Follow @rizinteriors
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
