"use client";

import { useRouter } from "next/navigation";

const RegisterSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/reg.jpg')" }} // Background stays sharp
    >
      {/* Stylish Light Box (no overlay behind) */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl shadow-xl p-10 max-w-xl text-center text-gray-800">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide text-blue-800">
          Grow Your Business With Us
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Join <span className="font-semibold text-blue-700">Prasunet</span> and unlock 
          opportunities to scale your business, connect with clients, 
          and be part of a thriving community.
        </p>
        <button
          onClick={() => router.push("/business")}
          className="px-8 py-3 text-lg font-semibold rounded-full shadow-md 
                     bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
                     text-white hover:scale-105 hover:shadow-blue-300/50 transition-transform duration-300"
        >
          Register Here
        </button>
      </div>
    </section>
  );
};

export default RegisterSection;
