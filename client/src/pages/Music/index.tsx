import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Navigation from 'components/Music/Navigation/Root/Root';
import Genre from 'components/Music/Genre/Root/Root';
import Player from 'components/Music/Player/Root/Root';
import PlayList from 'components/Music/PlayList/Root/Root';
const MusicPage = () => {
  return (
    <Root>
      <Navigation />
      <Genre />
      <Main direction="row">
        <PlayList />
        <Player />
      </Main>
    </Root>
  );
};
const Root = styled.div`
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
