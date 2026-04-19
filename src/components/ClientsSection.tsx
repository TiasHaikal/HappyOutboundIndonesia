"use client";

import { motion } from "framer-motion";

import kemenakerLogo from "@/assets/kementerian_ketenagakerjaan_ri_logo_white_background.jpg";
import balaiKarantinaLogo from "@/assets/balai_karantina_pertanian_logo_white_background.jpg";
import bpomLogo from "@/assets/bpom_indonesia_logo_white_background.jpg";
import bpsLogo from "@/assets/bps_indonesia_logo_white_background.jpg";
import kejaksaanLogo from "@/assets/kejaksaan_republik_indonesia_logo_white_background.jpg";
import briLogo from "@/assets/bri_logo_white_background.jpg";
import pertaminaLogo from "@/assets/pertamina_logo_white_background.jpg";
import pusriLogo from "@/assets/pusri_logo_white_background.jpg";
import xlAxiataLogo from "@/assets/xl_axiata_logo_white_background.jpg";
import centralProteinaLogo from "@/assets/central_proteina_prima_logo_white_background.jpg";
import aiceLogo from "@/assets/aice_indonesia_logo_white_background.jpg";
import auto2000Logo from "@/assets/auto2000_logo_white_background.jpg";
import adiraLogo from "@/assets/adira_finance_logo_white_background.jpg";
import fifLogo from "@/assets/fif_group_logo_white_background.jpg";
import axaMandiriLogo from "@/assets/axa_mandiri_logo_white_background.jpg";
import univLampungLogo from "@/assets/universitas_lampung_logo_white_background.jpg";
import univSriwijayaLogo from "@/assets/universitas_sriwijaya_logo_white_background.jpg";
import dinasPerikananLogo from "@/assets/dinas_perikanan_dan_kelautan_logo_white_background.jpg";
import dinasPendidikanLogo from "@/assets/dinas_pendidikan_logo_white_background.jpg";
import basarnasLogo from "@/assets/badan_sar_nasional_logo_white_background.jpg";
import indosatLogo from "@/assets/indosat_logo_white_background.jpg";
import axaLogo from "@/assets/axa_logo_white_background.jpg";

export default function ClientsSection() {
  const clients = [
    { name: "Kementerian Ketenagakerjaan RI", logo: kemenakerLogo },
    { name: "Balai Karantina Pertanian", logo: balaiKarantinaLogo },
    { name: "BPOM Indonesia", logo: bpomLogo },
    { name: "BPS Indonesia", logo: bpsLogo },
    { name: "Kejaksaan Republik Indonesia", logo: kejaksaanLogo },
    { name: "Bank BRI", logo: briLogo },
    { name: "Pertamina", logo: pertaminaLogo },
    { name: "Pusri", logo: pusriLogo },
    { name: "XL Axiata", logo: xlAxiataLogo },
    { name: "Central Proteina Prima", logo: centralProteinaLogo },
    { name: "Aice Indonesia", logo: aiceLogo },
    { name: "Auto2000", logo: auto2000Logo },
    { name: "Adira Finance", logo: adiraLogo },
    { name: "FIF Group", logo: fifLogo },
    { name: "AXA Mandiri", logo: axaMandiriLogo },
    { name: "Universitas Lampung", logo: univLampungLogo },
    { name: "Universitas Sriwijaya", logo: univSriwijayaLogo },
    { name: "Dinas Perikanan & Kelautan", logo: dinasPerikananLogo },
    { name: "Dinas Pendidikan", logo: dinasPendidikanLogo },
    { name: "Basarnas", logo: basarnasLogo },
    { name: "Indosat", logo: indosatLogo },
    { name: "AXA", logo: axaLogo },
    { name: "more", logo: null },
  ];

  const testimonials = [
    // EVENT ORGANIZER
    {
      quote:
        "Kami mempercayakan full event kepada tim Happy Outbound Indonesia, dan hasilnya sangat memuaskan. Konsep acara dikemas kreatif, eksekusi rapi, dan seluruh peserta merasa terlibat dari awal sampai akhir. Timnya sangat profesional dan detail.",
      author: "Yudi",
      position: "Direksi Operasional",
      company: "IM3 Ooredoo",
    },
    {
      quote:
        "Event berjalan lancar tanpa kendala berarti. Tim sangat adaptif terhadap perubahan di lapangan dan mampu menjaga suasana tetap fun dan engaging. Sangat recommended untuk event perusahaan!",
      author: "Zwesty",
      position: "Direksi Operasional",
      company: "BPR",
    },

    // TRAINING
    {
      quote:
        "Materi training disampaikan dengan cara yang interaktif dan mudah dipahami. Tidak hanya teori, tapi juga banyak praktik yang langsung bisa diterapkan di pekerjaan sehari-hari.",
      author: "Dinas PUPR",
      position: "",
      company: "Jambi",
    },
    {
      quote:
        "Training ini membuka wawasan baru bagi tim kami. Metode penyampaiannya tidak membosankan, justru membuat peserta aktif berdiskusi dan berpikir lebih dalam.",
      author: "Kementerian Kehutanan RI",
      position: "",
      company: "",
    },

    // OUTBOUND
    {
      quote:
        "Outbound-nya luar biasa seru! Games-nya variatif, penuh energi, dan sangat membangun kerja sama tim. Setelah kegiatan ini, kekompakan tim kami terasa meningkat signifikan.",
      author: "Annisa",
      position: "HR",
      company: "PT Gunung Madu Plantations (GMP)",
    },
    {
      quote:
        "Perpaduan antara fun activity dan sesi refleksi sangat pas. Peserta tidak hanya senang, tapi juga mendapatkan insight yang mendalam.",
      author: "Mediya",
      position: "Dosen",
      company: "FISIP UNILA",
    },

    // TRIP
    {
      quote:
        "Trip yang diorganisir sangat menyenangkan dan terencana dengan baik. Mulai dari transportasi, akomodasi, hingga rundown acara semuanya tertata rapi.",
      author: "Anggie",
      position: "Finance",
      company: "Jaya Abadi Teknik Indonesia",
    },
    {
      quote:
        "Bukan sekadar jalan-jalan, tapi juga pengalaman kebersamaan yang berkesan. Tim sangat membantu dan responsif selama perjalanan.",
      author: "Siti Khodijah",
      position: "Protokoler",
      company: "Bupati Tulang Bawang Barat",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
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
            Klien Kami
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Dipercaya Oleh Perusahaan Terkemuka
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Telah melayani ratusan klien dari berbagai sektor industri
          </motion.p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {clients.map((client, index) =>
            client.name === "more" ? (
              <motion.div
                key={index}
                className="rounded-2xl p-4 shadow-sm flex flex-col items-center justify-center gap-1 cursor-default"
                style={{
                  background: "linear-gradient(135deg, #00c6ff, #090f4d)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <span className="text-4xl font-extrabold text-white">99+</span>
                <span className="text-white font-semibold text-xs text-center leading-tight">
                  Klien Lainnya
                </span>
                <span className="text-white/60 text-xs text-center">
                  dari berbagai sektor
                </span>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="w-full h-14 flex items-center justify-center">
                  <img
                    src={client.logo!.src}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <p className="text-gray-500 text-xs text-center leading-tight">
                  {client.name}
                </p>
              </motion.div>
            ),
          )}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Apa Kata Klien Kami
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="absolute -top-4 left-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                >
                  <svg
                    className="w-8 h-8 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </motion.div>
                <motion.p
                  className="text-gray-600 mb-6 italic pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </motion.div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-primary-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
