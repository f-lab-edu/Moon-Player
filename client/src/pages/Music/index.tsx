import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Header from 'pages/Music/Header';
import Genre from './Genre/index';
import Player from './Player/index';
import PlayList from './PlayList/index';
import Footer from 'components/Music/Player/Footer';
const MusicPage = () => {
  return (
    <Root>
      <Header></Header>
      <Genre />
      <Main direction="row">
        <PlayList />
        <Player />
      </Main>
      <Footer />
    </Root>
  );
};
const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    333deg,
    rgba(12,12,56,1) 0%,
    rgba(45,34,76,1) 36%,
    rgba(36,18,95,1) 73%,
    rgba(38,64,92,1) 100%);
`;

const Main = styled(Flex)`
  height: auto;
  padding: 0 48px 24px; 48px;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export default MusicPage;
