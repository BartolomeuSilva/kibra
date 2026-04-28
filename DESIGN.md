# DESIGN.md — Kibra Consultoria: Redesign Moderno & Alta Conversão

> **Versão:** 2.0  
> **Conceito:** Dark Premium + Gold Accent — Autoridade, Confiança, Conversão  
> **Segmento:** Consultoria B2B para locadoras de veículos  

---

## 1. CONCEITO CRIATIVO

### Mood & Identidade Visual
O redesign posiciona a Kibra como a **consultoria de referência nacional** no mercado de mobilidade. O conceito visual é inspirado em marcas de alto padrão do setor automotivo (Porsche, BMW Group Consulting, McKinsey): seriedade, precisão e resultado.

- **Mood:** Dark Premium com detalhes dourados — transmite autoridade, escassez e exclusividade
- **Sensação:** "Isso é sério. Funciona. É para quem quer resultado de verdade."
- **Arquitetura de conversão:** Cada seção tem um micro-CTA; o fluxo leva o usuário de curiosidade → confiança → ação

---

## 2. PALETA DE CORES

```
--color-bg-primary:     #0A0A0C   /* Preto profundo — fundo principal */
--color-bg-secondary:   #111117   /* Preto levemente azulado — cards, seções alt */
--color-bg-surface:     #16161E   /* Superfície elevada — hover, containers */
--color-accent-gold:    #C9A84C   /* Ouro — elemento premium, CTAs secundários */
--color-accent-gold-lt: #E2C37A   /* Ouro claro — hover, destaques */
--color-accent-green:   #00D084   /* Verde neon — CTA principal (WhatsApp + urgência) */
--color-accent-green-dk:#00A868   /* Verde escuro — hover CTA */
--color-border:         #1E1E2A   /* Borda sutil */
--color-border-glow:    rgba(201,168,76,0.25)  /* Borda com brilho dourado */
--color-text-primary:   #FFFFFF   /* Títulos */
--color-text-secondary: #A0A0B8   /* Corpo, subtítulos */
--color-text-muted:     #5A5A72   /* Labels, rodapé */
```

**Regra de uso:**
- Fundo: sempre `#0A0A0C` ou `#111117`
- Accent principal (CTAs de conversão): `#00D084` (verde — remete ao WhatsApp e "positivo/dinheiro")
- Accent decorativo (bordas, ícones, destaques): `#C9A84C` (ouro)
- Nunca usar fundo branco. Nunca usar mais de 2 cores de destaque por seção.

---

## 3. TIPOGRAFIA

### Fontes (Google Fonts)
```
Título Principal (Hero):     "Syne" — Extra Bold 800
Títulos de Seção:            "Syne" — Bold 700
Subtítulos / Labels:         "Inter" — SemiBold 600
Corpo de Texto:              "Inter" — Regular 400
Números / Estatísticas:      "Syne" — Extra Bold 800
```

### Escala Tipográfica
```
Hero H1:      72px / line-height: 1.05 / letter-spacing: -2px
Section H2:   48px / line-height: 1.1  / letter-spacing: -1px
Card H3:      24px / line-height: 1.3
Body Large:   18px / line-height: 1.7
Body:         16px / line-height: 1.65
Label/Tag:    12px / line-height: 1   / letter-spacing: 2px / UPPERCASE
```

**Mobile (< 768px):**
- Hero H1: 42px
- Section H2: 32px
- Body: 15px

---

## 4. GRID & ESPAÇAMENTO

```
Container max-width: 1200px
Container padding:   0 24px
Grid:                12 colunas, gap 24px
Section padding:     120px 0 (desktop) / 64px 0 (mobile)
Card padding:        40px 32px
Border radius:       Cards: 16px / Buttons: 8px / Tags: 4px
```

---

## 5. COMPONENTES UI

### 5.1 BOTÕES

**CTA Primário (Verde — Alta Conversão)**
```css
background: #00D084;
color: #000000;
font: Inter SemiBold 16px;
padding: 16px 32px;
border-radius: 8px;
display: flex;
align-items: center;
gap: 10px;
transition: all 0.2s ease;
box-shadow: 0 0 24px rgba(0, 208, 132, 0.35);

:hover {
  background: #00A868;
  box-shadow: 0 0 36px rgba(0, 208, 132, 0.55);
  transform: translateY(-2px);
}
```

