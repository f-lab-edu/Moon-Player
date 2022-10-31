import styled from 'styled-components'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchmusicList } from 'store/feature/music/PlayListSlice';
import { Item } from './Item';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width:60vw;
    height: 47vh;
    overflow-y: scroll;
    border-radius: 7px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);

    &::-webkit-scrollbar{
      width:10px;
    }
      
    &::-webkit-scrollbar-thumb {
      height: 30%;
      background: purple; 
      border-radius:7px;
       
    }
    @media screen and (max-width:1200px){
      width: 100%;
    }
  
`

const Box = styled.div`
  padding: 10px 20px;
  >:first-child{
    color:white;
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 2px gray;
  }
`

export const PlayList = () => {
  const dispatch = useDispatch()

  const playListItems = useSelector((state) => state.musicReducer.musicPlayList.musicList)

  const items = playListItems.musics && playListItems.musics.map(({ video_title, id, video_img }) => <Item key={video_title} id={id} title={video_title} img={video_img}></Item>)

  // 초기 렌더링시에 musicList(1) 아이템을 요청
  useEffect(() => {
    dispatch(fetchmusicList(1))

  }, [])

  return (
    <Root>
      <Box>
        <h3>{playListItems.title}</h3>
        {items}
      </Box>
    </Root>
  )
}