import React from "react";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sections/AboutMe/AboutMe";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
