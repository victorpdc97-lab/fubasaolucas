import { useState } from "react";
import { Target, Eye, Heart, BookOpen } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import ImageLightbox from "./ImageLightbox";
import estrutura1 from "@/assets/estrutura-1.jpg";
import estrutura2 from "@/assets/estrutura-2.jpg";
import estrutura3 from "@/assets/estrutura-3.jpg";
import estrutura4 from "@/assets/estrutura-4.jpg";
import estrutura5 from "@/assets/estrutura-5.jpg";
import estrutura6 from "@/assets/estrutura-6.jpg";
import estrutura7 from "@/assets/estrutura-7.jpg";
import estrutura8 from "@/assets/estrutura-8.jpg";

const galleryImages = [
{ src: estrutura1, alt: "Produção artesanal São Lucas" },
{ src: estrutura2, alt: "Empacotamento do fubá" },
{ src: estrutura3, alt: "Pedras de moagem em operação" },
{ src: estrutura4, alt: "Linha de moinhos d'água" },
{ src: estrutura5, alt: "Milho selecionado para moagem" },
{ src: estrutura6, alt: "Alimentação do moinho" },
{ src: estrutura7, alt: "Controle de qualidade" },
{ src: estrutura8, alt: "Pedras de moagem tradicionais" }];


const InstitutionalSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section id="institucional" className="section-padding bg-background">
        <div className="section-container">
          <ScrollReveal>
            <p className="label-text text-accent text-center mb-2">Nossa História</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Institucional</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-2xl mb-4">Nossa História</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Em março de 2002, alugamos uma fazenda no Córrego dos Motta em Itatiaiuçu, MG. Começamos com um pequeno moinho d'água e, graças à dedicação e ao compromisso com a qualidade, hoje contamos com 60 jogos de pedras de moagem, produzindo o melhor fubá da região.
              

              </p>
            </div>
          </ScrollReveal>

          {/* Animated Counters */}
          <ScrollReveal>
            <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
              <AnimatedCounter end={60} prefix="+" label="Jogos de Pedras" />
              <AnimatedCounter end={2012} label="Desde" duration={2500} />
              <AnimatedCounter end={100} suffix="%" label="Natural" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={0}>
              <div className="text-center p-6">
                <Heart className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Princípios</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Buscamos sempre o melhor produto de nossos produtores e fornecedores para o consumo humano, com rigoroso
                  controle de qualidade em todas as etapas.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="text-center p-6">
                <Target className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Colocar no mercado produtos 100% naturais e artesanais, mantendo a tradição e a originalidade do
                  verdadeiro fubá de moinho d'água.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center p-6">
                <Eye className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conquistar o reconhecimento dos consumidores como um produto original e confiável, referência em qualidade
                  no segmento.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h3 className="font-heading font-bold text-2xl text-center mb-8">Nossa Estrutura</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) =>
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => handleImageClick(i)}>

                  <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)} />

    </>);

};

export default InstitutionalSection;