import styled from 'styled-components';
import Flex from 'components/Common/Flex';
import Header from 'components/Music/Header/Header';
import Genre from './Genre/index';
import Player from './Player/index';
import PlayList from './PlayList/index';
const MusicPage = () => {
  return (
    <Layout>
      <Header></Header>
      <Genre />
      <Main>
        <PlayList />
        <Player />
      </Main>
    </Layout>
  );
};
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
export default MusicPage;
