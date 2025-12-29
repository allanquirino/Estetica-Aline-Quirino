import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Sun, Heart, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Droplets,
      title: "Limpeza de Pele",
      description:
        "Limpeza profunda que remove impurezas, desobstrui os poros e deixa sua pele renovada e radiante.",
      features: ["Extração suave", "Hidratação profunda", "Máscara revitalizante"],
    },
    {
      icon: Sparkles,
      title: "Estética Facial",
      description:
        "Tratamentos faciais personalizados para rejuvenescimento, firmeza e luminosidade natural.",
      features: ["Peeling enzimático", "Radiofrequência", "LED terapia"],
    },
    {
      icon: Sun,
      title: "Estética Corporal",
      description:
        "Procedimentos que modelam, tonificam e melhoram a textura da pele do corpo todo.",
      features: ["Drenagem linfática", "Massagem modeladora", "Tratamento celulite"],
    },
    {
      icon: Heart,
      title: "Tratamentos Relaxantes",
      description:
        "Experiências de relaxamento profundo para aliviar tensões e renovar suas energias.",
      features: ["Massagem relaxante", "Aromaterapia", "Pedras quentes"],
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Nossos serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Tratamentos para você
          </h2>
          <p className="font-body text-muted-foreground">
            Procedimentos selecionados com carinho para atender suas
            necessidades e realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} variant="service" className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-sage-light flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <service.icon
                      className="h-7 w-7 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="font-body text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="soft"
                  className="w-full group"
                  onClick={() => scrollToSection("#agendar")}
                >
                  Quero saber mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;