import { Briefcase, Database, Code, ArrowDown } from "lucide-react";

export const AboutMe = () => {
  const frontendSkills = [
    "React",
    "Typescript",
    "HTML",
    "JavaScript",
    "CSS",
    "Tailwind CSS",
    "Material UI",
  ];
  const backendSkills = ["Node", "Express", "Next.js", "MongoDB", "Deployment (Vercel, Netlify, MongoDB Atlas)"];
  const toolsSkills = ["Git", "GitHub","Figma", "Visual Studio Code" ];


  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-5">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary"> Me </span>
          </h2>

          {/* Intro Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible, and beautiful web applications
              using modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>
              <a
                target="_blank"
                href="src/assets/Tianna Spears- Resume copy.pdf"
                className="px-6 py-2 rounded-full border border-primary bg-white text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume/ CV
              </a>
            </div>
          </div>

      {/* Skills & Tools Grid */}
      <div id="skills" className="mt-16 pt-20 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skill<span className="text-primary">set</span>
          </h2> </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Frontend Skills */}
        <div className="gradient-border lg:p-8 card-hover flex flex-col items-center text-center h-full">
          <div className="p-4 rounded-full bg-primary/10 lg:mb-4">
            <Code className="h-8 lg:h-10 w-8 lg:w-10 text-primary" />
          </div>
          <p className="font-semibold lg:mb-6 text-lg lg:text-xl">
            Frontend Skills
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-left inline-block space-y-1 lg:space-y-2">
            {frontendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="gradient-border p-6 lg:p-8 card-hover flex flex-col items-center text-center h-full">
          <div className="p-4 rounded-full bg-primary/10 mb-3 lg:mb-4">
            <Database className="h-8 lg:h-10 w-8 lg:w-10 text-primary" />
          </div>
          <p className="font-semibold mb-4 lg:mb-6 text-lg lg:text-xl">
            Backend Skills
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-left inline-block space-y-1 lg:space-y-2">
            {backendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="gradient-border p-6 lg:p-8 card-hover flex flex-col items-center text-center h-full">
          <div className="p-4 rounded-full bg-primary/10 mb-3 lg:mb-4">
            <Briefcase className="h-8 lg:h-10 w-8 lg:w-10 text-primary" />
          </div>
          <p className="font-semibold mb-4 lg:mb-6 text-lg lg:text-xl">Tools</p>
          <ul className="list-disc list-inside text-muted-foreground text-left inline-block space-y-1 lg:space-y-2">
            {toolsSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>

</section>
  );
};
