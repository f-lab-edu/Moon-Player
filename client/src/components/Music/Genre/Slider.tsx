import useSlider from 'hooks/useSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import IconButton from 'components/Global/IconButton';
import styled from 'styled-components';
import { Genre } from 'types/store';
import Item from './Item';

interface SliderProps {
  children: Genre[];
}

export const Slider = ({ children }: SliderProps) => {
  const { setSwiperModule, swiperState, handleSlideChange, sliderState, handleNextSlide, handlePrevSlide } =
    useSlider();
  const genreCards = children.map(({ genre_img, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <Item genre_img={genre_img} key={genre_id} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  return (
    <>
      {!sliderState.isBegining ? (
        <StyledIconButton icon="arrowLeft" size="3x" color="white" onClick={handlePrevSlide}></StyledIconButton>
      ) : (
        <></>
      )}
      <Swiper {...swiperState} onSlideChange={handleSlideChange} onSwiper={(swiper) => setSwiperModule(swiper)}>
        {genreCards}
      </Swiper>
      {!sliderState.isEnd ? (
        <StyledIconButton icon="arrowRight" size="3x" color="white" onClick={handleNextSlide}></StyledIconButton>
      ) : (
        <></>
      )}
    </>
  );
};

const StyledIconButton = styled(IconButton)`
  padding: 20px;
`;
export default Slider;
