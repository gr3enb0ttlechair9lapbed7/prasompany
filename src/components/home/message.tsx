"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function FounderMessage() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote Icon */}
          <FaQuoteLeft className="text-blue-400 text-5xl mx-auto mb-6 opacity-80" />

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            A Message from the Founder
          </h2>

          {/* Shortened Founder Message */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            At <span className="font-semibold text-blue-400">Prasunet</span>, we
            believe in <span className="text-teal-300 font-semibold">innovation with purpose</span>.  
            From our early journey to a global presence, our focus remains on
            empowering businesses with technology that creates real impact.
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Every solution we deliver carries passion, trust, and commitment —
            shaping the <span className="text-blue-400 font-semibold">digital future of Society</span>.
          </p>

          {/* Founder Name */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-white">Mr. Pramod Prajapat</h3>
            <p className="text-gray-400 text-lg">Founder & CEO, Prasunet</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
