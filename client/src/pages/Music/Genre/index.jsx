import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Card from 'components/Music/Genre/Card';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Root from 'components/Common/Flex';
import CardSlider from 'components/Music/Genre/CardSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
export const Genre = () => {
  const dispatch = useDispatch();
  const [genreSelector] = useMusicSelector();
  useEffect(() => {
    dispatch(fetchmusicGenre());
  }, []);
  const genreItems =
    genreSelector.musicList &&
    genreSelector.musicList.map(({ genre_img, genre_id }) => (
      <SwiperSlide key={genre_id}>
        <Card genre_img={genre_img} key={genre_id} genre_id={genre_id}></Card>
      </SwiperSlide>
    ));
  return (
    <Root direction="row" justifyContent="center" alignItems="center">
      <CardSlider>{genreItems}</CardSlider>
      <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'white'} style={{ padding: '10px' }} />
    </Root>
  );
};
const Grid = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(6, 15%);
  grid-template-rows: 1fr;
  grid-gap: ${theme.margins.lg};
  padding-left: ${theme.margins.lg};

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${theme.margins.xl};
  }

  @media screen and (max-width: 630px) {
    display: grid;
    grid-gap: ${theme.margins.lg};
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(6, 1fr);
  }
`
);

export default Genre;
