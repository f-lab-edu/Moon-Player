import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Navigation from 'components/Music/Navigation/';
import Genre from 'components/Music/Genre';
import Player from 'components/Music/Player';
import PlayList from 'components/Music/PlayList';
const MusicPage = () => {
  return (
    <Layout>
      <Navigation />
      <Genre />
      <Main direction="row">
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
  padding: 50px;
  justify-content: center;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
export default MusicPage;
