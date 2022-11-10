import { useState, useEffect, useRef } from 'react';

import ReactPlayer from 'react-player/lazy';

import { useMusicSelector } from './useMusicSelector';
import { usePlayerSelectMusic } from './usePlayerSelectMusic';

const DEFAULT_STATE = {
  playing: false, // 재생중인지
  ismuted: false, // 음소거인지
  controls: true, // 기본으로 제공되는 컨트롤러 사용할건지
  volume: 50, // 볼륨크기
  playbackRate: 1.0, // 배속
  played: 0, // 재생의 정도 (value)
  seeking: false, // 재생바를 움직이고 있는지
  duration: 0, // 전체 시간
  music: '',
  isrepeat: false,
  currentTime: '00:00',
  endTime: '00:00',
};

//  전역스토어에있는 값만가지고 음악을 재생시켜주는 훅
export const usePlayerControl = (player) => {
  const playerRef = useRef();
  const { onPrevMusic, onNextMusic, onShuffleMusic } = usePlayerSelectMusic(); //음악을 고르는 훅
  const [playerState, setState] = useState(DEFAULT_STATE);

  const currentTime = playerRef && playerRef.current ? Math.floor(playerRef.current.getCurrentTime()) : '00:00';
  const endTime = playerRef && playerRef.current ? Math.floor(playerRef.current.getDuration()) : '00:00';
  useEffect(() => {
    if (!player.playmusic.id) return;
    setState({ ...playerState, playing: true, music: player.playmusic, currentTime, endTime });
  }, [player]);

  const handleRepeat = () => setState({ ...playerState, isrepeat: !playerState.isrepeat });

  const handlePlay = () => setState({ ...playerState, playing: !playerState.playing });
  const handleVolume = (e) => setState({ ...playerState, volume: +e.target.value });
  const handleOnProgress = () => setState({ ...playerState, currentTime, endTime });

  // useMusicSelector에 의존적이긴함.. 구조바꾸지않는이상
  const handleEndedMusic = () => onNextMusic();
  const handleShuffleMusic = () => onShuffleMusic();
  const handlePrevMusic = () => onPrevMusic();
  const handleNextMusic = () => onNextMusic();

  const musicPlayer = (
    <ReactPlayer
      ref={playerRef}
      style={{ opacity: 0 }}
      width="1px"
      height="1px"
      volume={parseFloat(playerState.volume / 100)}
      url={playerState.music && playerState.music.video_link}
      playing={playerState.playing}
      loop={playerState.isrepeat}
      // 재생이 끝나면 다음 음악재생
      onEnded={handleEndedMusic}
      onProgress={handleOnProgress}
    ></ReactPlayer>
  );
  return {
    musicPlayer,
    playerState,
    handleRepeat,
    handlePlay,
    handleVolume,
    handleShuffleMusic,
    handlePrevMusic,
    handleNextMusic,
  };
};
