"use client";

import Image from "next/image";
import { SwiperCarousel } from "@/components/ui/swiper-carousel";
import type { Banner, StrapiResponse } from "@/lib/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Component Props Types
export interface BannerCarouselContentProps {
  banners: StrapiResponse<Banner> | null;
}

export function BannerCarouselContent({ banners }: BannerCarouselContentProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (banners?.data.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden mt-16 lg:mt-20">
      <SwiperCarousel loop={banners?.data.length! > 1 ? true : false}>
        {banners?.data.map((banner, index) => {
          const isDev = process.env.NODE_ENV === "development";

          const image = isMobile
            ? banner.image_mobile || banner.image_desk
            : banner.image_desk;

          const imageUrl = isDev
            ? `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${image.url}`
            : image.url;

          const alt =
            image.alternativeText ||
            `Banner ${banner.order} - Deprint Gráfica Rápida`;

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
