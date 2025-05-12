"use client";
import Button from "@/components/Button";
import HiImage from "@/components/HiImage";
import TypingText from "@/components/TypingText";
import { useTheme } from "@/lib/ThemeContext";
import Image from "next/image";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? "/assets/sun.svg" : "/assets/moon.svg";
  const twitterIcon =
    theme === "light"
      ? "/assets/twitter-light.svg"
      : "/assets/twitter-dark.svg";
  const githubIcon =
    theme === "light" ? "/assets/github-light.svg" : "/assets/github-dark.svg";
  const linkedinIcon =
    theme === "light"
      ? "/assets/linkedin-light.svg"
      : "/assets/linkedin-dark.svg";

  return (
    <section
      id="hero"
      className={
        "flex flex-col justify-center items-center gap-5 text-center py-10 mt-14 min-h-[500px] md:mt-16 md:flex-row-reverse md:items-center md:justify-evenly"
      }
    >
      <div className="relative">
        <Image
          src="/profile-pic.png"
          className="max-w-[200px] md:max-w-[350px] md:w-[350px] lg:max-w-[400px] lg:w-[400px] rounded-full"
          width={200}
          height={200}
          alt="Profile picture of Harris Johnsen"
        />
        <Image
          className="absolute -right-20 top-0 w-7 cursor-pointer sm:-right-10 sm:top-0"
          src={themeIcon}
          width={200}
          height={200}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col gap-5">
        <HiImage src="/hand.png" alt="" />
        <p>Hi i&apos;m</p>
        <TypingText
          text="Kidus Basazinew"
          className="text-4xl leading-tight font-rubik font-bold"
        />
        <h2 className="text-2xl font-medium">Frontend Developer</h2>
        <span className="flex gap-6 justify-center">
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image
              src={twitterIcon}
              alt="Twitter icon"
              className="w-8"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://github.com/kidusbasazinew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={githubIcon}
              alt="Github icon"
              className="w-8"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kidus-basazinew-779914225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedinIcon}
              alt="Linkedin icon"
              className="w-8"
              width={32}
              height={32}
            />
          </a>
        </span>
        <p className="max-w-[24ch] mx-auto text-gray-700">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href="/assets/cv.pdf" download className="mx-auto">
          <Button>Resume</Button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
