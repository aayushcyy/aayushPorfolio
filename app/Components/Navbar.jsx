"use client";
import { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <nav className="z-50 backdrop-blur-lg border-white/10 border-b-[1px]  text-white font-funnel fixed w-full lg:px-[10.5%] px-5">
        <div>
          <div className="flex justify-between w-full items-center md:py-2 py-1.5">
            {/* Logo */}
            <div className="md:text-2xl text-xl md:font-bold flex items-center md:gap-2">
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
            <div className="hidden md:flex space-x-8 justify-end items-center gap-1 cursor-pointer hover:text-cyan-400 transition-all duration-300 ease-in-out">
              Resume <ArrowDownToLine className="size-4" />
            </div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="flex md:hidden"
            >
              <a
                href="/aayush-chaudhary.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex md:hidden space-x-8 items-center gap-1 cursor-pointer"
              >
                <ArrowDownToLine className="size-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] rounded-full bg-foreground/30 backdrop-blur-sm transition-all duration-300 flex justify-around py-4  items-center text-sm z-50 text-white border-[1px] border-[#ffffff2c]"
      >
        {navItems.map((item) => (
          <div key={item.id}>
            <Link href={`#${item.id}`}>{item.label}</Link>
          </div>
        ))}
      </motion.div>
    </>
  );
}
