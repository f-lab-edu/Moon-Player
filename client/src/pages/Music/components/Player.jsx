import styled from 'styled-components'
import Title from 'components/items/Title';
import Item from './Player/Item';
import Footer from './Player/Footer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Layout = styled.div`
margin-left: 50px;
box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
padding: 15px;
border-radius:7px;

@media screen and (max-width:1000px){
      margin: 0px;
      width: 100%; 
}

`
const Box = styled.div`
    width: 350px;
    color: #6633cc;
    height: 40vh;
    overflow: scroll;
      &::-webkit-scrollbar {
          display: none;
    }
    @media screen and (max-width:1000px){
      width:100%;
    }

`
const Header = styled.div`
display: flex;
align-items: center;
height: 50px;
margin-bottom: 8px;

`
const PlayerTitle = styled(Title)`
    font-size: 20px;
    font-weight: 900;
    color: white;
`

// 플레이어 메인

const Player = () => {

  // 사용자가 선택한 Item 만 렌더링
  const playerItems = useSelector(state => state.musicPlayer.playerItems)

  return (
    <Layout>
      <Box>
        <Header>
          <PlayerTitle>재생 목록</PlayerTitle>
        </Header>
        {playerItems.map(({ video_title, video_img, video_id }) => <Item title={video_title} image={video_img} video_id={video_id} key={video_id}></Item>)
        }
      </Box>

      <Footer />

    </Layout>

  )
}

export default Player