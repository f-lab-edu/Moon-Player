import styled from 'styled-components';
import HeaderItems from './components/HeaderItems';
import NavItems from './components/NavItems';
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
     justify-content: space-between;
     align-items: center;
     padding: 0px 30px;
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
const NavTitle = styled(Title)`
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

const MusicPage = () => {
  return <Layout>
    <Header>
      <HeaderTitle>Moon Player</HeaderTitle>
      <HeaderItems />
    </Header>
    <Nav>
      <NavTitle>인기 차트</NavTitle>
      <NavItems />
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
