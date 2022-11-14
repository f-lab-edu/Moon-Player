import { useState, useEffect, useRef } from 'react';

import ReactPlayer from 'react-player/lazy';

import { useMusicSelector } from './useMusicSelector';
import { usePlayerSelectMusic } from './usePlayerSelectMusic';

type Music = {
  video_link: string;
  video_title: string;
  video_img: string;
  id: number;
};
type PlayerControl = {
  playing: boolean;
  ismuted: boolean; // 음소거인지
  controls: boolean; // 기본으로 제공되는 컨트롤러 사용할건지
  volume: number; // 볼륨크기
  playbackRate: number; // 배속
  played: number; // 재생의 정도 (value)
  seeking: boolean; // 재생바를 움직이고 있는지
  duration: number; // 전체 시간
  music: Music;
  isrepeat: boolean;
  currentTime: string;
  endTime: string;
};
const DEFAULT_STATE: PlayerControl = {
  playing: false, // 재생중인지
  ismuted: false, // 음소거인지
  controls: true, // 기본으로 제공되는 컨트롤러 사용할건지
  volume: 50, // 볼륨크기
  playbackRate: 1.0, // 배속
  played: 0, // 재생의 정도 (value)
  seeking: false, // 재생바를 움직이고 있는지
  duration: 0, // 전체 시간
  music: { video_link: '', video_title: '', video_img: '', id: 0 },
  isrepeat: false,
  currentTime: '00:00',
  endTime: '00:00',
};

//  전역스토어에있는 값만가지고 음악을 재생시켜주는 훅
export const usePlayerControl = () => {
  const playerRef = useRef<ReactPlayer>(null);
  const [, , playerSelector] = useMusicSelector();
  const { onPrevMusic, onNextMusic, onShuffleMusic } = usePlayerSelectMusic(); //음악을 고르는 훅
  const [playerState, setState] = useState(DEFAULT_STATE);
  const currentTime =
    playerRef && playerRef.current ? Math.floor(playerRef.current.getCurrentTime()).toString() : '00:00';
  const endTime = playerRef && playerRef.current ? Math.floor(playerRef.current.getDuration()).toString() : '00:00';
  const volume = parseFloat((playerState.volume / 100).toString());

  useEffect(() => {
    if (!playerSelector.playmusic.id) return;
    setState({ ...playerState, playing: true, music: playerSelector.playmusic, currentTime, endTime });
  }, [playerSelector.playmusic.id]);

  const handleRepeat = () => setState({ ...playerState, isrepeat: !playerState.isrepeat });
  const handlePlay = () => setState({ ...playerState, playing: !playerState.playing });
  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...playerState, volume: +event.currentTarget.value });
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
      volume={volume}
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
