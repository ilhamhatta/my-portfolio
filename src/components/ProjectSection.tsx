"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import projectsData from "../data/projects.json";

const ProjectsSection = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [icons, setIcons] = useState<{ [key: string]: React.ElementType }>({});

  useEffect(() => {
    const loadIcons = async () => {
      const iconMap: { [key: string]: React.ElementType } = {};

      await Promise.all(
        projectsData.flatMap((project) =>
          project.technologies.map(async (tech) => {
            if (!iconMap[tech.icon]) {
              try {
                let iconModule;
                if (tech.icon.startsWith("Fa")) {
                  iconModule = await import("react-icons/fa");
                } else if (tech.icon.startsWith("Si")) {
                  iconModule = await import("react-icons/si");
                } else if (tech.icon.startsWith("Md")) {
                  iconModule = await import("react-icons/md");
                }

                if (iconModule) {
                  iconMap[tech.icon] = iconModule[tech.icon] || null;
                }
              } catch (error) {
                console.error(`Icon ${tech.icon} not found`);
              }
            }
          })
        )
      );

      setIcons(iconMap);
    };

    loadIcons();
  }, []);

  return (
    <section className="min-h-screen bg-[#222222] text-[#d5d5d5] mt-16 lg:mt-28">
      <div className="w-full bg-[#252525] py-8 lg:py-16 px-8 lg:px-32 border-t-2 border-b-2 border-[#333333] flex items-center">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center">
          Projects
          <p className="text-emerald-500"></p>
        </h1>
      </div>

      <div className="max-w-full mx-auto px-8 lg:px-32 py-12 flex flex-col gap-16">
        {projectsData.map((project, index) => (
          <div
            className="flex flex-col lg:flex-row items-center gap-8"
            key={index}
          >
            <div className="relative w-full lg:w-1/2 aspect-[16/9] border-4 border-gray-700 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-yellow-500">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
              <div className="flex gap-4 mt-4 text-xl relative">
                {project.technologies.map((tech, i) => {
                  const Icon = icons[tech.icon];
                  return (
                    Icon && (
                      <div
                        key={i}
                        className="relative flex flex-col items-center cursor-pointer"
                        onClick={() =>
                          setActiveTooltip(
                            activeTooltip === tech.label ? null : tech.label
                          )
                        }
                      >
                        <Icon
                          className={`${tech.color} text-3xl hover:scale-110 transition duration-300`}
                        />

                        {activeTooltip === tech.label && (
                          <div className="absolute top-full mt-2 bg-[#333] text-white text-sm px-3 py-1 rounded-md shadow-lg z-10">
                            {tech.label}
                          </div>
                        )}
                      </div>
                    )
                  );
                })}
              </div>
              <a
                className="mt-6 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
