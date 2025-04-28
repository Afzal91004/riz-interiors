import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white  border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              {/* Company Logo */}
              <Image
                src="/rizdarkbg.png"
                alt="Riz Interiors Logo"
                width={200}
                height={300}
              />
            </div>

            <p className="text-gray-500 text-sm italic mb-6 text-center md:text-left">
              Crafting Your Dreams Into Reality
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin size={16} className="text-[#050a30] mr-2" />
                <span className="text-gray-600 text-sm">
                  <p className="mt-1">
                    88/31B, Stanley Rd, Juhi Colony,
                    <br />
                    Vivek Vihar Colony, Civil Lines,
                    <br />
                    Prayagraj, Uttar Pradesh 211001
                    <br />
                    India
                  </p>
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-[#050a30] mr-2" />
                <span className="text-gray-600 text-sm">
                  <a href="tel:+917860414973"> +91 78604 14973</a>
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-[#050a30] mr-2" />
                <span className="text-gray-600 text-sm">
                  info@rizinteriors.com
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="text-[#050a30] mr-2" />
                <span className="text-gray-600 text-sm">Mon-Sun: 9AM-6PM</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#050a30-50 flex items-center justify-center hover:bg-[#050a30-100 transition-colors"
              >
                <Instagram size={16} className="text-[#050a30]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#050a30-50 flex items-center justify-center hover:bg-[#050a30-100 transition-colors"
              >
                <Facebook size={16} className="text-[#050a30]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#050a30-50 flex items-center justify-center hover:bg-[#050a30-100 transition-colors"
              >
                <Twitter size={16} className="text-[#050a30]" />
              </a>
            </div>
          </div>

          {/* Center Section - Map */}
          <div className="h-64 md:h-auto rounded-lg overflow-hidden border border-gray-200 shadow-sm">
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

          {/* Right Section - Powered by & Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-medium text-gray-800 mb-4">
              Stay Connected
            </h4>

            <p className="text-gray-600 text-sm mb-4 text-center md:text-left">
              Subscribe to our newsletter for the latest design trends and
              exclusive offers.
            </p>

            <div className="w-full mb-8">
              <div className="flex mb-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-gray-50 border border-gray-200 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#050a30-500"
                />
                <button className="bg-[#050a30-700 text-white px-4 rounded-r-md hover:bg-[#050a30-800 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start mt-auto">
              <span className="text-gray-500 text-sm mr-2">Powered by</span>
              <div className="flex items-center">
                <Image
                  src="/kromaapps.png"
                  alt="Riz Interiors Logo"
                  width={280}
                  height={50}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Riz Interiors. All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-[#050a30] text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#050a30] text-xs"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#050a30] text-xs"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
