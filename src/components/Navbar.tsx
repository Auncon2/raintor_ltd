"use client";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full backdrop-blur-xl z-50 flex justify-between items-center px-6 py-6 text-sm ">
      <h1 className="text-lg font-black tracking-tight">DEVLOP.ME</h1>
      <div className="flex items-center gap-7">
        <nav>
          <ul className="hidden md:flex gap-6 text-zinc-700 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Portfolio</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
          </ul>
        </nav>
        <button className="text-xs border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">
          Start Project
        </button>
      </div>
    </header>
  );
};

export default Navbar;
