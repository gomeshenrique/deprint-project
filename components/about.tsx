"use client";

import {
  Award,
  Clock,
  Heart,
  Users,
  Handshake,
  MessageSquare,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import Marquee from "react-fast-marquee";

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const values = [
    {
      icon: Award,
      title: "Qualidade",
      description: "Equipamentos de última geração e alta resolução",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Prazos de entrega que você pode confiar",
    },
    {
      icon: Heart,
      title: "Atendimento",
      description: "Suporte humanizado e dedicado",
    },
    {
      icon: Users,
      title: "Respeito",
      description: "Ética e empatia com todos os clientes",
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Clientes são parceiros no sucesso mútuo",
    },
    {
      icon: MessageSquare,
      title: "Comunicação",
      description: "Transparência e compromisso com o que afirmamos",
    },
  ];

  return (
    <section
      id="sobre"
      className="pt-10 lg:pt-16 pb-10 lg:pb-16 relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
                Sobre a{" "}
                <span
                  className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent px-0.5"
                  style={{
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                  }}
                >
                  deprint
                </span>
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Fundada em 2020 em Maricá, Rio de Janeiro, a deprint se tornou
                referência em qualidade de atendimento, serviço e prazo de
                entrega no segmento de gráfica e impressão.
              </p>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Trabalhamos com equipamentos de última geração e tecnologias de
                ponta em alta resolução, garantindo os maiores padrões de
                impressão do mercado. Nosso atendimento humanizado visa sempre
                nos colocar no lugar do cliente, trabalhando com empatia para
                entender seus objetivos e ajudá-los a alcançar.
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="glass-strong rounded-3xl p-8 lg:p-12 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-muted-foreground">
                    Maricá, Rio de Janeiro
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-muted-foreground">Fundada em 2020</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <span className="text-muted-foreground">
                    Tecnologia de ponta
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      5+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Anos no mercado
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Dedicação
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
        <div className="lg:block hidden">
          <Marquee
            className="overflow-hidden"
            pauseOnHover
            gradient
            gradientColor="var(--background)"
            autoFill
          >
            <div className="grid grid-cols-6 gap-4 pt-4 mt-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`max-w-[200px] mr-4 mt-6 fade-in-up ${
                    index > 0 ? `fade-in-up-delay-${Math.min(index, 4)}` : ""
                  } ${isInView ? "in-view" : ""}`}
                >
                  <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "center",
                    }}
                  >
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        <div className="grid lg:hidden sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 mt-4">
          {values.map((value, index) => (
            <div
              key={index}
              className={`max-w-[200px] mr-4 mt-6 fade-in-up ${
                index > 0 ? `fade-in-up-delay-${Math.min(index, 4)}` : ""
              } ${isInView ? "in-view" : ""}`}
            >
              <div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "center",
                }}
              >
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
