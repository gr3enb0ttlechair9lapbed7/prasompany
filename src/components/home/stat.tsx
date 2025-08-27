"use client";
import React from "react";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      {/* ...other sections... */}

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

      {/* ...rest of your code */}
    </div>
  );
};

export default ServicesPage;
