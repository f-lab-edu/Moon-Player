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
    <>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
      <MusicInfoBox direction="row">
        <MusicInfo player={playerState}></MusicInfo>
        {playerState.music && musicPlayer}
      </MusicInfoBox>
      <Controller
        player={playerState}
        onRepeat={handleRepeat}
        onPlay={handlePlay}
        onPrevMusic={handlePrevMusic}
        onNextMusic={handleNextMusic}
        onShuffleMusic={handleShuffleMusic}
      />
      <Volume onVolume={handleVolume} volume={playerVolume} />
    </>
  );
};
const MusicInfoBox = styled(Flex)`
  margin-top: 5px;
`;
export default Footer;
