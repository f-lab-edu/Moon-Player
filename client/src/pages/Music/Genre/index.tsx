import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Slider from 'components/Music/Genre/Carousel';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreItems = useAppSelector((state) => state.music.genre.musicList);

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);
  return (
    <>
      <Slider data={genreItems}></Slider>
    </>
  );
};
export default Genre;
