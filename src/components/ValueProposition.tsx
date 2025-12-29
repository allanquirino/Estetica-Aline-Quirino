import { Heart, Star, Leaf, Sparkles } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description:
        "Cada tratamento é adaptado às suas necessidades únicas, respeitando sua individualidade.",
    },
    {
      icon: Leaf,
      title: "Resultados Naturais",
      description:
        "Valorizamos sua beleza natural com técnicas que realçam o que você já tem de melhor.",
    },
    {
      icon: Sparkles,
      title: "Ambiente Acolhedor",
      description:
        "Um espaço pensado para você relaxar e se sentir em paz durante todo o atendimento.",
    },
    {
      icon: Star,
      title: "Profissional Especializada",
      description:
        "Anos de experiência e formação contínua para oferecer sempre o melhor cuidado.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-soft-green/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Por que nos escolher
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Cuidado que faz a diferença
          </h2>
          <p className="font-body text-muted-foreground">
            Mais do que procedimentos estéticos, oferecemos uma experiência
            completa de bem-estar e autocuidado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-xl bg-sage-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;