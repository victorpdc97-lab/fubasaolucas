import productFuba from "@/assets/product-fuba.webp";
import ScrollReveal from "./ScrollReveal";

const products = [
  { image: productFuba, name: "Fubá Moinho D'água", weight: "1000g", description: "Fubá artesanal moído em moinho d'água tradicional, preservando todo o sabor e nutrientes do milho." },
];

const ProductsSection = () => (
  <section id="produtos" className="section-padding bg-muted">
    <div className="section-container">
      <ScrollReveal>
        <p className="label-text text-accent text-center mb-2">Nossos Produtos</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Produtos <span className="text-primary">Artesanais</span>
        </h2>
      </ScrollReveal>
      <div className="flex justify-center max-w-md mx-auto">
        {products.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 150}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="label-text text-accent">{p.weight}</span>
                <h3 className="font-heading font-bold text-xl mt-2 mb-3">{p.name}</h3>
                <p className="text-muted-foreground">{p.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
