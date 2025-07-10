import Image from "next/image";
import React from "react";
import profilePic from "../../public/aayush-pp2.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full md:h-[85vh] flex justify-center items-center text-white font-funnel px-40">
      <div className="md:flex w-full md:justify-between">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white"></span>
            <p className="uppercase">About me</p>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <div>
              <Image
                src={profilePic}
                width={600}
                height={600}
                alt="Aayush Chaudhary"
                className="w-40 rounded-lg"
              />
            </div>
            <div className="pl-1">Raipur, India</div>
          </div>
        </div>
        <div className="w-[55%] h-full flex flex-col items-start gap-13">
          <p className="text-5xl ">
            Hi, I'm Aayush. <br /> A Full Stack Developer.
          </p>
          <p className="text-xl font-thin w-[65%]">
            I'm a passionate web developer and designer crafting fast, scalable,
            and user-friendly web applications. I help you make a lasting
            impression online through clean code and impactful design.
          </p>
          <Button variant="outline" className="text-black cursor-pointer">
            Download Resume <ArrowDownToLine />
          </Button>
        </div>
      </div>
    </div>
  );
}
