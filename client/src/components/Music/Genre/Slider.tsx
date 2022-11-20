import styled from 'styled-components';
import Flex from 'components/Common/Flex';
import { IconButton } from 'components/Common/IconButton';
import { useState, useEffect } from 'react';
import { GenreDataType } from 'types/store';
import { Card } from 'components/Music/Genre/Card';
import { useCarousel } from 'hooks/useCarousel';
type SliderProps = {
  children: GenreDataType[];
};

export const Slider = ({ children }: SliderProps) => {
  const { handleNextSlide, handlePrevSlide, slideRef } = useCarousel();

  const genreCards = children.map(({ genre_img, genre_id }: GenreDataType) => (
    <Card genre_img={genre_img} key={genre_id} genre_id={genre_id}></Card>
  ));
  return (
    <Flex direction="row">
      <IconButton onClick={handlePrevSlide} icon="arrowLeft" size="3x" padding="60px" color="white"></IconButton>
      <SliderContainer>
        <Flex ref={slideRef} direction="row">
          {genreCards}
        </Flex>
      </SliderContainer>
      <IconButton onClick={handleNextSlide} icon="arrowRight" size="3x" padding="60px" color="white"></IconButton>
    </Flex>
  );
};

const SliderContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 1080px;
`;

export default Slider;
