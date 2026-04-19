'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      icon: '🎓',
      title: 'Corporate Training',
      description: 'Program pelatihan untuk meningkatkan kompetensi dan kinerja karyawan',
      features: ['Leadership Training', 'Team Building', 'Communication Skills', 'Problem Solving'],
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: '🏕️',
      title: 'Outbound Training',
      description: 'Kegiatan outdoor yang menyenangkan untuk membangun kekompakan tim',
      features: ['Fun Games', 'Team Challenge', 'Adventure Activity', 'Group Dynamics'],
      color: 'from-green-500 to-green-700',
    },
    {
      icon: '🎉',
      title: 'Event Organizer',
      description: 'Penyelenggaraan berbagai acara perusahaan dengan profesional',
      features: ['Company Gathering', 'Annual Party', 'Family Day', 'Product Launch'],
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: '🧭',
      title: 'Adventure Program',
      description: 'Petualangan seru di alam terbuka untuk mengasah mental dan fisik',
      features: ['Rafting', 'Camping', 'Hiking', 'Survival Training'],
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: '👨‍🏫',
      title: 'Public Training',
      description: 'Program pelatihan terbuka untuk umum dengan berbagai topik',
      features: ['Soft Skills', 'Hard Skills', 'Certification', 'Workshop'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: '🎪',
      title: 'Kids & Family Program',
      description: 'Kegiatan khusus untuk anak-anak dan keluarga yang edukatif',
      features: ['School Trip', 'Family Outing', 'Kids Camp', 'Educational Games'],
      color: 'from-pink-500 to-pink-700',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
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
            Layanan Kami
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Solusi Lengkap untuk Kebutuhan Anda
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Kami menyediakan berbagai layanan untuk mendukung pengembangan tim dan acara perusahaan Anda
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {service.icon}
                </motion.span>
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.svg 
                      className="w-5 h-5 text-green-500 mr-2" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.3 }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
