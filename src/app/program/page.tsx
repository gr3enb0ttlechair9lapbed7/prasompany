"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { FaChalkboardTeacher, FaGlobe, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

import { useState } from "react";

export default function ProgramPage() {
  const articles = [
    {
      title: "AI in Climate Science",
      desc: "Artificial Intelligence is transforming climate science by leveraging deep learning and predictive modeling to forecast extreme weather conditions. Researchers are utilizing vast datasets to create real-time simulations that assist in disaster preparedness, reduce economic losses, and ensure community resilience. These advancements pave the way for sustainable global climate strategies.",
    },
    {
      title: "Quantum Cybersecurity",
      desc: "Quantum computing brings both unprecedented computational power and significant security threats. Researchers are working on post-quantum cryptographic frameworks to protect sensitive communications from quantum attacks. This article explores lattice-based cryptography, quantum key distribution, and how organizations can future-proof their security systems.",
    },
    {
      title: "Next-Generation Battery Materials",
      desc: "The demand for electric vehicles and renewable energy storage has sparked interest in solid-state batteries, advanced electrolytes, and nanostructured materials. Research focuses on improving energy density, extending battery life cycles, and enhancing safety. This innovation will redefine how we store and utilize energy for sustainable growth.",
    },
    {
      title: "Synthetic Biology in Medicine",
      desc: "Synthetic biology enables the design of artificial genes and organisms to create breakthrough medical solutions. Applications include gene therapies for genetic disorders, engineered microbes for drug production, and advanced drug delivery systems. These innovations mark a new era in personalized and precision medicine.",
    },
    {
      title: "Blockchain for Supply Chain Integrity",
      desc: "Blockchain technology is revolutionizing supply chain management by providing real-time visibility, ensuring authenticity, and preventing counterfeiting. Decentralized systems help businesses maintain transparency, build trust, and optimize global logistics. This research dives into smart contracts and IoT-enabled blockchain solutions.",
    },
    {
      title: "Neural Interfaces & Brain-Computer Integration",
      desc: "Brain-computer interfaces (BCIs) are bridging the gap between human cognition and machines. Non-invasive neural interfaces are being developed for assistive technologies, neurorehabilitation, and immersive AR/VR experiences. This research highlights the future of human-computer synergy and cognitive augmentation.",
    },
  ];
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? articles : articles.slice(0, 3);


  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

     {/* Hero Section with Background Video */}
<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/programvideo.mp4" // replace with your video path
    autoPlay
    loop
    muted
    playsInline
  ></video>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-6 text-center">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Redefining Growth with Our Initiatives
    </motion.h1>

    <motion.p
      className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      Driving innovation, growth, and digital transformation across industries and communities.
    </motion.p>

    <motion.div
      className="mt-8 flex justify-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <Link href="#programs">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
          Explore Programs
        </button>
      </Link>
      <Link href="#research">
        <button className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-xl shadow-lg transition">
          Learn More
        </button>
      </Link>
    </motion.div>
  </div>
</section>


    {/* Programs Section */}
<div id="programs" className="container mx-auto px-4 py-20">
  <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
    Our Flagship Programs
  </h2>
  <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
    Empowering innovators, students, and professionals with cutting-edge skills and global exposure. Join our programs to innovate, scale, and make a meaningful impact.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Viksit Bharat Program */}
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition duration-500 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src="/softwarevikshitbharat.jpg"
        alt="Software Viksit Bharat Program"
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded-t-3xl"
        priority
      />
      <div className="p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-b-3xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Software Viksit Bharat Program
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Nationwide initiative empowering students, professionals, and innovators with advanced digital skills. Build a tech-driven Bharat ready to lead in global innovation.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaChalkboardTeacher className="mr-3 mt-1 text-blue-600" />
            Hands-on workshops & training in AI, Blockchain, IoT, Cloud
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaUsers className="mr-3 mt-1 text-blue-600" />
            Internship & mentorship opportunities with top tech companies
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaLightbulb className="mr-3 mt-1 text-blue-600" />
            Innovation challenges, hackathons, and coding competitions
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaRocket className="mr-3 mt-1 text-blue-600" />
            Career guidance, resume building & soft skill development
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaGlobe className="mr-3 mt-1 text-blue-600" />
            Certificates recognized by industry leaders
          </li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">
          Outcomes: Gain practical skills, build real-world projects, and get industry exposure to accelerate career growth.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLScHUY_qP7K1HSVKaazsRF-aOXGtk9KbDJvU2-uuLZ-S7wi6GA/viewform?usp=sf_link">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
          >
            Join Now
          </motion.button>
        </Link>
      </div>
    </motion.div>

    {/* Tech Bharat Global Impact */}
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition duration-500 transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src="/Globalimpact.jpg"
        alt="Tech Bharat Global Impact"
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded-t-3xl"
        priority
      />
      <div className="p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-b-3xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Tech Bharat Global Impact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          A global platform connecting entrepreneurs, innovators, and industry leaders. Collaborate, create scalable solutions, and make a worldwide impact.
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaGlobe className="mr-3 mt-1 text-green-600" />
            Global networking with startups, investors & tech experts
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaLightbulb className="mr-3 mt-1 text-green-600" />
            Collaborative R&D in emerging technologies
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaRocket className="mr-3 mt-1 text-green-600" />
            Access to international markets & mentorship
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaChalkboardTeacher className="mr-3 mt-1 text-green-600" />
            Innovation labs & incubation support
          </li>
          <li className="flex items-start text-gray-700 dark:text-gray-300">
            <FaUsers className="mr-3 mt-1 text-green-600" />
            Workshops & conferences with global thought leaders
          </li>
        </ul>
        <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">
          Outcomes: Develop impactful technologies, expand global reach, and collaborate with international innovators.
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYLa3wVwYgtMgsWyWX7jTBjkUOzjM_ihhBHWKTx4AGAyP79A/viewform?usp=header">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg"
          >
            Join Now
          </motion.button>
        </Link>
      </div>
    </motion.div>
{/* African Student Empowerment Program */}
<motion.div
  className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition duration-500 transform hover:scale-105"
  whileHover={{ scale: 1.05 }}
