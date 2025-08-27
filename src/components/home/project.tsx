"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "News Application",
    description: "A dynamic platform delivering real-time global news with AI-powered recommendations.",
    image: "/p1.jpg",
  },
  {
    id: 2,
    name: "Job Portal Website",
    description: "Connects job seekers and recruiters with advanced filtering and smart resume matching.",
    image: "/p2.png",
  },
  {
    id: 3,
    name: "Stock Prediction Project",
    description: "AI-driven tool for forecasting stock prices using machine learning algorithms.",
    image: "/p3.png",
  },
];

const ProjectSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-lg relative overflow-hidden">
      {/* Decorative Gradient Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 blur-3xl opacity-30 -z-10"></div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Featured <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our innovative projects designed to deliver real-world impact and cutting-edge solutions.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl group relative"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={300}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <p className="text-white text-lg font-semibold">{project.name}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                View Details <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300"
        >
          Explore More Projects →
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
