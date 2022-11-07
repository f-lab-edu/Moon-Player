import styled from 'styled-components';
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
