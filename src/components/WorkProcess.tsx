"use client";
import React from "react";

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery",
      content:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      title: "Strategy",
      content:
        "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
    },
    {
      title: "Design",
      content:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "Build",
      content:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project...",
    },
  ];
  return (
    <section className="px-6 py-20 bg-[#141414] mx-2 rounded-t-3xl rounded-b-3xl text-white">
      <h2
        className="text-center  font-bold text-[58px] leading-[86px] tracking-tightest mb-10"
        style={{ fontFamily: "Sporting Grotesque" }}
      >
        My Work Process
      </h2>
      <div className="grid md:grid-cols-2 gap-1.5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-black p-6 rounded-xl  transition-all duration-500 hover:rotate-[3.85deg] hover:bg-[#c5ff43] hover:text-black origin-center group"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-semibold mb-2 px-7 py-1 rounded-full bg-[#bffeeb] text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                {step.title}
              </h3>
              <span className="text-xs underline">Read More</span>
            </div>

            <p className="text-sm text-zinc-400 group-hover:text-black transition-all duration-500">
              {step.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
