import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReactElement } from 'react';

const setting: SwiperProps = {
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
  slidesPerGroup: 6,

  spaceBetween: 30,
  allowTouchMove: false,
  loop: true,

  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 630px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    // when window width is >= 1000
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,

      spaceBetween: 30,
    },
  },
};

interface ContainerProps {
  children: ReactElement[];
}
export const Container = ({ children }: ContainerProps) => {
  return <Swiper {...setting}>{children}</Swiper>;
};
export default Container;
