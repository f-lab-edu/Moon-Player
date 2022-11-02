import styled from 'styled-components';
import Title from 'components/Common/Title';
import { Genre } from './Genre/Genre';
import { Player } from './Player/Player';
import { PlayList } from './PlayList/PlayList';
import { HeaderList } from './Header/HeaderList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  @media screen and (max-width: 1000px) {
    position: relative;
  }
`;
const HeaderTitle = styled(Title)`
  font-size: 30px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Main = styled.main`
  display: flex;
  height: auto;
  padding: 15px;
  margin-top: 50px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const MusicPage = () => {
  const isValid = useSelector((state) => state.user.info).verified_email ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isValid) return;
    navigate('/');
    alert('로그인이 필요합니다.');
  }, [isValid]);
  return (
    <Layout>
      <Header>
        <HeaderTitle>Moon Player</HeaderTitle>
        <HeaderList />
      </Header>
      <Nav>
        <Genre />
      </Nav>
      <Main>
        <PlayList />
        <Player />
      </Main>
    </Layout>
  );
};

export default MusicPage;
