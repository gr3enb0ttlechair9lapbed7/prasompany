"use client";

import CareerSection from "@/components/home/careerS";
import ClientSection from "@/components/home/client";
import ContactForm from "@/components/home/Cont";
import Footer from "@/components/home/footer-section";
import Navbar from "@/components/home/header/navbar";
import HeroSection from "@/components/home/hero-section";
import InternshipSection from "@/components/home/Intern";
import FAQ from "@/components/home/faq";
import Project from "@/components/home/project";
import RegisterSection from "@/components/home/register";
import Services from "@/components/home/Services";
import Stats from "@/components/home/stat";
import Testimonials from "@/components/home/testimonail";
import Industries from "@/components/home/Industries";
import Image from "next/image"; 
import { useState } from "react";
import Link from "next/link";
import Script from "next/script"; // ✅ Import Script

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return ( 
    <div>
      {/* ✅ Google AdSense script (safe for client components) */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9096209867795576"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      

      <Navbar />
      <HeroSection />

      {/* Example: Place an Ad Unit */}
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-9096209867795576"
          data-ad-slot="1234567890"  // ⚠️ replace with your Ad Unit slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
      <Script id="ads-init" strategy="afterInteractive">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>

      {/* Your sections */}
      <section 
        className={`relative w-full py-16 flex flex-col md:flex-row items-center justify-center gap-10 px-6 transition-all duration-500 ${
          isHovered ? "bg-green-50" : "bg-white"
        }`}
      >
        {/* ... existing code */}
      </section>

      <Services />
      <Stats />
      <Project />
      <InternshipSection />
      <Testimonials />
      <CareerSection />
      <Industries />
      <ClientSection />
      <RegisterSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
