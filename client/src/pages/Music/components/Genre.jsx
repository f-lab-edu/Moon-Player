import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchmusicGenre } from 'store/musicGenreSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:1000px){
    flex-direction: column;
    gap:10px 
    }    
  
`

const Card = styled.div(({ img }) => `

display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 100px;
box-sizing: border-box;
margin: 0px 10px;
border-radius: 30px;
border: 1px solid rgba(0,0,0,0.3);
box-shadow: 2px 1px 10px 1px rgba(133, 99, 99, 0.3);
color: #6633cc;
font-weight :900;
background: url('${img}') center center / cover no-repeat;


cursor:pointer;
@media screen and (max-width:1000px){
  border-radius: 7px;
  font-size: 25px;
  font-weight:bold;
  width:90vw;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.2);
  padding-top: calc(450 / 1000 * 90vw);
}
`)

const Genre = () => {
  const dispatch = useDispatch()
  const musicGenreItem = useSelector(({ musicGenre }) => {
    return musicGenre.music ? musicGenre.value : []
  })

  console.log(musicGenreItem)
  useEffect(() => {
    dispatch(fetchmusicGenre())
  }, [])

  return (
    <Layout>
      {
        musicGenreItem && musicGenreItem.map(({ genre_img, genre_id }) => <Card img={genre_img} key={genre_id}></Card>)
      }
      < FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />

    </Layout >
  )
}
export default Genre