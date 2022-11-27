import { SwiperProps } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
export const useSlider = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [swiperSetting, setSwiperSetting] = useState<SwiperProps>(setting);
  const [swiperState, setSwiperState] = useState(SwiperDefaultState);

  useEffect(() => {
    setPaginationState();
  }, [swiper]);

  const handleSlideChange = () => {
    if (!swiper) return;
    setPaginationState();
  };
  const handleNextSlide = () => swiper?.slideNext();
  const handlePrevSlide = () => swiper?.slidePrev();

  const setPaginationState = () => {
    if (!swiper) return;
    setSwiperState({ ...swiperState, isBegining: swiper.isBeginning, isEnd: swiper.isEnd });
  };

  return { swiperState, setSwiper, swiperSetting, handleNextSlide, handlePrevSlide, handleSlideChange };
};
export default useSlider;

const SwiperDefaultState = {
  isBegining: false,
  isEnd: false,
};

const setting: SwiperProps = {
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
