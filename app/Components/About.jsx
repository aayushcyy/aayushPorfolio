"use client";

import React, { useState } from "react";
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
    <div className="w-full md:h-[85vh] flex justify-center items-center text-white font-funnel px-40">
      <div className="md:flex w-full md:justify-between">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white"></span>
            <p className="uppercase">About me</p>
          </div>
        </div>
        <div className="w-[65%] h-full flex flex-col items-start gap-4">
          <p className="text-3xl font-medium">Crafting Digital Excellence</p>
          <p className="text-lg font-thin">
            I enjoy turning ideas into clean, functional digital experiences -
            bringing both frontend finesse and backend logic to the table.
            Constantly evolving with the latest technologies, I strive to
            deliver cutting-edge solutions.
          </p>
          <p className="text-lg font-thin mt-3">
            Here are the tools and technologies I work with:
          </p>
          <div className="flex flex-wrap gap-2">
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
          <div className="w-full flex flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex">
                  <Sparkles />
                  <p>Frontend Development</p>
                </div>
                <p>95%</p>
              </div>
              <div>
                <Progress
                  value={93}
                  className="bg-[#494848] [&>div]:bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
