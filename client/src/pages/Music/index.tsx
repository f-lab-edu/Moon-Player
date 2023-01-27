import styled from 'styled-components';
import Navigation from 'components/Music/Navigation';
import Genre from 'components/Music/Genre';
import CustomPlayList from 'components/Music/CustomPlayList';
import Footer from 'components/Music/Footer';
import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import Flex from 'components/Global/style/Flex';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import Main from 'components/Music/Main';

const MusicPage = () => {
  const { musicPlayer, playerModuleSelector } = usePlayerControlModule();
  const { isOpenCustomPlayListUI } = useMusicPageUIControl();

  return (
    <Layout direction="column">
      <Navigation />
      <Genre />
      <Main />
      {playerModuleSelector.music && musicPlayer}
      <Footer player={playerModuleSelector} />
      {isOpenCustomPlayListUI ? <CustomPlayList /> : <></>}
    </Layout>
  );
};
const Layout = styled(Flex)`
  position: relative;

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

export default MusicPage;
