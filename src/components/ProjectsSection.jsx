import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "e-Book",
    description: "Production Ready Fullstack E-Commerce Website.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Nodejs", "MongoDb", "Express"],
    demoUrl: "https://e-book-c1nu.onrender.com/",
    githubUrl: "https://github.com/GAUSWAMIMILAN17/e-Book-E-Commerce",
  },
  {
    id: 2,
    title: "JobMitra",
    description: "Production Ready Fullstack Web App Job Portal Platform.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "Nodejs", "MongoDb", "Express"],
    demoUrl: "https://jobmitr-1.onrender.com/",
    githubUrl: "https://github.com/GAUSWAMIMILAN17/JobMitr",
  },
  {
    id: 3,
    title: "My-Portfolio",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-18 sm:py-20 md:py-24 px-0 sm:px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Projects Container - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Horizontal Scroll */}
          <div className="flex md:hidden overflow-x-auto gap-4 px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, key) => (
              <div
                key={key}
                className="flex-shrink-0 w-[85vw] max-w-[320px] snap-center"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-4 px-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/30"
              />
            ))}
            <span className="ml-2 text-xs text-muted-foreground">
              ← Swipe →
            </span>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, key) => (
              <ProjectCard key={key} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 text-sm sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/GAUSWAMIMILAN17"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Separate ProjectCard Component
const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-card rounded-xl sm:rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-border/50">
      {/* Project Image */}
      <div className="h-40 sm:h-44 md:h-48 overflow-hidden bg-secondary/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium border rounded-full bg-primary/10 text-primary">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm mb-4 flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="flex justify-between items-center pt-2 border-t border-border/50">
          <div className="flex space-x-3 sm:space-x-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Live Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Github size={16} />
              <span className="hidden sm:inline">Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};