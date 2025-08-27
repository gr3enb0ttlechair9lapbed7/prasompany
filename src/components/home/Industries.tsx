"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Industries = () => {
  const industries = [
    { name: "Hi-Tech", desc: "Driving future-ready innovations." },
    { name: "Travel, Transportation, Logistics & Hospitality", desc: "Connecting the world with smarter journeys." },
    { name: "Manufacturing", desc: "Reinventing production with automation." },
    { name: "Media & Entertainment", desc: "Empowering creativity and digital experiences." },
    { name: "Private Equity", desc: "Unlocking growth with strategic investments." },
    { name: "Professional Services", desc: "Delivering expertise to accelerate businesses." },
    { name: "Insurance", desc: "Protecting lives and assets with AI-driven insights." },
    { name: "Retail & Consumer Goods", desc: "Transforming shopping experiences globally." },
    { name: "Banking & Financial Services", desc: "Shaping the future of digital finance." },
    { name: "Communications", desc: "Enabling seamless global connectivity." },
    { name: "Energy & Utilities", desc: "Sustainable solutions powering the world." },
    { name: "Healthcare & Life Sciences", desc: "Innovating for healthier lives." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [industries.length, isPaused]);

  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 3) % industries.length);

  const handlePrev = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 3 + industries.length) % industries.length);

  const getVisibleIndustries = () => {
    return Array.from({ length: 3 }, (_, i) => industries[(currentIndex + i) % industries.length]);
  };

  return (
    <section
      className="h-auto flex flex-col items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-purple-50 py-20 px-6 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft Background Gradient Blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-800 tracking-tight"
      >
        Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Empower</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-center mb-14 text-gray-700 max-w-3xl leading-relaxed text-lg md:text-xl font-medium"
      >
        From <span className="font-semibold text-blue-700">cutting-edge technology</span> to{" "}
        <span className="font-semibold text-purple-700">life-changing healthcare</span>,  
        we help businesses evolve, scale, and thrive across multiple domains.
      </motion.p>

      {/* Industry Carousel */}
      <div className="relative w-full max-w-xs md:max-w-5xl grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards */}
        <AnimatePresence mode="popLayout">
          {getVisibleIndustries().map((industry, index) => (
            <motion.div
              key={industry.name}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg border bg-gradient-to-br 
              ${index % 2 === 0 
                ? "from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200" 
                : "from-purple-50 to-pink-100 border-pink-200 hover:from-purple-100 hover:to-pink-200"} 
                transition transform hover:-translate-y-2 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-3">
                {industry.name}
              </h3>
              <p className="text-sm md:text-base text-gray-600 text-center leading-relaxed">
                {industry.desc}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition z-10"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

    </section>
  );
};

export default Industries;
