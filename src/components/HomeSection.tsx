"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import ikon sosial media

const HomeSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-12 lg:px-24 bg-[#222222] text-[#d5d5d5]">
      {/* Bagian Teks */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-lg md:text-2xl text-gray-400">Hi, I am</p>
        <h1 className="text-2xl md:text-5xl font-semibold mb-1">
          M Ilham Hatta
        </h1>

        <p className="text-lg md:text-2xl text-yellow-500 font-semibold mb-2">
          <Typewriter
            words={[
              "Web Developer",
              "Front-end Developer",
              "Back-end Developer",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </p>

        <p className="text-sm md:text-lg mb-6">
          As a Web Developer with expertise in front-end and back-end
          development, I create responsive, efficient, and user-friendly web
          applications.
        </p>

        {/* <div className="flex flex-row items-center justify-center gap-4 mt-4"> */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <a
            href="/curriculum-vitae-m-ilham-hatta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-gray-900 px-6 py-3 h-12 flex items-center justify-center rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Download CV
          </a>

          <a
            href="/about"
            rel="noopener noreferrer"
            className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 h-12 flex items-center justify-center rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
          >
            See More About Me
          </a>
        </div>

        {/* Ikon Sosial Media */}
        <div className="mt-8 flex md:space-x-8 space-x-6 justify-center md:justify-start">
          <a
            href="https://github.com/ilhamhatta" // Ganti dengan username GitHub Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            <FaGithub className="text-3xl sm:text-2xl" />
          </a>
          <a
            href="https://wa.me/6282293797913" // Ganti dengan nomor WhatsApp Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            <FaWhatsapp className="text-3xl sm:text-2xl" />
          </a>
          <a
            href="https://id.linkedin.com/in/m-ilham-hatta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            <FaLinkedin className="text-3xl sm:text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/_ilham.hat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400 transition"
          >
            <FaInstagram className="text-3xl sm:text-2xl" />
          </a>
        </div>
      </div>

      {/* Bagian Foto */}
      <div className="col-sm-12 col-md-6 col-lg-6 flex justify-center items-center mt-20 mb-6 md:mt-10">
        <div className="home-photo relative">
          {/* Foto */}
          <div
            className="hp-inner w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full
                 border-[18px] border-[#444] shadow-[0px_0px_18px_rgba(0,0,0,0.8)]"
            style={{
              backgroundImage: "url('/profile.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
