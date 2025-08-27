"use client";

import { motion } from "framer-motion";

const InternshipSection = () => {
  return (
    <motion.section
      className="relative w-full h-[600px] bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/i1.jpg')" }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ textShadow: "0px 0px 20px rgba(255, 255, 255, 1)" }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Internship & Training Opportunities
        </motion.h2>

        {/* Subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 text-xl md:text-2xl font-semibold text-blue-300"
        >
           IT Training & Skill Development for Students
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-gray-200"
        >
          Till now, <span className="font-semibold text-blue-400">thousands of students</span> have been
          successfully trained and skilled under our programs. Gain hands-on
          experience, learn in-demand technologies, and prepare yourself for a
          future-ready career in IT.
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base"
        >
          <div className="bg-white bg-opacity-10 p-3 rounded-lg shadow-md">
             Certificate of Completion
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg shadow-md">
             Real-World Projects
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg shadow-md">
             Expert Mentorship
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg shadow-md">
             Networking Opportunities
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd_IXUmj1XFUT8ydvWbqoWJ9ImZffOsc0rHwsMHICO_E5F5dA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition"
          >
            Apply Now
          </motion.a>

        </div>
      </div>
    </motion.section>
  );
};

export default InternshipSection;
