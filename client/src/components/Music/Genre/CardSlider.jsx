import styled from 'styled-components';
import { Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
export const CardSlider = ({ children }) => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      slidesPerGroup={6}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default CardSlider;
