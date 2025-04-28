// src/app/contact/page.jsx
import Link from "next/link";
import Image from "next/image";
import ConsultationForm from "../components/ConsultationForm";

export default function Contact() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact Riz Interiors"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-1"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-3xl motion-safe:animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Let&apos;s start a conversation about transforming your space into
            something extraordinary
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl translate-y-1/4 -translate-x-1/3"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="motion-safe:animate-slide-in-left">
              <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                CONTACT US
              </span>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-gray-800 mb-10">
                We&apos;d love to hear about your project. Get in touch with our
                team to schedule a consultation or just to say hello.
              </p>

              <div className="space-y-8 mb-10">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#050a30]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-800 mt-1">
                      <a href="tel:+917860414973"> +91 78604 14973</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#050a30]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="text-gray-800 mt-1">hello@rizinteriors.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#050a30]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Location
                    </h3>
                    <p className="text-gray-800 mt-1">
                      88/31B, Stanley Rd, Juhi Colony,
                      <br />
                      Vivek Vihar Colony, Civil Lines,
                      <br />
                      Prayagraj, Uttar Pradesh 211001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-[#050a30]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Hours</h3>
                    <p className="text-gray-800 mt-1">
                      Monday - Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-50 p-3 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#050a30]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Pinterest */}
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-50 p-3 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#050a30]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-50 p-3 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#050a30]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-50 p-3 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                  >
                    <svg
                      className="w-5 h-5 text-[#050a30]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 motion-safe:animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              OUR LOCATION
            </span>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Visit Our Studio
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Come visit our design studio to experience our work in person and
              meet our team
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Replace with your preferred map component/iframe */}
            <div className="w-full h-96 bg-gray-200 relative">
              <div className="aspect-w-16 aspect-h-9 w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.187256351574!2d81.8400350751728!3d25.46542197753926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aaf33d147dec7%3A0xcd6fc7c3e4c6611e!2sRiz%20interiors%20%26%20decorators!5e0!3m2!1sen!2sin!4v1745735825730!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#050a30] to-purple-900 text-white relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 motion-safe:animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Schedule a Consultation?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Book a call with our design experts to discuss your project in
            detail. We&apos;re excited to bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:+917860414973"
              className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Book a Consultation
            </Link>
            <a
              href="tel:+917860414973"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
            >
              Call Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#050a30] to-purple-900 bg-clip-text text-transparent">
              Contact FAQs
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Quick answers to common questions about getting in touch with us
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How quickly will you respond to my inquiry?",
                answer:
                  "We typically respond to all inquiries within 24-48 hours during business days. For urgent matters, please call us directly.",
              },
              {
                question: "Do you offer free initial consultations?",
                answer:
                  "Yes, we offer a complimentary 30-minute initial consultation to discuss your project needs and determine if we're the right fit for your project.",
              },
              {
                question:
                  "What information should I prepare before contacting you?",
                answer:
                  "To make the most of our initial discussion, it helps to have an idea of your project scope, budget range, timeline, and any inspiration images or specific requirements you have in mind.",
              },
              {
                question: "Do you work on projects outside of Mumbai?",
                answer:
                  "Yes, we work on projects throughout India and internationally. For remote projects, we offer virtual design services and can arrange periodic site visits as needed.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
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
        </div>
      </section>
    </main>
  );
}
