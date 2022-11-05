import styled from 'styled-components';
import Genre from './Genre';
import Player from './Player';
import PlayList from './PlayList';
import HeaderList from './Header';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { removeStoreItems } from 'utils/persist';
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px) {
    position: relative;
  }
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

    removeStoreItems(); // 리덕스 스토어 아이템 제거
    navigate('/');
    alert('로그인이 필요합니다.');
  }, [isValid]);
  return (
    <Layout>
      <Header>
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
