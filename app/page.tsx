import React from "react";
import Contact from "@/components/sections/Contact/Contact";
import Hero from "@/components/sections/Hero/Hero";

import Skills from "@/components/sections/Skills/Skills";
import Footer from "@/components/sections/Footer/Footer";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
import Portfolio from "@/components/sections/pertfolio/Pertfolio";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
