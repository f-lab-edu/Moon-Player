import styled from 'styled-components'
import Title from 'components/items/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/items/Image';
import Progressbar from 'components/items/Progressbar';
import PlayerItem from './PlayerItem';

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
const HeaderBox = styled.div`
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
const HeaderTitle = styled(Title)`
    font-size: 20px;
    font-weight: 900;
    color: white;
`

const FooterBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;


`
const PlayingIconBox = styled.div`
    display: flex;
    align-items: center;

    >svg{
      margin:3px;
    }
    >:last-child{
      margin:10px;
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
  // const [musics, setMusics] = useState([])
  // useEffect(() => {
  //   const result = await(await fetch()).json()
  //   setMusics(result)
  // }, [])

  // musics.map((music) => <MusicListItem music={music} />)

  return (
    <Layout>
      <HeaderBox>
        <Header>
          <HeaderTitle>재생 목록</HeaderTitle>
        </Header>
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />

        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
      </HeaderBox>
      <footer>
        <Progressbar />
        <FooterBox>
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
            <div>
              <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'#6633cc'} />
            </div>
          </PlayingIconBox>
        </FooterBox>
      </footer>
    </Layout>

  )
}

export default Player