"use client";
import SkillList from "@/components/SkilllList";
import { useTheme } from "@/lib/ThemeContext";

const checkMarkIconDark = "/assets/checkmark-dark.svg";
const checkMarkIconLight = "/assets/checkmark-light.svg";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  // Define skill categories
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Node"],
    },
    {
      title: "Frameworks",
      skills: ["React", "Angular", "Vue", "Tailwind CSS"],
    },
    {
      title: "Tools",
      skills: ["Redux", "Webpack", "Git", "Jest", "Bootstrap"],
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 md:px-0 flex flex-col text-center mt-24"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            {category.skills.map((skill, skillIndex) => (
              <SkillList
                index={skillIndex}
                key={`${index}-${skillIndex}`}
                src={checkMarkIcon}
                skill={skill}
              />
            ))}
          </div>
          {index < skillCategories.length - 1 && (
            <hr className="w-24 h-px bg-gray-700 my-8 mx-auto" />
          )}
        </div>
      ))}
    </section>
  );
}

export default Skills;
