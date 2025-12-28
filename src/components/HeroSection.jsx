import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 py-16">
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-[2rem] leading-tight xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}Milan
              </span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2 whitespace-nowrap">
                {" "}Gauswami
              </span>
            </h1>
            
            {/* Role Badge */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-primary/80 opacity-0 animate-fade-in-delay-2">
              MERN Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-[0.9rem] leading-relaxed sm:text-base md:text-lg text-muted-foreground max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Building full-stack web applications with clean architecture, 
            secure APIs, and seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="cosmic-button w-[80%] sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-[80%] sm:w-auto px-6 py-2.5 rounded-full border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all text-sm sm:text-base text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce cursor-pointer group"
      >
        <span className="text-[0.7rem] sm:text-xs text-muted-foreground group-hover:text-primary transition-colors">
          Scroll Down
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </a>
    </section>
  );
};