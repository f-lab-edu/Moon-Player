import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Slider from 'components/Music/Genre/Slider';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);
  const genreItems = genreSelector.musicList;

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);

  return (
    <>
      <Slider>{genreItems}</Slider>
      <SliderPagination></SliderPagination>
    </>
  );
};

const SliderPagination = () => {
  return <div className="pagination"></div>;
};
export default Genre;
