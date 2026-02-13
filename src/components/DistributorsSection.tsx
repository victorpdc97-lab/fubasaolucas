import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const distributors = [
  { name: "AF Distribuidora", location: "PAV U - Loja 13/15" },
  { name: "Ailton Geraldo MLP", location: "Setor H - Área 61/62" },
  { name: "BH Frutas", location: "PAV R - Loja 6" },
  { name: "Calábria", location: "PAV I - Lojas 01/03" },
  { name: "Cerealista Xique Xique", location: "PAV D1 - Lojas 08/09" },
  { name: "Comercial São Judas Tadeu", location: "PAV C - Loja 01" },
  { name: "Flex Distribuidora", location: "PAV 6 - Loja 08/10" },
  { name: "Frutas Linhares", location: "PAV Q - Lojas 33/35" },
];

const DistributorsSection = () => (
  <section id="distribuidores" className="section-padding bg-background">
    <div className="section-container">
      <ScrollReveal>
        <p className="label-text text-accent text-center mb-2">Distribuidores</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Onde Encontrar</h2>
        <p className="text-center text-muted-foreground mb-12 flex items-center justify-center gap-2 flex-wrap">
          <MapPin className="w-4 h-4 text-primary" />
          Rodovia BR-040 km 688 Kennedy, Contagem/MG - CEP 32.145-900
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {distributors.map((d, i) => (
          <ScrollReveal key={d.name} delay={i * 75}>
            <div className="bg-card rounded-xl p-5 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading font-semibold text-sm">{d.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{d.location}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default DistributorsSection;
