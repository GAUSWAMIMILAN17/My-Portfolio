import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a
            className="text-lg sm:text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Milan</span> Gauswami
            </span>
          </a>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground relative"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <span
                className={cn(
                  "absolute inset-0 bg-primary/20 rounded-full scale-0 transition-transform duration-300",
                  isMenuOpen && "scale-100"
                )}
              />
              {isMenuOpen ? (
                <X size={24} className="relative z-10" />
              ) : (
                <Menu size={24} className="relative z-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden overflow-hidden"
          style={{ touchAction: "none" }}
        >
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-xl"
            onClick={closeMenu}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-sm bg-card rounded-3xl border border-primary/20 shadow-2xl shadow-primary/10 p-6 overflow-hidden"
              style={{ touchAction: "none" }}
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-2xl pointer-events-none" />

              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-foreground transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="text-center mb-5 relative">
                <h3 className="text-lg font-bold text-foreground">Menu</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-2" />
              </div>

              <div className="space-y-2 relative">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-foreground/80 hover:text-primary bg-secondary/30 hover:bg-primary/10 transition-colors duration-200"
                  >
                    <span className="font-medium text-sm">{item.name}</span>
                    <span className="text-primary">→</span>
                  </a>
                ))}
              </div>

              <div className="my-4 border-t border-border/50" />

              <div className="flex justify-center gap-3">
                <a
                  href="https://github.com/GAUSWAMIMILAN17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/milangauswami17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <Instagram size={16} />
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="text-xs text-muted-foreground">Theme</span>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "relative w-12 h-6 rounded-full transition-colors duration-300",
                    isDarkMode ? "bg-primary/30" : "bg-secondary"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center transition-all duration-300 shadow-lg",
                      isDarkMode ? "left-6" : "left-0.5"
                    )}
                  >
                    {isDarkMode ? (
                      <Moon size={10} className="text-primary-foreground" />
                    ) : (
                      <Sun size={10} className="text-primary-foreground" />
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};