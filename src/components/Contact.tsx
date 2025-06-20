"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="px-6 py-20 text-center bg-[url('/Vector.png')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-3xl font-bold mb-6">Interested in work together?</h2>
      <p className="mb-6 text-sm max-w-xl mx-auto text-zinc-600">
        We start every new client interaction with an in-depth discovery call
        where we get to know each other.
      </p>
      <button className="border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white">
        Schedule a Call
      </button>
    </section>
  );
};

export default Contact;
