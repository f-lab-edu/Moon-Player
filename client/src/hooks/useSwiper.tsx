import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';
import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { useAppDispatch } from 'hooks/useReduxStore';
export const useSwiper = (slideitems) => {
  const dispatch = useAppDispatch();
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();
  const handleNextSlide = () => {
    if (!swiperModule) return;
    swiperModule.slideNext(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${idx}`));
  };
  const handlePrevSlide = () => {
    if (!swiperModule) return;
    swiperModule.slidePrev(1000);
    const idx = swiperModule.realIndex + 1;
    dispatch(fetchmusicList(`http://localhost:4000/api/music/genre/${idx}`));
  };

  const swiper = (
    <Swiper {...DEFAULT_SETTING} onSwiper={setSwiperModule}>
      {slideitems}
    </Swiper>
  );

  return { swiper, handleNextSlide, handlePrevSlide };
};
const DEFAULT_SETTING: SwiperProps = {
  modules: [Pagination],
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  slidesPerView: 5,
  slidesPerGroup: 5,
  allowTouchMove: false,
  loopPreventsSlide: false,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 15,
    },
  },
};