**CTA Secundário (Outline Dourado)**
```css
background: transparent;
border: 1px solid #C9A84C;
color: #C9A84C;
font: Inter SemiBold 16px;
padding: 14px 28px;
border-radius: 8px;

:hover {
  background: rgba(201,168,76,0.08);
  border-color: #E2C37A;
}
```

### 5.2 CARDS

**Card Padrão (Pilar / Serviço)**
```css
background: #111117;
border: 1px solid #1E1E2A;
border-radius: 16px;
padding: 40px 32px;
transition: all 0.3s ease;

:hover {
  border-color: rgba(201,168,76,0.35);
  box-shadow: 0 8px 48px rgba(201,168,76,0.08);
  transform: translateY(-4px);
}
```

**Número do Card (ícone/icon substituído por número grande)**
```css
font: Syne 800 64px;
color: rgba(201,168,76,0.12);
position: absolute;
top: 20px;
right: 24px;
```

### 5.3 TAGS / LABELS
```css
font: Inter 600 11px UPPERCASE;
letter-spacing: 2.5px;
color: #C9A84C;
background: rgba(201,168,76,0.08);
border: 1px solid rgba(201,168,76,0.2);
border-radius: 4px;
padding: 6px 12px;
display: inline-block;
margin-bottom: 16px;
```

### 5.4 DIVISÓRIAS / SEPARADORES
```css
/* Linha dourada decorativa */
width: 48px;
height: 2px;
background: linear-gradient(90deg, #C9A84C, transparent);
margin: 16px 0 32px;
```

### 5.5 NAVBAR
```css
background: rgba(10,10,12,0.85);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(255,255,255,0.04);
position: sticky;
top: 0;
z-index: 100;
padding: 0 48px;
height: 72px;
```
- Logo: à esquerda, versão branca
- Links: Inter 500 14px, cor `#A0A0B8`, hover `#FFFFFF`
- CTA navbar: botão verde pequeno (padding 10px 20px)
- Scroll: adicionar `border-bottom: 1px solid rgba(201,168,76,0.15)` ao fazer scroll

---

## 6. SEÇÕES — ESTRUTURA COMPLETA

---

### SEÇÃO 0 — BARRA DE PROVA SOCIAL (ACIMA DO HERO)
**Localização:** Topo da página, acima do hero  
**Objetivo:** Ancoragem de credibilidade imediata  

**Layout:** Barra horizontal de 48px, fundo `#111117`, borda-bottom dourada sutil  
**Conteúdo:** Ticker/marquee com logos de empresas parceiras (Localiza, Avis, Unidas, Movida, Santander) + texto "Profissionais com passagem por:"  
**Estilo:** Opacidade 50% nas logos, aumenta para 80% no hover

---

### SEÇÃO 1 — HERO (ACIMA DA DOBRA)

**Layout:** Full-width, 100vh mínimo, duas colunas (60/40)

**Coluna Esquerda (conteúdo):**
```
[TAG]  CONSULTORIA ESTRATÉGICA

[H1]   Sua locadora no
       próximo nível.
       Começa aqui.

[SUBTÍTULO 18px]
Estruturamos, reestruturamos e impulsionamos
operações de locação de veículos com método,
experiência e foco total em resultado.

[SOCIAL PROOF INLINE]
★★★★★  "Melhor investimento que fiz pela minha locadora"
— Tiago, TK Veículos

[BOTÕES]
[🟢 Fale com um especialista]   [Ver como funciona →]

[STATS BAR]
+50 locadoras   |   20 anos de experiência   |   Todo o Brasil
```

**Coluna Direita (visual):**
- Imagem de frota premium com overlay escuro gradient (left-to-right)
- Adicionar elemento flutuante: card com "Resultado real" + mini gráfico de crescimento com borda dourada

**Background:**
```css
background: linear-gradient(135deg, #0A0A0C 0%, #0D0D14 100%);
/* Adicionar ruído de textura: background-image: url('noise.png') com opacity 0.03 */
```

**Linha decorativa:**
```css
/* Linha gradiente dourada no rodapé do hero */
border-bottom: 1px solid transparent;
border-image: linear-gradient(90deg, transparent, #C9A84C, transparent) 1;
```

