import { usePlayerControlModule } from 'hooks/usePlayerControlModule';
import { formatTime } from 'utils/app/Player';

import { Flex } from 'components/Global/style/Flex';
import styled from 'styled-components';
import ProgressBar from './ProgressBar/ProgressBar';
import Volume from './Volume/Volume';
import MusicInfo from './MusicInfo/MusicInfo';
import Controller from './Controller/Controller';
import useModal from 'hooks/useModal';
export const Footer = ({ player }) => {
  const {
    handleRepeatMusic,
    handlePlayMusic,
    handleVolumeMusic,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  } = usePlayerControlModule();
  const { isOpenFooterUI } = useModal();
  const currentTime = formatTime(+player.currentTime);
  const endTime = formatTime(+player.endTime);
  const elapsedTime = Math.floor((+player.currentTime / +player.endTime) * 100);
  const playerVolume = player.volume.toString();
  return isOpenFooterUI ? (
    <Layout>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
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
  ) : (
    <>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
    </>
  );
};

const Layout = styled.div`
  margin-top: 5px;
`;
const MusicInfoBox = styled(Flex)`
  margin-top: 5px;
`;
export default Footer;
