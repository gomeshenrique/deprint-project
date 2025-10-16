"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl backdrop-saturate-150 bg-gradient-to-b from-background/80 to-background/60 border-b border-border/10 shadow-2xl shadow-black/10 supports-[backdrop-filter]:bg-background/60 transition-all duration-300 dark:from-background/50 dark:to-background/30 dark:backdrop-saturate-200 dark:border-b-0 dark:after:content-[''] dark:after:fixed dark:after:top-[calc(4rem-2px)] lg:dark:after:top-[calc(5rem-2px)] dark:after:left-0 dark:after:right-0 dark:after:h-0.5 dark:after:bg-gradient-to-r dark:after:from-[#00B3ED] dark:after:via-[#E53D95] dark:after:to-[#FFF234] dark:after:z-50 dark:after:opacity-90 dark:after:transition-opacity dark:after:duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/deprint-logo.png"
              alt="deprint logo"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground transition-transform duration-200"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
           >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 backdrop-blur-2xl backdrop-saturate-150 bg-gradient-to-b from-background/90 to-background/80 supports-[backdrop-filter]:bg-background/75 dark:from-background/70 dark:to-background/50 dark:backdrop-saturate-200 -mx-4 px-4 border-t border-border/20 dark:border-border/10 transition-all duration-300 max-h-[calc(100dvh-4rem)] overflow-y-auto">
            <a
              href="#servicos"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>

          </div>
        )}
      </div>
    </nav>
  )
}
