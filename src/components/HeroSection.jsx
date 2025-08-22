import { ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Tianna
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Spears
            </span>
          </h1>
      <div className="flex flex-col items-center space-y-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
        <p className="text-2xl font-semibold">Software Engineer</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
          Apprentice at Code the Dream
        </p>
      </div>

          <div className="pt-2 flex justify-center gap-6 text-2xl text-primary">
            <a href="https://www.linkedin.com/in/tiannasp/" target="_blank">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a href="https://github.com/tianna-spears" target="_blank">
              {" "}
              <FaGithub />{" "}
            </a>
          </div>

          <div className="pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              {" "}
              View My Work
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <a href="#about">
          <ArrowDown className="h-5 w-5 text-primary" />{" "}
        </a>
      </div>
    </section>
  );
};
