"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const banners = ["1.jpg", "2.jpg"];  

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-mono snap-y snap-mandatory overflow-y-scroll h-screen">
      <section className="relative snap-start h-screen bg-gray-100 overflow-hidden">
        {/* Background dinamis dengan fade */}
        <div className="absolute inset-0 z-0">
          {banners.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Banner`}
              className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-row justify-between p-5">
          <div className="rounded-2xl">
            <img src="logo.png" alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="flex flex-row gap-5">
            {["Home", "About", "Contact", "Article"].map((label, i) => (
              <a
                key={i}
                href="#"
                className="relative inline-block text-white text-xl group"
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right group-hover:origin-left"></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="snap-start h-screen flex items-center justify-center bg-gray-200">
        <div className="text-xl">Section Kedua</div>
      </section>
      <section className="snap-start h-screen flex items-center justify-center bg-gray-300">
        <div className="text-xl">Section Ketiga</div>
      </section>
    </div>
  );
}
