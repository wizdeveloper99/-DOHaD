"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutDOHaD() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center px-6 py-16 md:py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          <span className="text-green-700">What is</span>{" "}
          <span className="text-black">   DOHaD?</span>
          <br />
          Anytime & Anywhere
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Revolutionize your video calls and project management using powerful
          tools designed to enhance collaboration and enrich your interactions
          every time.
        </p>
      </div>

      {/* Input Field */}
      <div className="mt-8 flex w-full max-w-md bg-green-50 rounded-full p-1 shadow-sm">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-transparent outline-none px-4 py-3 text-gray-700"
        />
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
          Get Started
        </button>
      </div>

      {/* Image / Video Section */}
      <div className="relative mt-12 w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden">
        <Image
           src="/mother-baby-daughter-having-fun.png"
          alt="Video Call UI"
          width={1200}
          height={700}
          className="w-full object-cover rounded-2xl"
        />

        {/* Overlay Text Example (Jay Presenting) */}
        <div className="absolute top-3 left-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow">
          Jay Presenting
        </div>
      </div>
    </section>
  );
}
