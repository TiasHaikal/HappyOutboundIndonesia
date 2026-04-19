"use client";

import { motion } from "framer-motion";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Sertifikat K3 Kemnaker",
      description:
        "Sertifikasi resmi di bidang Keselamatan dan Kesehatan Kerja (K3) yang menunjukkan kompetensi dalam menerapkan standar keamanan kerja, mitigasi risiko, serta menciptakan lingkungan kerja yang aman dan produktif.",
      issuer: "Kementerian Ketenagakerjaan RI",
      year: "2024",
    },
    {
      title: "Sertifikat Fasilitator BNSP (Kompeten)",
      description:
        "Pengakuan kompetensi sebagai fasilitator profesional yang mampu memimpin, mengelola, dan mengembangkan kegiatan pelatihan, outbound, serta pengembangan tim secara efektif dan terstruktur.",
      issuer: "BNSP",
      year: "2024",
    },
    {
      title: "Sertifikat Travel Agency BNSP (Kompeten)",
      description:
        "Sertifikasi kompetensi di bidang travel agency yang menunjukkan kemampuan dalam perencanaan, pengelolaan, serta pelayanan perjalanan dan kegiatan wisata secara profesional dan berkualitas.",
      issuer: "BNSP",
      year: "2024",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#00c6ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Sertifikat
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Sertifikasi & Penghargaan
          </motion.h2>

          <motion.p
            className="text-white/80 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Pengakuan atas komitmen kami terhadap kualitas dan profesionalisme
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 60, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                </motion.div>
                <motion.span
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  {cert.year}
                </motion.span>
              </div>
              <motion.h3
                className="text-lg font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {cert.description}
              </motion.p>
              <motion.p
                className="text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                Issued by: <span className="font-medium">{cert.issuer}</span>
              </motion.p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <motion.svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </motion.svg>
            <span className="font-semibold">
              Semua sertifikat asli dan dapat diverifikasi
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
