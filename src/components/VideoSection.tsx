import ScrollReveal from "./ScrollReveal";

const VideoSection = () => (
  <section className="section-padding bg-dark">
    <div className="section-container">
      <ScrollReveal>
        <p className="label-text text-accent text-center mb-2">Nosso Processo</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-dark-foreground mb-12">
          Conheça Nosso Processo
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/MBEdgSn33W0"
            title="Conheça Nosso Processo"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default VideoSection;