---

### SEÇÃO 2 — 3 PILARES DE NEGÓCIO

**Layout:** Fundo `#0A0A0C`, 3 cards em linha  
**Header:**
```
[TAG]  O QUE FAZEMOS

[H2]   3 Pilares para sua
       locadora crescer

[Subtítulo]  Do zero à operação consolidada, temos o modelo certo para cada fase.
```

**Cards:**

| Pilar | Ícone | Título | Descrição |
|-------|-------|--------|-----------|
| 01 | 🚀 | Abertura | Do zero à operação completa... |
| 02 | 🔄 | Reestruturação | Otimizamos locadoras que precisam crescer... |
| 03 | 🧩 | Módulos | Escolha os módulos que sua locadora precisa... |

Cada card tem:
- Número grande (01/02/03) em ouro transparente, canto superior direito
- Ícone do tema em `#C9A84C`, 32px
- Título H3 branco
- Linha dourada divisória (48px)
- Texto body cinza
- Link "Saiba mais →" em ouro, aparece no hover

**CTA da seção:** Botão verde centralizado abaixo dos cards: "Quero começar agora"

---

### SEÇÃO 3 — PROVA SOCIAL / NÚMEROS

**Layout:** Fundo `#111117`, borda dourada top e bottom  
**Conceito:** "A Kibra em números" — números grandes em destaque

```
[   +50        ]   [   20 anos   ]   [   100%     ]   [  Todo o    ]
[ locadoras    ]   [  de mercado ]   [ dedicação  ]   [  Brasil    ]
[ atendidas    ]   [  de atuação ]   [  ao setor  ]   [            ]
```

**Estilo dos números:**
```css
font: Syne 800 64px;
background: linear-gradient(135deg, #C9A84C, #E2C37A);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Labels:** Inter 14px, `#A0A0B8`, uppercase, letter-spacing 1.5px

---

### SEÇÃO 4 — QUEM SOMOS

**Layout:** Split (50/50), fundo `#0A0A0C`

**Lado esquerdo (texto):**
```
[TAG]  QUEM SOMOS

[H2]   Nascemos dentro
       do mercado que
       consultamos.

[Body]
A Kibra nasceu da experiência prática de quem já viveu
todos os lados da mesa: estruturamos locadoras do zero,
redesenhamos operações em crise e ajudamos grandes grupos
a expandir com segurança.

[Lista de diferenciais com check dourado:]
✓  Especialistas exclusivos no setor de mobilidade
✓  Metodologia proprietária validada em campo
✓  Parceiros de Localiza, Avis, Santander, Unidas
✓  Atendimento presencial e remoto em todo o Brasil

[CTA] → Conheça nossa história
```

**Lado direito:**
- Background com foto dos fundadores ou imagem premium de reunião executiva
- Card flutuante sobreposto: "Sem consultoria genérica. Apenas resultados reais." com borda dourada

---

### SEÇÃO 5 — COMO PODEMOS AJUDAR (4 SERVIÇOS)

**Layout:** Fundo `#111117`, grid 2×2 de cards grandes  
**Header:**
```
[TAG]  SOLUÇÕES

[H2]   Do seu primeiro carro
       à escala nacional

[Subtítulo] Soluções práticas para cada fase da jornada da sua locadora.
```

**Cards (2×2):**

```
┌─────────────────────┐  ┌─────────────────────┐
│ 01                  │  │ 02                  │
│ Estruturação de     │  │ Reestruturação de   │
│ Novas Locadoras     │  │ Operações           │
│                     │  │                     │
│ Você tem o capital, │  │ Redesenhamos        │
│ nós colocamos a     │  │ locadoras para      │
│ operação para rodar.│  │ crescer ou          │
│                     │  │ recuperar margem.   │
│ [Saiba mais →]      │  │ [Saiba mais →]      │
└─────────────────────┘  └─────────────────────┘
┌─────────────────────┐  ┌─────────────────────┐
│ 03                  │  │ 04                  │
│ Análises e          │  │ Treinamentos e      │
│ Avaliações          │  │ Capacitações        │
│                     │  │                     │
│ Business plan,      │  │ Equipes comerciais, │
│ viabilidade e       │  │ operacionais e      │
│ compra de           │  │ de gestão para o    │
│ locadoras.          │  │ mercado real.       │
│ [Saiba mais →]      │  │ [Saiba mais →]      │
└─────────────────────┘  └─────────────────────┘
```

