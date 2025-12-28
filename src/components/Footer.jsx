import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 sm:py-6 px-4 sm:px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 sm:gap-0">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Milan Gauswami. All rights reserved.
          </p>

          {/* Back to Top */}
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};