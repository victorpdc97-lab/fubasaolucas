import heroImg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Campo de milho" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-dark/90" />
    </div>
    <div className="absolute top-32 right-20 w-64 h-64 border border-dark-foreground/10 rounded-full hidden lg:block" />
    <div className="absolute bottom-20 left-10 w-96 h-96 border border-dark-foreground/5 rounded-full hidden lg:block" />
    <div className="relative z-10 text-center section-container">
      <p className="label-text text-accent mb-4 animate-fade-in">Desde 2012</p>
      <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-dark-foreground mb-6">
        Fubá São Lucas
      </h1>
      <p className="text-lg md:text-xl text-dark-foreground/80 max-w-2xl mx-auto mb-8">
        Produtos 100% naturais e artesanais, mantendo a tradição e originalidade do verdadeiro fubá de moinho d'água.
      </p>
      <Button
        variant="gold"
        size="lg"
        onClick={() => document.querySelector("#institucional")?.scrollIntoView({ behavior: "smooth" })}
      >
        Conheça Nossa História
      </Button>
    </div>
  </section>
);

export default HeroSection;
