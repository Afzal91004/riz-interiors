// src/app/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getCollections, getBlogs } from "@/lib/api";
import HeroSlideshow from "./components/HeroSlideshow";
import InstagramFeed from "./components/InstagramFeed";

export const revalidate = 60; // Revalidate this page every 60 seconds

export default async function Home() {
  const data = await getCollections();
  const collections = Array.isArray(data) ? data : data.collections || [];

  // Take just the first 3 collections for the homepage
  const featuredCollections = collections.slice(0, 3);
  const blogData = await getBlogs();
  const blogs = blogData.blogs || [];

  // Take the first 3 published blogs for the homepage
  const featuredBlogs = blogs.filter((blog) => blog.isPublished).slice(0, 3);

  const heroImages = {
    desktop: [
      "/hero-desktop-1.jpg",
      "/hero-desktop-2.jpg",
      "/hero-desktop-3.jpg",
      "/hero-desktop-4.jpg",
      "/hero-desktop-5.jpg",
    ],
    mobile: ["/hero-mobile-1.jpg", "/hero-mobile-2.jpg", "/hero-mobile-3.jpg"],
  };

  // Services data
  const services = [
    {
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      title: "Residential Design",
      description:
        "Transform your home into a personalized sanctuary with our expert residential design services",
    },
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "Commercial Projects",
      description:
        "Create impactful commercial spaces that enhance your brand and improve functionality",
    },
    {
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      title: "Concept Development",
      description:
        "Turn ideas into stunning visual concepts with our innovative design approach",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Consultation Services",
      description:
        "Expert advice to help you make informed decisions about your space and design needs",
    },
  ];

  // Stats data
  const stats = [
    { value: "350+", label: "Completed Projects" },
    { value: "12+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section with Responsive Slideshow */}
      <section className="relative h-screen flex items-center justify-center">
        <HeroSlideshow images={heroImages} />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-5"></div>

        <div className="relative z-10 text-center text-white px-4 motion-safe:animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            <span className="block motion-safe:animate-slide-in-left">riz</span>
            <span className="block mt-2 motion-safe:animate-slide-in-right text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-300">
              interiors
            </span>
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light max-w-2xl mx-auto italic opacity-90">
            Transforming spaces into extraordinary experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/portfolio"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow shadow-lg group"
            >
              <span className="flex items-center justify-center">
                View Our Work
                <svg
                  className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 motion-safe:animate-bounce">
          <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Design Services
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Comprehensive interior design services tailored to your unique
              needs and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:border-indigo-100 motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
                  <svg
                    className="w-8 h-8 text-[#050a30]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-800">{service.description}</p>
                <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="inline-flex items-center mt-4 text-[#050a30] font-medium hover:text-indigo-800 transition-colors"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-indigo-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections with Hover Effects */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              PORTFOLIO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Discover our most popular interior design collections, crafted
              with passion and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCollections.map((collection, index) => (
              <Link
                key={collection._id}
                href={`/collections/${collection._id}`}
                className={`group motion-safe:animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-white text-lg font-medium bg-[#050a30] px-3 py-1 rounded-full">
                        View Collection
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#050a30] transition-colors duration-300">
                      {collection.name}
                    </h3>
                    <p className="mt-2 text-gray-800 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                      Explore our {collection.name.toLowerCase()} designs that
                      embody elegance and functionality
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-block bg-[#050a30] text-white px-8 py-4 rounded-full font-medium hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <div className="motion-safe:animate-slide-in-left">
              <div className="relative h-[530px] w-full rounded-xl overflow-hidden shadow-2xl">
                {/* Video element replacing Image */}
                <video
                  src="/atwork.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Design elements remain the same */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#050a30] rounded-full opacity-30 blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-900 rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>

            <div className="motion-safe:animate-slide-in-right">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-1 bg-indigo-700 text-indigo-100 rounded-full text-sm font-medium mb-4">
                  ABOUT US
                </span>
                <h2 className="text-4xl font-bold mb-6 relative">
                  About Riz Interiors
                  <span className="absolute -bottom-2 left-0 w-24 h-1 bg-indigo-500"></span>
                </h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Riz Interiors is a premium interior design studio specializing
                  in creating elegant, functional spaces that reflect our
                  clients' unique personalities and lifestyles.
                </p>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  With years of experience in residential and commercial design,
                  our team brings creativity and technical expertise to every
                  project, regardless of size or scope.
                </p>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We believe that thoughtfully designed spaces have the power to
                  transform how we live, work, and feel.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-indigo-300 text-lg font-medium hover:text-white transition-colors duration-300 group"
                >
                  Learn more about our process
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Design Process
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Our refined process ensures we deliver exceptional results every
              time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We begin by understanding your needs, preferences, and vision for the space",
              },
              {
                number: "02",
                title: "Concept Development",
                description:
                  "Our designers create detailed concepts based on your requirements and inspiration",
              },
              {
                number: "03",
                title: "Design Implementation",
                description:
                  "We bring the approved designs to life with meticulous attention to detail",
              },
              {
                number: "04",
                title: "Final Reveal",
                description:
                  "Experience the transformation of your space into a stunning, functional environment",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 group hover:border-indigo-100 transition-all duration-500 motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-bold text-[#050a30] opacity-30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              We take pride in exceeding our clients' expectations with every
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Sharma",
                role: "Homeowner",
                quote:
                  "Riz Interiors turned our old house into a new home. It’s everything we hoped for and more",
                image: "A.S.",
              },
              {
                name: "Zoya Khan",
                role: "Restaurant Owner",
                quote:
                  "The team understood what we wanted perfectly, they brought our vision to life. Our customers love the vibe",
                image: "Z.K.",
              },
              {
                name: "Rohan Patil",
                role: "Office Manager",
                quote:
                  "Riz Interiors completely changed the way our office feels. It’s now a place we look forward to working in every day",
                image: "R.P.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 motion-safe:animate-fade-in-up relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-violet-600 font-serif">
                  "
                </div>

                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-indigo-100">
                    {/* Display initials instead of images */}
                    <div className="flex items-center justify-center w-full h-full bg-indigo-200 text-violet-600 text-lg font-bold">
                      {testimonial.image}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-violet-600 font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-800">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic relative z-10">
                  {testimonial.quote}
                </p>

                {/* Rating stars */}
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <InstagramFeed />
      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 motion-safe:animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let's collaborate to create the perfect environment that reflects
            your vision and enhances your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div>
              <h3 className="text-2xl text-[#050a30] md:text-3xl font-bold mb-4">
                Stay Inspired
              </h3>
              <p className="text-gray-800 mb-6">
                Subscribe to our newsletter for the latest design trends,
                project showcases, and exclusive insights from our team.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full border border-gray-200 focus:border-indigo-400 focus:ring focus:ring-indigo-100 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#050a30] text-white px-6 py-3 rounded-full font-medium hover:bg-[#252e70] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 motion-safe:animate-fade-in">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              DESIGN INSIGHTS
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Discover design tips, trends, and inspiration from our experts
            </p>
          </div>

          {featuredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 motion-safe:animate-fade-in-up"
                >
                  <div className="relative h-56 w-full overflow-hidden">
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
                    <p className="text-gray-700 text-sm mb-2">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#050a30] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-800 mb-4">{blog.excerpt}</p>
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No blog posts available yet.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#050a30] font-medium hover:text-indigo-800 transition-colors text-lg group"
            >
              View All Articles
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              QUESTIONS
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Find answers to common questions about our design services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is your design process?",
                answer:
                  "Our design process begins with an in-depth consultation to understand your needs and vision. We then create concept designs, refine based on your feedback, manage implementation, and finally reveal the transformed space.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Small room redesigns may take 4-6 weeks, while complete home or commercial renovations can take 3-6 months. We'll provide a detailed timeline during your consultation.",
              },
              {
                question: "Do you work with clients remotely?",
                answer:
                  "Yes, we offer virtual design services for clients outside our local area. Through video consultations, digital mood boards, and 3D renderings, we can create stunning designs regardless of location.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer transparent pricing based on project scope. Options include hourly rates, flat fees for specific services, or percentage-based fees for larger projects. We'll discuss all pricing details during your initial consultation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-[#050a30] transform transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-800 border-t border-gray-100 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-800 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block bg-[#050a30] text-white px-8 py-3 rounded-full font-medium hover:bg-[#252e70] transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
