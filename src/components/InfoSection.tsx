import { MapPin, Clock, Phone, Shield, Sparkles, CheckCircle } from "lucide-react";

const InfoSection = () => {
  const guarantees = [
    "Atendimento individualizado",
    "Produtos de alta qualidade",
    "Ambiente higienizado",
    "Resultados naturais",
  ];

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
              Informações
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Venha nos visitar
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Localização
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Rua das Flores, 123 - Centro
                    <br />
                    São Paulo, SP - CEP 01234-567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Horário de Atendimento
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Segunda a Sexta: 9h às 19h
                    <br />
                    Sábados: 9h às 14h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    WhatsApp
                  </h3>
                  <p className="font-body text-muted-foreground">
                    (11) 99999-9999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div>
            <div className="bg-soft-green rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Garantia & Confiança
                </h3>
              </div>

              <p className="font-body text-muted-foreground mb-8">
                Seu bem-estar e segurança são nossas prioridades. Trabalhamos
                com os mais altos padrões de qualidade e profissionalismo.
              </p>

              <ul className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="font-body text-foreground">{guarantee}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <p className="font-body text-sm text-muted-foreground italic">
                    "Sua satisfação é a nossa maior recompensa"
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

export default InfoSection;