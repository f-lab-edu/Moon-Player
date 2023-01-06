import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Layout from 'components/Music/Genre/Carousel/Carousel';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreItems = useAppSelector((state) => state.music.genre.list);
  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);
  return <Layout data={genreItems}></Layout>;
};
export default Genre;
