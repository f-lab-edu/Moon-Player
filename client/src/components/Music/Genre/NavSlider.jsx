import styled from 'styled-components';
import { Swiper, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

export const NavSlider = () => {
  return (
    <>
      <StyledSwiper></StyledSwiper>
    </>
  );
};
const StyledSwiper = styled(Swiper)``;

export default NavSlider;
