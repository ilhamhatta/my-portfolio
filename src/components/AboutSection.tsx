"use client";

import React, { useState, useEffect } from "react";
import {
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiLaravel, SiMysql, SiBootstrap, SiFigma } from "react-icons/si";

const AboutSection = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Fungsi untuk menangani klik ikon
  const handleIconClick = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName); // Jika sama, hilangkan tooltip
  };

  // Fungsi untuk menutup tooltip saat klik di luar ikon
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".skill-icon")) {
        setActiveSkill(null); // Hilangkan tooltip jika klik di luar ikon
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#222222] text-[#d5d5d5] mt-16 lg:mt-28">
      {/* Wrapper full kiri-kanan */}
      <div className="w-full bg-[#252525] py-8 lg:py-16 px-8 lg:px-32 border-t-2 border-b-2 border-[#333333] flex items-center">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center">
          About
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-8 lg:px-32 py-12 flex flex-col lg:flex-row gap-20">
        {/* Kiri: Get to Know Me */}
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold text-yellow-500">
            Introduction
          </h3>
          <p className="mt-4 text-base lg:text-lg">
            I am a{" "}
            <strong className="text-yellow-500">
              Full-Stack Web Developer
            </strong>{" "}
            dedicated to creating innovative web solutions. With expertise in
            both front-end and back-end development, I am capable of designing,
            building, and managing efficient and user-friendly web applications.
            As technology rapidly advances, I am committed to staying current
            with the latest trends and continuously enhancing my skills in web
            development. Check out some of my work in the{" "}
            <strong className="text-yellow-500">Projects</strong> section.
          </p>
          <a
            href="/projects"
            className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Let&apos;s Continue To Projects
          </a>
        </div>

        {/* Kanan: My Skills */}
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold text-yellow-500">My Skills</h3>
          <div className="mt-6 grid grid-cols-4 md:grid-cols-5 gap-6 text-5xl">
            {[
              { icon: FaPhp, name: "PHP", color: "text-indigo-500" },
              { icon: SiLaravel, name: "Laravel", color: "text-red-600" },
              { icon: FaJs, name: "JavaScript", color: "text-yellow-400" },
              { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
              {
                icon: SiBootstrap,
                name: "Bootstrap",
                color: "text-purple-500",
              },
              { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
              { icon: SiMysql, name: "MySQL", color: "text-blue-500" },
              { icon: SiFigma, name: "Figma", color: "text-pink-500" },
              { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
              { icon: FaGithub, name: "GitHub", color: "text-gray-400" },
            ].map(({ icon: Icon, name, color }, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Ikon */}
                <Icon
                  className={`${color} hover:scale-110 transition duration-300 cursor-pointer skill-icon`}
                  onClick={() => handleIconClick(name)}
                />

                {/* Tooltip yang muncul saat diklik */}
                {activeSkill === name && (
                  <div className="absolute top-full mt-2 bg-[#333] text-white text-sm px-3 py-1 rounded-md shadow-lg z-10">
                    {name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
