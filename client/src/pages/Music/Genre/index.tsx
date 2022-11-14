import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Card from 'components/Music/Genre/Card';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Root from 'components/Common/Flex';
import { IconButton } from 'components/Common/IconButton';
import { useAppDispatch } from 'hooks/useAppDispatch';

type GenreProps = {
  genre_img: string;
  genre_id: string;
};

export const Genre = () => {
  const dispatch = useAppDispatch();
  const [genreSelector] = useMusicSelector();
  useEffect(() => {
    dispatch(fetchmusicGenre());
  }, []);
  const genreItems =
    genreSelector.musicList &&
    genreSelector.musicList.map(({ genre_img, genre_id }: GenreProps) => (
      <Card genre_img={genre_img} key={genre_id} genre_id={genre_id}></Card>
    ));
  return (
    <>
      <Root direction="row" justifyContent="center" alignItems="center">
        <IconButton className="swiper-btn-prev" icon="arrowLeft" size="3x" padding="10px" color="white"></IconButton>
        {genreItems}
        <IconButton className="swiper-btn-next" icon="arrowRight" size="3x" padding="10px" color="white"></IconButton>
      </Root>
      <div className="pagination"></div>
    </>
  );
};
export default Genre;
