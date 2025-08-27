"use client";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { motion } from "framer-motion";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const cultureVideoRef = useRef<HTMLVideoElement>(null);

  // Play company mockup video
  const handlePlay = () => {
    const video = document.getElementById("company-video") as HTMLVideoElement;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  // Auto-play culture video programmatically
  useEffect(() => {
    const video = cultureVideoRef.current;
    if (video) {
      video.muted = true;
      video
        .play()
        .catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-24 md:py-16 md:px-12 py-12 px-6">

        {/* HERO WITH BACKGROUND VIDEO */}
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden rounded-2xl shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/itparkvideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-extrabold lg:text-6xl text-4xl mb-6"
            >
              Building <span className="text-pink-400">Innovation</span> Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg max-w-2xl mx-auto text-gray-200"
            >
              Empowering businesses with creativity, technology, and strategy to thrive in the digital era.
            </motion.p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="relative lg:mt-24 sm:mt-20 mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-pink-50 to-white rounded-3xl shadow-xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 px-6 py-16 lg:px-16 lg:py-20">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-6/12"
            >
              <h2 className="font-extrabold lg:text-5xl text-3xl leading-snug text-gray-900">
                Shaping the <span className="text-indigo-600"> Future</span>
              </h2>
              <p className="text-gray-700 text-lg mt-6 leading-relaxed">
                We began with a vision to empower businesses through seamless digital transformation.
                What started as a small team with big dreams has now grown into a dynamic company delivering
                high-quality web, mobile, and AI-driven solutions worldwide.
              </p>
              <blockquote className="mt-6 border-l-4 border-indigo-500 pl-4 italic text-gray-600">
                &quot;Innovation, trust, and commitment drive everything we do — turning bold ideas into reality.&quot;
              </blockquote>
            </motion.div>

            {/* Right Content - Video Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-6/12 flex justify-center"
            >
              <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="relative">
                  <video
                    id="company-video"
                    className="w-full rounded-b-2xl"
                    src="/video2.mp4"
                    controls
                  />
                  {!isPlaying && (
                    <button
                      onClick={handlePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                      aria-label="Play video"
                    >
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CULTURE VIDEO FULL SIZE */}
        <section className="relative mt-20 w-full min-h-screen lg:h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
          <video
            ref={cultureVideoRef}
            loop
            muted
            playsInline
            autoPlay
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/workculture.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-6 py-16 md:py-20">
            <h2 className="font-bold text-3xl md:text-5xl mb-6">The Spirit of Innovation</h2>
            <p className="max-w-3xl text-base md:text-lg text-gray-200 leading-relaxed mb-6">
              At Prasunet, collaboration, creativity, and growth define our culture.
              We believe in empowering people, fostering innovation, and building lasting relationships with our clients and team.
            </p>

            {/* Key Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-5xl">
              <div className="flex flex-col items-center px-4">
                <h4 className="font-semibold text-lg mb-1">Innovation</h4>
                <p className="text-gray-200 text-sm md:text-base text-center">
                  We constantly explore new ideas, technologies, and methods to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="flex flex-col items-center px-4">
                <h4 className="font-semibold text-lg mb-1">Collaboration</h4>
                <p className="text-gray-200 text-sm md:text-base text-center">
                  We work together, across teams and clients, fostering trust and transparency in every project.
                </p>
              </div>
              <div className="flex flex-col items-center px-4">
                <h4 className="font-semibold text-lg mb-1">Growth</h4>
                <p className="text-gray-200 text-sm md:text-base text-center">
                  We encourage personal and professional growth for our employees, clients, and partners.
                </p>
              </div>
            </div>

            <blockquote className="mt-12 border-l-4 border-pink-400 pl-6 italic text-gray-300 max-w-3xl text-sm md:text-base">
              &quot;Our culture is the heartbeat of our success — nurturing creativity, collaboration, and continuous improvement in every project we undertake.&quot;
            </blockquote>
          </div>
        </section>

        {/* SERVICES & STORIES SECTION */}
        <section className="relative mt-20 lg:mt-32 px-6 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12">
            Transforming Ideas into Reality
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                color: "text-indigo-600",
                quoteColor: "border-indigo-500",
                desc: "Building responsive, high-performance websites with modern technologies that help businesses grow their digital presence.",
                quote: "&quot;Delivered a scalable e-commerce platform that increased online sales by 40% within 3 months.&quot;",
              },
              {
                title: "Mobile App Development",
                color: "text-pink-600",
                quoteColor: "border-pink-500",
                desc: "Crafting intuitive, feature-rich mobile applications for Android and iOS, tailored to business needs and user experience.",
                quote: "&quot;Created a fitness app used by over 50k active users, improving engagement and retention rates significantly.&quot;",
              },
              {
                title: "AI & Data Solutions",
                color: "text-green-600",
                quoteColor: "border-green-500",
                desc: "Leveraging AI, ML, and data analytics to provide actionable insights, automation, and intelligent solutions for businesses.",
                quote: "&quot;Implemented predictive analytics that reduced operational costs by 25% for a logistics company.&quot;",
              },
              {
                title: "UI/UX Design",
                color: "text-indigo-600",
                quoteColor: "border-indigo-500",
                desc: "Designing engaging interfaces and seamless user experiences that delight customers and enhance conversion rates.",
                quote: "&quot;Redesigned a banking app that boosted customer satisfaction scores by 30%.&quot;",
              },
              {
                title: "Cloud & DevOps",
                color: "text-pink-600",
                quoteColor: "border-pink-500",
                desc: "Providing cloud migration, DevOps automation, and infrastructure solutions to ensure scalable, secure, and efficient systems.",
                quote: "&quot;Deployed cloud infrastructure for a fintech startup, cutting deployment times by 60% and ensuring 99.9% uptime.&quot;",
              },
              {
                title: "Cybersecurity",
                color: "text-green-600",
                quoteColor: "border-green-500",
                desc: "Ensuring secure systems with advanced cybersecurity strategies, risk assessment, and proactive threat management.",
                quote: "&quot;Secured enterprise systems against potential breaches, protecting sensitive customer data and compliance standards.&quot;",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
              >
                <h3 className={`text-2xl font-bold mb-3 ${service.color}`}>{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <blockquote className={`border-l-4 ${service.quoteColor} pl-4 italic text-gray-600`} dangerouslySetInnerHTML={{ __html: service.quote }} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
