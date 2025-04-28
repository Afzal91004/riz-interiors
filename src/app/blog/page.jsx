import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "../../lib/api";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const { blogs } = await getBlogs();
  const publishedBlogs = blogs.filter((blog) => blog.isPublished);

  // Get featured blog (first published blog)
  const featuredBlog = publishedBlogs.length > 0 ? publishedBlogs[0] : null;
  // Get remaining blogs
  const remainingBlogs =
    publishedBlogs.length > 1 ? publishedBlogs.slice(1) : [];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blog-hero.png" // Add a blog-related hero image
            alt="Riz Interiors Blog"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-1"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl motion-safe:animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Design Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Discover the latest trends, tips, and inspiration for your interior
            design journey
          </p>
        </div>
      </section>

      {/* Featured Blog Post */}
      {featuredBlog && (
        <section className="py-20 px-4 bg-white relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl translate-y-1/4 -translate-x-1/3"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                FEATURED ARTICLE
              </span>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
                Latest from Our Blog
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden motion-safe:animate-fade-in">
              <div className="lg:col-span-7 relative h-96 lg:h-full">
                <Image
                  src={featuredBlog.coverImage}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
                {featuredBlog.tags.length > 0 && (
                  <div className="absolute top-6 left-6 bg-[#050a30] text-white text-sm font-medium px-4 py-1 rounded-full">
                    {featuredBlog.tags[0]}
                  </div>
                )}
              </div>
              <div className="lg:col-span-5 p-6 lg:p-10">
                <p className="text-indigo-700 font-medium mb-3">
                  {new Date(featuredBlog.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </p>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  {featuredBlog.title}
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  {featuredBlog.excerpt}
                </p>
                <Link
                  href={`/blog/${featuredBlog.slug}`}
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[#050a30] to-purple-800 text-white rounded-full font-medium hover:opacity-90 transform transition-all duration-300 hover:scale-105"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              ALL ARTICLES
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Explore Our Collection
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Dive into our world of design expertise and creative inspiration
            </p>
          </div>

          {remainingBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 motion-safe:animate-fade-in"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {blog.tags.length > 0 && (
                      <div className="absolute top-4 left-4 bg-[#050a30] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {blog.tags[0]}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-indigo-700 text-sm font-medium mb-2">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#050a30] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-[#050a30] font-medium hover:text-indigo-800 transition-colors group"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredBlog ? (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No additional blog posts available yet.
              </p>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <div className="flex flex-col items-center justify-center py-12">
                <svg
                  className="w-16 h-16 text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                <p className="text-xl text-gray-600 mb-2">
                  No blog posts available yet
                </p>
                <p className="text-gray-500">Check back soon for new content</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 motion-safe:animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Get the latest design tips, trends, and inspiration delivered
            straight to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              required
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm mt-4 text-indigo-200">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                  HAVE QUESTIONS?
                </span>
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
                  Need Design Assistance?
                </h2>
                <p className="text-lg text-gray-800 mb-8">
                  Our team of experienced designers is ready to help bring your
                  vision to life. Schedule a consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#050a30] to-purple-800 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-block bg-white border-2 border-[#050a30] text-[#050a30] px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 text-center"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src="/cta-image.jpg" // Add a relevant CTA image
                  alt="Interior Design Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
