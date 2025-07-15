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
    <div className="w-full h-screen md:h-[50vh] lg:h-screen flex flex-col justify-start md:gap-16 gap-12 pt-28 font-funnel text-white lg:px-[10vw] md:px-[4vw] px-5  relative overflow-hidden">
      {/* Heading */}
      <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between">
        <div className="flex flex-col md:gap-5 gap-3">
          <p className="text-[clamp(1.5rem,_2vw_+_1rem,_5rem)] leading-tight">
            Ready to start your next project?
            <br className="md:flex hidden" /> I am.
          </p>
          <p className="text-[clamp(1rem,_1rem_+_0.2vw,_2rem)] font-normal">
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
            <SheetContent className="bg-black text-white font-funnel md:!w-[700px] !w-[90vw] !max-w-none md:pt-13 pt-5 md:pl-10 pl-2 md:pr-12 pb-15 md:overflow-auto overflow-y-auto max-h-[100dvh]">
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

              <form
                action="https://formsubmit.co/aayushcyy@gmail.com"
                method="POST"
              >
                <div className="md:px-5 px-4 grid md:grid-cols-2 gap-x-4 gap-y-5">
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
                  <button
                    className="bg-white text-black px-4 py-2 font-medium text-lg cursor-pointer rounded-sm"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <span className="h-[1px] w-full bg-[#ffffff6d] mt-1 md:mt-0"></span>
      <div className="flex md:flex-row flex-col md:gap-0 gap-13 justify-between z-20">
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
          <a
            href="https://www.linkedin.com/in/aayushcyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-blue-500 transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a
            href="https://github.com/aayushcyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a
            href="https://x.com/aayucyy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="hover:text-sky-400 transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
          <a
            href="https://www.instagram.com/aayushcyy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-[#e11d48] transform transition-transform duration-300 hover:-translate-y-1 size-8" />
          </a>
        </div>
      </div>
      <p className="uppercase absolute lg:-bottom-32 md:-bottom-24 bottom-56 md:left-4 lg:left-36 -left-10 text-[#ffffff11] lg:text-[300px] md:text-[230px] text-[190px] font-medium font-funnel -rotate-90 md:rotate-0">
        aayush
      </p>
    </div>
  );
}
