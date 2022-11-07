import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeStoreItems } from 'utils/persist';
import Flex from 'components/Common/Flex';
import Header from './Header/index';
import Genre from './Genre/index';
import Player from './Player/index';
import PlayList from './PlayList/index';

const Layout = styled.div`
  overflow-x: hidden;
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
`;

const Main = styled(Flex)`
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
      <Header direction="row" justifyContent="space-between" alignItems="center"></Header>
      <Genre />
      <Main>
        <PlayList />
        <Player />
      </Main>
    </Layout>
  );
};

export default MusicPage;
