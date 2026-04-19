"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/Logo_HOI.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waNumber = "6282111103174";
  const waMessage = encodeURIComponent(
    "Halo Kak, saya ingin mengetahui lebih lanjut tentang layanan Happy Outbound Indonesia",
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const quickLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Visi & Misi", href: "#vision" },
    { name: "Layanan", href: "#services" },
    { name: "Produk", href: "#products" },
    { name: "Legalitas", href: "#legality" },
    { name: "Kontak", href: "#contact" },
  ];

  const services = [
    "Corporate Training",
    "Outbound Training",
    "Event Organizer",
    "Adventure Program",
    "Public Training",
    "Kids & Family Program",
  ];

  const linkStyle: React.CSSProperties = {
    color: "rgba(9,15,77,0.7)",
  };

  return (
    <footer style={{ backgroundColor: "#FEE140" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: "2px solid #090f4d" }}
              >
                <Image
                  src={logo}
                  alt="Happy Outbound Indonesia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span
                  className="text-xl font-bold"
                  style={{ color: "#090f4d" }}
                >
                  Happy Outbound
                </span>
                <span
                  className="block text-sm font-semibold"
                  style={{ color: "rgba(9,15,77,0.7)" }}
                >
                  Indonesia
                </span>
              </div>
            </motion.div>

            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "rgba(9,15,77,0.8)" }}
            >
              Partner terpercaya untuk kegiatan training, outbound, dan event
              organizer di Indonesia.
            </p>

            {/* FIXED Instagram Link */}
            <a
              href="https://instagram.com/happyoutboundindonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-sm"
              style={{ color: "#090f4d" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
              @happyoutboundindonesia
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: "#090f4d" }}>
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name}>
                  <a href={link.href} className="font-medium" style={linkStyle}>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div>
            <h3 className="text-lg font-bold mb-6" style={{ color: "#090f4d" }}>
              Layanan
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="font-medium" style={linkStyle}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div>
            <h3 className="text-lg font-bold mb-6" style={{ color: "#090f4d" }}>
              Hubungi Kami
            </h3>

            <ul className="space-y-4 mb-6">
              <li className="text-sm" style={{ color: "rgba(9,15,77,0.8)" }}>
                082111103174
              </li>
              <li className="text-sm" style={{ color: "rgba(9,15,77,0.8)" }}>
                Jl. Pulau Pisang 1, Way Kandis, Bandar Lampung
              </li>
              <li className="text-sm" style={{ color: "rgba(9,15,77,0.8)" }}>
                @happyoutboundindonesia
              </li>
            </ul>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              Chat via WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#090f4d33] flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#090f4db3]">
            © {currentYear} Happy Outbound Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
