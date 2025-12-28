import { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 98, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 98, category: "backend" },
  { name: "Express", level: 98, category: "backend" },
  { name: "MongoDB", level: 95, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Postman", level: 98, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 98, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredSkills = useMemo(
    () =>
      skills
        .filter((skill) => activeCategory === "all" || skill.category === activeCategory)
        .sort((a, b) => b.level - a.level),
    [activeCategory]
  );

  useEffect(() => {
    setIsAnimating(false);
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section 
      id="skills" 
      className="py-18 sm:py-20 md:py-24 px-4 sm:px-6 relative bg-gradient-to-br from-secondary/20 via-secondary/10 to-background/50 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,theme(colors.primary/0.1),transparent_50%)] opacity-75" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter - Improved for Mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ease-out capitalize font-medium text-sm sm:text-base shadow-lg backdrop-blur-sm border",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl transform scale-[1.05]"
                  : "bg-card/80 text-foreground hover:bg-card hover:shadow-xl border-border/50"
              )}
            >
              {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={`${skill.name}-${key}`}
              className={cn(
                "group bg-card/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-border/50",
                "hover:shadow-xl hover:border-primary/50 transition-all duration-500 ease-out",
                "p-4 sm:p-5 md:p-6 lg:p-8",
                // Mobile-specific hover effects
                "md:hover:-translate-y-2 md:hover:scale-[1.02]"
              )}
            >
              {/* Skill Name */}
              <div className="mb-4 sm:mb-5 md:mb-6">
                <h3 className="font-bold text-base sm:text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                  {skill.name}
                </h3>
                <span className="inline-block w-12 sm:w-16 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full group-hover:from-primary group-hover:to-primary transition-all duration-300" />
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted/50 h-2 sm:h-2.5 md:h-3 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full shadow-lg bg-gradient-to-r from-primary via-primary/90 to-secondary transition-all duration-[1.8s] ease-out"
                  style={{
                    width: isAnimating ? `${skill.level}%` : "0%",
                  }}
                />
              </div>

              {/* Skill Info */}
              <div className="mt-2 sm:mt-3 flex justify-between items-center">
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground/80 tracking-wider uppercase">
                  {skill.category}
                </span>
                <span className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only: Show total skills count */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-sm text-muted-foreground">
            Showing {filteredSkills.length} {activeCategory === "all" ? "total" : activeCategory} skills
          </p>
        </div>
      </div>
    </section>
  );
};