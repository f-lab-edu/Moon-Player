import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import GenreCard from 'components/Music/Genre/Card';
import { useMusicSelector } from 'hooks/useMusicSelector';
import Root from 'components/Common/Flex';
export const Genre = () => {
  const dispatch = useDispatch();
  const [genreSelector] = useMusicSelector();
  useEffect(() => {
    dispatch(fetchmusicGenre());
  }, []);
  const genreItems =
    genreSelector.musicList &&
    genreSelector.musicList.map(({ genre_img, genre_id }) => (
      <GenreCard genre_img={genre_img} key={genre_id} genre_id={genre_id}></GenreCard>
    ));
  return (
    <Root direction="row" justifyContent="center" alignItems="center">
      <Grid>{genreItems}</Grid>
      <FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'white'} />
    </Root>
  );
};
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

export default Genre;
