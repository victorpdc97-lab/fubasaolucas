import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const CTABanner = () => (
  <section className="section-padding bg-gradient-to-r from-primary to-primary/80 relative overflow-hidden">
    <div className="absolute top-10 left-10 w-40 h-40 border border-dark-foreground/10 rounded-full" />
    <div className="absolute bottom-10 right-10 w-60 h-60 border border-dark-foreground/5 rounded-full" />
    <div className="section-container relative z-10 text-center">
      <ScrollReveal>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
          Entre em Contato Conosco
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Estamos prontos para atender você e tirar todas as suas dúvidas
        </p>
        <Button
          variant="gold"
          size="lg"
          onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
        >
          Fale Conosco
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default CTABanner;
