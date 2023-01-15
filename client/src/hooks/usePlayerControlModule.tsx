import { useEffect, useRef } from 'react';

import ReactPlayer from 'react-player/lazy';
import { usePlayerSelectMusic } from './usePlayerSelectMusic';
import { useAppSelector, useAppDispatch } from 'hooks/useAppDispatch';
import {
  handleRepeatMusicModule,
  handlePlayMusicModule,
  handleVolumeMusicModule,
  handleProgressBarModule,
  handlePlaySelectedMusicModlue,
} from 'store/feature/music/PlayerSlice';

export const usePlayerControlModule = () => {
  const dispatch = useAppDispatch();
  const playerRef = useRef<ReactPlayer>(null);
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerModuleSelector = useAppSelector((state) => state.music.player.playerControlModuleState);

  const { handlePrevPlayingMusic, handleNextPlayingMusic, handleShuffleMusic } = usePlayerSelectMusic(); //음악을 고르는 훅

  const currentTime =
    playerRef && playerRef.current ? Math.floor(playerRef.current.getCurrentTime()).toString() : '00:00';
  const endTime = playerRef && playerRef.current ? Math.floor(playerRef.current.getDuration()).toString() : '00:00';
  const volume = parseFloat((playerModuleSelector.volume / 100).toString());

  useEffect(() => {
    // 음악이 바뀌면 재생모듈안에있는 음악도 바껴야함
    if (!playerSelector.playingMusic.id) return;
    dispatch(
      handlePlaySelectedMusicModlue({
        ...playerModuleSelector,
        playing: true,
        music: playerSelector.playingMusic,
        currentTime,
        endTime,
      })
    );
  }, [playerSelector.playingMusic.id]);

  const handleRepeatMusic = () => {
    dispatch(handleRepeatMusicModule({ ...playerModuleSelector, isrepeat: !playerModuleSelector.isrepeat }));
  };

  const handlePlayMusic = () => {
    dispatch(handlePlayMusicModule({ ...playerModuleSelector, playing: !playerModuleSelector.playing }));
  };

  const handleVolumeMusic = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleVolumeMusicModule({ ...playerModuleSelector, volume: +event.currentTarget.value }));
  };

  const handleOnProgress = () => {
    dispatch(handleProgressBarModule({ ...playerModuleSelector, currentTime, endTime }));
  };

  const handleEndedMusic = () => handleNextPlayingMusic();

  const musicPlayer = (
    <ReactPlayer
      ref={playerRef}
      style={{ opacity: 0 }}
      width="1px"
      height="1px"
      volume={volume}
      url={playerModuleSelector.music && playerModuleSelector.music.source_url}
      playing={playerModuleSelector.playing}
      loop={playerModuleSelector.isrepeat}
      // 재생이 끝나면 다음 음악재생
      onEnded={handleEndedMusic}
      onProgress={handleOnProgress}
    ></ReactPlayer>
  );
  return {
    musicPlayer,
    playerModuleSelector,
    handleRepeatMusic,
    handlePlayMusic,
    handleVolumeMusic,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  };
};
