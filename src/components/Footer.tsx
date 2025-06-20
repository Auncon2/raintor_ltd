"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 text-sm">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lime-400 font-black">DEVLOP.ME</h3>
          <p className="mt-2">© devlop.me 2022</p>
        </div>
        <div>
          <h4 className="font-semibold">Say hello</h4>
          <p className="mt-1">HELLO@DEVLOP.ME.COM</p>
          <p>MAHBUBUL@ME.COM</p>
        </div>
        <div>
          <h4 className="font-semibold">Call</h4>
          <p className="mt-1">+784549 4881 00</p>
          <p>+8845 0100 211</p>
        </div>
        <div>
          <h4 className="font-semibold">Social</h4>
          <p className="mt-1">TWITTER</p>
          <p>INSTAGRAM</p>
          <p>FACEBOOK</p>
          <p>BEHANCE</p>
          <p>DRIBBBLE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
