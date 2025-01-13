"use client";
import React from "react";
import { CircleChevronRight } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`${
        theme === "light"
          ? "shadow-slate-200 bg-white"
          : "shadow-[#151a22] bg-[#1d232a]"
      } shadow-lg fixed top-0 left-0 right-0 z-[1000]`}
    >
      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-80 p-2 shadow "
              >
                <li>
                  <a className="py-4" href="#about">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="py-4" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="py-4" href="#pertfolio">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Kidus bw</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <li>
                <a className="text-md" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a className="text-md" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-md" href="#pertfolio">
                  Pertfolio
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a
              className="rounded-full px-6 py-2 border flex gap-x-2 hover:border-blue-300 hover:text-blue-300"
              href="#contact"
            >
              Contact <CircleChevronRight />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
