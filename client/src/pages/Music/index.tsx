import styled from 'styled-components';
import Navigation from 'components/Music/Navigation/';
import Genre from 'components/Music/Genre';
import CustomPlayList from 'components/Music/CustomPlayList';
import PlayList from 'components/Music/PlayList';
import Footer from 'components/Music/Footer';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import PlayerList from 'components/Music/Player/index';
import Flex from 'components/Global/style/Flex';
import { ConfirmContextProvider } from 'provider/Confirm';
import { ConfirmDialog } from 'components/Global/UI/Dialog/Confirm/ConfirmDialog';
import useUIControl from 'hooks/useUIControl';
import MusicInfoDialog from 'components/Global/UI/Dialog/MusicInfo/MusicInfoDialog';
import { useAppSelector } from 'hooks/useAppDispatch';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerControlModule();
  const { isOpenCustomPlayListUI } = useUIControl();

  const { name, img_url } = useAppSelector((state) => state.layout.music.musicDialog.info);
  return (
    <ConfirmContextProvider>
      <ConfirmDialog />
      <MusicInfoDialog name={name} img_url={img_url} />
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
    </ConfirmContextProvider>
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
