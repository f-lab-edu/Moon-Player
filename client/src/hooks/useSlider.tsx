import { SwiperProps } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
//sliderstate는 swiper Module에 의존적인 부분이 많아서 따로 분리를 시킬필요가없을거같다
export const useSlider = () => {
  const [swiperModule, setSwiperModule] = useState<SwiperCore>();
  const [swiperState, setSwiperState] = useState<SwiperProps>(DEFAULT_SETTING);

  //  sliderState는 slider를 관리
  const [sliderState, setSliderState] = useState(DEFAULT_SLIDER_SETTING);

  useEffect(() => {
    // swiper 모듈이 없으면 실행불가
    if (!swiperModule) return;
    setSliderState({ ...sliderState, isBegining: true, isEnd: false });
  }, [swiperModule]);
  const handleSlideChange = () => {
    if (!swiperModule) return;
    setSliderState({ ...sliderState, isBegining: swiperModule.isBeginning, isEnd: swiperModule.isEnd });
  };

  // 스와이퍼 모듈로 넘길수있음
  const handleNextSlide = () => swiperModule?.slideNext();
  const handlePrevSlide = () => swiperModule?.slidePrev();
  return { sliderState, setSwiperModule, swiperState, handleNextSlide, handlePrevSlide, handleSlideChange };
};
export default useSlider;

const DEFAULT_SLIDER_SETTING = {
  isBegining: false,
  isEnd: false,
};

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

  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    // when window width is >= 630px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,

      spaceBetween: 15,
    },
    // when window width is >= 1000
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 25,
    },
  },
};
