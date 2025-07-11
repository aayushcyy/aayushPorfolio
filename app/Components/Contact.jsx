import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowDownToLine,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-start gap-16 pt-28 font-funnel text-white px-40  relative overflow-hidden">
      {/* Heading */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-5">
          <p className="text-5xl">
            Ready to start your next project?
            <br /> I am.
          </p>
          <p className="text-lg font-normal">
            Whether it's a freelance project or a full-time role, I'd love to
            hear from you.
          </p>
        </div>
        {/* Sheet Opener */}
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger className="font-funnel text-white bg-[#2f2f2f] text-lg px-4 py-2 cursor-pointer rounded-md hover:text-black hover:bg-white transition-all duration-300">
              Start Project
            </SheetTrigger>
            <SheetContent className="bg-black text-white font-funnel !w-[700px] !max-w-none  pt-13 pl-10 pr-12">
              <SheetHeader>
                <SheetTitle className="text-white text-3xl font-normal">
                  Request a project
                </SheetTitle>
                <SheetDescription className="text-lg font-light text-white">
                  Tell me briefly about your project! Simply fill out the form
                  or send me an{" "}
                  <a
                    href="mailto:aayushcyy@gmail.com"
                    className="underline text-cyan-200"
                  >
                    email
                  </a>{" "}
                  – I'll get back to you.
                </SheetDescription>
              </SheetHeader>
              <div className="px-5 grid grid-cols-2 gap-x-4 gap-y-5">
                <div className="bg-[#161616] rounded-md px-3 py-2 flex flex-col gap-1">
                  <p className="text-sm font-thin">Name</p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your full name"
                    className="text-base outline-none"
                  />
                </div>
                <div className="bg-[#161616] rounded-md px-3 py-2 flex flex-col gap-1">
                  <p className="text-sm font-thin">Pursue</p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your company"
                    className="text-base outline-none"
                  />
                </div>
                <div className="bg-[#161616] rounded-md px-3 py-2 flex flex-col gap-1">
                  <p className="text-sm font-thin">Email</p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your email address"
                    className="text-base outline-none"
                  />
                </div>
                <div className="bg-[#161616] rounded-md px-3 py-2 flex flex-col gap-1">
                  <p className="text-sm font-thin">Phone</p>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your phone number"
                    className="text-base outline-none"
                  />
                </div>
                <div className="bg-[#161616] rounded-md px-3 py-2 flex flex-col gap-1">
                  <p className="text-sm font-thin">Project Details</p>
                  <textarea
                    rows={4}
                    name="name"
                    id=""
                    placeholder="Briefly describe your project"
                    className="text-base outline-none h-40"
                  />
                </div>
              </div>
              <div className="flex justify-start mt-5 ml-5">
                <div className="bg-white text-black px-4 py-2 font-medium text-lg cursor-pointer rounded-sm">
                  Submit
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <span className="h-[1px] w-full bg-[#ffffff6d]"></span>
      <div className="flex justify-between z-20">
        <div className="flex flex-col text-2xl gap-2">
          <p className="text-[#ffffff80]">email</p>
          <a
            href="mailto:aayushcyy@gmail.com"
            className="hover:text-cyan-500 transition-all duration-250"
          >
            aayushcyy@gmail.com
          </a>
        </div>
        <div>
          <div className="flex items-center">
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
        <div className="flex gap-8">
          <a href="">
            <Linkedin className="hover:text-blue-500 transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a href="">
            <Github className="transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a href="">
            <Twitter className="hover:text-sky-400 transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a href="">
            <Instagram className="hover:text-[#e11d48] transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
        </div>
      </div>
      <p className="uppercase absolute -bottom-32 text-[#ffffff0a] text-[300px] font-medium font-funnel">
        aayush
      </p>
    </div>
  );
}
