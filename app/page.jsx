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
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
