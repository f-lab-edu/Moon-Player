import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { fetchmusicGenre } from 'store/feature/music/GenreSlice';
import Item from './Genre/Item';

const Layout = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 100%;
    
    @media screen and (max-width:1000px){
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-template-rows: 50% 50%;
      grid-gap:20px

    }    
  
`

const Genre = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchmusicGenre())
  }, [])

  const genres = useSelector(state => state.musicReducer.musicGenre ? state.musicReducer.musicGenre.musicList : [])
  const items = genres && genres.map(({ genre_img, genre_id }) => <Item img={genre_img} key={genre_id} id={genre_id}></Item>)

  return (
    <Layout>
      <Grid>
        {items}
      </Grid >
      < FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />
    </Layout>
  )
}
export default Genre