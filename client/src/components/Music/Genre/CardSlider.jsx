import { Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAweSomeButton } from 'components/Common/FontAweSomeButton';
import styled from 'styled-components';

const params = {
  navigation: {},
  slidesPerView: 6,
  spaceBetween: 30,
  slidesPerGroup: 6,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: { clickable: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 6,
    },
    // when window width is >= 630px
    630: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 6,
    },
    // when window width is >= 1000
    1000: {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 6,
    },
  },
  renderPrevButton: () => (
    <FontAweSomeButton className="swiper-Prev-btn" icon="arrowLeft" size="2x"></FontAweSomeButton>
  ),
  renderNextButton: () => (
    <FontAweSomeButton className="swiper-Next-btn" icon="arrowRight" size="2x"></FontAweSomeButton>
  ),
};
export const CardSlider = ({ children }) => {
  return <StyledSwiper {...params}>{children}</StyledSwiper>;
};
const StyledSwiper = styled(Swiper)``;

export default CardSlider;
