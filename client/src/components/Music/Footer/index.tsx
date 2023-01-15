import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import { formatTime } from 'utils/app/Player';

import { Flex } from 'components/Global/style/Flex';
import styled from 'styled-components';
import ProgressBar from './ProgressBar/ProgressBar';
import Volume from './Volume/Volume';
import MusicInfo from './MusicInfo/MusicInfo';
import Controller from './Controller/Controller';
import useModal from 'hooks/useModal';
import { Hide } from './Hide/Hide';

// hide버튼 누를시 프로그레스바만 보이게 구현
export const Footer = ({ player }) => {
  const {
    handleRepeatMusic,
    handlePlayMusic,
    handleVolumeMusic,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  } = usePlayerControlModule();
  const { isOpenFooterUI, onhandleFooterUI } = useModal();
  const currentTime = formatTime(+player.currentTime);
  const endTime = formatTime(+player.endTime);
  const elapsedTime = Math.floor((+player.currentTime / +player.endTime) * 100);
  const playerVolume = player.volume.toString();
  return (
    <Layout active={isOpenFooterUI}>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <Hide />

      <MusicInfoBox direction="row">
        <MusicInfo player={player}></MusicInfo>
      </MusicInfoBox>

      <Flex direction="row" justifyContent="space-between">
        <Volume onVolume={handleVolumeMusic} volume={playerVolume} />
        <Controller
          player={player}
          onRepeat={handleRepeatMusic}
          onPlay={handlePlayMusic}
          onPrevMusic={handlePrevPlayingMusic}
          onNextMusic={handleNextPlayingMusic}
          onShuffleMusic={handleShuffleMusic}
        />
      </Flex>
    </Layout>
  );
};

interface LayoutProps {
  active: boolean;
}
const Layout = styled.div<LayoutProps>(
  ({ active }) => `
  
  transform: ${active ? 'translateY(55px)' : ''};
  transition:'0.48s ease';
  margin-top:${active ? '-55px' : ''};

`
);

const MusicInfoBox = styled(Flex)`
  margin-top: 4px;
`;
export default Footer;
