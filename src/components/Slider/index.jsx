import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Zoom } from "swiper";
import { SwiperStyle } from "./style";

import "swiper/css/bundle";

export function Slider({ numberOfSlides, hasZoom, hasEffect }) {
  return (
    <SwiperStyle>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Zoom]}
        slidesPerView={numberOfSlides}
        navigation
        pagination={{ clickable: true }}
        effect={hasEffect ? "fade" : ""}
        zoom={hasZoom}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide zoom={hasZoom}>
          <img src="https://picsum.photos/1366/300" alt="" />
        </SwiperSlide>
        <SwiperSlide zoom={hasZoom}>
          <img src="https://picsum.photos/1367/300" alt="" />
        </SwiperSlide>
        <SwiperSlide zoom={hasZoom}>
          <img src="https://picsum.photos/1368/300" alt="" />
        </SwiperSlide>
        <SwiperSlide zoom={hasZoom}>
          <img src="https://picsum.photos/1365/300" alt="" />
        </SwiperSlide>
      </Swiper>
    </SwiperStyle>
  );
}
