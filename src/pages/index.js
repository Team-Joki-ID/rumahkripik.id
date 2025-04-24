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

export default function Home() {
  return (
    <div
      className={`min-h-screen p-8 pb-20 gap-16 sm:p-20 font-mono`}
    >
      <section className="">
        <div className="text-xl ">dashboard hero</div>
      </section>
      <section></section>
      <section></section>
    </div>
  );
}
