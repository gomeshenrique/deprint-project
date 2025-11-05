"use client";

import { Children, isValidElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import type { SwiperProps } from "swiper/react";

export interface SwiperCarouselProps {
  children: React.ReactNode;
  autoplayDelay?: number;
  autoplayPauseOnMouseEnter?: boolean;
  effect?: "fade" | "slide" | "cube" | "coverflow" | "flip";
  loop?: boolean;
  hasPagination?: boolean;
  hasNavigation?: boolean;
  className?: string;
}

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function SwiperCarousel({
  children,
  autoplayDelay = 5000,
  autoplayPauseOnMouseEnter = true,
  effect = "fade",
  loop = true,
  hasPagination = false,
  hasNavigation = false,
  className = "",
}: SwiperCarouselProps) {
  const slidesCount = Children.count(children);

  const swiperProps: SwiperProps = {
    modules: [Autoplay, EffectFade, Pagination, Navigation],
    navigation: hasNavigation,
    pagination: hasPagination
      ? {
          clickable: true,
        }
      : false,
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: autoplayDelay,
      pauseOnMouseEnter: autoplayPauseOnMouseEnter,
      disableOnInteraction: false,
    },
    loop: loop && slidesCount > 1,
    className: `w-full ${className}`,
  };

  if (effect === "fade") {
    swiperProps.effect = "fade";
    swiperProps.fadeEffect = {
      crossFade: true,
    };
  }

  return (
    <Swiper {...swiperProps}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return null;
        }
        return <SwiperSlide key={index}>{child}</SwiperSlide>;
      })}
    </Swiper>
  );
}
