"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CommercialDesignPage = () => {
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/commercial-hero.jpg')",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Commercial Design Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Transform your business spaces into productive, brand-enhancing
              environments that impress clients and inspire employees
            </p>
            <a
              href="#consultation"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <a
            href="#overview"
            className="text-white animate-bounce inline-block"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
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
              Designing for Business Success
            </h2>
            <p className="text-lg text-gray-700">
              At Riz Interiors, we understand that your commercial space is more
              than just an office - it's a strategic asset. Our commercial
              design services create environments that enhance productivity,
              reinforce your brand, and make lasting impressions on clients and
              employees alike.
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
                  src="/commercial-office-space.jpg"
                  alt="Modern office design"
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
                Comprehensive Commercial Design
              </motion.h3>
              <motion.p variants={fadeIn} className="text-gray-700 mb-6">
                From corporate offices to retail spaces, we create commercial
                interiors that align with your business objectives while
                optimizing functionality and aesthetics. Our team handles every
                aspect from space planning to final installation, ensuring a
                seamless process.
              </motion.p>
              <motion.ul
                variants={staggerChildren}
                className="space-y-4 text-gray-600"
              >
                {[
                  "Brand-aligned design concepts that communicate your identity",
                  "Space planning for optimal workflow and collaboration",
                  "Ergonomic solutions for employee wellbeing",
                  "Materials and finishes that balance durability with style",
                  "Lighting design for productivity and ambiance",
                  "Wayfinding and signage integration",
                  "Technology integration for modern workplaces",
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
              Our Commercial Services
            </h2>
            <p className="text-lg text-gray-700">
              Specialized design solutions tailored to various commercial
              sectors and business needs
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
                title: "Corporate Offices",
                description:
                  "Designing professional workspaces that enhance productivity, collaboration, and reflect your corporate culture.",
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Retail Spaces",
                description:
                  "Creating engaging retail environments that drive sales, enhance customer experience, and strengthen brand identity.",
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
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Hospitality Design",
                description:
                  "Designing hotels, restaurants, and cafes that create memorable experiences and operational efficiency.",
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
                title: "Healthcare Facilities",
                description:
                  "Creating healing environments for clinics, hospitals, and wellness centers that prioritize patient comfort and staff efficiency.",
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Educational Spaces",
                description:
                  "Designing inspiring learning environments for schools, colleges, and training centers that facilitate education.",
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Co-working Spaces",
                description:
                  "Creating flexible, community-oriented workspaces that attract members and foster collaboration.",
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
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
              Our Commercial Design Process
            </h2>
            <p className="text-lg text-gray-700">
              A strategic approach to creating commercial spaces that deliver
              both functional and business results
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
                title: "Business Needs Assessment",
                description:
                  "We start by understanding your business objectives, brand values, operational requirements, and employee needs to inform the design strategy.",
              },
              {
                step: "2",
                title: "Space Analysis & Planning",
                description:
                  "Detailed evaluation of your existing or new space with focus on workflow, capacity, adjacencies, and future growth potential.",
              },
              {
                step: "3",
                title: "Concept Development",
                description:
                  "Creation of design concepts that align with your brand and business goals, presented through mood boards, 3D visualizations, and material samples.",
              },
              {
                step: "4",
                title: "Design Development",
                description:
                  "Refinement of selected concepts into detailed designs including furniture specifications, lighting plans, and material selections.",
              },
              {
                step: "5",
                title: "Implementation & Project Management",
                description:
                  "Oversight of the entire implementation process including contractor coordination, quality control, and final installation.",
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
              Our Commercial Portfolio
            </h2>
            <p className="text-lg text-gray-700">
              Explore our successful commercial projects that demonstrate our
              expertise in creating business-optimized spaces
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
              "Hospital Waiting Area",
              "Tech Office Space",
              "Corporate Office Cabin",
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <div className="relative h-80">
                  <img
                    src={`/commercial-project-${index + 1}.jpg`}
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
                    View case study
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio/commercial"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              View Full Commercial Portfolio
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
              Hear from business owners and executives who have transformed
              their commercial spaces with our design expertise
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
                name: "Rajesh Gupta",
                position: "CEO, TechSolutions",
                quote:
                  "Our new office design has completely transformed how we work. The open yet focused spaces have improved collaboration while maintaining productivity.",
              },
              {
                name: "Priya Malhotra",
                position: "Director, Urban Retail",
                quote:
                  "The store redesign increased our foot traffic by 40% and sales by 25%. The space now truly reflects our brand identity.",
              },
              {
                name: "Amit Patel",
                position: "Hospitality Manager",
                quote:
                  "From concept to completion, the team delivered a restaurant design that wows our guests and improves our operational flow.",
              },
              {
                name: "Neha Sharma",
                position: "School Principal",
                quote:
                  "Our new learning spaces have received overwhelming praise from both students and faculty. The design promotes engagement and creativity.",
              },
              {
                name: "Vikram Singh",
                position: "Clinic Director",
                quote:
                  "The calming yet professional environment has improved patient satisfaction scores significantly. The design considers both patient comfort and staff efficiency.",
              },
              {
                name: "Deepak Verma",
                position: "Co-working Founder",
                quote:
                  "Our membership has doubled since the redesign. The space now attracts exactly the type of professionals we want in our community.",
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
                  "{testimonial.quote}"
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
                      {testimonial.position}
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
                    Ready to Elevate Your Commercial Space?
                  </motion.h2>
                  <motion.p variants={fadeIn} className="text-gray-700 mb-8">
                    Schedule a consultation with our commercial design experts
                    to discuss how we can create a space that supports your
                    business goals and impresses your clients.
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
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>
                    <div>
                      <label
                        htmlFor="space-type"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Space Type
                      </label>
                      <select
                        id="space-type"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="">Select space type</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="other">Other</option>
                      </select>
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
                        placeholder="Tell us about your commercial project"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    >
                      Request Commercial Consultation
                    </button>
                  </motion.form>
                </motion.div>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="/consultation.jpg"
                  alt="Commercial design consultation"
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
              Commercial Design FAQs
            </h2>
            <p className="text-lg text-gray-700">
              Answers to common questions about our commercial interior design
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
                  "Why is commercial interior design important for my business?",
                answer:
                  "Commercial design directly impacts employee productivity, customer experience, and brand perception. A well-designed space can improve operational efficiency, attract and retain talent, enhance customer engagement, and communicate your brand values effectively.",
              },
              {
                question:
                  "How do you approach designing for different commercial sectors?",
                answer:
                  "We begin with in-depth research into your specific industry standards, operational requirements, and target audience. Each sector has unique needs - from healthcare's focus on hygiene and patient flow to retail's emphasis on customer journey and merchandising. Our designs always prioritize both functionality and brand alignment.",
              },
              {
                question:
                  "Can you work within our operational hours to minimize business disruption?",
                answer:
                  "Absolutely. We understand that commercial projects often need to accommodate ongoing business operations. We'll work with you to create a phased implementation plan that minimizes disruption, whether that means working after hours, on weekends, or in carefully planned stages.",
              },
              {
                question:
                  "How do you incorporate branding into commercial spaces?",
                answer:
                  "We integrate branding through strategic use of colors, materials, graphics, and spatial design that reflect your brand identity. This can range from subtle brand cues in corporate offices to bold brand statements in retail environments. Every design element works together to reinforce your brand story.",
              },
              {
                question:
                  "What sustainability options do you offer for commercial projects?",
                answer:
                  "We prioritize sustainable materials, energy-efficient lighting, and healthy indoor environmental quality. Our designs often incorporate recycled materials, low-VOC finishes, and space optimization to reduce waste. We can also help pursue green building certifications like LEED or WELL if desired.",
              },
              {
                question:
                  "How do you ensure the design meets building codes and regulations?",
                answer:
                  "Our team is well-versed in commercial building codes, ADA requirements, and industry-specific regulations. We coordinate closely with architects, engineers, and local authorities to ensure full compliance while still achieving your design vision.",
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

export default CommercialDesignPage;