**Design dos cards:**
- Border-left: 3px solid #C9A84C (aparece no hover)
- Número no canto: ouro transparente
- Hover: card sobe 4px, borda dourada completa

---

### SEÇÃO 6 — PARCEIROS E ECOSSISTEMA

**Layout:** Fundo `#0A0A0C`, borda interna dourada  
**Conceito:** "Sua locadora começa certa com os parceiros certos"

**Título:**
```
[TAG]  ECOSSISTEMA

[H2]   Conectamos você ao que
       o mercado tem de melhor

[Subtítulo] Parceiros homologados para cada etapa da operação.
```

**Grid de parceiros (6 cards em 3 colunas):**

| Ícone | Categoria |
|-------|-----------|
| 💰 | Financiamento mais barato e acessível |
| 🚗 | Compras de veículos mais lucrativas |
| 📡 | Rastreamento e monitoramento |
| 🛡️ | Seguro especializado para locadoras |
| 🔧 | Parcerias para manutenção e pneus |
| 📊 | Ferramentas de Gestão e BI |

**Estilo dos cards:** fundo `#111117`, ícone dourado, título branco 500, hover com borda dourada

---

### SEÇÃO 7 — FUNDADORES (POR TRÁS DA KIBRA)

**Layout:** Fundo `#111117`, dois cards lado a lado  
**Header:**
```
[TAG]  POR TRÁS DA KIBRA

[H2]   Quem vai transformar
       sua operação
```

**Cards dos Fundadores:**

**Card Alex Silva:**
```
[FOTO circular com borda dourada]
Alex Moreira da Silva
Sócio Fundador — Especialista em Projetos e Vendas B2B
[Linha dourada divisória]

30+ anos de experiência no setor automotivo.
Passagens por Localiza, Avis/Budget, Leasplan,
Unidas, Movida e Santander.

[Badges:]  MBA Gestão  |  Administração  |  B2B Expert
```

**Card Juliana Premero:**
```
[FOTO circular com borda dourada]
Juliana Premero
Sócia Fundadora — Especialista em Projetos e Vendas B2B
[Linha dourada divisória]

20 anos de experiência. Cofundou a Solution for Fleet,
adquirida pelo Santander. Experiência internacional em
mobilidade e gestão.

[Badges:]  PUCRS  |  Internacional  |  Estratégia
```

**Estilo dos cards de fundador:**
```css
background: linear-gradient(135deg, #111117 0%, #16161E 100%);
border: 1px solid rgba(201,168,76,0.2);
border-radius: 20px;
padding: 48px 40px;
text-align: center;
```

---

### SEÇÃO 8 — DEPOIMENTOS

**Layout:** Fundo `#0A0A0C`, carrossel de 3 cards visíveis  
**Header:**
```
[TAG]  DEPOIMENTOS

[H2]   Resultados que
       falam por si
```

**Cards de Depoimento:**

Card 1:
```
★★★★★
"Ótima consultoria! Juliana e Alex muito atenciosos,
conteúdo rico com profundidade e prática sobre locação.
Me sinto muito seguro para realizar qualquer tipo de locação."

— Tiago, TK Veículos
```

Card 2:
```
★★★★★
"A Kibra trouxe todas as ferramentas, parceiros e práticas
de mercado para o nosso projeto. Obsessão pelo resultado.
Recomendo sem dúvida."

— Marcelo, Arrow
```

**Estilo dos cards:**
```css
background: #111117;
border: 1px solid #1E1E2A;
border-top: 3px solid #C9A84C;
border-radius: 16px;
padding: 40px;
position: relative;

/* Aspas decorativas */
::before {
  content: '"';
  font-size: 96px;
  color: rgba(201,168,76,0.08);
  position: absolute;
  top: 16px;
  left: 24px;
  line-height: 1;
}
```

**Navegação:** Dots dourados + setas em outline

---

### SEÇÃO 9 — CTA FINAL (HERO SECUNDÁRIO)

**Layout:** Full-width, fundo com gradiente diagonal escuro + partículas sutis  
**Conceito:** Urgência e clareza — última chance antes do footer

