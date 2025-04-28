import Link from "next/link";
import Image from "next/image";
import { getBlogBySlug } from "@/lib/api";
import BlogShareButtons from "@/app/components/BlogShareButtons";

export async function generateMetadata({ params }) {
  const { blog } = await getBlogBySlug(params.slug);

  return {
    title: blog?.title || "Blog Post",
    description: blog?.excerpt || "Design insights from Riz Interiors",
    openGraph: {
      title: blog?.title || "Blog Post",
      description: blog?.excerpt || "Design insights from Riz Interiors",
      images: blog?.coverImage ? [{ url: blog.coverImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { blog } = await getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-12 rounded-xl shadow-md max-w-lg">
          <svg
            className="w-20 h-20 text-gray-300 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Blog Post Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-[#050a30] to-purple-800 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Extract related tags (excluding the main tag)
  const relatedTags = blog.tags.slice(1);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-1"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl motion-safe:animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6">
            {blog.tags.length > 0 ? blog.tags[0].toUpperCase() : "DESIGN"}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center text-white/80 text-lg">
            <span>By {blog.author}</span>
            <span className="mx-3">•</span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      <article className="py-20 px-4 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl translate-y-1/4 -translate-x-1/3"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Blog Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 motion-safe:animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/blog/category/${tag
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 motion-safe:animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  About {blog.author}
                </h3>
                <p className="text-gray-700 mb-4">
                  {blog.authorBio ||
                    `${blog.author} is a design expert at Riz Interiors with a passion for creating beautiful, functional spaces that inspire and delight.`}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="flex items-center text-indigo-700 font-medium hover:text-indigo-900 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blog
            </Link>

            <div className="flex space-x-4">
              <BlogShareButtons blogTitle={blog.title} />
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 motion-safe:animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enjoyed this article?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Sign up for our newsletter to receive design tips and inspiration
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
        </div>
      </section>
    </main>
  );
}
