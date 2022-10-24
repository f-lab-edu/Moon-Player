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
    grid-template-columns: repeat(6,15%);
    grid-template-rows: 1fr;
    grid-gap:20px;
    padding-left: 20px;

    @media screen and (max-width:1000px){
      display: grid;
      grid-template-columns: repeat(3,30%);
      grid-template-rows: repeat(2,1fr);
      grid-gap:30px;
     
    }    
  
    @media screen and (max-width:630px){
      display: grid;
      grid-gap:20px;
      grid-template-columns: repeat(1,100%);
      grid-template-rows: repeat(6,1fr);
     
    }  
  
`
const Box = styled.div`

    @media screen and (max-width:900px){
      padding: 0px 15px;
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
      <Box>
        < FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />
      </Box>
    </Layout>
  )
}
export default Genre