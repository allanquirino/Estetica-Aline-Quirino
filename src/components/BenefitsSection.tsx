import { Heart, Smile, Sparkles, Eye } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Mais autoestima",
      description:
        "Sinta-se confiante e radiante em todos os momentos do seu dia.",
    },
    {
      icon: Sparkles,
      title: "Pele saudável e revitalizada",
      description:
        "Tratamentos que nutrem e renovam sua pele de dentro para fora.",
    },
    {
      icon: Heart,
      title: "Momento de autocuidado",
      description:
        "Pause sua rotina e dedique um tempo especial para você mesma.",
    },
    {
      icon: Eye,
      title: "Confiança ao se olhar no espelho",
      description:
        "Reencontre-se e celebre sua beleza natural todos os dias.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
              Benefícios reais
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              O que você ganha com{" "}
              <span className="text-primary italic">nossos cuidados</span>
            </h2>
            <p className="font-body text-muted-foreground mb-10">
              Mais do que resultados estéticos, nossos tratamentos proporcionam
              uma transformação completa no seu bem-estar e autoconfiança.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-soft-green rounded-xl p-5 hover:shadow-soft transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-lg bg-background flex items-center justify-center mb-4">
                    <benefit.icon
                      className="h-5 w-5 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full rounded-full border-2 border-sage-light opacity-20" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="h-full w-full rounded-full border-2 border-sage-light opacity-40" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="h-full w-full rounded-full border-2 border-sage-light opacity-60" />
              </div>
              <div className="absolute inset-24 flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-sage-light/30 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                    <Sparkles className="h-12 w-12 text-primary" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;