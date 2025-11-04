"use client";

import Image from "next/image";
import { SwiperCarousel } from "@/components/ui/swiper-carousel";
import type { Banner, StrapiResponse } from "@/lib/types";

// Component Props Types
export interface BannerCarouselContentProps {
  banners: StrapiResponse<Banner> | null;
}

export function BannerCarouselContent({ banners }: BannerCarouselContentProps) {
  if (banners?.data.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden mt-16 lg:mt-20">
      <SwiperCarousel loop={banners?.data.length! > 1 ? true : false}>
        {banners?.data.map((banner, index) => {
          // Use mobile image if available, otherwise use desktop
          const image = banner.image_mobile || banner.image_desk;
          const imageUrl = image.url;
          const alt =
            image.alternativeText || `${banner.order} - Deprint Gráfica Rápida`;

          return (
            <div
              key={banner.id}
              className="relative w-full h-[320px] flex items-center justify-center"
            >
              <Image
                src={imageUrl}
                alt={alt}
                width={image.width}
                height={image.height}
                className="object-contain max-w-full max-h-full"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                unoptimized
              />
            </div>
          );
        })}
      </SwiperCarousel>
    </div>
  );
}
