"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const waNumber = "6282111103174";
  const waMessage = encodeURIComponent(
    "Halo Kak, saya ingin mengetahui lebih lanjut tentang layanan Happy Outbound Indonesia 😊",
  );
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

  const contactInfo = [
    {
      icon: "📞",
      title: "Telepon / WhatsApp",
      content: "082111103174",
      href: waUrl,
    },
    {
      icon: "📍",
      title: "Alamat Kantor",
      content: "Jl. Pulau Pisang 1, Way Kandis, Bandar Lampung",
      href: "https://maps.google.com/?q=HAPPY+OUTBOUND+INDONESIA",
    },
    {
      icon: "📸",
      title: "Instagram",
      content: "@happyoutboundindonesia",
      href: "https://instagram.com/happyoutboundindonesia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "#00c6ff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-white font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Kontak Kami
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Hubungi Kami
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg mt-4 max-w-3xl mx-auto text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Untuk informasi lebih lanjut tentang HAPPY OUTBOUND INDONESIA dan
            bagaimana kami dapat membantu memenuhi kebutuhan Anda, silakan
            hubungi kami di kontak atau kunjungi situs media sosial kami.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Kiri - Info Kontak + WA Button */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Informasi Kontak
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xl">{info.icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-200">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-lg text-white transition-all duration-200 mb-10"
              style={{ backgroundColor: "#25D366" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 30px rgba(37,211,102,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat via WhatsApp
            </motion.a>

            {/* Instagram Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Ikuti Kami</h3>
              <motion.div
                className="rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.instagram.com/happyoutboundindonesia/embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  scrolling="no"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Kanan - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Lokasi Kami</h3>
            <motion.div
              className="rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d638.8878109489264!2d105.29006380336122!3d-5.361150927084544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c54062c03b11%3A0x8a157e9a9bfc6fad!2sHAPPY%20OUTBOUND%20INDONESIA!5e0!3m2!1sid!2sid!4v1776600837725!5m2!1sid!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
