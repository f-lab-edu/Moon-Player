import styled from 'styled-components';
import HeaderItems from './components/HeaderItems';
import NavItems from './components/NavItems';
import Layout from 'components/items/Layout';
import Title from 'components/items/Title';
import PlayList from './components/PlayList';
import Player from './components/Player';

const MusicPageLayout = styled(Layout)`
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`
const HeaderLayout = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0px 30px;
`
const HeaderTitle = styled(Title)`
  font-size:30px;
`

const NavLayout = styled.nav`
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
const MainLayout = styled.main`
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    margin-top:50px;    

    @media screen and (max-width:1200px){
      justify-content: center;
      align-items: center;
      gap: 20px;

    }
    @media screen and (max-width:1000px){
      flex-direction: column;
      align-items: center;
      gap: 20px;

    }

`

const FooterLayout = styled.footer`
  display: flex;
  justify-content:center;
  align-items: center;
 
`
const FooterTitle = styled.h3`
font-size: 13px;
`

const MusicPage = () => {
  return <MusicPageLayout>
    <HeaderLayout>
      <HeaderTitle>Moon Player</HeaderTitle>
      <HeaderItems />
    </HeaderLayout>
    <NavLayout>
      <NavTitle>인기 차트</NavTitle>
      <NavItems />
    </NavLayout>

    <MainLayout>
      <PlayList />
      <Player />

    </MainLayout>

    <FooterLayout>
      <FooterTitle>Copyrightⓒ2022 문준영 All rights reserved.</FooterTitle>
    </FooterLayout>
  </MusicPageLayout>
};

export default MusicPage;
