import { useState, useEffect } from "react";
import { Menu, Mail, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Institucional", href: "#institucional" },
  { label: "Produtos", href: "#produtos" },
  { label: "Distribuidores", href: "#distribuidores" },
  { label: "Receitas", href: "#receitas" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground hidden sm:block">
        <div className="section-container flex justify-end gap-6 py-1.5 text-xs">
          <a href="mailto:contato@fubasaolucas.com.br" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-3 h-3" /> contato@fubasaolucas.com.br
          </a>
          <a href="tel:+5531986595483" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" /> (31) 98659-5483
          </a>
        </div>
      </div>
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        )}
      >
        <div className="section-container flex items-center justify-between py-4">
          <button
            onClick={() => scrollTo("#home")}
            className={cn(
              "font-heading font-bold text-xl transition-colors",
              scrolled ? "text-primary" : "text-dark-foreground"
            )}
          >
            Fubá São Lucas
          </button>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "text-xs font-medium transition-colors label-text",
                  scrolled ? "text-foreground/70 hover:text-primary" : "text-dark-foreground/80 hover:text-dark-foreground"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button aria-label="Menu">
                <Menu className={cn("w-6 h-6 transition-colors", scrolled ? "text-primary" : "text-dark-foreground")} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-lg font-heading font-semibold text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
