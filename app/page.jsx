import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div id="home" className="border-b-[1px] border-[#ffffff2a]">
        <HeroSection />
      </div>
      <div id="about" className="border-b-[1px] border-[#ffffff2a]">
        <About />
      </div>
      <div id="experience" className="border-b-[1px] border-[#ffffff2a]">
        <Experience />
      </div>
      <div id="projects" className="border-b-[1px] border-[#ffffff2a]">
        <Projects />
      </div>
      <div id="contact" className="border-b-[1px] border-[#ffffff2a]">
        <Contact />
      </div>
    </div>
  );
}
