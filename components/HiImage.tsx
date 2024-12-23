"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const waveAnimation = {
  initial: {
    rotateZ: 0,
  },
  animate: {
    rotateZ: [0, -10, -30, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

interface HandWaveProps {
  src: string;
  alt: string;
}

function HandWave({ src, alt }: HandWaveProps) {
  return (
    <motion.div
      className="flex justify-center items-center"
      variants={waveAnimation}
      initial="initial"
      animate="animate"
      style={{
        transformOrigin: "bottom center",
      }}
    >
      <Image
        className="w-24 h-24 rotate-45"
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </motion.div>
  );
}

export default HandWave;
