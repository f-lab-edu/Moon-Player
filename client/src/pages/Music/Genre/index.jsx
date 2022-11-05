import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import GenreItem from './Item';
import { FlexCenterRow } from 'components/Common/FlexCenterRow';

const Grid = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: repeat(6, 15%);
  grid-template-rows: 1fr;
  grid-gap: ${theme.margins.lg};
  padding-left: ${theme.margins.lg};

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: ${theme.margins.xl};
  }

  @media screen and (max-width: 630px) {
    display: grid;
    grid-gap: ${theme.margins.lg};
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: repeat(6, 1fr);
  }
`
);

export const Genre = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchmusicGenre());
  }, []);
  const genres = useSelector((state) => state.music.genre.musicList);
  const genreItems =
    genres.length > 0 ? (
      genres.map(({ genre_img, genre_id }) => (
        <GenreItem genre_img={genre_img} key={genre_id} genre_id={genre_id}></GenreItem>
      ))
    ) : (
      <h3>장르가 비어있습니다.</h3>
    );
  return (
    <FlexCenterRow>
      <Grid>{genreItems}</Grid>
      <div>
        <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'white'} />
      </div>
    </FlexCenterRow>
  );
};

export default Genre;
