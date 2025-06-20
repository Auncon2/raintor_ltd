"use client";
import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { title: "HTML & CSS", desc: "Duis aute irure dolor in reprehenderit..." },
    { title: "Javascript", desc: "Duis aute irure dolor in reprehenderit..." },
    { title: "Webflow", desc: "Duis aute irure dolor in reprehenderit..." },
  ];
  return (
    <section className="bg-black text-white px-6 py-20 mx-2 rounded-t-3xl rounded-b-3xl">
      <h2 className="text-3xl font-bold mb-10">My Extensive List of Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-6 rounded-2xl hover:scale-105 transition-transform"
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
