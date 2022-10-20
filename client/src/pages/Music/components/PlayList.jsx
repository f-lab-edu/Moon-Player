import styled from 'styled-components'
import Title from '../../../components/items/Title';
import PlayListItem from './PlayList/PlayListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchmusicList } from 'store/musicListSlice';

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    height: 47vh;
    overflow: scroll;
    border-radius: 7px;
    box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
    
    &::-webkit-scrollbar {
          display: none;
    }
    @media screen and (max-width:1200px){
      width: 100%;
    }
  
`
const PlayListTitle = styled(Title)`
  font-size:20px;
  color: white;

`
const Box = styled.div`
  padding: 10px 20px;
`
const PlayList = () => {

  const dispatch = useDispatch()
  const playListItems = useSelector((state) => {

    // state.store이름명.state이름. json파일 object name
    return state.musicList ? state.musicList.musics : [];
  })

  useEffect(() => {
    dispatch(fetchmusicList(1))
  }, [])

  return (
    <Layout>
      <Box>

        <PlayListTitle>{playListItems.title}</PlayListTitle>
        {
          playListItems.musics && playListItems.musics.map(({ video_title, id, video_img }) => <PlayListItem key={id} id={id} title={video_title} img={video_img}></PlayListItem>)
        }
      </Box>
    </Layout>
  )
}

export default PlayList