>
  <Image
    src="/africaprogram.png"
    alt="African Student Empowerment Program"
    width={600}
    height={400}
    className="w-full h-64 object-cover rounded-t-3xl"
    priority
  />

  <div className="p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-b-3xl">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
      African Student Empowerment Program
    </h2>
    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
      An initiative by Prasunet to uplift and empower students across Africa by providing access to mentorship, scholarships, and global opportunities for academic growth and leadership development.
    </p>
    <ul className="mt-4 space-y-3">
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaChalkboardTeacher className="mr-3 mt-1 text-yellow-600" />
        Mentorship from African educators, entrepreneurs, and global professionals.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaUsers className="mr-3 mt-1 text-yellow-600" />
        Scholarships and financial aid to support access to quality education.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaGlobe className="mr-3 mt-1 text-yellow-600" />
        Opportunities for international exposure, networking, and cultural exchange.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaRocket className="mr-3 mt-1 text-yellow-600" />
        Skill development and leadership training to build a strong future workforce.
      </li>
    </ul>
    <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">
      Outcomes: Gain mentorship, access scholarships, and develop leadership and professional skills to achieve global excellence.
    </p>
    <Link href="/program/africa">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 w-full px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-lg"
      >
        Join Now
      </motion.button>
    </Link>
  </div>
</motion.div>


{/* European Student Empowerment Program */}
<motion.div
  className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 transition duration-500 transform hover:scale-105"
  whileHover={{ scale: 1.05 }}
>
  <Image
    src="/europeprogram.png"
    alt="European Student Empowerment Program"
    width={600}
    height={400}
    className="w-full h-64 object-cover rounded-t-3xl"
    priority
  />
  <div className="p-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm rounded-b-3xl">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
      European Student Empowerment Program
    </h2>
    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
      A Prasunet initiative designed to empower students across Europe through mentorship, scholarships, and global opportunities for academic and professional success.
    </p>
    <ul className="mt-4 space-y-3">
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaChalkboardTeacher className="mr-3 mt-1 text-blue-600" />
        Mentorship from leading European educators, innovators, and industry experts.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaUsers className="mr-3 mt-1 text-blue-600" />
        Scholarships and grants to support higher education and research.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaGlobe className="mr-3 mt-1 text-blue-600" />
        International exposure with exchange programs and cross-border collaborations.
      </li>
      <li className="flex items-start text-gray-700 dark:text-gray-300">
        <FaRocket className="mr-3 mt-1 text-blue-600" />
        Career development and leadership training for global opportunities.
      </li>
    </ul>
    <p className="mt-4 text-gray-800 dark:text-gray-200 font-medium">
      Outcomes: Gain world-class mentorship, pursue funded opportunities, and build impactful careers across Europe and beyond.
    </p>
    <Link href="/program/european">
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg"
      >
        Join Now
      </motion.button>
    </Link>
  </div>
</motion.div>

  </div>
