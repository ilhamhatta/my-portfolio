"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan path halaman saat ini

  // Fungsi untuk menentukan apakah link sedang aktif
  const isActive = (href: string) => pathname === href;

  return (
    <header
      id="site_header"
      className="fixed w-full lg:py-4 top-0 z-50 bg-[#222222]"
    >
      <div className="flex justify-between items-center px-8 py-4 lg:px-32 ">
        {/* Logo */}
        <div className="text-logo flex items-center">
          <Link href="/">
            <div className="flex items-center">
              {/* Simbol "M" dengan desain lebih modern */}
              <div className="logo-symbol bg-gradient-to-br from-yellow-400 to-yellow-500 text-black w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center font-bold text-lg lg:text-2xl rounded-lg lg:rounded-2xl shadow-lg">
                M
              </div>
              {/* Nama "Ilham Hatta" dengan efek stylish */}
              <div className="logo-text ml-2 text-white font-bold text-lg lg:text-2xl tracking-wide shadow-sm">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-400">
                  Ilham Hatta
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-10 text-white text-base font-semibold">
          <Link
            href="/"
            className={`hover:text-yellow-500 transition ${
              isActive("/") ? "text-yellow-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-yellow-500 transition ${
              isActive("/about") ? "text-yellow-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`hover:text-yellow-500 transition ${
              isActive("/projects") ? "text-yellow-500" : ""
            }`}
          >
            Projects
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu dengan Fade-in Effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#222222] py-4 text-white text-center shadow-lg"
          >
            <Link
              href="/"
              className={`block py-3 hover:text-yellow-500 transition ${
                isActive("/") ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-3 hover:text-yellow-500 transition ${
                isActive("/about") ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`block py-3 hover:text-yellow-500 transition ${
                isActive("/projects") ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
