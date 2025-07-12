"use client";

import React, { useState, useEffect } from "react";
import { useInViewOnce } from "../Hooks/useInViewOnce.js";
import { Toggle } from "@/components/ui/toggle";
import { Sparkles, Server, Database, Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiRedux,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const icons = {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiRedux,
  SiFirebase,
  SiMysql,
};

export default function About() {
  const [expOpen, setExpOpen] = useState(false);

  const techSkills = [
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#fff" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "Express", icon: "SiExpress", color: "#fff" },
    { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    { name: "Framer Motion", icon: "SiFramer", color: "#EC5288" },
    { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
    { name: "Firebase", icon: "SiFirebase", color: "#FF9100" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "Redux", icon: "SiRedux", color: "#764ABC" },
  ];
  return (
    <div className="w-full flex justify-center items-center text-white font-funnel md:px-40 px-5 md:py-20 py-10">
      <div className="flex md:flex-row flex-col gap-15 w-full md:justify-between">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white"></span>
            <p className="uppercase">About me</p>
          </div>
        </div>
        <div className="md:w-[65%] h-full flex flex-col items-start gap-4">
          <p className="text-3xl md:font-medium">Crafting Digital Excellence</p>
          <p className="text-lg font-thin">
            I enjoy turning ideas into clean, functional digital experiences -
            bringing both frontend finesse and backend logic to the table.
            Constantly evolving with the latest technologies, I strive to
            deliver cutting-edge solutions.
          </p>
          <p className="text-lg font-thin my-4">
            Here are the tools and technologies I work with:
          </p>
          <div className="flex md:flex-row flex-col md:gap-20 gap-12">
            {/* Skills */}
            <div className="flex flex-wrap gap-x-3 md:gap-y-0 gap-y-1.5 md:w-[90%]">
              {techSkills.map((skill, index) => {
                const IconComponent = icons[skill.icon];
                return (
                  <Toggle
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-[#161616e9] border-[1px] border-[#333333] hover:bg-[#2a2a2a] text-white hover:text-white cursor-pointer"
                  >
                    <IconComponent size={20} color={skill.color} />
                    <span className="text-sm">{skill.name}</span>
                  </Toggle>
                );
              })}
            </div>
            {/* Progress Bars */}
            <div className="w-full flex flex-col gap-7">
              {/* Frontend */}
              <div className="flex flex-col md:gap-4 gap-3">
                <div className="flex justify-between text-xl">
                  <div className="flex items-center gap-3">
                    <Sparkles className="bg-[#2A2A2A] size-9 cursor-pointer px-2 py-2 rounded-lg" />
                    <p className="">Frontend Development</p>
                  </div>
                  <p>95%</p>
                </div>
                <div>
                  <Progress
                    value={93}
                    className="bg-[#494848] [&>div]:bg-white h-3"
                  />
                </div>
              </div>
              {/* Backend */}
              <div className="flex flex-col md:gap-4 gap-3">
                <div className="flex justify-between text-xl">
                  <div className="flex items-center gap-3">
                    <Server className="bg-[#2A2A2A] size-9 cursor-pointer px-2 py-2 rounded-lg" />
                    <p className="">Backend Development</p>
                  </div>
                  <p>90%</p>
                </div>
                <div>
                  <Progress
                    value={90}
                    className="bg-[#494848] [&>div]:bg-white h-3"
                  />
                </div>
              </div>
              {/* Database */}
              <div className="flex flex-col md:gap-4 gap-3">
                <div className="flex justify-between text-xl">
                  <div className="flex items-center gap-3">
                    <Database className="bg-[#2A2A2A] size-9 cursor-pointer px-2 py-2 rounded-lg" />
                    <p className="">Database Management</p>
                  </div>
                  <p>85%</p>
                </div>
                <div>
                  <Progress
                    value={85}
                    className="bg-[#494848] [&>div]:bg-white h-3"
                  />
                </div>
              </div>
              {/* Fullstack */}
              <div className="flex flex-col md:gap-4 gap-3">
                <div className="flex justify-between text-xl">
                  <div className="flex items-center gap-3">
                    <Code className="bg-[#2A2A2A] size-9 cursor-pointer px-2 py-2 rounded-lg" />
                    <p className="">Full Stack Integration</p>
                  </div>
                  <p>92%</p>
                </div>
                <div>
                  <Progress
                    value={92}
                    className="bg-[#494848] [&>div]:bg-white h-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
