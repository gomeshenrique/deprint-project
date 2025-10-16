"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";

export function Hero() {
  const { progress, ref: qualidadeRef } = useScrollProgress({
    startOffset: 200,
    endOffset: 400,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">
              Referência em qualidade desde 2020
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-tight">
            Impressão de{" "}
            <span
              ref={qualidadeRef}
              className="relative bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent px-0.5"
              style={{
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            >
              qualidade
              <span
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00B3ED] via-[#E53D95] to-[#FFF234] transition-all duration-500 ease-out rounded-full shadow-lg shadow-primary/50 blur-[0.5px]"
                style={{
                  width: `${progress * 100}%`,
                  boxShadow: `0 0 20px rgba(0, 179, 237, 0.6), 0 0 40px rgba(229, 61, 149, 0.4), 0 0 60px rgba(255, 242, 52, 0.3)`,
                }}
              />
            </span>{" "}
            que transforma ideias em realidade.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Gráfica rápida em Maricá, RJ. Comunicação visual, impressão digital
            e offset com excelência em atendimento e prazo de entrega.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-base px-8 h-12"
              asChild
            >
              <a
                href="https://wa.me/5521972944994?text=Ol%C3%A1%2C%20estou%20interessado%20em%20saber%20mais%20sobre%20os%20produtos%20da%20deprint%20Gr%C3%A1fica%20R%C3%A1pida."
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <MessageCircle className="w-5 h-5 mr-2" /> */}
                <Image
                  src="/whatsapp.svg"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="w-5 h-5 mr-2"
                  priority
                />
                Fale no WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass text-base px-8 h-12 border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50 bg-transparent transition-all duration-300"
              asChild
            >
              <a href="#servicos">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
