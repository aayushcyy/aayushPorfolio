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

export default function Contact() {
  return (
    <div className="w-full h-screen font-funnel text-white px-40 pt-32">
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
            <SheetTrigger className="font-funnel text-white bg-[#171717] text-lg px-4 py-2 cursor-pointer rounded-md">
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
      <div className="grid grid-cols-3">
        <div className="flex flex-col text-2xl gap-2">
          <p className="text-[#ffffffc8]">email</p>
          <a href="mailto:aayushcyy@gmail.com">aayushcyy@gmail.com</a>
        </div>
        <div>
          <div className="flex items-center">
            Resume <ArrowDownToLine className="size-4" />
          </div>
        </div>
        <div>
          <Linkedin />
          <Github />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
