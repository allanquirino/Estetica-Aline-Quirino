import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Clara",
      text: "A Aline é uma profissional incrível! Me senti acolhida desde o primeiro momento. Minha pele nunca esteve tão bonita. Recomendo de olhos fechados!",
      rating: 5,
      treatment: "Limpeza de Pele",
    },
    {
      name: "Fernanda Silva",
      text: "Ambiente super relaxante e atendimento personalizado. A Aline realmente entende o que a gente precisa. Virou meu momento de autocuidado favorito!",
      rating: 5,
      treatment: "Massagem Relaxante",
    },
    {
      name: "Ana Paula",
      text: "Os resultados foram além das minhas expectativas. Minha autoestima melhorou muito depois dos tratamentos. Obrigada, Aline!",
      rating: 5,
      treatment: "Estética Facial",
    },
    {
      name: "Juliana Costa",
      text: "Profissional atenciosa e carinhosa. O espaço é lindo e aconchegante. Saio de lá renovada a cada sessão!",
      rating: 5,
      treatment: "Drenagem Linfática",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-soft-green/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-body text-sm text-primary uppercase tracking-widest mb-4 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            O que nossas clientes dizem
          </h2>
          <p className="font-body text-muted-foreground">
            Histórias reais de transformação e autocuidado que nos motivam a
            continuar fazendo o nosso melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="testimonial" className="relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-sage-light" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              
              <p className="font-body text-foreground/90 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;