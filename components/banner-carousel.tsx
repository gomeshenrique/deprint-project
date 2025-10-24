"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

const banners = [
  {
    id: 1,
    src: "/banner_1.png",
    alt: "Banner 1 - Deprint Gráfica Rápida",
  },
  {
    id: 2,
    src: "/banner_2.png",
    alt: "Banner 2 - Deprint Gráfica Rápida",
  },
  {
    id: 3,
    src: "/banner_3.png",
    alt: "Banner 3 - Deprint Gráfica Rápida",
  },
];

export function BannerCarousel() {
  return (
    <div className="relative w-full overflow-hidden mt-16 lg:mt-20">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[320px] flex items-center justify-center">
              <Image
                src={banner.src}
                alt={banner.alt}
                width={1200}
                height={320}
                className="object-contain max-w-full max-h-full"
                priority={banner.id === 1}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
