import styled from 'styled-components';

import { useEffect, useContext } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { useCarousel } from 'hooks/useCarousel';
import Item from 'components/Music/Genre/Item';
import { Flex } from 'components/Common/UI/Flex';
import { IconButton } from 'components/Common/UI/IconButton';
import { ResolutionContext } from 'context/ResolutionContext';

export const Genre = () => {
  const { name } = useContext(ResolutionContext);

  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);
  const { setTotalSlide, handleNextSlide, handlePrevSlide, slideRef } = useCarousel<HTMLDivElement>();
  const genreCards = genreSelector.musicList.map(({ genre_img, genre_id }) => (
    <Item genre_img={genre_img} key={genre_id} genre_id={genre_id}></Item>
  ));

  useEffect(() => {
    return name === 'TABLET' ? setTotalSlide(2) : name === 'MOBILE' ? setTotalSlide(3) : setTotalSlide(1);
  }, [name]);
  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  return (
    <Root direction="row">
      <IconButton onClick={handlePrevSlide} icon="arrowLeft" size="3x" color="white"></IconButton>
      <CarouselContainer>
        <CarouselBox ref={slideRef} direction="row">
          {genreCards}
        </CarouselBox>
      </CarouselContainer>
      <IconButton onClick={handleNextSlide} icon="arrowRight" size="3x" color="white"></IconButton>
    </Root>
  );
};

const Root = styled(Flex)`
  padding: 0px 20px;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 1100px;
`;
const CarouselBox = styled(Flex)`
  gap: 5px;
`;

export default Genre;
