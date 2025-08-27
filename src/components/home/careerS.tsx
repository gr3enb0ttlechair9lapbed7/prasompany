"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CareerSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 via-purple-50 to-blue-100 px-6 md:px-16 py-12 rounded-3xl overflow-hidden shadow-lg">
      
      {/* Decorative Elements */}
      <div className="absolute top-[-100px] right-[-120px] w-[280px] h-[280px] bg-purple-300 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[240px] h-[240px] bg-blue-300 rounded-full opacity-20 blur-3xl z-0"></div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-left space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Careers at <span className="text-purple-700">PRASUNET</span>
        </h2>
        <p className="text-lg text-gray-700">
          Join a team that values creativity, collaboration, and cutting-edge
          technology. At PRASUNET, we empower individuals to build solutions
          that shape the future.
        </p>
        <p className="text-md text-gray-600">
          Whether you’re an experienced professional or a recent graduate, your
          journey to success starts here. Explore roles that ignite your
          passion, push boundaries, and make an impact on a global scale.
        </p>
        <button
          onClick={() => router.push("/career")}
          className="mt-6 flex items-center gap-2 px-8 py-3 text-lg font-semibold bg-purple-700 text-white rounded-xl shadow-md hover:bg-purple-800 hover:shadow-lg transition duration-300 transform hover:scale-105"
        >
          Visit Careers Page <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>

      
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full md:w-1/2 h-72 md:h-full mt-8 md:mt-0 flex items-center justify-center z-10"
      >
        <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
          <Image
            src="/career.png"
            alt="Career at PRASUNET"
            fill
            className="object-cover rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default CareerSection;
