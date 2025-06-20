"use client";
import Button from "@/common/Button";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-32 bg-[url('/home-gradient-p-1600.png')] bg-cover bg-center bg-no-repeat mt-11">
      <div className="px-4 md:px-10">
        <h1
          className="text-4xl md:text-9xl font-bold leading-tight"
          style={{ fontFamily: "Sporting Grotesque" }}
        >
          Trusted{" "}
          <span className="bg-black text-white px-3 py-1 rounded-xl">
            Partner
          </span>{" "}
          for
          <br />
          Your Website{" "}
          <span className="bg-black text-white px-3 py-1 rounded-xl">
            Develop.
          </span>
        </h1>
        <div className="flex flex-row justify-center">
          <div className="mt-16 flex flex-col px-2">
            <p className="text-xl text-zinc-600 max-w-3xl text-left">
              Building the world’s best marketing websites for over a decade.
              <br />
              Your trusted partner for strategy, design, and dev.
            </p>

            <div className="mt-6 self-start">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
