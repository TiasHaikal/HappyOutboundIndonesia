"use client";

import { motion } from "framer-motion";

export default function LegalitySection() {
  const legalDocuments = [
    {
      title: "Akta Pendirian Perusahaan",
      number: "AHU-047426.AH.01.30.tahun2022",
      icon: "📜",
    },
    {
      title: "Nomor Induk Berusaha (NIB)",
      number: "1217000720399",
      icon: "📋",
    },
    {
      title: "NPWP Perusahaan",
      number: "61.549.420.0.-323.000",
      icon: "💳",
    },
    {
      title: "Sertifikat BNSP Penyelenggara Event",
      number: " NO.REG.PAR.522 00245 2024",
      icon: "📄",
    },
    {
      title: "Sertifikat Dinas Pariwisata",
      number: "500.13.6.3/589/V.20/VII/2024",
      icon: "🏢",
    },
    {
      title: "HAKI - Hak Kekayaan Intelektual",
      number: "EC002026014455, 23 Januari 2026",
      icon: "🤝",
    },
  ];

  return (
    <section id="legality" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Legalitas
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Dokumen Legal Perusahaan
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Happy Outbound Indonesia adalah perusahaan yang resmi dan terdaftar
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalDocuments.map((doc, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, x: 5 }}
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {doc.icon}
                </motion.span>
              </motion.div>
              <div>
                <motion.h3
                  className="font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {doc.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {doc.number}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Perusahaan Terpercaya
                </h3>
                <p className="text-gray-600">
                  Terdaftar resmi dan memiliki izin usaha lengkap
                </p>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Verifikasi Legalitas
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
