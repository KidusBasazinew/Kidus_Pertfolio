import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "Viberr",
    imgSrc: "/assets/viberr.png",
    link: "https://github.com/Ade-mir/company-landing-page-2",
    description: "Streaming App",
  },
  {
    name: "Fresh Burger",
    imgSrc: "/assets/fresh-burger.png",
    link: "https://github.com/Ade-mir/company-landing-page-2",
    description: "Hamburger Restaurant",
  },
  {
    name: "Hipsster",
    imgSrc: "/assets/hipsster.png",
    link: "https://github.com/Ade-mir/company-landing-page-2",
    description: "Glasses Shop",
  },
  {
    name: "FitLift",
    imgSrc: "/assets/fitlift.png",
    link: "https://github.com/Ade-mir/company-landing-page-2",
    description: "Fitness App",
  },
];

function Projects() {
  return (
    <section id="projects" className="flex flex-col text-center mt-24">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-evenly md:px-8">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.name}
            src={project.imgSrc}
            link={project.link}
            h3={project.name}
            p={project.description}
          />
        ))}
      </div>
      <div className="w-full mx-auto mt-10">
        <Button>See more...</Button>
      </div>
    </section>
  );
}

export default Projects;
