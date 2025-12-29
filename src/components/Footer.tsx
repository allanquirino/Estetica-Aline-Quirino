import { Instagram, Facebook, MessageCircle, Heart } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="text-primary-foreground">
                <Logo />
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 text-center md:text-left max-w-xs">
              Realçando belezas naturais com cuidado, técnica e acolhimento.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon
                  className="h-5 w-5 text-primary-foreground/80"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="font-body text-sm text-primary-foreground/50">
              © {currentYear} Estética Aline Quirino. Todos os direitos
              reservados.
            </p>
            <p className="font-body text-sm text-primary-foreground/50 flex items-center gap-1">
              Feito com <Heart className="h-3 w-3 fill-primary text-primary" />{" "}
              para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;