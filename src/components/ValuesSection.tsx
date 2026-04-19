"use client";

import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      icon: "⚡",
      title: "Active",
      description:
        "Bergerak, energik, dan berdaya. Menunjukkan semangat tinggi dalam setiap aktivitas, selalu siap bergerak, berpartisipasi aktif, dan menciptakan energi positif yang menular dalam setiap program outbound maupun pengembangan tim.",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: "😊",
      title: "Fun",
      description:
        "Menyenangkan, interaktif, dan berkesan. Menciptakan suasana kegiatan yang penuh keceriaan, interaksi yang hangat, serta pengalaman yang menyenangkan sehingga setiap peserta merasa terlibat dan membawa pulang kenangan yang membekas.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: "🌊",
      title: "Deep Experience",
      description:
        "Bermakna, reflektif, dan transformasional. Memberikan pengalaman pembelajaran yang tidak hanya seru, tetapi juga menyentuh kesadaran, membangun refleksi diri, serta menghasilkan perubahan pola pikir dan perilaku yang lebih baik.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: "🤝",
      title: "Integritas",
      description:
        "Jujur, konsisten, dan bertanggung jawab. Menjunjung tinggi kejujuran dalam tindakan, konsistensi dalam pelayanan, serta tanggung jawab penuh terhadap setiap proses dan hasil yang diberikan kepada klien maupun peserta.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: "👥",
      title: "Kolaborasi",
      description:
        "Sinergi, kebersamaan, dan saling menguatkan. Membangun kerja sama yang solid antara peserta, fasilitator, dan klien untuk mencapai tujuan bersama, menciptakan sinergi yang saling mendukung dan memperkuat hasil yang lebih optimal.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: "🔄",
      title: "Adaptif",
      description:
        "Fleksibel, Responsif, dan Tangguh Mampu menyesuaikan diri dengan perubahan, kebutuhan klien, serta dinamika situasi, dengan tetap menjaga kualitas layanan dan menghadirkan solusi yang tepat dan efektif.",
      color: "from-teal-400 to-teal-600",
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
          <motion.span className="text-white font-semibold text-sm uppercase tracking-wider">
            Nilai Inti Perusahaan
          </motion.span>

          <motion.h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4">
            Core Values Kami
          </motion.h2>

          <motion.p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Prinsip-prinsip yang menjadi landasan dalam setiap aktivitas kami
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/25 hover:bg-white/25 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <span className="text-3xl">{value.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {value.title}
              </h3>

              <p className="text-white/85 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
