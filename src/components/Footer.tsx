"use client";

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-[#d5d5d5] py-4">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm md:text-base font-semibold">
          © {new Date().getFullYear()}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
            M Ilham Hatta
          </span>
        </p>

        {/* Social Media */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://github.com/ilhamhatta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-xl md:text-2xl text-white hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/6282293797913"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            className="text-xl md:text-2xl text-white hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://id.linkedin.com/in/m-ilham-hatta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl md:text-2xl text-white hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_ilham.hat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl md:text-2xl text-white hover:text-yellow-500 transition-all duration-300 ease-in-out"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
