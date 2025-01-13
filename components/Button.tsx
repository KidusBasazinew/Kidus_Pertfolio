"use client";
import { useTheme } from "@/lib/ThemeContext";
import React, { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <button
      className={`${
        theme === "light"
          ? "bg-purple-600 text-white"
          : "bg-white text-slate-900"
      } font-bold py-3 px-6 rounded-lg shadow-md hover:scale-105 active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      {children}
    </button>
  );
};

export default Button;
