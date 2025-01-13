// "use client";
// import SkillList from "@/components/SkilllList";
// import { useTheme } from "@/lib/ThemeContext";

import { skill } from "@/app/assets";
import { AppText, workDetail, skillsList } from "@/constants/Constants";
import Image from "next/image";

// const checkMarkIconDark = "/assets/checkmark-dark.svg";
// const checkMarkIconLight = "/assets/checkmark-light.svg";

// function Skills() {
//   const { theme } = useTheme();
//   const checkMarkIcon =
//     theme === "light" ? checkMarkIconLight : checkMarkIconDark;

//   // Define skill categories
//   const skillCategories = [
//     {
//       title: "Frontend",
//       skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Node"],
//     },
//     {
//       title: "Frameworks",
//       skills: ["React", "Angular", "Vue", "Tailwind CSS"],
//     },
//     {
//       title: "Tools",
//       skills: ["Redux", "Webpack", "Git", "Jest", "Bootstrap"],
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="px-4 md:px-0 flex flex-col text-center mt-24"
//     >
//       <h1 className="text-4xl font-bold mb-8">Skills</h1>
//       {skillCategories.map((category, index) => (
//         <div key={index} className="mb-8">
//           <div className="flex flex-wrap justify-center gap-8">
//             {category.skills.map((skill, skillIndex) => (
//               <SkillList
//                 index={skillIndex}
//                 key={`${index}-${skillIndex}`}
//                 src={checkMarkIcon}
//                 skill={skill}
//               />
//             ))}
//           </div>
//           {index < skillCategories.length - 1 && (
//             <hr className="w-24 h-px bg-gray-700 my-8 mx-auto" />
//           )}
//         </div>
//       ))}
//     </section>
//   );
// }

// import "./../assets";
// import { skill } from './../assets'
// import "./../Constants";

const Skills = () => {
  return (
    <div className="mt-10" id="skills">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={skill}
          className="w-[70px] hover:animate-bounce "
          alt=""
          width={70}
          height={70}
        />
        <h1 className="text-[40px] font-bold">
          {AppText.Skills}
          <span className="text-purple-600">{AppText.Experties}</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row  justify-evenly px-8 md:px-0 mt-8 ">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8  items-center">
          {skillsList.map((item) => (
            <div
              key={item.id}
              className="w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-50
                 p-3 rounded-full"
            >
              <Image
                src={item.icon}
                className="w-[60px]"
                width={600}
                height={600}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex mt-5 flex-col justify-end  md:mt-0 lg:mt-0">
          {workDetail.map((item) => (
            <div key={item.id} className="flex flex-row mb-6">
              <div className="mr-10 font-bold">
                <h2>{item.year}</h2>
              </div>
              <div>
                <h3 className="font-bold w-full">{item.position}</h3>
                <h3 className="font-thin text-[15px] text-gray-400">
                  {item.companyName}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
