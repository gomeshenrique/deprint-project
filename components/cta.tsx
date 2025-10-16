import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="pt-10 lg:pt-16 pb-20 lg:pb-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative glass-strong rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/15 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-balance">
              Pronto para dar vida às suas ideias?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
              Entre em contato conosco e descubra como podemos transformar seu projeto em realidade com qualidade e
              agilidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="glass text-base px-8 h-12 border-border hover:bg-primary/10 hover:text-primary hover:border-primary/50 w-full sm:w-auto bg-transparent transition-all duration-300"
                asChild
              >
                <a href="tel:+5521972944994">
                  <Phone className="w-5 h-5 mr-2" />
                  Ligar Agora
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:deprintcomunicacao@gmail.com" className="hover:text-foreground transition-colors">
                  deprintcomunicacao@gmail.com
                </a>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5521972944994" className="hover:text-foreground transition-colors">
                  (21) 97294-4994
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
