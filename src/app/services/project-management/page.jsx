"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectManagement() {
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
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/project-management-hero.jpg"
            alt="Riz Interiors Project Management"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              End-to-End{" "}
              <span className="text-indigo-300">Project Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              From initial concepts to the final reveal — Riz Interiors ensures
              a seamless, stress-free transformation of your space.
            </p>
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-glow shadow-lg group"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image container with fallback for motion */}
            <div className="animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <Image
                  src="/project-management-process.jpeg"
                  alt="Interior Design Project Management"
                  className="object-cover"
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Content container with fallback for motion */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Seamless Execution, Exceptional Results
              </h2>
              <p className="text-gray-700 mb-6">
                At Riz Interiors, we manage every detail of your interior
                project — from sourcing premium materials to coordinating
                skilled craftsmen — delivering exquisite spaces on time and
                within budget.
              </p>

              <ul className="space-y-4">
                {[
                  "Personalized planning and scheduling",
                  "End-to-end vendor and supplier management",
                  "On-site supervision and quality checks",
                  "Transparent budgeting and cost tracking",
                  "Weekly progress reports and updates",
                  "Final quality assurance walkthrough",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-1">
                      <svg
                        className="w-4 h-4 text-indigo-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our structured approach ensures clarity, efficiency, and
              excellence at every stage of your interior project.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Discovery & Planning",
                description:
                  "Understanding your needs, site visits, mood boards, and detailed project roadmap.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5h6M9 5a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                title: "Design & Procurement",
                description:
                  "Finalizing designs, selecting materials, and managing orders for quality assurance.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ),
              },
              {
                title: "Execution & Supervision",
                description:
                  "Coordinating contractors, site management, and solving any challenges proactively.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17h10m0-4H7m0-4h10m0-4H7"
                    />
                  </svg>
                ),
              },
              {
                title: "Handover & Styling",
                description:
                  "Final touch-ups, styling, and the grand reveal of your dream space.",
                icon: (
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              WHY RIZ INTERIORS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Clients Trust Us
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Personalized Approach",
                description:
                  "Each project is curated to reflect your style, needs, and lifestyle — never one-size-fits-all.",
              },
              {
                title: "Experienced Team",
                description:
                  "Our trusted network of skilled professionals ensures superior craftsmanship and service.",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear timelines, budgets, and updates keep you fully informed and stress-free throughout the project.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
