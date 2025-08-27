"use client";

import { latestNews } from "@/lib/news";
import { useParams } from "next/navigation";
import Navbar from "@/components/home/header/navbar";
import Footer from "@/components/home/footer-section";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";

interface News {
  title: string;
  slug: string;
  desc: string;
  img: string;
  author: string;
  date: string;
  category: string;
  fullContent: string;
}

export default function NewsDetail() {
  const params = useParams();
  const slug = params.slug as string;

  const newsItem = latestNews.find((item: News) => item.slug === slug);

  if (!newsItem) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
          News not found!
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <img
            src={newsItem.img}
            alt={newsItem.title}
            className="w-full h-96 object-cover rounded-xl mb-8"
          />

          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {newsItem.title}
          </h1>

          <div className="flex items-center text-gray-500 mb-6 space-x-6 text-sm">
            <span className="flex items-center gap-2">
              <FaUser /> {newsItem.author}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt /> {newsItem.date}
            </span>
            <span className="flex items-center gap-2">
              <FaTag /> {newsItem.category}
            </span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {newsItem.fullContent}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
