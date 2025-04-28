"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ResidentialDesignPage = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/residential-hero.jpg"
            alt="Riz Interiors Residential Service Page"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>{" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-20 h-1 bg-[050a30] mb-8 mx-auto"
            ></motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
              <span className="block text-gray-300">Residential Design </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-300">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-10 font-light max-w-2xl mx-auto italic opacity-90">
              Transform your living spaces into personalized sanctuaries that
              reflect your unique lifestyle and aesthetic preferences
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="#consultation"
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow shadow-lg group"
              >
                Book a Consultation
              </Link>

              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
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

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Turning Houses Into Homes
            </h2>
            <p className="text-lg text-gray-700">
              At Riz Interiors, we believe that your home should be a reflection
              of who you are. Our residential design services focus on creating
              spaces that are not only aesthetically pleasing but also
              functional and tailored to your lifestyle needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/residential-living-room.jpg"
                  alt="Modern living room design"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              <motion.h3
                variants={fadeIn}
                className="text-2xl font-bold mb-4 text-gray-900"
              >
                Comprehensive Residential Design
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-700 mb-6">
                Whether you&apos;re looking to renovate a single room or
                redesign your entire home, our expert team provides end-to-end
                solutions that transform your vision into reality. We handle
                everything from conceptualization to execution, ensuring a
                seamless design experience.
              </motion.p>
              <motion.ul
                variants={staggerChildren}
                className="space-y-4 text-gray-600"
              >
                {[
                  "Personalized design consultations tailored to your preferences",
                  "Space planning that maximizes functionality and flow",
                  "Custom furniture selection and placement",
                  "Material and color palette recommendations",
                  "Lighting design to create the perfect ambiance",
                  "Art and accessories curation to complete your space",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeIn}
                    className="flex items-start"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-600 mt-1 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Residential Services
            </h2>
            <p className="text-lg text-gray-700">
              From initial concept to final styling, we offer a range of
              residential design services to create your dream home
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Full Home Design",
                description:
                  "Comprehensive design solutions for your entire home, creating cohesive spaces that flow seamlessly from room to room.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Room Transformations",
                description:
                  "Focused design services for individual rooms, perfect for updating specific areas of your home without a complete redesign.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Kitchen & Bath Design",
                description:
                  "Specialized design services for the most functional spaces in your home, balancing beauty with practicality.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Space Planning",
                description:
                  "Optimizing your home's layout to improve functionality, traffic flow, and spatial harmony for everyday living.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Custom Furniture Design",
                description:
                  "Bespoke furniture solutions designed specifically for your space and needs, creating unique pieces that define your home.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Styling & Decoration",
                description:
                  "Final touches that bring your design to life, including art, accessories, textiles, and decorative elements.",
                icon: (
                  <svg
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    ></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-50 rounded-tl-full transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-700">
              We follow a structured approach to bring your vision to life,
              ensuring a smooth and enjoyable design journey
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We begin with an in-depth conversation to understand your needs, preferences, lifestyle, and design aspirations.",
              },
              {
                step: "2",
                title: "Concept Development",
                description:
                  "Our team creates a design concept that reflects your vision, including mood boards, color schemes, and space planning.",
              },
              {
                step: "3",
                title: "Design Refinement",
                description:
                  "We refine the concept based on your feedback, finalizing materials, furnishings, and design elements.",
              },
              {
                step: "4",
                title: "Implementation",
                description:
                  "Our skilled team brings the design to life, managing all aspects of procurement, installation, and styling.",
              },
              {
                step: "5",
                title: "Final Reveal",
                description:
                  "Experience the transformation of your space and enjoy your newly designed home tailored to your lifestyle.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex mb-12 last:mb-0"
              >
                <div className="mr-8">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {process.step}
                  </div>
                  {index < 4 && (
                    <div className="w-0.5 h-12 bg-indigo-200 mx-auto mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {process.title}
                  </h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Residential Portfolio
            </h2>
            <p className="text-lg text-gray-700">
              Explore some of our recent residential projects that showcase our
              design philosophy and attention to detail
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              "Master Bedroom Oasis",
              "Living Room Elegance",
              "Kitchen Delight",
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <div className="relative h-80">
                  <img
                    src={`/residential-project-${index + 1}.jpg`}
                    alt={project}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View project details
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              View Full Portfolio
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700">
              Hear from homeowners who have transformed their living spaces with
              our residential design services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Aarav Sharma",
                location: "Prayagraj",
                quote:
                  "Riz Interiors ke kaam ne hamare ghar ka pura look change kar diya. Simple aur classy vibes, exactly jaise hum chaahte the!",
              },
              {
                name: "Zoya Khan",
                location: "Kanpur",
                quote:
                  "They understood exactly what I wanted and gave even better ideas I really love my space now",
              },
              {
                name: "Rohan Patil",
                location: "Fatehpur",
                quote:
                  "Small space big dreams they made it happen in the best way possible very smart planning",
              },
              {
                name: "Rebecca D'Souza",
                location: "Lucknow",
                quote:
                  "The whole house feels cozy and fresh every detail looks so thoughtful I feel so happy coming back home",
              },
              {
                name: "Simran Singh",
                location: "Allahabad",
                quote:
                  "Comfort style everything came together perfectly my family is so happy with the new home",
              },
              {
                name: "Farhan Shaikh",
                location: "Prayagraj",
                quote:
                  "The team was very professional and friendly they made the whole design process so easy for us",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <svg
                  className="w-10 h-10 text-indigo-300 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-medium mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 md:p-16 flex flex-col justify-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                >
                  <motion.h2
                    variants={fadeIn}
                    className="text-3xl font-bold mb-6 text-gray-900"
                  >
                    Ready to Transform Your Home?
                  </motion.h2>
                  <motion.p variants={fadeIn} className="text-gray-700 mb-8">
                    Book a consultation with our design experts to discuss your
                    residential project. We&apos;ll help you create a space
                    that&apos;s perfectly tailored to your lifestyle and
                    preferences.
                  </motion.p>
                  <motion.form variants={fadeIn} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Tell us about your project"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Schedule Consultation
                    </button>
                  </motion.form>
                </motion.div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/consultation.jpg"
                  alt="Interior design consultation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our residential design
              services
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="max-w-3xl mx-auto divide-y divide-gray-200"
          >
            {[
              {
                question:
                  "What's your design approach for residential projects?",
                answer:
                  "Our approach begins with understanding your unique lifestyle, preferences, and needs. We believe that your home should be a reflection of who you are, so we focus on creating personalized designs that combine aesthetic appeal with functionality. Each project is a collaborative process where we work closely with you to bring your vision to life.",
              },
              {
                question:
                  "How long does a typical residential design project take?",
                answer:
                  "The timeline varies depending on the scope and complexity of the project. A single room redesign might take 4-8 weeks, while a full home renovation could take 3-6 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific project requirements.",
              },
              {
                question: "Do you work within specific budgets?",
                answer:
                  "Yes, we work with a range of budgets and will help you prioritize where to invest for maximum impact. During our initial consultation, we'll discuss your budget constraints and develop a design plan that aligns with your financial comfort zone while still achieving a beautiful and functional result.",
              },
              {
                question: "Can you work with my existing furniture and decor?",
                answer:
                  "Absolutely! We're happy to incorporate your existing pieces into the new design. We'll assess your current furniture and decor items and develop a plan that integrates pieces you love while suggesting new additions that enhance the overall design.",
              },
              {
                question: "Do you offer virtual design services?",
                answer:
                  "Yes, we offer virtual design consultations and services for clients who prefer remote collaboration. Our virtual design process includes video consultations, digital mood boards, 3D renderings, and detailed specifications that can be implemented by you or your contractor.",
              },
              {
                question: "What areas do you serve for residential design?",
                answer:
                  "We primarily serve the metropolitan area and surrounding suburbs, but we also take on select projects nationwide for virtual design services or for clients willing to cover travel expenses for in-person consultations and site visits.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn} className="py-6">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ResidentialDesignPage;
