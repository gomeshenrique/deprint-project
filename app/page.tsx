import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { BannerCarousel } from "@/components/banner-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BannerCarousel />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
