import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css/bundle";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 500 }}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/400/300" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/400/300" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/400/300" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
