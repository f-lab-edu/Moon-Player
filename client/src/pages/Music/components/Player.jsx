import styled from 'styled-components'
import Title from 'components/items/Title';
import PlayerItem from './Player/PlayerItem';
import PlayerFooter from './Player/PlayerFooter';

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
      </HeaderBox>
      {/* <PlayerFooter /> */}

    </Layout>

  )
}

export default Player