import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const WhoAreWe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex md:flex-row flex-col justify-center items-center p-4 md:p-10 max-w-7xl mx-auto gap-8 md:gap-16"
    >
      <motion.img
        whileHover={{ scale: 1.02 }}
        src="/who-are-we.webp"
        alt="Pest control professionals at work"
        className="w-full md:w-1/2 h-auto rounded-2xl shadow-lg object-cover"
        style={{ maxHeight: "500px" }}
      />

      <div className="w-full md:w-1/2 space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold text-[#807b00] uppercase tracking-wider"
        >
          Who we are
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
        >
          Protecting What Matters Most
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4 text-gray-700"
        >
          <p className="text-lg leading-relaxed">
            Pestora offers customized, eco-friendly pest control services to
            protect your home, business, and family. Our experts focus on
            long-term solutions to prevent future infestations using safe,
            effective methods.
          </p>

          <p className="text-lg leading-relaxed">
            We provide comprehensive, ongoing pest management to ensure your
            space stays pest-free year-round. Our team is always available for
            fast, reliable service, addressing both routine and urgent pest
            control needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3  text-black font-medium text-lg rounded-lg transition-all duration-300 transform hover:translate-x-1 group"
          >
            Contact Us
            <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        
      </div>
      
    </motion.div>
  );
};

export default WhoAreWe;
