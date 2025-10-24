"use client";

import { useInView } from "@/hooks/useInView";

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    {
      value: "5+",
      label: "Anos de experiência",
      color: "from-primary to-primary/50",
    },
    {
      value: "1000+",
      label: "Projetos entregues",
      color: "from-secondary to-secondary/50",
    },
    {
      value: "98%",
      label: "Clientes satisfeitos",
      color: "from-accent to-accent/50",
    },
    {
      value: "24h",
      label: "Atendimento rápido",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section className="pt-10 pb-10 lg:pb-16 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 lg:p-8 text-center hover:scale-105 transition-transform duration-300 fade-in-up ${
                index > 0 ? `fade-in-up-delay-${index}` : ""
              } ${isInView ? "in-view" : ""}`}
            >
              <div
                className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2 px-0.5`}
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "center",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
