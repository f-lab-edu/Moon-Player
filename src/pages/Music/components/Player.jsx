import styled from 'styled-components'
import Title from 'components/items/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/items/Image';
import Progressbar from 'components/items/Progressbar';
import Item from './PlayerItem';

const Root = styled.div`
margin-left: 50px;
box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
padding: 15px;
border-radius:7px;
@media screen and (max-width:900px){
      margin: 0px;
}

`
const Layout = styled.div`
    width: 350px;
    color: #6633cc;
    height: 40vh;
    overflow: scroll;
      &::-webkit-scrollbar {
          display: none;
    }   
`
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
margin-bottom: 15px;
`
const MainTitle = styled(Title)`
    font-size: 20px;
    font-weight: 900;
    color: white;
`
const PlayingLayout = styled.footer`

`
const PlayingItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;

`
const PlayingIconBox = styled.div`
    >svg{
        margin: 3px;
    }
`
const PlayingInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const PlayingTitle = styled(Title)`
    font-size: 15px;
    color:white;
    margin: 1px;
    font-weight: 900;
`
const PlayingImage = styled(Image)`
    margin: 0px 10px 1px 0px;
    width: 60px;
    height: 70px;
`
// 플레이어 메인

const Player = () => {
  return (
    <Root>
      <Layout>
        <Header>
          <MainTitle>셔플</MainTitle>
          <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'#6633cc'} />
        </Header>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Layout>
      <PlayingLayout>
        <Progressbar />
        <PlayingItem>
          <PlayingInfoBox>
            <PlayingImage />
            <div>
              <PlayingTitle>노래 : 좋은날</PlayingTitle>
              <PlayingTitle>가수 : 아이유 </PlayingTitle>
            </div>
          </PlayingInfoBox>
          <PlayingIconBox>
            <FontAwesomeIcon icon={faBackwardStep} size={'2x'} color={'#6633cc'} />
            <FontAwesomeIcon icon={faPlayCircle} size={'2x'} color={'#6633cc'} />
            <FontAwesomeIcon icon={faForwardStep} size={'2x'} color={'#6633cc'} />
          </PlayingIconBox>
        </PlayingItem>
      </PlayingLayout>
    </Root>

  )
}

export default Player