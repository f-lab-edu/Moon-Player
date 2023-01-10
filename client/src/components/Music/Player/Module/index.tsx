import { usePlayerControl } from 'hooks/usePlayerControl';
import { formatTime } from 'utils/app/Player';

import ProgressBar from './ProgressBar';
import Volume from './Volume';
import Controller from './Controller';
import MusicInfo from './Music';
import { Flex } from 'components/Global/style/Flex';
import styled from 'styled-components';

export const Footer = () => {
  const {
    musicPlayer,
    playerState,
    handleRepeat,
    handlePlay,
    handleVolume,
    handleShuffleMusic,
    handlePrevMusic,
    handleNextMusic,
  } = usePlayerControl();
  const currentTime = formatTime(+playerState.currentTime);
  const endTime = formatTime(+playerState.endTime);
  const elapsedTime = Math.floor((+playerState.currentTime / +playerState.endTime) * 100);
  const playerVolume = playerState.volume.toString();

  return (
    <Layout>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <MusicInfoBox direction="row">
        <MusicInfo player={playerState}></MusicInfo>
        {playerState.music && musicPlayer}
      </MusicInfoBox>

      <Flex direction="row" justifyContent="space-between">
        <Volume onVolume={handleVolume} volume={playerVolume} />
        <Controller
          player={playerState}
          onRepeat={handleRepeat}
          onPlay={handlePlay}
          onPrevMusic={handlePrevMusic}
          onNextMusic={handleNextMusic}
          onShuffleMusic={handleShuffleMusic}
        />
      </Flex>
    </Layout>
  );
};
const Layout = styled.div`
  margin-top: 10px;
  max-height: auto;
`;
const MusicInfoBox = styled(Flex)`
  margin-top: 5px;
`;
export default Footer;
