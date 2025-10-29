import { BannerCarousel } from "@/components/banner-carousel";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerCarousel />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
    </main>
  );
}
