import { laptop } from "@/app/assets";
import { AppText, aboutSection } from "@/constants/Constants";
import Image from "next/image";

// export default AboutMe;
const AboutMe = () => {
  return (
    <div id="about" className="mt-20">
      <div className="relative w-full">
        {/* Add a purple background under the wave image */}
        <div className="absolute top-0 left-0 w-full h-auto  z-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="shape-fill"
            style={{
              fill: "var(--svg-fill-color, #FFFFFF)",
            }}
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      <div className="w-full bg-purple-600 h-[300px]  justify-center items-center">
        <div className="flex flex-row justify-between absolute">
          <Image
            src={laptop}
            className="w-[150px] md:w-[300px] mt-[-100px] "
            width={150}
            height={150}
            alt=""
          />
        </div>
        <h1 className="text-white text-[50px] pt-[20px] font-bold text-center">
          About <span className="text-black">Me</span>
        </h1>
        <h1 className="w-full text-sm md:text-lg px-10 md:px-48 lg:px-80 mt-[10px] text-white !z-50">
          {AppText.aboutMeDescripion}{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-[-75px] md:px-32 ">
        {aboutSection.map((item, index) => (
          <div
            key={index}
            className="flex  relative w-full items-center justify-center flex-col m-2
                group md:hover:bg-purple-600 rounded-lg py-2"
          >
            <img
              src={item.image}
              className="w-[230px] rounded-lg h-[170px] object-cover"
            />
            <h1 className="font-bold md:group-hover:text-white">
              {item.title}
            </h1>
            <h1 className="text-[12px] md:group-hover:text-gray-200 text-gray-500 px-7">
              {item.desc}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutMe;
