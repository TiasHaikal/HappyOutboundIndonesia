"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/Logo_HOI.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Visi & Misi", href: "#vision" },
    { name: "Layanan", href: "#services" },
    { name: "Produk", href: "#products" },
    { name: "Legalitas", href: "#legality" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#FEE140" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#hero" className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={logo.src}
                  alt="Happy Outbound Indonesia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">
                  Happy Outbound Indonesia
                </span>
                <span className="block text-sm text-gray-700 font-semibold">
                  Active, Fun, Deep Experience
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-800 hover:text-gray-900 font-medium transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#234c93] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:bg-[#1a3a75] transition-all duration-200"
            >
              Hubungi Kami
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-black/10"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-black/10"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="block py-3 text-gray-800 hover:text-gray-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="block mt-4 bg-[#234c93] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#1a3a75] transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hubungi Kami
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
