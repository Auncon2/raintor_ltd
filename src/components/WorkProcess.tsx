"use client";
import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery",
      content:
        "We start every new client interaction with an in-depth discovery call...",
    },
    {
      title: "Strategy",
      content:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy...",
    },
    {
      title: "Design",
      content:
        "After we have a clear understanding of your brand, we’re ready to move onto design...",
    },
  ];
  return (
    <section className="px-6 py-20 bg-black text-white">
      <h2 className="text-3xl font-bold mb-10">My Work Process</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-400">{step.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
