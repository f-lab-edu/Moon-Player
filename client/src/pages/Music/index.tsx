import styled from 'styled-components';
import Navigation from 'components/Music/Navigation/';
import Genre from 'components/Music/Genre';
import CustomPlayList from 'components/Music/CustomPlayList';
import PlayList from 'components/Music/PlayList';
import Footer from 'components/Music/Footer';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import PlayerList from 'components/Music/Player/index';
import Flex from 'components/Global/style/Flex';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerControlModule();
  const { isOpenCustomPlayListUI } = useMusicPageUIControl();

  return (
    <Layout direction="column">
      <Navigation />
      <Genre />
      <Main direction="row">
        <PlayList />
        <PlayerList />
      </Main>
      {playerModuleSelector.music && musicPlayer}
      <Footer player={playerModuleSelector} />
      {isOpenCustomPlayListUI ? <CustomPlayList /> : <></>}
    </Layout>
  );
};
const Layout = styled(Flex)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
`;

const Main = styled(Flex)`
  padding: 0 48px 24px 48px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export default MusicPage;
