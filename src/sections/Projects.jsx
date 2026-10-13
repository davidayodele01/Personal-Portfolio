import { useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
 

const projects = [
  {
    title: "Task Management App",
    description:
      "This Task Manager App (Todo App) is a clean, single-page web application designed to help users organize, track, and clear their daily tasks. Built using modern frontend tools, it offers a dark-themed UI and persistent browser storage.",
    image: "/Todo_App.jpeg",
    tags: ["React", "TailwindCSS"],
    link: "https://github.com/davidayodele01/Task-Manager-App-Todo-App-",
    github: "https://github.com/davidayodele01",
  },
  {
    title: "Landing Page",
    description:
      "A modern, responsive SaaS landing page built with React, Tailwind CSS, and Framer Motion—featuring interactive pricing, slick testimonials, and smooth scroll animations.",
    image: "/Landing_page.jpeg",
    tags: ["React", "TailwindCSS", "Framer-motion"],
    link: "https://github.com/davidayodele01/Landing-page---react-framer-motion-and-tailwind-CSS",
    github: "https://github.com/davidayodele01",
  },
  {
    title: "Dashboard",
    description: "A task management todo app",
    image: "/WhatsApp_Image_2024-09-03_at_00.59.22-removebg-preview (1).png",
    tags: ["React", "TailwindCSS"],
    link: "#",
    github: "https://github.com/davidayodele01",
  },
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract all unique tags dynamically
  const allTags = [
    "All",
    ...new Set(projects.flatMap((project) => project.tags)),
  ];

  // Filter projects based on the selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12">
          <span className="text-primary/70 text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-primary">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-gray-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-primary text-white shadow-lg"
                  : "bg-[#1a2329] text-[#f5f5f5] border border-[#5c5a5a] hover:border-primary/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grids */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary transition-all"
                  >
                    <ArrowUp className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#f5f5f5] group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-gray-200 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-[#1a2329] text-sm font-medium border border-[#5c5a5a] text-[#f5f5f5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
