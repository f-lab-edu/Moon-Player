import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Carousel from 'components/Music/Genre/Carousel/Carousel';
import styled from 'styled-components';

export const Genre = () => {
  const dispatch = useAppDispatch();
  const genreItems = useAppSelector((state) => state.music.genre.list);
  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);
  return (
    <Layout>
      <Carousel data={genreItems}></Carousel>;
      <Pagination className="pagination" />
    </Layout>
  );
};
const Layout = styled.div``;

const Pagination = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export default Genre;
