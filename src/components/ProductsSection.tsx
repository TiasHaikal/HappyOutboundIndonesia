"use client";

import { motion } from "framer-motion";

export default function ProductsSection() {
  const products = [
    {
      title: "Fun Games Package",
      description: "Paket permainan seru untuk membangun keakraban tim",
      duration: "3-4 Jam",
      participants: "10-200 Orang",
      price: "Mulai Rp 99.000/pax",
      features: [
        "Ice Breaking Games",
        "Team Challenge",
        "Group Dynamics",
        "Documentation",
        "Certificate",
      ],
      popular: true,
      icon: "🎮",
      color: "from-orange-400 to-yellow-400",
    },
    {
      title: "Team Building Package",
      description: "Program intensif untuk memperkuat kerjasama tim",
      duration: "1-2 Hari",
      participants: "10-200 Orang",
      price: "Mulai Rp 149.000/pax",
      features: [
        "Leadership Activity",
        "Communication Games",
        "Problem Solving",
        "Reflection Session",
        "Facilitator Expert",
      ],
      popular: false,
      icon: "👥",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Adventure Package",
      description: "Petualangan menantang di alam terbuka",
      duration: "2-3 Hari",
      participants: "10-200 Orang",
      price: "Mulai Rp 349.000/pax",
      features: [
        "Rafting/Camping",
        "Survival Training",
        "Night Activity",
        "All Equipment",
        "Medical Support",
      ],
      popular: false,
      icon: "🏕️",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Company Gathering",
      description: "Acara gathering lengkap untuk perusahaan",
      duration: "Full Day",
      participants: "10-500 Orang",
      price: "Custom Package",
      features: [
        "Event Planning",
        "Entertainment",
        "Catering",
        "Venue Arrangement",
        "Full Documentation",
      ],
      popular: false,
      icon: "🏆",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section
      id="products"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Produk Kami
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Paket Program Unggulan
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Pilih paket yang sesuai dengan kebutuhan tim dan perusahaan Anda
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col rounded-3xl overflow-hidden bg-white"
              style={{
                border: product.popular
                  ? "2px solid #FEE140"
                  : "1px solid #e5e7eb",
                boxShadow: product.popular
                  ? "0 20px 50px rgba(9,15,77,0.3)"
                  : "0 8px 30px rgba(9,15,77,0.12)",
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-widest"
                  style={{ backgroundColor: "#FEE140", color: "#090f4d" }}
                >
                  ✦ PALING POPULER
                </div>
              )}

              <div
                className={`p-6 flex flex-col flex-1 ${product.popular ? "pt-10" : ""}`}
              >
                {/* Icon & Title */}
                <div className="mb-5">
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl">{product.icon}</span>
                  </motion.div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {product.description}
                  </p>
                </div>

                {/* Duration & Participants */}
                <div className="flex flex-col gap-1.5 mb-5">
                  <div className="flex items-center text-xs gap-2 text-gray-600">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {product.duration}
                  </div>
                  <div className="flex items-center text-xs gap-2 text-gray-600">
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {product.participants}
                  </div>
                </div>

                {/* Price */}
                <div className="text-xl font-bold mb-5 text-[#090f4d]">
                  {product.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center text-xs gap-2 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      whileHover={{ x: 4 }}
                    >
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0 text-[#00c6ff]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="block w-full py-3 rounded-full font-semibold text-center text-sm transition-all duration-200"
                  style={{ backgroundColor: "#090f4d", color: "white" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Konsultasi Sekarang
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
