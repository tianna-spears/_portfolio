import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section className="py-24 px-4 relative scroll-mt-20">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact <span className="text-primary"> Me </span>
        </h2>

        <div
          id="contact"
          className="pt-4 flex justify-center gap-6 text-2xl text-primary"
        >
          <a href="https://www.linkedin.com/in/tiannasp/" target="_blank">
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a href="https://github.com/tianna-spears" target="_blank">
            {" "}
            <FaGithub />{" "}
          </a>
          <a href="tianna.spears@gmail.com" target="_blank">
            {" "}
            <MdOutlineEmail />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
