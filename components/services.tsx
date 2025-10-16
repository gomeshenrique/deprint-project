'use client'

import { Printer, Palette, Zap, Package } from "lucide-react"
import { useInView } from "@/hooks/useInView"

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  
  const services = [
    {
      icon: Palette,
      title: "Comunicação Visual",
      description:
        "Produção em até 24 horas de faixas, lonas, banners, adesivos vinil, etiquetas, rótulos, placas e plotagens.",
      examples: "Faixas • Lonas • Banners • Adesivos • Placas",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Zap,
      title: "Gráfica Rápida",
      description:
        "Impressões urgentes com qualidade garantida. Atendemos suas necessidades com agilidade e eficiência.",
      examples: "Cartões • Panfletos • Folders • Flyers",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Printer,
      title: "Gráfica Offset",
      description:
        "Linha industrial para grandes tiragens com qualidade superior. Perfeito para materiais corporativos.",
      examples: "Envelopes • Timbrados • Catálogos • Revistas",
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Package,
      title: "Impressão Digital",
      description: "Laser color e P&B para pequenas tiragens. Apostilas, livretos, agendas, blocos e dados variáveis.",
      examples: "Apostilas • Livretos • Agendas • Blocos",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
    },
  ]

  return (
    <section id="servicos" className="pt-10 lg:pt-16 pb-10 lg:pb-16 relative" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance">Nossos Serviços</h2>
          <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
            Soluções completas em impressão e comunicação visual para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 lg:p-10 hover:scale-[1.02] transition-all duration-300 group fade-in-up ${
                index > 0 ? `fade-in-up-delay-${index}` : ''
              } ${isInView ? 'in-view' : ''}`}
            >
              <div
                className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${service.color}`} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <div className="text-sm text-muted-foreground/80 font-medium">{service.examples}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
