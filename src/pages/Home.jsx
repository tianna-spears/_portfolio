import { ThemeToggle } from "../components/ThemeToggle";
// import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer"


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Theme Toggle - Light or Dark */}
      <ThemeToggle />

      {/* Background Effects */}
      {/* <StarBackground /> will incorporate later into a more professional design*/}

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};
