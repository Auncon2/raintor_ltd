"use client";
import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    {
      title: "HTML & CSS",
      desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Javascript",
      desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    },
    {
      title: "Webflow",
      desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis.",
    },
  ];
  return (
    <section className="bg-black text-white px-6 py-20 mx-2 rounded-t-3xl rounded-b-3xl overflow-visible">
      <div className="flex flex-row justify-between items-center">
        {" "}
        <h2
          className="text-3xl font-bold mb-10"
          style={{ fontFamily: "Sporting Grotesque" }}
        >
          My Extensive List of Skills
        </h2>
        <span className="pb-5  border-b">
          Building the worlds best marketing Your trusted partner for strategy,
          design, and dev.
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-2 bg-[#101010] p-6 rounded-2xl transition-all duration-500 hover:rotate-[3.85deg] overflow-visible"
          >
            <Image
              src="/Group 17.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-sm text-zinc-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
