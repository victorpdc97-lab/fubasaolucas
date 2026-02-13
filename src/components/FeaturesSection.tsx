import { Wheat, Search, Sun } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: Wheat, title: "Milho Limpo", text: "Utilizamos apenas milho cuidadosamente limpo e selecionado, garantindo a pureza do nosso fubá." },
  { icon: Search, title: "Selecionado", text: "Cada grão passa por rigoroso processo de seleção para garantir a melhor qualidade." },
  { icon: Sun, title: "Secagem Natural", text: "Processo de secagem natural que preserva todos os nutrientes e o sabor autêntico do milho." },
];

const FeaturesSection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
    <div className="section-container">
      <ScrollReveal>
        <p className="label-text text-accent text-center mb-2">Qualidade</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Porque o <span className="text-primary">Melhor?</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 150}>
            <div className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
