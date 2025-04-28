// src/components/Header.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRefs = useRef([]);

  // Navigation items with dropdown menus
  const navItems = [
    {
      label: "Home",
      path: "/",
      dropdown: false,
    },
    {
      label: "About",
      path: "/about",
      dropdown: false,
    },
    {
      label: "Services",
      path: "/services",
      dropdown: true,
      items: [
        { label: "Residential Design", path: "/services/residential-design" },
        { label: "Commercial Design", path: "/services/commercial-design" },
        { label: "Consultation", path: "/services/consultation" },
        { label: "Project Management", path: "/services/project-management" },
      ],
    },
    {
      label: "Portfolio",
      path: "/portfolio",
      dropdown: true,
      items: [
        { label: "Residential", path: "/collections/680dff8b1d48e235abdfbd5f" },
        { label: "Commercial", path: "/portfolio/commercial" },
        { label: "Hospitality", path: "/portfolio/hospitality" },
        { label: "All Projects", path: "/collections" },
      ],
    },
    {
      label: "Blog",
      path: "/blog",
      dropdown: false,
    },
    {
      label: "Contact",
      path: "/contact",
      dropdown: false,
    },
  ];

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  // Toggle dropdown menu
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Check if path is active
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              {isScrolled || isMenuOpen ? (
                // Dark logo for white background
                <Image
                  src="/rizdarkbg.png"
                  alt="Riz Interiors"
                  width={120}
                  height={40}
                  className="transition-opacity duration-300"
                  priority
                />
              ) : (
                // Light logo for transparent background
                <Image
                  src="/rizlightbg.png"
                  alt="Riz Interiors"
                  width={120}
                  height={40}
                  className="transition-opacity duration-300"
                  priority
                />
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (dropdownRefs.current[index] = el)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                        isScrolled
                          ? isActive(item.path)
                            ? "text-indigo-700"
                            : "text-gray-800 hover:text-[#050a30]"
                          : isActive(item.path)
                          ? "text-indigo-300"
                          : "text-white hover:text-indigo-200"
                      }`}
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={activeDropdown === index}
                    >
                      {item.label}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
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
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                        activeDropdown === index
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      <div className="py-2">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path}
                            className={`block px-4 py-2 text-sm hover:bg-indigo-50 transition-colors duration-300 ${
                              isActive(subItem.path)
                                ? "text-[#050a30] bg-indigo-50"
                                : "text-gray-700"
                            }`}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? isActive(item.path)
                          ? "text-[#050a30]"
                          : "text-gray-800 hover:text-[#050a30]"
                        : isActive(item.path)
                        ? "text-indigo-300"
                        : "text-white hover:text-indigo-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? "bg-[#050a30] text-white hover:bg-[#050a30b2]"
                  : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-gray-800 transform rotate-45 translate-y-1"
                    : isScrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all duration-300 ${
                  isMenuOpen
                    ? "bg-gray-800 transform -rotate-45 -translate-y-1"
                    : isScrolled
                    ? "bg-gray-800"
                    : "bg-white"
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-500 lg:hidden ${
              isMenuOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
          >
            <div className="h-full flex flex-col overflow-y-auto pt-24 pb-8 px-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 py-2">
                    {item.dropdown ? (
                      <>
                        <button
                          className={`flex items-center justify-between w-full py-2 text-lg font-medium ${
                            isActive(item.path)
                              ? "text-[#050a30]"
                              : "text-gray-800"
                          }`}
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.label}
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              activeDropdown === index ? "rotate-180" : ""
                            }`}
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
                        </button>

                        <div
                          className={`mt-2 pl-4 space-y-2 transition-all duration-300 ${
                            activeDropdown === index
                              ? "max-h-64 opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.path}
                              className={`block py-2 text-base ${
                                isActive(subItem.path)
                                  ? "text-[#050a30]"
                                  : "text-gray-600 hover:text-[#050a30]"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block py-2 text-lg font-medium ${
                          isActive(item.path)
                            ? "text-[#050a30]"
                            : "text-gray-800 hover:text-[#050a30]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                {/* Mobile CTA Button */}
                <Link
                  href="/contact"
                  className="w-full block text-center bg-[#050a30] text-white py-3 rounded-full font-medium hover:bg-[#050a30b2] transition-colors duration-300"
                >
                  Get a Quote
                </Link>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mt-8">
                  {["facebook", "instagram", "pinterest", "linkedin"].map(
                    (social) => (
                      <a
                        key={social}
                        href={`https://www.${social}.com/rizinteriors`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#050a30] transition-colors duration-300"
                        aria-label={social}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {social === "facebook" && (
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          )}
                          {social === "instagram" && (
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          )}
                          {social === "pinterest" && (
                            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                          )}
                          {social === "linkedin" && (
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          )}
                        </svg>
                      </a>
                    )
                  )}
                </div>

                {/* Contact Information */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                  <p>
                    <a href="tel:+917860414973"> +91 78604 14973</a>
                  </p>
                  <p className="mt-1">info@rizinteriors.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
