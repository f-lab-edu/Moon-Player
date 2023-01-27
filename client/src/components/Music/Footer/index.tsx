import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import { formatTime } from 'utils/app/Player';

import { Flex } from 'components/Global/style/Flex';
import styled from 'styled-components';
import ProgressBar from './ProgressBar/ProgressBar';
import Volume from './Volume/Volume';
import Info from './Info/Info';
import Controller from './Controller/Controller';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import HideButton from './HideButton/HideButton';

export const Footer = ({ player }) => {
  const {
    handleRepeatMusic,
    handlePlayMusic,
    handleVolumeMusic,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  } = usePlayerControlModule();

  const { isOpenMusicFooterUI } = useMusicPageUIControl();
  const currentTime = formatTime(+player.currentTime);
  const endTime = formatTime(+player.endTime);
  const elapsedTime = Math.floor((+player.currentTime / +player.endTime) * 100);
  const playerVolume = player.volume.toString();
  return (
    <Layout active={isOpenMusicFooterUI}>
      <HideButton />
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <Info player={player}></Info>
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
  position:fixed;
  bottom:0;
  width:100%;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
  transform: ${!active ? 'translateY(120px)' : ''};
  transition:'0.48s ease';
  margin-top:${!active ? '-120px' : ''};
  `
);

export default Footer;
