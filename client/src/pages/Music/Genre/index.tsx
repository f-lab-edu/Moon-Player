import styled from 'styled-components';
import { useEffect } from 'react';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import { useAppDispatch, useAppSelector } from 'hooks/useAppDispatch';
import Flex from 'components/Global/Flex';
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
      <SliderContainer direction="row">
        <Slider>{genreItems}</Slider>
      </SliderContainer>
      <SliderPagination></SliderPagination>
    </>
  );
};

const SliderContainer = styled(Flex)`
  padding: 0px 30px 0px 40px;
`;

const SliderPagination = () => {
  return <div className="pagination"></div>;
};
export default Genre;
