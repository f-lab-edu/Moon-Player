import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Card from 'components/Music/Genre/Card';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Root from 'components/Common/Flex';
import CardSlider from 'components/Music/Genre/CardSlider';
import { SwiperSlide } from 'swiper/react';
import { FontAweSomeButton } from 'components/Common/FontAweSomeButton';
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
      <FontAweSomeButton className="swiper-btn-next" icon="arrowRight" size="3x" padding="10px"></FontAweSomeButton>
    </Root>
  );
};
export default Genre;
