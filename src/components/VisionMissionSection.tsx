"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const misiList = [
    {
      text: "Menyelenggarakan program outbound yang aktif dan energik untuk meningkatkan keterlibatan fisik dan mental peserta.",
      tag: "Active",
    },
    {
      text: "Menciptakan suasana kegiatan yang seru, menyenangkan, dan penuh kebersamaan.",
      tag: "Fun",
    },
    {
      text: "Memberikan pengalaman pembelajaran yang mendalam, reflektif, dan berdampak jangka panjang.",
      tag: "Deep Experience",
    },
    {
      text: "Menjalankan setiap layanan dengan integritas tinggi, profesionalisme, dan tanggung jawab.",
      tag: "Integritas",
    },
    {
      text: "Mendorong kolaborasi yang kuat antar peserta, tim fasilitator, dan klien untuk mencapai hasil terbaik.",
      tag: "Kolaborasi",
    },
    {
      text: "Mengembangkan program yang adaptif terhadap perubahan, kebutuhan klien, dan dinamika zaman.",
      tag: "Adaptif",
    },
    {
      text: "Menghadirkan inovasi berkelanjutan dalam metode pelatihan dan experiential learning.",
      tag: "Inovasi",
    },
  ];

  return (
    <section id="vision" className="py-24 bg-white">
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
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Visi & Misi
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Arah dan Tujuan Kami
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Visi */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Visi</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Menjadi perusahaan outbound dan pengembangan sumber daya manusia
              terdepan di Indonesia yang menghadirkan pengalaman{" "}
              <span className="text-primary-600 font-semibold">
                aktif (Active)
              </span>
              ,{" "}
              <span className="text-primary-600 font-semibold">
                menyenangkan (Fun)
              </span>
              , dan{" "}
              <span className="text-primary-600 font-semibold">
                bermakna (Deep Experience)
              </span>
              , dengan menjunjung tinggi integritas, kolaborasi, dan kemampuan
              beradaptasi.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                className="w-8 h-8 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Misi</h3>
            <ul className="space-y-3">
              {misiList.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  whileHover={{ x: 6 }}
                >
                  <motion.svg
                    className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {item.text}{" "}
                    <span className="text-primary-600 font-semibold text-xs">
                      ({item.tag})
                    </span>
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
