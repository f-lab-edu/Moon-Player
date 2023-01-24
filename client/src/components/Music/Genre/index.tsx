import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch } from 'hooks/useReduxStore';
import Slider from 'components/Music/Genre/Slider/Slider';
import styled from 'styled-components';

export const Genre = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4000/api/music/genre/'));
  }, []);
  return (
    <Layout>
      <Slider />;
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
