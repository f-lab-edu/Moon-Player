import styled from 'styled-components'
import Title from 'components/Common/Title';
import Item from './Player/Item';
import Footer from './Player/Footer';
import { useSelector } from 'react-redux';
//import useYoutube from 'hooks/api/useYoutube';

const Layout = styled.div`
width: 30vw;
margin-left: 50px;
box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
padding: 15px;
border-radius:7px;


@media screen and (max-width:1000px){
      margin: 0px;
      width: 100%; 
}

`
const ScrollBox = styled.div`
    color: #6633cc;
    height: 40vh;
    overflow-y: scroll;

    padding-right: 10px;
    &::-webkit-scrollbar{
      width:10px;
    }
      
    &::-webkit-scrollbar-thumb {
      height: 5%;
      background: purple; 
      border-radius:7px;
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
    position: sticky;
    top: 0px;
    font-size: 20px;
    font-weight: 900;
    color: white;
`

// 플레이어 메인

const Player = () => {
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)

  const items = playerItems.length > 0 ? playerItems.map(({ video_title, video_img, video_id }, index) => <Item title={video_title} image={video_img} video_id={video_id} key={index} order={++index}></Item>) :
    <h3>재생목록이 비어있습니다.</h3>

  return (
    <Layout>
      <Header>
        <PlayerTitle>재생 목록</PlayerTitle>
      </Header>
      <ScrollBox>
        {items}
      </ScrollBox>

      <Footer />

    </Layout>

  )
};

export default Player