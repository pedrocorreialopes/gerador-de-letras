# ✨ Gerador de Letras Diferentes & Elegantes

Gerador completo de fontes e letras especiais em Unicode para usar no **Instagram**, **X (Twitter)**, **WhatsApp**, **Facebook**, **Free Fire** e qualquer plataforma de texto.

---

## 🚀 Funcionalidades

### ✅ Implementadas
- **+50 estilos de fontes Unicode** — Negrito, Itálico, Cursiva, Fraktur, Double Struck, Monospace, Full Width, etc.
- **Filtros por categoria** — Todas / Serif / Negrito / Cursiva / Decorativas / Símbolos / Bolhas / Rasurado
- **Copiar com 1 clique** — Clique em qualquer card ou botão "Copiar" para copiar o texto
- **Efeitos de combinadores** — Tachado, sublinhado, duplo sublinhado, sobrelinha, til, barra
- **Separadores estilosos** — Espaçado, com ponto, traço, pipe, estrela ★, diamante ◆, coração ❤, fogo 🔥
- **Estilos Free Fire / Gamer** — Nicks com prefixo/sufixo decorativos (꧁꧂, 『』, ☠, ▓▒░, »«, etc.)
- **Small Caps, Superscript, Espelhado**
- **+450 emojis e símbolos especiais** organizados em 14 categorias:
  - ✨ Estrelas & Brilho
  - ❤️ Corações & Amor
  - 👑 Coroas & Realeza
  - 🎮 Free Fire & Gaming
  - 🌸 Flores & Natureza
  - ⚡ Símbolos Especiais
  - 🔣 Símbolos Unicode (Grego, Matemático)
  - 🎵 Música & Arte
  - 😈 Expressões & Caras
  - 🔤 Letras Decorativas
  - 🌙 Lua & Espaço
  - 🦋 Animais & Criaturas
  - 💰 Dinheiro & Poder
  - 🎪 Bordas & Frames (ASCII Art)
- **Montador de Nick** — Editor contenteditable para montar nicks personalizados combinando fontes e emojis
- **Suporte a URL param** `?text=SeuTexto` para gerar fontes automaticamente
- **Toast notifications** animadas para feedback de cópia
- **Design responsivo** para mobile e desktop

### ❌ Não implementadas
- Histórico de textos gerados
- Favoritar fontes
- Exportar como imagem

---

## 📁 Estrutura de Arquivos

```
index.html          # Página principal
css/
  style.css         # Todos os estilos (tema escuro, responsivo, animações)
js/
  fonts.js          # Dicionário de +50 alfabetos Unicode + funções de conversão
  symbols.js        # Categorias de emojis e símbolos especiais
  app.js            # Lógica principal (geração, filtros, builder, cópia, toast)
```

---

## 🔗 URIs / Rotas

| Caminho | Descrição |
|---------|-----------|
| `/` | Página principal |
| `/?text=SeuTexto` | Abre com texto pré-preenchido e gera automaticamente |

---

## 🛠️ Próximos Passos Recomendados

1. **Favoritos** — Salvar fontes favoritas no `localStorage`
2. **Histórico** — Armazenar últimos textos gerados
3. **Exportar como imagem** — Gerar PNG do texto convertido
4. **Mais nicks Free Fire** — Adicionar mais estilos específicos para gaming
5. **Busca de fontes** — Campo de pesquisa nas fontes geradas
6. **PWA** — Transformar em Progressive Web App para instalação mobile

---

## 💻 Tecnologias

- HTML5 semântico
- CSS3 (variáveis, gradientes, animações, responsivo)
- JavaScript puro (Vanilla JS, sem frameworks)
- Google Fonts (Inter + Poppins)
- Font Awesome 6 (ícones)
- Unicode Math Alphabets (ISO 15924)

---

*Feito com 💜 para Instagram, WhatsApp & Free Fire*
