import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Library,
  Users,
  Gamepad2,
  Info,
  Mail,
} from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home", icon: Home },
    { name: "STORYQUEST", href: "#storyquest", icon: BookOpen },
    { name: "LIBRARY", href: "#library", icon: Library },
    { name: "BOKOBOKIDS VILLAGE", href: "#village", icon: Users },
    { name: "GAMES", href: "#games", icon: Gamepad2 },
    { name: "ABOUT US", href: "#about", icon: Info },
    { name: "CONTACTS", href: "#contacts", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-heritage rounded-lg flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-xl font-playfair">
                B
              </span>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-foreground">
                Bokobokids
              </h1>
              <p className="text-sm text-muted-foreground font-ubuntu">
                Village
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-500 ease-out font-ubuntu font-medium group"
                >
                  <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            <Button
              variant="heritage"
              className="font-ubuntu transition-all duration-500 ease-out hover:scale-105"
            >
              SIGN UP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-background/10 backdrop-blur-sm border border-border hover:bg-accent transition-all duration-500 ease-out"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground transition-transform duration-300 ease-out" />
            ) : (
              <Menu className="w-6 h-6 text-foreground transition-transform duration-300 ease-out" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-deep animate-slide-in-from-top transition-all duration-700 ease-out">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-foreground hover:text-primary transition-all duration-500 ease-out font-ubuntu font-medium py-2 hover:translate-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="w-5 h-5 transition-transform duration-500 ease-out" />
                    <span>{item.name}</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-border">
                <Button
                  variant="heritage"
                  className="w-full font-ubuntu transition-all duration-500 ease-out hover:scale-105"
                >
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