```
[H2]   Sua locadora não pode
       esperar mais.

[Body] Cada mês sem estrutura é lucro perdido.
       Fale agora com um especialista e descubra o que
       está travando o crescimento da sua operação.

[BOTÃO VERDE GRANDE]  🟢 Falar com especialista agora

[Subtexto]  Atendimento sem custo. Resposta em até 24h.
```

**Background especial:**
```css
background: linear-gradient(135deg, #0A0A0C 0%, #0D0D18 50%, #0A0A0C 100%);
border-top: 1px solid rgba(201,168,76,0.2);
border-bottom: 1px solid rgba(201,168,76,0.2);
```

**CTA Button (versão grande):**
```css
padding: 20px 48px;
font-size: 18px;
font-weight: 700;
box-shadow: 0 0 40px rgba(0, 208, 132, 0.4);
```

---

### SEÇÃO 10 — FAQ

**Layout:** Fundo `#0A0A0C`, max-width 800px centralizado  
**Header:**
```
[TAG]  DÚVIDAS

[H2]   Perguntas frequentes
```

**Acordeão estilizado:**
```css
.faq-item {
  border: 1px solid #1E1E2A;
  border-radius: 12px;
  margin-bottom: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active {
  border-color: rgba(201,168,76,0.3);
}

.faq-question {
  padding: 24px 28px;
  font: Inter 600 17px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
  padding: 0 28px 24px;
  font: Inter 400 15px;
  color: #A0A0B8;
  line-height: 1.7;
}

/* Ícone + que gira */
.faq-icon {
  color: #C9A84C;
  font-size: 20px;
  transition: transform 0.3s ease;
}
.faq-item.active .faq-icon {
  transform: rotate(45deg);
}
```

---

### SEÇÃO 11 — FOOTER

**Layout:** Fundo `#07070A`, 4 colunas + linha copyright

**Coluna 1 — Marca:**
- Logo Kibra (versão branca)
- Tagline: "Consultoria estratégica para o setor de mobilidade."
- Ícones sociais: LinkedIn, Instagram, WhatsApp

**Coluna 2 — Links rápidos:**
- Home, Quem Somos, Por trás da Kibra, Por Que Escolher, Dúvidas

**Coluna 3 — Serviços:**
- Abertura de Locadoras
- Reestruturação Operacional
- Treinamentos e Capacitações
- Análises e Avaliações

**Coluna 4 — Contato:**
- 📱 (11) 95450-5566
- 📧 juliana@kibraconsultoria.com.br
- 📍 Av. Prof. Francisco Morato, 4240 — Vila Sônia, São Paulo – SP

**Linha copyright:**
```css
border-top: 1px solid #1E1E2A;
padding: 24px 0;
display: flex;
justify-content: space-between;
font: Inter 13px;
color: #5A5A72;
```

---

## 7. MICROINTERAÇÕES & ANIMAÇÕES

