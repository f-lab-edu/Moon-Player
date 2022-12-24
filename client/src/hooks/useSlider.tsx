import { Pagination } from 'swiper';
import { SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
//slider state는 swiper Module에 의존적인 부분이 많아서 따로 분리를 시킬필요가없을거같다
export const useSlider = () => {
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();
  const [swiperState, setSwiperState] = useState<SwiperProps>(DEFAULT_SETTING);

  useEffect(() => {
    // swiper 모듈이 없으면 실행불가
    if (!swiperModule) return;
  }, [swiperModule]);

  // 스와이퍼 모듈로 넘길수있음
  const handleNextSlide = () => swiperModule?.slideNext(1000);
  const handlePrevSlide = () => swiperModule?.slidePrev(1000);
  return { setSwiperModule, swiperState, handleNextSlide, handlePrevSlide };
};
export default useSlider;
// 스와이퍼 관련된 라이브러리 셋팅 만들어올수있음
const DEFAULT_SETTING: SwiperProps = {
  modules: [Pagination],
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
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
