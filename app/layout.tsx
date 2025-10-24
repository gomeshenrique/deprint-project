import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title:
    "DePrint Gráfica Rápida - Impressão Digital, Banners, Cartões de Visita, Adesivos | Rio de Janeiro",
  description:
    "DePrint Gráfica Rápida: impressão digital de alta qualidade no Rio de Janeiro. Banners, cartões de visita, adesivos, folders, crachás e materiais promocionais. Entrega rápida e preços competitivos.",
  authors: [
    {
      name: "DePrint Gráfica Rápida",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "gráfica rio de janeiro",
    "impressão digital",
    "banners",
    "cartões de visita",
    "adesivos",
    "folders",
    "gráfica rápida",
    "impressão rj",
    "materiais promocionais",
    "crachás",
    "papelaria personalizada",
    "gráfica online",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    language: "pt-BR",
    "geo.region": "BR-RJ",
    "geo.placename": "Rio de Janeiro",
    "get.position": "-22.9068467;-43.1728965",
    ICBM: "-22.9068467, -43.1728965",
  },
  openGraph: {
    title:
      "DePrint Gráfica Rápida - Impressão Digital, Banners, Cartões de Visita, Adesivos | Rio de Janeiro",
    description:
      "DePrint Gráfica Rápida: impressão digital de alta qualidade no Rio de Janeiro. Banners, cartões de visita, adesivos, folders, crachás e materiais promocionais. Entrega rápida e preços competitivos.",
    url: "https://www.deprintgraficarapida.com.br/",
    siteName: "DePrint Gráfica Rápida",
    locale: "pt_BR",
    type: "website",
    images: ["/deprint_logo_light.svg", "/deprint_logo_dark.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DePrint Gráfica Rápida - Impressão Digital, Banners, Cartões de Visita, Adesivos | Rio de Janeiro",
    description:
      "DePrint Gráfica Rápida: impressão digital de alta qualidade no Rio de Janeiro. Banners, cartões de visita, adesivos, folders, crachás e materiais promocionais. Entrega rápida e preços competitivos.",
    images: ["/deprint_logo_light.svg", "/deprint_logo_dark.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://umami.hostserver.myaddr.io/script.js"
            data-website-id="da6216a2-65a6-4b44-aea8-5a26fd3167a3"
            defer
          />
        )}
      </body>
    </html>
  );
}
