"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className=" px-6 py-20 bg-[url('/home-gradient-p-1600.png')] bg-cover bg-center bg-no-repeat mt-10">
      <h1 className="text-4xl md:text-9xl font-bold leading-tight">
        Trusted <span className="bg-black text-white px-2">Partner</span> for
        <br />
        Your Website <span className="bg-black text-white px-2">Develop.</span>
      </h1>
      <p className="mt-6 text-xl text-zinc-600 max-w-3xl mx-auto">
        Building the world’s best marketing websites for over a decade.
        <br />
        Your trusted partner for strategy, design, and dev.
      </p>
      <button className=" mt-8 border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white">
        Schedule a Call
      </button>
    </section>
  );
};

export default HeroSection;
