"use client";
import React from "react";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* ...other sections... */}
<section
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/it_excllence.jpg')" }} // update with your image path
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 py-16 w-full">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-snug">
      Driving IT Excellence
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {[
        {
          title: "Agility in Execution",
          desc: "We adapt quickly to evolving business needs with cutting-edge technology and methodologies.",
        },
        {
          title: "Client-Centric Approach",
          desc: "Our success is measured by client satisfaction and long-term partnerships.",
        },
        {
          title: "End-to-End Services",
          desc: "From strategy to implementation, we cover the entire IT lifecycle.",
        },
      ].map((card, idx) => (
        <div
          key={idx}
          className="bg-white bg-opacity-90 rounded-xl shadow p-6 hover:shadow-xl transition text-gray-900"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-700 text-sm sm:text-base">{card.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
            Our Proven IT Solutions
          </h2>
          <div className="space-y-20">
            {[
              {
                title: "Project Solutions Delivered",
                img: "/projectsolution.jpg",
                desc: "From startups to Fortune 500 companies, our solutions span industries and technologies, ensuring scalability, performance, and measurable impact.",
                bullets: [
                  "Successfully delivered 300+ projects",
                  "Agile methodology for faster execution",
                  "Client-first mindset with measurable results",
                ],
              },
              {
                title: "24/7 Global Operations Support",
                img: "/24_7_global_support.jpg",
                desc: "Our dedicated teams monitor, maintain, and optimize systems proactively, reducing downtime and maximizing productivity.",
                bullets: [
                  "Round-the-clock monitoring",
                  "Agile response mechanisms",
                  "Proactive system optimization",
                ],
              },
            ].map((cs, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Circle */}
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg relative">
                    <Image
                      src={cs.img}
                      alt={cs.title}
                      fill
                      className="object-cover"
                      priority={true}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                    {cs.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{cs.desc}</p>
                  <div className="space-y-3">
                    {cs.bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 text-sm">{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 <section className="relative w-full h-screen flex items-center justify-center text-white">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-contain bg-black"
  >
    <source src="/servicesvideo/globetech.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl text-center px-6">
    <h3 className="text-4xl md:text-5xl font-bold mb-4">
      Global Presence <span className="text-blue-400">(65+ countries)</span>
    </h3>
    <p className="text-lg md:text-xl mb-6">
      Our global footprint ensures local expertise, seamless collaboration, and faster project delivery. 
      From AI-powered platforms to enterprise solutions, we empower businesses worldwide to achieve 
      growth, efficiency, and digital transformation.
    </p>
    <p className="text-base text-gray-200">
      With strategically located hubs, a network of skilled professionals, and cutting-edge technology, 
      Prasunet connects innovation with impact—no matter where your business is.
    </p>
  </div>
</section>

      {/* ...rest of your code */}
    </div>
  );
};

export default ServicesPage;
