"use client";

import { motion } from "framer-motion";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="rounded-2xl h-64 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={foto3.src}
                    alt="Happy Outbound Indonesia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="rounded-2xl h-48 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={foto1.src}
                    alt="Happy Outbound Indonesia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="rounded-2xl h-48 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={foto2.src}
                    alt="Happy Outbound Indonesia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="rounded-2xl h-64 shadow-xl overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={foto4.src}
                    alt="Happy Outbound Indonesia"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-primary-600 font-semibold text-sm uppercase tracking-wider"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Tentang Kami
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              HAPPY OUTBOUND INDONESIA
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-6 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Kami adalah HAPPY OUTBOUND INDONESIA, sebuah tim yang berdedikasi
              dalam menciptakan pengalaman luar biasa melalui kegiatan outbound
              dan event organizer. Dengan semangat kreatif dan profesionalisme
              yang tinggi, kami siap membantu Anda mewujudkan acara-acara yang
              berkesan dan sukses.
            </motion.p>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Sejak awal beroperasi, HAPPY OUTBOUND INDONESIA telah tumbuh
              menjadi salah satu pemimpin dalam industri event ini. Kami telah
              berhasil menyelenggarakan ratusan event yang sukses untuk berbagai
              perusahaan, institusi pendidikan, dan organisasi nirlaba.
              Pengalaman yang kami kumpulkan selama bertahun-tahun telah
              memungkinkan kami untuk terus mengembangkan program-program
              kreatif dan efektif yang menghasilkan dampak positif bagi setiap
              tim yang kami layani.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="whileInView"
            >
              {[
                {
                  icon: "🎯",
                  title: "Profesional",
                  desc: "Tim fasilitator bersertifikat",
                },
                {
                  icon: "⭐",
                  title: "Berkualitas",
                  desc: "Program teruji dan efektif",
                },
                { icon: "🏆", title: "Terpercaya", desc: "Ratusan klien puas" },
                {
                  icon: "💡",
                  title: "Inovatif",
                  desc: "Metode pembelajaran modern",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <motion.span
                    className="text-3xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-gray-600 text-sm">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
