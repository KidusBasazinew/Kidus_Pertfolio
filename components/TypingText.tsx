"use client";
import { motion } from "framer-motion";

const typingAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const letterAnimation = {
  initial: {
    opacity: 0,
    x: -10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface Props {
  text: string;
  className: string;
}

function TypingText({ text, className }: Props) {
  return (
    <motion.h1
      className={`text-2xl font-bold ${className}`}
      variants={typingAnimation}
      initial="initial"
      animate="animate"
    >
      {text.split("").map((letter, index) => (
        <motion.span key={index} variants={letterAnimation}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default TypingText;
