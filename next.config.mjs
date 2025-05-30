/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  srcDir: "src", // 👈 important for Vercel to find your app inside `src/`

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "riz-interiors-bucket.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "riz-interiors.vercel.app",
      },
      {
        protocol: "https",
        hostname: "riz-interiors-backend.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "rizinteriors.netlify.app",
      },
    ],
  },
};

export default nextConfig;
