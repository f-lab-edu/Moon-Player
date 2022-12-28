import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from 'components/Music/Genre/Item';

export const useSwiper = (items) => {
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();
  // 스와이퍼 모듈로 넘길수있음
  const handleNextSlide = () => swiperModule?.slideNext(1000);
  const handlePrevSlide = () => swiperModule?.slidePrev(1000);

  const genreCards = items.map(({ genre_img, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <Item genre_img={genre_img} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  const swiper = (
    <Swiper {...DEFAULT_SETTING} onSwiper={setSwiperModule}>
      {genreCards}
    </Swiper>
  );
  return { swiperModule, swiper, handleNextSlide, handlePrevSlide };
};
export default useSwiper;
// 스와이퍼 관련된 라이브러리 셋팅 만들어올수있음
const DEFAULT_SETTING = {
  modules: [Pagination],
  // pagination: {
  //   el: '.pagination',
  //   type: 'bullets',
  // },
  slidesPerView: 6,
  slidesPerGroup: 6,
  allowTouchMove: false,
  loopPreventsSlide: false,
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,

      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 25,
    },
  },
};
