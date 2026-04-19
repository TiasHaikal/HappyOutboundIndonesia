"use client";

import { motion } from "framer-motion";
import ricky from "@/assets/ricky.jpg";

export default function OrganizationSection() {
  const values = [
    {
      icon: "🎓",
      text: 'Pendekatan "EXPERIENTIAL LEARNING" — metode pembelajaran mendalam dan menyenangkan yang mendorong transformasi perilaku nyata.',
    },
    {
      icon: "✈️",
      text: "Kombinasi Training & Wisata Edukatif — aktivitas yang menyeimbangkan fun dan learning.",
    },
    {
      icon: "🏛️",
      text: "Berpengalaman lintas sektor — melatih tim dari perusahaan, lembaga pendidikan, hingga instansi pemerintahan.",
    },
    {
      icon: "📜",
      text: "Lisensi resmi di bidang kepariwisataan dan pelatihan — memastikan kegiatan berlangsung profesional dan aman.",
    },
    {
      icon: "⚡",
      text: "Motivator muda dengan energi positif — menciptakan suasana interaktif, inspiratif, dan berkesan.",
    },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#00c6ff" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#090f4d" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#090f4d" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-white" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header — sama persis pola AboutSection */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
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
            Profil Pimpinan
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Pemimpin Kami
          </motion.h2>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Kiri - Foto */}
          <motion.div
            className="lg:w-72 flex-shrink-0 mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(9,15,77,0.4)",
                border: "2px solid rgba(255,255,255,0.3)",
              }}
            >
              <img
                src={ricky.src}
                alt="Ricky Rachman Nursa"
                className="w-full object-cover object-top"
                style={{ height: "400px" }}
              />
            </div>

            {/* FRIST EDU badge */}
            <motion.div
              className="mt-5 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span
                className="inline-block font-bold px-5 py-2 rounded-full text-xs tracking-widest"
                style={{
                  background: "rgba(254,225,64,0.2)",
                  border: "1px solid rgba(254,225,64,0.6)",
                  color: "#FEE140",
                }}
              >
                ✦ EXPERIENTIAL LEARNING
              </span>
              <div className="flex justify-center flex-wrap gap-2 mt-3">
                {[
                  "Active",
                  "Fun",
                  "Deep Experience",
                  "Integrity",
                  "Collaborative",
                  "Adaptive",
                ].map((word, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Kanan - Konten */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Identitas — pola sama seperti AboutSection */}

            <motion.h3
              className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              RICKY RACHMAN NURSA, S.T., M.T.
            </motion.h3>

            <motion.p
              className="text-white font-semibold text-lg mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              Motivator Muda & Trainer Inspiratif
            </motion.p>

            <motion.p
              className="text-white/70 italic text-lg mb-6 pl-4"
              style={{ borderLeft: "3px solid #FEE140" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              "Empowering People Through Experience and Deep Learning"
            </motion.p>

            <motion.p
              className="text-white/85 text-lg leading-relaxed mb-8 text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Seorang motivator muda berpengalaman dalam menggerakkan perubahan
              individu dan tim melalui training, outbound, dan wisata edukatif.
              Berbekal lisensi BNSP resmi experiential learning dan travel
              consultant, memadukan pendidikan karakter, motivasi, dan
              pembelajaran berbasis pengalaman dengan pendekatan{" "}
              <span className="text-yellow-300 font-semibold">
                "EXPERIENTIAL LEARNING"
              </span>
              . Telah dipercaya puluhan instansi swasta, pemerintahan, hingga
              kementerian.
            </motion.p>

            {/* Value Proposition — pola grid sama seperti AboutSection */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <motion.span
                    className="text-2xl flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.span>
                  <p className="text-white/85 text-sm leading-relaxed">
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
