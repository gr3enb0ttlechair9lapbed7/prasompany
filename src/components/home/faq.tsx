"use client";

import React, { useState } from "react";

const faqData = [
{
  question: "What services does Prasunet offer globally?",
  answer:
    "Prasunet offers IT consulting, software development, cloud integration, cybersecurity, and digital transformation services. We help global clients build secure, scalable, and innovative technology solutions effectively."
},
{
  question: "Does Prasunet support startups and small businesses?",
  answer:
    "Yes, Prasunet supports startups and small businesses with product development, branding, and IT solutions. We provide affordable, scalable, and innovative technology support to accelerate sustainable growth."
},
{
  question: "What makes Prasunet different from other IT companies?",
  answer:
    "Prasunet focuses on client-centric innovation, combining consulting with technology expertise. Our tailored solutions drive measurable impact, competitive advantage, and long-term success across industries worldwide with efficiency."
},
{
  question: "Does Prasunet provide cloud and DevOps solutions?",
  answer:
    "Yes, Prasunet delivers cloud computing and DevOps services, including migration, automation, and CI/CD. We improve scalability, reduce costs, and enhance system performance for digital success."
}


];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
};


  return (
    <div className="bg-white py-16 flex justify-center px-4 md:px-0">
      <div className="max-w-4xl w-full p-8 rounded-xl shadow-2xl bg-gradient-to-b from-[#cbe6ff] to-[#e0f2ff]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 cursor-pointer transition-all duration-300 bg-white shadow-md"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-600">{faq.question}</h3>
                <span
                  className={`text-xl font-bold transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ⌄
                </span>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
