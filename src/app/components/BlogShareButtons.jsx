"use client";

const BlogShareButtons = ({ blogTitle, blogUrl }) => {
  // Function to handle sharing
  const handleShare = (platform) => {
    // Get the current URL if blogUrl is not provided
    const url = blogUrl || window.location.href;
    const title = encodeURIComponent(blogTitle || "Check out this blog post");

    // Create share URLs for different platforms
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(
        url
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      copyLink: null, // Will be handled separately
    };

    // Open share dialog for social platforms
    if (platform !== "copyLink") {
      window.open(shareUrls[platform], "_blank", "width=600,height=400");
    } else {
      // Copy link to clipboard
      navigator.clipboard
        .writeText(url)
        .then(() => {
          // Show a temporary notification
          const notification = document.createElement("div");
          notification.textContent = "Link copied to clipboard!";
          notification.className =
            "fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg";
          document.body.appendChild(notification);

          // Remove notification after 2 seconds
          setTimeout(() => {
            notification.classList.add(
              "opacity-0",
              "transition-opacity",
              "duration-500"
            );
            setTimeout(() => document.body.removeChild(notification), 500);
          }, 2000);
        })
        .catch((err) => console.error("Failed to copy link: ", err));
    }
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => handleShare("facebook")}
        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Share on Facebook"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </button>

      <button
        onClick={() => handleShare("twitter")}
        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Share on Twitter"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </button>

      <button
        onClick={() => handleShare("linkedin")}
        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>

      <button
        onClick={() => handleShare("copyLink")}
        className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
        aria-label="Copy Link"
      >
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
    </div>
  );
};

export default BlogShareButtons;
