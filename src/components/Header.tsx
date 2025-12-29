import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
    { href: "https://www.instagram.com/esteticaaline.quirino", label: "Instagram", external: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="cta"
            size="default"
            onClick={() => scrollToSection("#agendar")}
          >
            Agendar Horário
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-soft border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base text-foreground/80 hover:text-primary transition-colors duration-200 text-left py-2"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-base text-foreground/80 hover:text-primary transition-colors duration-200 text-left py-2"
                >
                  {link.label}
                </button>
              )
            )}
            <Button
              variant="cta"
              className="mt-4"
              onClick={() => scrollToSection("#agendar")}
            >
              Agendar Horário
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;