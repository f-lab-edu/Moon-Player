import { usePlayerControl } from 'hooks/usePlayerControl';
import { formatTime } from 'utils/app/Player';

import ProgressBar from './ProgressBar';
import Volume from './Volume';
import Controller from './Controller';
import MusicInfo from './Music';

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
      <MusicInfo player={playerState}></MusicInfo>
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
