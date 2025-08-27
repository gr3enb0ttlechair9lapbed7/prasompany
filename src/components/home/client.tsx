"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { logo: "/clients/clientimg1.png" },
  { logo: "/clients/clientimg2.png" },
  { logo: "/clients/clientimg3.png" },
  { logo: "/clients/clientimg4.png" },
  { logo: "/clients/clientimg5.jpg" },
  { logo: "/clients/clientimg6.png" },
  { logo: "/clients/clientimg7.png" },
  { logo: "/clients/clientimg8.jpg" },
  { logo: "/clients/images1.png" },
  
];

const quotes = [
  "“Innovation that drives industries forward.”",
  "“Technology tailored for every business.”",
  "“Shaping digital transformation with trust.”",
  "“Your vision, our technology.”",
  "“Empowering businesses, building the future.”",
  "“Delivering excellence, one project at a time.”",
  "“Where creativity meets cutting-edge solutions.”",
];

const ClientSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const groupSize = 5; // number of logos shown per slide
  const [index, setIndex] = useState(0);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Rotate client logos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + groupSize) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-r from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-md">
          Our Clients
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Trusted by businesses across industries, Prasunet delivers solutions
          that transform ideas into reality.
        </p>

        {/* Animated Quotes Section */}
        <motion.p
          key={quoteIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent italic drop-shadow-sm"
        >
          {quotes[quoteIndex]}
        </motion.p>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 mx-auto mt-8 rounded-full shadow-lg"></div>
      </div>

      {/* Client Logos */}
      <div className="overflow-hidden relative px-8">
        <motion.div
          key={index}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {clients.slice(index, index + groupSize).map((client, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <Image
                src={client.logo}
                alt={`Client ${idx + 1}`}
                width={120}
                height={120}
                className="w-28 h-auto object-contain transition-all duration-500"

              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;
