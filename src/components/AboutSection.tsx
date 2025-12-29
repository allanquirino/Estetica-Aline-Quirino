import alinePortrait from "@/assets/aline-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-hover">
              <img
                src={alinePortrait}
                alt="Aline Quirino - Esteticista"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage-light rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
              Conheça a profissional
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Aline Quirino
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou Aline Quirino, esteticista apaixonada pelo universo da
                beleza e do bem-estar. Há mais de 5 anos, dedico-me a ajudar
                mulheres a se sentirem mais confiantes e bonitas em sua própria
                pele.
              </p>
              <p>
                Minha abordagem vai além dos procedimentos técnicos. Acredito
                que cada pessoa é única e merece um cuidado personalizado, em um
                ambiente acolhedor onde você possa relaxar e se sentir especial.
              </p>
              <p>
                Busco constantemente atualização profissional para oferecer as
                melhores técnicas e tratamentos, sempre priorizando resultados
                naturais que valorizam sua beleza autêntica.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-soft-green rounded-xl px-5 py-3">
                <p className="font-display text-xl text-primary font-semibold">+5 anos</p>
                <p className="font-body text-xs text-muted-foreground">de experiência</p>
              </div>
              <div className="bg-soft-green rounded-xl px-5 py-3">
                <p className="font-display text-xl text-primary font-semibold">+500</p>
                <p className="font-body text-xs text-muted-foreground">clientes satisfeitas</p>
              </div>
              <div className="bg-soft-green rounded-xl px-5 py-3">
                <p className="font-display text-xl text-primary font-semibold">10+</p>
                <p className="font-body text-xs text-muted-foreground">certificações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;