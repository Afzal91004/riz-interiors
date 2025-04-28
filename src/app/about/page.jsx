"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Users,
  Home,
  Briefcase,
  Star,
  Phone,
  ArrowRight,
  MapPin,
  Clock,
  Heart,
  Code,
} from "lucide-react";
import LocationMap from "../components/LocationMap";

export default function AboutUsPage() {
  const [activeAccordion, setActiveAccordion] = useState("our-story");

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="overflow-hidden text-gray-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/about-hero.jpg"
            alt="Riz Interiors About Page"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/40 "></div>
        </div>

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
              <span className="block text-gray-300">About</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-violet-300">
                Riz Interiors
              </span>
            </h1>
            <p className="text-xl md:text-3xl mb-10 font-light max-w-2xl mx-auto italic opacity-90">
              Crafting spaces that tell your unique story
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
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

      {/* Main Content */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-3xl font-bold mb-8 text-gray-900 inline-block"
              >
                About <span className="text-[#050a30]">Riz Interiors</span>
                <div className="h-1 w-20 bg-[#050a30] mt-3"></div>
              </motion.h3>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mb-6 text-gray-700 leading-relaxed"
              >
                Riz Interiors is a premium interior design studio specializing
                in creating elegant, functional spaces that reflect our
                clients&apos; unique personalities and lifestyles.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mb-6 text-gray-700 leading-relaxed"
              >
                With years of experience in residential and commercial design,
                our team brings creativity and technical expertise to every
                project, regardless of size or scope. We believe that
                thoughtfully designed spaces have the power to transform how we
                live, work, and feel.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mb-10 text-gray-700 leading-relaxed"
              >
                Founded in 2010 by Farhan Ahmad, our studio has grown from a
                small consultancy into a full-service design firm with projects
                spanning across luxury residences, boutique hospitality,
                corporate offices, and retail spaces. We&apos;ve expanded our
                capabilities to include digital solutions and innovative
                technology integration through our technical team.
              </motion.p>

              {/* Accordion Sections */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="space-y-5 mb-12"
              >
                {/* Our Story */}
                <motion.div
                  variants={fadeIn}
                  className={`border-l-4 ${
                    activeAccordion === "our-story"
                      ? "border-[#050a30] bg-violet-50"
                      : "border-gray-200 bg-white"
                  } rounded-lg shadow-sm transition-all duration-300`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 p-5"
                    onClick={() => toggleAccordion("our-story")}
                  >
                    <span className="flex items-center">
                      <Home
                        size={18}
                        className={`mr-3 ${
                          activeAccordion === "our-story"
                            ? "text-[#050a30]"
                            : "text-gray-500"
                        }`}
                      />
                      Our Story
                    </span>
                    {activeAccordion === "our-story" ? (
                      <ChevronDown size={18} className="text-[#050a30]" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === "our-story" && (
                    <div className="pt-2 pb-5 px-5 pl-12 text-gray-600">
                      <p className="leading-relaxed">
                        Riz Interiors began in the heart of Prayagraj
                        (Allahabad), where founder Farhan Ahmad turned his
                        passion for architecture and design into a reality.
                        Known today as one of the{" "}
                        <strong>best interior designers in Prayagraj</strong>,
                        Farhan has built a reputation for creating spaces that
                        blend comfort, style, and individuality.
                      </p>
                      <p className="mt-4 leading-relaxed">
                        What started as a small dream is now expanding across
                        Uttar Pradesh. Riz Interiors is proud to be recognized
                        among the{" "}
                        <strong>
                          best interior designers in Uttar Pradesh
                        </strong>
                        , delivering thoughtful and elegant designs that
                        transform houses into homes and spaces into experiences.
                        Our journey is driven by creativity, craftsmanship, and
                        a deep commitment to client satisfaction.
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Our Team */}
                <motion.div
                  variants={fadeIn}
                  className={`border-l-4 ${
                    activeAccordion === "our-team"
                      ? "border-[#050a30] bg-violet-50"
                      : "border-gray-200 bg-white"
                  } rounded-lg shadow-sm transition-all duration-300`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 p-5"
                    onClick={() => toggleAccordion("our-team")}
                  >
                    <span className="flex items-center">
                      <Users
                        size={18}
                        className={`mr-3 ${
                          activeAccordion === "our-team"
                            ? "text-[#050a30]"
                            : "text-gray-500"
                        }`}
                      />
                      Our Team
                    </span>
                    {activeAccordion === "our-team" ? (
                      <ChevronDown size={18} className="text-[#050a30]" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === "our-team" && (
                    <div className="pt-2 pb-5 px-5 pl-12 text-gray-600">
                      <p className="leading-relaxed">
                        Our multidisciplinary team comprises interior designers,
                        architects, space planners, software engineers, and
                        project managers—each bringing unique expertise to our
                        collaborative process. Led by Creative Director Farhan
                        Ahmad, our team members are selected for their creative
                        vision, technical proficiency, and innovative thinking.
                      </p>
                      <p className="mt-4 leading-relaxed">
                        We maintain a boutique structure to ensure personalized
                        attention to each project while collaborating with a
                        trusted network of craftspeople, contractors, and
                        technology specialists who share our commitment to
                        quality and innovation.
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Our Approach */}
                <motion.div
                  variants={fadeIn}
                  className={`border-l-4 ${
                    activeAccordion === "our-approach"
                      ? "border-[#050a30] bg-violet-50"
                      : "border-gray-200 bg-white"
                  } rounded-lg shadow-sm transition-all duration-300`}
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 p-5"
                    onClick={() => toggleAccordion("our-approach")}
                  >
                    <span className="flex items-center">
                      <Briefcase
                        size={18}
                        className={`mr-3 ${
                          activeAccordion === "our-approach"
                            ? "text-[#050a30]"
                            : "text-gray-500"
                        }`}
                      />
                      Our Approach
                    </span>
                    {activeAccordion === "our-approach" ? (
                      <ChevronDown size={18} className="text-[#050a30]" />
                    ) : (
                      <ChevronRight size={18} className="text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === "our-approach" && (
                    <div className="pt-2 pb-5 px-5 pl-12 text-gray-600">
                      <p className="leading-relaxed">
                        Our design process begins with listening. We take time
                        to understand your lifestyle, preferences, and
                        aspirations before conceptualizing designs that balance
                        aesthetics with functionality. Every project follows our
                        proven methodology:
                      </p>
                      <ul className="my-4 space-y-2">
                        {[
                          "Discovery & Consultation",
                          "Concept Development",
                          "Design Refinement",
                          "Implementation & Project Management",
                          "Technical Integration",
                          "Final Styling & Handover",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="leading-relaxed">
                        Throughout each phase, clear communication and attention
                        to detail ensure that the final result exceeds
                        expectations while respecting budgets and timelines.
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Philosophy */}
                <motion.div
                  variants={fadeIn}
                  className={`border-l-4 ${
                    activeAccordion === "philosophy"
                      ? "border-[#050a30] bg-violet-50"
                      : "border-gray-200 bg-white"
                  } rounded-lg shadow-sm transition-all duration-300`}
                >
                  {activeAccordion === "philosophy" && (
                    <div className="pt-2 pb-5 px-5 pl-12 text-gray-600">
                      <p className="leading-relaxed">
                        We believe that great design should be both beautiful
                        and functional, timeless yet contemporary. Our work is
                        guided by these core principles:
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          {
                            title: "Intentional Design",
                            desc: "Every element serves a purpose",
                          },
                          {
                            title: "Material Integrity",
                            desc: "Honest use of quality materials",
                          },
                          {
                            title: "Contextual Sensitivity",
                            desc: "Designs that respect their environment",
                          },
                          {
                            title: "Sustainable Practices",
                            desc: "Conscious choices for lasting impact",
                          },
                          {
                            title: "Digital Innovation",
                            desc: "Integrating technology seamlessly into design",
                          },
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 mr-2"></div>
                            <div>
                              <span className="font-medium text-gray-800">
                                {item.title}:
                              </span>{" "}
                              <span>{item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>

              <motion.a
                href="#consultation"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="inline-flex items-center bg-[#050a30] hover:bg-violet-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                <Phone size={16} className="mr-2" />
                Contact Us
              </motion.a>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Founder Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-xl shadow-lg overflow-hidden relative group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-violet-100 rounded-bl-full z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-50 rounded-tr-full z-0"></div>

                <div className="relative z-10">
                  <div className="aspect-w-4 aspect-h-5 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src="/founder.jpg"
                      alt="Farhan Ahmad - Founder"
                      width={600}
                      height={620}
                      className="object-cover w-full h-full shadow-md group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">
                    Farhan Ahmad
                  </h4>
                  <p className="text-[#050a30] font-medium mb-4">
                    Founder & Creative Director
                  </p>
                  <p className="text-gray-600 italic">
                    &quot;Great design is intelligence made visible.&quot;
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    value: "15+",
                    label: "Years Experience",
                    icon: <Clock size={20} className="text-violet-400" />,
                  },
                  {
                    value: "250+",
                    label: "Projects Completed",
                    icon: <Briefcase size={20} className="text-violet-400" />,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-violet-500"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center mr-3">
                        {stat.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                    <span className="block text-4xl font-bold text-gray-800">
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              These fundamental beliefs guide our design philosophy and approach
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Star className="text-[#050a30]" size={24} />,
                title: "Excellence",
                description:
                  "We pursue excellence in every detail, from the initial concept to the final styling. Our rigorous standards ensure that each project reflects our commitment to quality.",
              },
              {
                icon: <Users className="text-[#050a30]" size={24} />,
                title: "Collaboration",
                description:
                  "We believe that the best designs emerge from meaningful collaboration with our clients and partners, creating spaces that truly reflect their vision and needs.",
              },
              {
                icon: <Heart className="text-[#050a30]" size={24} />,
                title: "Integrity",
                description:
                  "Transparency, honesty and ethical practices are at the core of our business. We stand behind our work and maintain the highest professional standards.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={slideUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-2 transition-transform"
              >
                <div className="w-16 h-16 bg-violet-50 group-hover:bg-violet-100 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-[#050a30] transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
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
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-xl p-6 border border-gray-100 group hover:border-violet-100 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-bold text-[#050a30] opacity-30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-800">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-4">
              MEET THE TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Our Creative Minds
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Farhan Ahmad",
                role: "Founder & Creative Director",
                image: "/team-1.jpg",
                bio: "With over 15 years in the industry, Rizwan brings visionary leadership to every project.",
              },
              {
                name: "Imran Ahmad Siddique",
                role: "Co-Founder & Creative Director",
                image: "/team-2.jpg",
                bio: "blends innovation with timeless design to craft inspiring spaces.",
              },

              {
                name: "SHAHRUKH SAIFI",
                role: "Senior Interior Designer",
                image: "/team-3.jpg",
                bio: "Specializes in residential spaces that blend comfort with sophisticated aesthetics.",
              },
              {
                name: "Mohammed Afjal Shaikh",
                role: "Lead Software Engineer",
                image: "/team-5.jpeg",
                bio: "Drives technical innovation with expertise in web design and digital solutions for modern spaces.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-96 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-[#050a30] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Code size={32} className="text-[#050a30]" />
                </div>
                <h3 className="text-2xl font-bold text-center md:text-left mb-4 text-gray-800">
                  Technical Innovation
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Led by Mohammed Afjal Shaikh, our technical team brings
                  innovative digital solutions to traditional interior design.
                </p>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Web & App Design",
                    description:
                      "Custom digital experiences that complement physical spaces",
                  },
                  {
                    title: "Smart Home Integration",
                    description:
                      "Seamless technology implementation for modern living",
                  },
                  {
                    title: "3D Visualization",
                    description:
                      "Advanced rendering and VR/AR experiences for clients",
                  },
                  {
                    title: "Interactive Solutions",
                    description:
                      "Digital interfaces that enhance the user experience",
                  },
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <LocationMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-300 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Let&apos;s collaborate to create the perfect environment that
            reflects your vision and enhances your lifestyle with both design
            excellence and technological innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-violet-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 hover:shadow-lg"
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
    </main>
  );
}
