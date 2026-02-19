
## Remover E-mail e Deixar Apenas WhatsApp e Telefone

### O que será alterado

O e-mail `contato@fubasaolucas.com.br` aparece em 3 locais diferentes no site. Todos serão removidos e, na seção de contato, será adicionado um link direto para o WhatsApp no lugar do e-mail.

### Arquivos a modificar

**1. `src/components/Header.tsx`**
- Remover o link de e-mail da barra superior (topo da página)
- Remover o import do ícone `Mail` (não será mais usado)

**2. `src/components/ContactSection.tsx`**
- Remover o bloco de informação de e-mail
- Substituir pelo WhatsApp com link clicável para `https://wa.me/5531986595483`
- Remover o import do ícone `Mail`
- O campo "E-mail *" no formulário também será removido, pois o contato passa a ser direto por WhatsApp/telefone. O campo "Nome *" e "Mensagem *" permanecem para facilitar o contato

**3. `src/components/Footer.tsx`**
- Remover a linha de e-mail da coluna de contato
- Adicionar um link de WhatsApp no lugar
- Remover o import do ícone `Mail`

### Resultado Visual

```text
ANTES (Header):
[ email ]  [ telefone ]

DEPOIS (Header):
[ telefone ]

ANTES (Seção Contato):
Endereço | E-mail | Telefone

DEPOIS (Seção Contato):
Endereço | WhatsApp | Telefone

ANTES (Footer):
Endereço | E-mail | Telefone

DEPOIS (Footer):
Endereço | WhatsApp | Telefone
```
