import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.email.trim() || !form.mensagem.trim()) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="section-container">
        <ScrollReveal>
          <p className="label-text text-accent text-center mb-2">Contato</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Fale <span className="text-primary">Conosco</span>
          </h2>
        </ScrollReveal>
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Nome *" value={form.nome} onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))} />
              <Input type="email" placeholder="E-mail *" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              <Input placeholder="Assunto" value={form.assunto} onChange={(e) => setForm((f) => ({ ...f, assunto: e.target.value }))} />
              <Textarea placeholder="Mensagem *" rows={5} value={form.mensagem} onChange={(e) => setForm((f) => ({ ...f, mensagem: e.target.value }))} />
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold">Endereço</h4>
                  <p className="text-muted-foreground">R. Dois, 200 - Canjicas, Itatiaiu - MG</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold">E-mail</h4>
                  <p className="text-muted-foreground">contato@fubasaolucas.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold">Telefone</h4>
                  <p className="text-muted-foreground">(31) 98659-5483</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mt-6 aspect-video shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?q=Santa+Terezinha+de+Minas+MG&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localização Fubá São Lucas"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
