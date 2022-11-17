import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Card from 'components/Music/Genre/Card';

import Root from 'components/Common/Flex';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';

import Slider from 'components/Music/Genre/Slider';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  const genreItems = genreSelector.musicList;

  return (
    <>
      <Slider>{genreItems}</Slider>
    </>
  );
};
export default Genre;
