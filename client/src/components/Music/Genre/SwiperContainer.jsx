import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const params = {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets',
  },
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 6,
  allowTouchMove: false,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 630px
    630: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 1000
    1000: {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 6,
    },
  },
};
export const CardSlider = ({ children }) => {
  return <Swiper {...params}>{children}</Swiper>;
};

export default CardSlider;
