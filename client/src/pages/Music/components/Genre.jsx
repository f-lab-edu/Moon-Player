import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { fetchmusicGenre } from 'store/musicGenreSlice';
import { fetchmusicList } from 'store/musicPlayListSlice';

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

const Card = styled.img(({ img }) => `
width: 150px;
height: 100px;
margin: 0px 10px;
border-radius: 30px;
border: 1px solid rgba(0,0,0,0.3);
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
color: #6633cc;
font-weight :900;
background: url('${img}') center center / cover no-repeat;
transition-duration:0.4s;
&:active{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

cursor:pointer;

@media screen and (max-width:1000px){
  border-radius: 7px;
  font-size: 25px;
  font-weight:bold;
  width:90vw;
  height:30vh;
  background-size:100% 100%;
  background-position: center center;
  box-shadow: 2px 1px 10px 1px rgba(218, 120, 120, 0.2);

}
`)

const Genre = () => {
  const dispatch = useDispatch()

  // 초기 렌더링시에 Genre Item들을 서버로부터 요청해서 가져옴
  useEffect(() => {
    dispatch(fetchmusicGenre())
  }, [])

  const genreItem = useSelector(state => {
    return state.musicGenre ? state.musicGenre.musicList : []
  })

  // 다른 genre Card 를 누를떄마다 musicList state값 변경
  const onCardClickHanlder = ({ target }) => {
    const genre_id = target.id
    dispatch(fetchmusicList(genre_id))
    return
  }

  return (
    <Layout>
      {
        genreItem && genreItem.map(({ genre_img, genre_id }) => <Card onClick={onCardClickHanlder} img={genre_img} key={genre_id} id={genre_id}></Card>)
      }
      < FontAwesomeIcon icon={faCircleArrowRight} size={'2x'} color={'#6633cc'} />

    </Layout >
  )
}
export default Genre