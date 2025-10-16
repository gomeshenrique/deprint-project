# 🖨️ deprint - Landing Page

> **Impressão de qualidade que transforma ideias em realidade**

Uma landing page moderna e responsiva para a deprint, empresa especializada em serviços de impressão de alta qualidade. Desenvolvida com as mais recentes tecnologias web para oferecer uma experiência premium aos usuários.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/henrique-gomes-projects/v0-deprint-landing-page)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface elegante com gradientes vibrantes e efeitos visuais
- 🌙 **Modo Escuro/Claro**: Alternância suave entre temas com persistência
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- 🚀 **Animações Interativas**: Efeitos de scroll e transições suaves
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida
- 🎯 **Efeitos Especiais**: Borda animada na palavra "qualidade" que cresce com o scroll
- 🌈 **Navegação Premium**: Efeito "frost" sofisticado inspirado no Resend.com

## 🛠️ Tecnologias Utilizadas

### Frontend Core
- **[Next.js 15.2.4](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Framework CSS utilitário

### UI & Componentes
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e customizáveis
- **[Shadcn/ui](https://ui.shadcn.com/)** - Biblioteca de componentes moderna
- **[Lucide React](https://lucide.dev/)** - Ícones SVG otimizados
- **[Class Variance Authority](https://cva.style/)** - Utilitário para variantes de componentes

### Funcionalidades Avançadas
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[React Hook Form](https://react-hook-form.com/)** - Formulários performáticos
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript
- **[Framer Motion](https://www.framer.com/motion/)** - Animações fluidas

### Ferramentas de Desenvolvimento
- **[Geist Font](https://vercel.com/font)** - Tipografia moderna da Vercel
- **[Vercel Analytics](https://vercel.com/analytics)** - Análise de performance
- **[PostCSS](https://postcss.org/)** - Processamento de CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/henrique-gomes-projects/deprint-landing-page.git

# Entre no diretório
cd deprint-landing-page

# Instale as dependências
pnpm install
# ou
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto.

### Build para Produção

```bash
# Gere o build otimizado
pnpm build
# ou
npm run build

# Inicie o servidor de produção
pnpm start
# ou
npm start
```

## 📁 Estrutura do Projeto

```
deprint-landing-page/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── hero.tsx          # Seção hero com animações
│   ├── navigation.tsx    # Navegação com efeito frost
│   ├── services.tsx      # Seção de serviços
│   ├── about.tsx         # Seção sobre a empresa
│   ├── stats.tsx         # Estatísticas da empresa
│   ├── cta.tsx           # Call-to-action
│   └── footer.tsx        # Rodapé
├── hooks/                # Custom hooks
│   ├── useInView.ts      # Hook para detecção de viewport
│   └── useScrollProgress.ts # Hook para animação de scroll
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
├── public/               # Arquivos estáticos
└── styles/               # Estilos adicionais
```

## 🎨 Características Visuais

### Paleta de Cores
- **Primary**: `#00B3ED` (Azul vibrante)
- **Secondary**: `#E53D95` (Rosa magenta)
- **Accent**: `#FFF234` (Amarelo brilhante)
- **Background**: Gradientes dinâmicos com suporte a modo escuro

### Efeitos Especiais
- **Navegação Frost**: Backdrop blur avançado com saturação e transparência
- **Borda Animada**: Efeito de crescimento progressivo na palavra "qualidade"
- **Gradientes**: Transições suaves entre cores da marca
- **Sombras Luminosas**: Efeitos de glow em elementos interativos

## 🌐 Deploy

O projeto está automaticamente deployado na Vercel:

**[https://vercel.com/henrique-gomes-projects/v0-deprint-landing-page](https://vercel.com/henrique-gomes-projects/v0-deprint-landing-page)**

### Deploy Manual

```bash
# Conecte com a Vercel
npx vercel

# Deploy para produção
npx vercel --prod
```

## 📄 Licença

Este projeto é privado e pertence à deprint. Todos os direitos reservados.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Henrique Gomes** com ❤️ e muito ☕

---

*Transformando ideias em realidade através de código limpo e design excepcional* ✨