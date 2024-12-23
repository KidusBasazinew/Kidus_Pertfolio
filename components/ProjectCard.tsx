"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  link: string;
  h3: string;
  p: string;
  index: number;
}

const popAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6 * index,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
function ProjectCard({ src, link, h3, p, index }: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="hover:scale-105 transition-all relative"
      variants={popAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
      <Image
        className="bg-white rounded-lg shadow-md shadow-slate-300"
        src={src}
        alt={`${h3} logo`}
        width={200}
        height={200}
      />
      <h3 className="mt-2 text-xl font-semibold">{h3}</h3>
      <p className="text-sm text-gray-600">{p}</p>
    </motion.a>
  );
}

export default ProjectCard;
