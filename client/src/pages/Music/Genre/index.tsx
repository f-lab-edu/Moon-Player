import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Item from 'components/Music/Genre/Item';
import { Flex } from 'components/Common/UI/Flex';
import { IconButton } from 'components/Common/UI/IconButton';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import useSlider from 'hooks/useSlider';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);
  const { setSwiper, swiperSetting, swiperState, handleNextSlide, handlePrevSlide, handleSlideChange } = useSlider();

  const genreCards = genreSelector.musicList.map(({ genre_img, genre_id }) => (
    <SwiperSlide key={genre_id}>
      <Item genre_img={genre_img} key={genre_id} genre_id={genre_id}></Item>
    </SwiperSlide>
  ));

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  return (
    <>
      <Root direction="row">
        {!swiperState.isBegining ? (
          <SwiperButton icon="arrowLeft" size="3x" color="white" onClick={handlePrevSlide}></SwiperButton>
        ) : (
          <></>
        )}
        <Swiper {...swiperSetting} onSlideChange={handleSlideChange} onSwiper={(swiper) => setSwiper(swiper)}>
          {genreCards}
        </Swiper>
        {!swiperState.isEnd ? (
          <SwiperButton icon="arrowRight" size="3x" color="white" onClick={handleNextSlide}></SwiperButton>
        ) : (
          <></>
        )}
      </Root>
      <div className="pagination"></div>
    </>
  );
};

const Root = styled(Flex)`
  padding: 0px 30px 0px 40px;
`;

const SwiperButton = styled(IconButton)`
  padding: 20px;
`;

export default Genre;
