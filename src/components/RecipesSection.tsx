import recipeBolo1 from "@/assets/recipe-bolo-goiabada.jpg";
import recipeBolo2 from "@/assets/recipe-bolo-diet.jpg";
import recipeBolo3 from "@/assets/recipe-bolo-simples.jpg";
import ScrollReveal from "./ScrollReveal";

const recipes = [
  {
    image: recipeBolo1,
    title: "Bolo de Fubá com Pedaços de Goiabada",
    ingredients: ["Goiabada cortada em cubos", "4 ovos (claras separadas)", "Farinha de trigo", "2 xícaras de Fubá São Lucas", "Margarina, leite de coco", "Açúcar, raspa de limão", "Queijo ralado, leite, fermento"],
    instructions: "Bata as claras em neve. Misture as gemas com leite de coco, leite, margarina, queijo e raspa de limão. Adicione os ingredientes secos. Incorpore as claras em neve, o fermento e os pedaços de goiabada. Asse a 200°C por 40 minutos.",
  },
  {
    image: recipeBolo2,
    title: "Bolo de Fubá com Goiabada Diet",
    ingredients: ["Adoçante", "Gemas", "Óleo", "Farinha de trigo", "1 xícara de Fubá São Lucas", "Leite desnatado", "Fermento, erva-doce", "Claras em neve, goiabada diet"],
    instructions: "Bata o adoçante com as gemas, adicione óleo, farinha, fubá e leite alternando. Junte o fermento e erva-doce. Incorpore as claras em neve e goiabada diet em cubos. Asse a 180°C por 40 minutos em forma redonda de 24cm.",
  },
  {
    image: recipeBolo3,
    title: "Bolo de Fubá",
    ingredients: ["3 ovos", "2 copos de leite", "1 copo de óleo", "2 copos de Fubá São Lucas", "1 copo de farinha de trigo", "2 copos de açúcar", "2 colheres de Pó Royal", "Erva-doce (opcional)"],
    instructions: "Bata tudo no liquidificador até ficar homogêneo. Despeje em uma forma untada e enfarinhada. Leve ao forno pré-aquecido até dourar. Simples e delicioso!",
  },
];

const RecipesSection = () => (
  <section id="receitas" className="section-padding bg-muted">
    <div className="section-container">
      <ScrollReveal>
        <p className="label-text text-accent text-center mb-2">Receitas</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          Receitas com <span className="text-primary">Fubá São Lucas</span>
        </h2>
      </ScrollReveal>
      <div className="grid lg:grid-cols-3 gap-8">
        {recipes.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 150}>
            <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[5/4] overflow-hidden">
                <img src={r.image} alt={r.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg mb-4">{r.title}</h3>
                <div className="mb-4">
                  <p className="label-text text-primary mb-2">Ingredientes</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {r.ingredients.map((ing, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label-text text-primary mb-2">Modo de Preparo</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.instructions}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default RecipesSection;
