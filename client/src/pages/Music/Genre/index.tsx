import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Card from 'components/Music/Genre/Card';

import Root from 'components/Common/Flex';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import { GenreDataType } from 'types/store';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreSelector = useAppSelector((state) => state.music.genre);

  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);
  const genreItems =
    genreSelector.musicList &&
    genreSelector.musicList.map(({ genre_img, genre_id }: GenreDataType) => (
      <Card genre_img={genre_img} key={genre_id} genre_id={genre_id}></Card>
    ));
  return (
    <>
      <Root direction="row" justifyContent="center" alignItems="center">
        {genreItems}
      </Root>
    </>
  );
};
export default Genre;