### Scroll Reveal (aplicar em todas as seções)
```css
/* Estado inicial */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

/* Estado visível (adicionar via IntersectionObserver) */
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger nos cards (delay progressivo)
```css
.card:nth-child(1) { transition-delay: 0.0s; }
.card:nth-child(2) { transition-delay: 0.1s; }
.card:nth-child(3) { transition-delay: 0.2s; }
.card:nth-child(4) { transition-delay: 0.3s; }
```

### Contador animado (seção de números)
- Usar IntersectionObserver + requestAnimationFrame
- Duração: 1.5s com easing ease-out
- Ativar apenas quando o elemento entrar na viewport

### Navbar sticky com blur
```js
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled'); // adiciona borda dourada
  } else {
    nav.classList.remove('scrolled');
  }
});
```

---

## 8. ELEMENTOS ESPECIAIS DE CONVERSÃO

### 8.1 Botão WhatsApp Flutuante (sticky)
```css
position: fixed;
bottom: 32px;
right: 32px;
width: 60px;
height: 60px;
background: #00D084;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 4px 24px rgba(0, 208, 132, 0.5);
z-index: 999;
animation: pulse 2s infinite;

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(0, 208, 132, 0.5); }
  70%  { box-shadow: 0 0 0 16px rgba(0, 208, 132, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 208, 132, 0); }
}
```

### 8.2 Banner de Urgência (opcional)
```css
/* Acima da navbar */
background: linear-gradient(90deg, #C9A84C, #E2C37A, #C9A84C);
color: #000000;
font: Inter 600 13px;
text-align: center;
padding: 10px;
letter-spacing: 0.5px;

/* Texto: "🔥 Vagas limitadas para projetos em Maio — Garanta sua consultoria agora" */
```

### 8.3 Social Proof Inline no Hero
Adicionar logo abaixo do headline:
```html
<div class="social-proof">
  [Avatar 1][Avatar 2][Avatar 3] +47 locadoras já transformadas
</div>
```
```css
.social-proof {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  font: Inter 14px;
  color: #A0A0B8;
}
.avatars img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0A0A0C;
  margin-left: -8px;
}
```

---

## 9. RESPONSIVE DESIGN

### Breakpoints
```
xs: < 480px   (mobile pequeno)
sm: 480–767px (mobile)
md: 768–1023px (tablet)
lg: 1024–1279px (desktop)
xl: 1280px+   (wide)
```

### Adaptações Mobile
- Hero: 1 coluna, texto centralizado, CTA full-width
- Pilares: 1 coluna (scroll vertical)
- Stats: 2×2 grid
- Serviços: 1 coluna
- Fundadores: 1 coluna
- Footer: 2 colunas → 1 coluna em xs
- Botão WhatsApp: bottom 20px, right 20px, 52px

---

## 10. IMPLEMENTAÇÃO — STACK RECOMENDADA

### Opção A: HTML/CSS/JS Puro
```
- HTML5 semântico (section, nav, article, header, footer)
- CSS Custom Properties (variáveis)
- Vanilla JS para animações (IntersectionObserver, scroll)
- Google Fonts (Syne + Inter)
- Feather Icons ou Lucide Icons (para ícones leves)
```

### Opção B: Next.js / React
```
- Next.js 14 (App Router)
- Tailwind CSS (configurar palette customizada)
- Framer Motion (animações de entrada)
- Lucide React (ícones)
- next/font (otimização de fontes)
```

### Opção C: WordPress / Elementor
```
- Tema: Hello Elementor (base limpa)
- Configurar cores globais no Elementor
- Adicionar CSS customizado nas seções
- Plugin de animação: ScrollTrigger via custom JS
```

---

## 11. SEO & PERFORMANCE

### Meta Tags Recomendadas
```html
<title>Kibra Consultoria | Consultoria Estratégica para Locadoras</title>
<meta name="description" content="Estruturamos, reestruturamos e escalamos locadoras de veículos em todo o Brasil. Fale com um especialista.">
<meta property="og:title" content="Kibra Consultoria — Sua locadora no próximo nível">
<meta property="og:description" content="20 anos de experiência no setor de mobilidade. Do zero à operação consolidada.">
```

### Performance
- Imagens: WebP com lazy loading
- Fonts: `font-display: swap`
- Animações: usar `will-change: transform` apenas no hover
- Critical CSS: inline no `<head>`
- LCP target: < 2.5s

---

## 12. RESUMO VISUAL RÁPIDO (Para passar a qualquer IA)

> **"Redesenhe a página da Kibra Consultoria com as seguintes especificações:**
> - **Tema:** Dark Premium, fundo preto (#0A0A0C), accent dourado (#C9A84C) e verde neon (#00D084) nos CTAs
> - **Fontes:** Syne (títulos, extra bold) + Inter (corpo)
> - **Seções:** Navbar sticky com blur | Hero 2 colunas com stats | Números animados | 3 Pilares em cards | Quem Somos split | 4 Serviços em grid 2×2 | Ecossistema de parceiros | Fundadores com foto circular e borda dourada | Depoimentos em carrossel | CTA final impactante | FAQ acordeão | Footer 4 colunas
> - **Conversão:** WhatsApp flutuante pulsante, CTA verde em toda seção, social proof no hero, urgência no header
> - **Animações:** Scroll reveal com stagger, contadores animados, hover lift nos cards, navbar com blur progressivo
> - **Mobile first:** totalmente responsivo"**

---

*Arquivo gerado em: 28/04/2026*  
*Página de referência: https://kibraconsultoria.com.br/*
