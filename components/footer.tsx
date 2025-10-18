"use client";

import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className="border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={
                  currentTheme === "dark"
                    ? "/deprint_logo_dark.svg"
                    : "/deprint_logo_light.svg"
                }
                alt="deprint logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gráfica rápida em Maricá, RJ. Qualidade e agilidade em cada
              projeto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Comunicação Visual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gráfica Rápida
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Gráfica Offset
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Impressão Digital
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-foreground transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>R. Canarinhos, 655</li>
              <li>Parque Nanci, Maricá - RJ</li>
              <li>CEP: 24914-160</li>
              <li className="pt-2">
                <a
                  href="tel:+5521972944994"
                  className="hover:text-foreground transition-colors"
                >
                  (21) 97294-4994
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.instagram.com/deprintgraficarapida/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@deprintgraficarapida</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 deprint. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
