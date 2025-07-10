"use client";
import { useState, useEffect } from "react";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import aayushpp from "../../public/aayush-pp2.jpg";

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
    <nav className="z-50 bg-black border-b-[1px] border-[#373636] text-white font-funnel ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="md:text-2xl text-xl md:font-bold flex items-center md:gap-2">
            {/* <div>
              <Image
                src={aayushpp}
                width={600}
                height={600}
                alt=""
                className="w-10"
              />
            </div> */}
            <span className="">Aayush Chaudhary</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.id}>
                <Link
                  href={`/${item.id}`}
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

          {/* Mobile Menu Button */}
          {/* <button
            className="md:hidden p-2 rounded-lg bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground hover:bg-foreground/20 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}
        </div>

        {/* Mobile Navigation */}
        {/* {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl rounded-2xl mb-4 p-6 border border-foreground/10 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? "text-foreground bg-foreground/10 shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )} */}
      </div>
      <div className="md:hidden absolute top-[93vh] bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-lg bg-foreground/10 backdrop-blur-sm border border-foreground/20 text-foreground transition-all duration-300 flex justify-around py-4 font-light items-center text-sm z-50">
        {navItems.map((item) => (
          <div key={item.id}>
            <Link href={`/${item.id}`}>{item.label}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
