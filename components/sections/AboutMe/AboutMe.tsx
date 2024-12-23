"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { CodeXml, Earth, GraduationCap } from "lucide-react";

function AboutMe() {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-cover bg-center"
      // style={{
      //   backgroundImage: "url('/banner.png')", // Replace with your image path
      //   color: "white",
      //   zIndex: "1",
      // }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-48 h-48 rounded-full drop-shadow-11xl shadow-purple-900 overflow-hidden"
          >
            <Image
              src="/profile-pic.png"
              alt="Profile Picture"
              className="object-cover w-full h-full"
              width={192}
              height={192}
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-full"></div>
          </motion.div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-5xl font-semibold mb-4">About Me</h2>
          <p className="text-start text-xl mb-6 leading-relaxed max-w-3xl">
            Hi! I&apos;m Kidus Basazinew, a passionate developer dedicated to
            creating impactful digital solutions. With a background in web
            technologies such as React, Next.js, and Node.js, I enjoy building
            intuitive, responsive, and high-performing web applications that
            deliver seamless user experiences.
          </p>

          <div className="space-y-6 ml-6">
            <div className="flex justify-start">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-xl transition-transform duration-300 flex gap-x-2 justify-center items-center"
              >
                <GraduationCap /> Bachelor in Pre-Engineering - Bahir Dar
                University
              </motion.p>
            </div>
            <div className="flex justify-start">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-xl transition-transform duration-300 flex gap-x-2 justify-center items-center"
              >
                <CodeXml /> Web Development Enthusiast
              </motion.p>
            </div>
            <div className="flex justify-start">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="text-xl transition-transform duration-300 flex gap-x-2 justify-center items-center"
              >
                <Earth /> Passionate About Building Solutions for World
              </motion.p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8 ml-6">
            <motion.a href="#contact" whileHover={{ scale: 1.05 }}>
              <Button>Get in touch</Button>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
