import { ExternalLink } from "lucide-react";
import { IoLogoGithub } from "react-icons/io5";

const myProjects = [
  {
    id: 1,
    title: "Student Study Manager",
    description: "Student Organizer to plan courses, mentor sessions, and homework assignments.",
    image: "./projects/fullstackProjects1.jpg",
    tags: ["Fullstack"],
    demoURL: "https://client-finalproject-ew1x.onrender.com/",
    githubURL: "https://github.com/tianna-spears/finalProject",
  }, 
    {
    id: 2,
    title: "Pollen Tracker",
    description: "App that takes the inputted or geolocated user location to display the severity, health risks, and health recommendations.",
    image: "./projects/fullstackProjects2.png",
    tags: ["Fullstack"],
    demoURL: "https://pollenwebapp.vercel.app/",
    githubURL: "https://github.com/tianna-spears/pollenwebapp",
  },
    {
    id: 3,
    title: "BookStore Project",
    description: "App that allows users to create, delete, edit, and show books by title and id.",
    image: "./projects/fullstackProjects3.png",
    tags: ["Fullstack"],
    // demoURL: "https://tianna-spears.github.io/bookstoreProject/",
    githubURL: "https://github.com/tianna-spears/bookstoreProject",
  },
  {
    id: 4,
    title: "NASA Astronomy Photo of the Day",
    description: "Web app that uses NASA's API to display a photo and description of the Astronomy Photo of the Day. ",
    image: "./projects/frontendProjects1.png",
    tags: ["Frontend"],
    demoURL: "https://tianna-spears.github.io/NASAapod/",
    githubURL: "https://github.com/tianna-spears/NASAapod",
  }, 
      {
    id: 5,
    title: "Fitness App",
    description: "Fitness App Tracker allows users to curate workout, muscle groups to target, and objective. Users can track repetitions and workout activity.",
    image: "./projects/frontendProjects2.png",
    tags: ["Frontend"],
    demoURL: "https://tianna-spears.github.io/fitnessapp/",
    githubURL: "https://github.com/tianna-spears/fitnessapp",
  },
    {
    id: 6,
    title: "Frontend Developer Portfolio",
    description: "Final project for Intro to Programming Course at Code the Dream.",
    image: "./projects/frontendProjects4.png",
    tags: ["Frontend"],
    demoURL: "https://tianna-spears.github.io/zeroToHero1/",
    githubURL: "https://github.com/tianna-spears/zeroToHero1",
  },
      {
    id: 7,
    title: "Todo App",
    description: "Todo app to track lists and todo items",
    image: "./projects/frontendProjects3.png",
    tags: ["Frontend"],
    demoURL: "https://tianna-spears.github.io/portfolio/",
    githubURL: "https://github.com/tianna-spears/portfolio",
  },

]

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto max-w-5xl py-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              Featured <span className="text-primary"> Projects </span></h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <IoLogoGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        </section>
  );
};