</div>
     {/* Innovation Stories 
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Next-Gen Tech Narratives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "/aiinhealthcare.webp",
                title: "AI in Healthcare",
                desc: "Transforming diagnosis and patient care with AI-driven solutions.",
              },
              {
                img: "/Blockchain-Cryptocurrency.avif",
                title: "Blockchain for Trust",
                desc: "Creating transparent, secure, and decentralized solutions.",
              },
              {
                img: "/iotimage.jpg",
                title: "IoT Revolution",
                desc: "Smart cities and connected devices for a sustainable future.",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <Image
                  src={story.img}
                  alt={story.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {story.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FUTURE OF TECH TIMELINE */}
<section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
        The Next Wave of Digital Transformation
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Key milestones that will shape humanity’s next decades of innovation.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gradient-to-b from-blue-500 to-purple-600 transform before:-translate-x-1/2">
      {[
        {
          year: "2025",
          text: "AI-driven automation optimizes industries from healthcare to finance, improving global efficiency.",
        },
        {
          year: "2028",
          text: "6G and hyperconnected smart cities integrate IoT, AR, and real-time data seamlessly.",
        },
        {
          year: "2030",
          text: "Quantum computing revolutionizes research, security, and global data processing power.",
        },
        {
          year: "2035",
          text: "Autonomous transportation networks reshape cities and sustainability goals worldwide.",
        },
        {
          year: "2040",
          text: "Humanity establishes colonies on Mars and asteroid mining begins trillion-dollar ventures.",
        },
        {
          year: "2050",
          text: "Brain-computer interfaces merge humans and AI for augmented intelligence.",
        },
      ].map((event, i) => (
        <motion.div
          key={i}
          className={`mb-12 flex items-center w-full ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        >
          {/* Spacer */}
          <div className="w-1/2"></div>

          {/* Year Marker */}
          <div className="relative flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

          {/* Content */}
          <div className="w-1/2">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 max-w-sm hover:scale-105 transition-transform duration-300 ml-6 mr-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-purple-400 mb-2">{event.year}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{event.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <a
        href="#"
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Explore Future Trends
      </a>
    </div>
  </div>
</section>


     {/* Success Stories - Concise & Professional */}
<section className="bg-gray-50 dark:bg-gray-900 py-24">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
      Success Stories That Inspire
    </h2>
    <p className="text-center text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto">
      Our programs have transformed careers worldwide. Here’s what our achievers say.
    </p>

    {/* Grid of Stories */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          name: "Riya Sharma",
          role: "AI Researcher",
          text: "Viksit Bharat gave me confidence to lead AI projects globally.",
        },
        {
          name: "Arjun Patel",
          role: "Blockchain Developer",
          text: "Tech Bharat opened doors to international blockchain opportunities.",
        },
        {
          name: "Meera Das",
          role: "Entrepreneur",
          text: "My startup scaled globally with guidance from these programs.",
        },
        {
          name: "Siddharth Nair",
          role: "Cloud Architect",
          text: "Hands-on projects transformed my cloud computing approach.",
        },
        {
          name: "Neha Verma",
          role: "Cybersecurity Specialist",
          text: "I advanced into cybersecurity leadership roles with ease.",
        },
        {
          name: "Karan Singh",
          role: "Product Manager",
          text: "Tech Bharat helped me manage AI products for the global market.",
        },
      ].map((person, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base italic">{person.text}</p>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{person.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{person.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      

    
{/* Research & Theories Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Research & Emerging Theories
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Artificial Intelligence", desc: "Exploring AGI & responsible AI ethics." },
              { title: "Quantum Computing", desc: "Harnessing qubits for exponential problem-solving." },
              { title: "Blockchain & Web3", desc: "Trustless networks driving decentralization." },
              { title: "IoT & 6G Networks", desc: "Hyper-connected ecosystems powering smart cities." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 bg-gradient-to-tr from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Latest Research Articles
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-12 text-lg">
          Explore thought-provoking research in Artificial Intelligence, Quantum Computing, Energy Storage, and emerging technologies shaping the future.
        </p>

        <div className="space-y-12">
          {displayedArticles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {article.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {article.desc}
              </p>
              <Link
                href={`/read/${article.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")}`}
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Read Full Article →
              </Link>
              <hr className="mt-6 border-gray-300 dark:border-gray-700" />
            </motion.div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>

      {/* Visionary Quotes by CEO */}
<section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
      Thought Leadership Insights
    </h2>

    <div className="max-w-3xl mx-auto space-y-8">
     <blockquote className="italic text-lg md:text-xl text-gray-800 dark:text-gray-200 relative before:content-['“'] before:text-5xl before:text-blue-400 before:absolute before:-left-6 before:-top-6">
  {"At Prasunet, we believe that innovation today shapes the world of tomorrow. Our mission is to empower businesses with technology that drives growth and sustainability."}
</blockquote>

      <p className="text-gray-600 dark:text-gray-400 font-semibold"> Pramod Prajapat, CEO, Prasunet</p>

    
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
