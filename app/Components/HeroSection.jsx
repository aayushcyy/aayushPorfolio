import Image from "next/image";
import React from "react";
import profilePic from "../../public/aayush-pp2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full md:h-[100vh] h-screen flex md:justify-center md:items-center text-white font-funnel lg:px-[10.5%] md:px-10 px-5 py-20 md:pt-0">
      <div className="flex md:flex-row flex-col md:gap-0 gap-[5rem] w-full md:justify-between">
        <div className="flex flex-col gap-2 justify-end">
          <div className="flex md:items-start items-end flex-col gap-2 justify-end">
            <div>
              <Image
                src={profilePic}
                alt="Aayush Chaudhary"
                className="md:w-40 w-36 rounded-lg"
              />
            </div>
            <div className="pl-1 md:text-base text-sm">Raipur, India</div>
          </div>
        </div>
        <div className="lg:w-[55%] sm:w-[75%] w-full h-full flex flex-col items-start md:gap-13 gap-5">
          <p className="text-[clamp(1.8rem,3vw,3rem)]">
            Hi, I'm Aayush. <br /> A Full Stack Developer.
          </p>
          <p className="md:text-xl text-lg font-thin md:w-[65%] w-full">
            I'm a passionate web developer and designer crafting fast, scalable,
            and user-friendly web applications. I help you make a lasting
            impression online through clean code and impactful design.
          </p>
          <a
            href="/aayush-chaudhary.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium py-2 px-4 rounded-md text-base cursor-pointer bg-white text-black flex items-center gap-2 md:mt-0 mt-12"
          >
            Resume <ArrowDownToLine className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
