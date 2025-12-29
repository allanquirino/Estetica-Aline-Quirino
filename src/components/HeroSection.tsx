import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Ambiente sereno de spa com elementos naturais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 md:pt-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-fade-in-up stagger-1">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-body text-sm text-muted-foreground uppercase tracking-widest">
              Estética & Bem-estar
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up stagger-2 text-balance">
            Realce sua beleza natural com{" "}
            <span className="text-primary italic">cuidado</span>,{" "}
            <span className="text-primary italic">técnica</span> e{" "}
            <span className="text-primary italic">acolhimento</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-in-up stagger-3 max-w-xl">
            Tratamentos personalizados que respeitam sua individualidade e
            potencializam sua autoconfiança. Seu momento de cuidado começa aqui.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up stagger-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#agendar")}
              className="group"
            >
              Agendar meu horário
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="cta-outline"
              size="lg"
              onClick={() => scrollToSection("#servicos")}
            >
              Conhecer serviços
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-8 mt-14 opacity-0 animate-fade-in-up stagger-5">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-soft-green flex items-center justify-center">
                <span className="font-display text-lg text-primary font-semibold">+</span>
              </div>
              <div>
                <p className="font-display text-xl text-foreground font-semibold">500</p>
                <p className="font-body text-xs text-muted-foreground">Clientes atendidos</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-soft-green flex items-center justify-center">
                <span className="font-display text-lg text-primary font-semibold">5</span>
              </div>
              <div>
                <p className="font-display text-xl text-foreground font-semibold">Anos</p>
                <p className="font-body text-xs text-muted-foreground">De experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-soft-green flex items-center justify-center">
                <span className="font-display text-lg text-primary font-semibold">★</span>
              </div>
              <div>
                <p className="font-display text-xl text-foreground font-semibold">5.0</p>
                <p className="font-body text-xs text-muted-foreground">Avaliação média</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;