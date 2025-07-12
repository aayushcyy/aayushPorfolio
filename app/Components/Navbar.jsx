"use client";
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="z-50 bg-black/10 backdrop-blur-lg border-white/10 border-b-[1px]  text-white font-funnel fixed w-full lg:px-[10.5%] px-5">
        <div className="">
          <div className="flex justify-between items-center md:py-2 py-1">
            {/* Logo */}
            <div className="md:text-2xl text-lg md:font-bold flex items-center md:gap-2">
              <Link href={`#home`} className="">
                Aayush Chaudhary
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <div key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="hover:text-cyan-400 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="hidden md:flex space-x-8 items-center gap-1 cursor-pointer hover:text-cyan-400 transition-all duration-300 ease-in-out">
              Resume <ArrowDownToLine className="size-4" />
            </div>
            <div className="flex md:hidden space-x-8 items-center gap-1 cursor-pointer">
              <ArrowDownToLine className="size-4" />
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] rounded-lg bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground transition-all duration-300 flex justify-around py-4 font-light items-center text-sm z-50 text-white">
        {navItems.map((item) => (
          <div key={item.id}>
            <Link href={`/${item.id}`}>{item.label}</Link>
          </div>
        ))}
      </div> */}
    </>
  );
}
