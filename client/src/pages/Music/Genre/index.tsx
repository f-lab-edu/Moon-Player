import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Item from 'components/Music/Genre/Item';
import { Flex } from 'components/Common/UI/Flex';
import { IconButton } from 'components/Common/UI/IconButton';

import CarouselContainer from 'components/Music/Genre/Container';
import { SwiperSlide } from 'swiper/react';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);

  const genreCards = genreSelector.musicList.map(({ genre_img, genre_id }) => (
    <SwiperSlide>
      <Item genre_img={genre_img} key={genre_id} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  return (
    <>
      <Root direction="row">
        <IconButton className="swiper-btn-prev" icon="arrowLeft" size="3x" color="white"></IconButton>
        <CarouselContainer>{genreCards}</CarouselContainer>
        <IconButton className="swiper-btn-next" icon="arrowRight" size="3x" color="white"></IconButton>
      </Root>
      <div className="pagination"></div>
    </>
  );
};

const Root = styled(Flex)`
  padding: 0px 30px;
`;

export default Genre;
