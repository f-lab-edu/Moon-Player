import styled from 'styled-components';
import Items from './components/Header/Items';
import Genre from './components/Genre';
import Title from 'components/items/Title';
import PlayList from './components/PlayList';
import Player from './components/Player';

const Layout = styled.div`
display: flex;
flex-direction: column;
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

`
const Header = styled.header`
     display: flex;
     position: sticky;
     top: 0px;
     justify-content: space-between;
     align-items: center;
     padding: 0px 30px;
     @media screen and (max-width:1000px){
      position: relative;
}
`
const HeaderTitle = styled(Title)`
  font-size:30px;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content :center;
    align-items: center;
`
const GenreTitle = styled(Title)`
 text-shadow: 1px 1px 1px gray;
 font-weight: 900;
 text-align: center;
 font-size :30px;

`
const Main = styled.main`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top:50px;    
    
    @media screen and (max-width:1000px){
 
      flex-direction: column;
      align-items: center;
      /* height:100vh; */
      gap: 20px;

    }

`

const Footer = styled.footer`
  display: flex;
  justify-content:center;
  align-items: center;
 
`
const FooterTitle = styled.h3`
font-size: 13px;
`

// 1. MusicPage에서 Nav에 대한 Json파일을 뿌려준다. /api/music/music_title

const MusicPage = () => {

  return <Layout>
    <Header>
      <HeaderTitle>Moon Player</HeaderTitle>
      <Items />
    </Header>
    <Nav>
      <GenreTitle>인기 음악</GenreTitle>
      <Genre />
    </Nav>
    <Main>
      <PlayList />
      <Player />
    </Main>
    <Footer>
      <FooterTitle>Copyrightⓒ2022 문준영 All rights reserved.</FooterTitle>
    </Footer>
  </Layout>
};

export default MusicPage;
