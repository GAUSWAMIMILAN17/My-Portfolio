import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-18 sm:py-20 md:py-24 px-6 sm:px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-center md:text-left">
              Passionate Web Developer
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center md:text-left">
              I specialize in building real-world, production-ready web
              applications using modern technologies. I have hands-on experience
              working on live projects, focusing on responsive design,
              performance optimization, and scalable architectures.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center md:text-left">
              I enjoy crafting elegant solutions to complex problems and
              continuously improving my skills by building, deploying, and
              maintaining full-stack applications.
            </p>

            {/* CTA Buttons - Improved mobile layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="cosmic-button text-center px-6 py-3 text-sm sm:text-base"
              >
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-3 text-sm sm:text-base rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 mt-8 md:mt-0">
            {/* Web Development Card */}
            <div className="gradient-border p-4 sm:p-5 md:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    Web Development
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX Design Card */}
            <div className="gradient-border p-4 sm:p-5 md:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    UI/UX Design
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management Card */}
            <div className="gradient-border p-4 sm:p-5 md:p-6 card-hover">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-semibold text-base sm:text-lg mb-1">
                    Project Management
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};