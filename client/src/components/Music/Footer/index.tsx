import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import { formatTime } from 'utils/app/Player';

import { Flex } from 'components/Global/style/Flex';
import styled from 'styled-components';
import ProgressBar from './ProgressBar/ProgressBar';
import Volume from './Volume/Volume';
import MusicInfo from './MusicInfo/MusicInfo';
import Controller from './Controller/Controller';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import HideController from './HideController/HideController';

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
      <HideController />
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <MusicInfo player={player}></MusicInfo>
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
  transform: ${!active ? 'translateY(120px)' : ''};
  transition:'0.48s ease';
  margin-top:${!active ? '-120px' : ''};
  `
);

export default Footer;
