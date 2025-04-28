// src/app/consultation/page.jsx
import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "@/app/components/ConsultationForm";

export default function Consultation() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/consultation-hero.jpg"
            alt="Consultation Services at Riz Interiors"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-1"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl motion-safe:animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Design Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Expert guidance to transform your vision into beautiful, functional
            spaces
          </p>
          <Link
            href="#book-consultation"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl translate-y-1/4 -translate-x-1/3"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Expert Design Consultation
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Our design consultations are tailored to your unique needs,
              whether you&apos;re planning a complete renovation or seeking
              advice on specific areas of your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 motion-safe:animate-fade-in-up">
              <div className="bg-indigo-50 p-4 rounded-2xl inline-block mb-6">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Residential Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your home with expert guidance on layout optimization,
                color schemes, furniture selection, and decor that reflects your
                personality and lifestyle.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Space planning & layout</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Color & material selection
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Furniture & decor recommendations
                  </span>
                </li>
              </ul>
              <Link
                href="#book-consultation"
                className="inline-block text-indigo-700 font-medium hover:text-indigo-800 transition-colors"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 motion-safe:animate-fade-in-up delay-100">
              <div className="bg-indigo-50 p-4 rounded-2xl inline-block mb-6">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Commercial Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Create productive and inspiring commercial spaces that align
                with your brand identity, enhance functionality, and impress
                clients and employees alike.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Brand-aligned design concepts
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Workspace optimization</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Budget-friendly solutions
                  </span>
                </li>
              </ul>
              <Link
                href="#book-consultation"
                className="inline-block text-indigo-700 font-medium hover:text-indigo-800 transition-colors"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 motion-safe:animate-fade-in-up delay-200">
              <div className="bg-indigo-50 p-4 rounded-2xl inline-block mb-6">
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
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Virtual Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Get professional design advice from anywhere with our virtual
                consultation services. Perfect for clients outside Prayagraj or
                those with busy schedules.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Video call consultations
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Digital mood boards</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-indigo-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Written recommendations</span>
                </li>
              </ul>
              <Link
                href="#book-consultation"
                className="inline-block text-indigo-700 font-medium hover:text-indigo-800 transition-colors"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg text-gray-800 max-w-3xl mx-auto">
              Our streamlined consultation process ensures we understand your
              unique needs and deliver tailored solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative text-center motion-safe:animate-fade-in-up">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-indigo-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Initial Inquiry
              </h3>
              <p className="text-gray-600">
                Fill out our consultation form with details about your project,
                budget, and vision.
              </p>
              {/* Connector Line (hidden on mobile) */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-indigo-200"></div>
            </div>

            {/* Step 2 */}
            <div className="relative text-center motion-safe:animate-fade-in-up delay-100">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-indigo-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Discovery Call
              </h3>
              <p className="text-gray-600">
                Schedule a 30-minute call to discuss your project in detail and
                explore how we can help.
              </p>
              {/* Connector Line (hidden on mobile) */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-indigo-200"></div>
            </div>

            {/* Step 3 */}
            <div className="relative text-center motion-safe:animate-fade-in-up delay-200">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-indigo-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                In-Person Consultation
              </h3>
              <p className="text-gray-600">
                Meet at your space or our studio for a detailed consultation
                with our expert designers.
              </p>
              {/* Added back the connector line for step 3 to connect to step 4 */}
              <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] w-full h-0.5 bg-indigo-200"></div>
            </div>

            {/* Step 4 */}
            <div className="text-center  z-50 motion-safe:animate-fade-in-up delay-300">
              <div className="bg-white z-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl  font-bold text-indigo-700">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Proposal & Next Steps
              </h3>
              <p className="text-gray-600">
                Receive a detailed proposal with design recommendations,
                timeline, and investment details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Form */}
      <section id="book-consultation" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Form Column */}
              <div className="p-10">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Book Your Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours to schedule your consultation.
                </p>

                <ConsultationForm />
              </div>

              {/* Info Column */}
              <div className="bg-indigo-50 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  What to Expect
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-indigo-600"
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
                    </div>
                    <span className="text-gray-700">
                      Prompt response within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-indigo-600"
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
                    </div>
                    <span className="text-gray-700">
                      Flexible scheduling options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-indigo-600"
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
                    </div>
                    <span className="text-gray-700">
                      Personalized attention from our experts
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-4">
                      <svg
                        className="w-5 h-5 text-indigo-600"
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
                    </div>
                    <span className="text-gray-700">
                      No-obligation initial consultation
                    </span>
                  </li>
                </ul>

                <div className="mt-10 pt-6 border-t border-indigo-100">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Have questions?
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Call us at{" "}
                    <a
                      href="tel:+917860414973"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      +91 78604 14973
                    </a>{" "}
                    or email{" "}
                    <a
                      href="mailto:hello@rizinteriors.com"
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      hello@rizinteriors.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    Our team is available Monday to Sunday, 10 AM to 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
