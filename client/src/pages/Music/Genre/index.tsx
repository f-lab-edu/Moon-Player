import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';

import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import CarouselSlider from 'components/Music/Genre/Carousel';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  const genreItems = genreSelector.musicList;

  return (
    <>
      <CarouselSlider>{genreItems}</CarouselSlider>
    </>
  );
};
export default Genre;
