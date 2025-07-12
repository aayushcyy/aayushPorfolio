import Image from "next/image";
import React from "react";
import profilePic from "../../public/aayush-pp2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full md:h-[100vh] h-screen flex md:justify-center md:items-center text-white font-funnel lg:px-[10.5%] md:px-10 py-20 pt-56 md:pt-0 bg-cyan-600">
      <div className="flex md:flex-row flex-col w-full md:justify-between bg-yellow-900">
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex flex-col gap-2 justify-end">
            <div>
              <Image
                src={profilePic}
                alt="Aayush Chaudhary"
                className="w-40 rounded-lg"
              />
            </div>
            <div className="pl-1">Raipur, India</div>
          </div>
        </div>
        <div className="lg:w-[55%] sm:w-[75%] w-full h-full flex flex-col items-start gap-13">
          <p className="text-[clamp(2rem,3vw,3rem)]">
            Hi, I'm Aayush. <br /> A Full Stack Developer.
          </p>
          <p className="text-xl font-thin md:w-[65%] w-full">
            I'm a passionate web developer and designer crafting fast, scalable,
            and user-friendly web applications. I help you make a lasting
            impression online through clean code and impactful design.
          </p>
          <a
            href="/aayush-chaudhary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium py-2 px-4 rounded-md text-base cursor-pointer bg-white text-black flex items-center gap-2"
          >
            Resume <ArrowDownToLine className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
