import { usePlayerControl } from 'hooks/usePlayerControl';
import { formatTime } from 'utils/Player';

import ProgressBar from './ProgressBar';
import Volume from './Volume';
import Controller from './Controller';
import Info from './Info';

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
      <Info player={playerState}></Info>
      {playerState.music && musicPlayer}
      <Controller
        player={playerState}
        onRepeat={handleRepeat}
        onPlay={handlePlay}
        onPrevMusic={handlePrevMusic}
        onNextMusic={handleNextMusic}
        onShuffleMusic={handleShuffleMusic}
      ></Controller>
      <Volume onVolume={handleVolume} volume={playerVolume}></Volume>
      <ProgressBar currentTime={currentTime} endTime={endTime} elapsedTime={elapsedTime} />
    </>
  );
};

export default Footer;
