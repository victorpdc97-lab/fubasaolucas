import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Institucional", href: "#institucional" },
  { label: "Produtos", href: "#produtos" },
  { label: "Distribuidores", href: "#distribuidores" },
  { label: "Receitas", href: "#receitas" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Fubá São Lucas</h3>
            <p className="text-dark-foreground/70 leading-relaxed text-sm">
              Produtos 100% naturais e artesanais, mantendo a tradição e originalidade do verdadeiro fubá de moinho
              d'água desde 2012.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm text-dark-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-dark-foreground/70">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" /> R. Dois, 200 - Canjicas, Itatiaiu - MG
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" /> contato@fubasaolucas.com.br
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" /> (31) 98659-5483
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-dark-foreground/10">
        <div className="section-container py-6 text-center text-sm text-dark-foreground/50">
          © 2024 Fubá São Lucas - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
