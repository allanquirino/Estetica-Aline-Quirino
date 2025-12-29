import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/5511976080895?text=Olá! Gostaria de agendar um horário.";

  return (
    <section
      id="agendar"
      className="py-20 md:py-28 bg-primary relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage-dark/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-dark/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-8">
            <Calendar className="h-4 w-4 text-primary-foreground" />
            <span className="font-body text-sm text-primary-foreground">
              Agende seu horário
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-6">
            Seu momento de cuidado começa aqui
          </h2>

          <p className="font-body text-lg text-primary-foreground/90 mb-10 max-w-lg mx-auto">
            Dê o primeiro passo para uma pele mais saudável e uma autoestima
            renovada. Agende sua avaliação gratuita agora mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="whatsapp"
              size="xl"
              className="group"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="h-5 w-5" />
              Agendar pelo WhatsApp
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="font-body text-sm text-primary-foreground/70 mt-8">
            Respondemos em até 1 hora durante o horário comercial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;