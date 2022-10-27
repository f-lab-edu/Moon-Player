
import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useDispatch, useSelector } from 'react-redux';
import { handleNextMusic } from 'store/feature/music/PlayerSlice';

import { nextPlayMusic } from 'pages/Music/utils/Player';

// const DEFAULT_STATE = {
//   playing: false,     // 재생중인지
//   ismuted: false,      // 음소거인지
//   controls: false,   // 기본으로 제공되는 컨트롤러 사용할건지
//   volume: 100,       // 볼륨크기
//   playbackRate: 1.0, // 배속
//   played: 0,         // 재생의 정도 (value)
//   seeking: false,    // 재생바를 움직이고 있는지
//   duration: 0,       // 전체 시간
// }

const usePlayer = () => {

  const playingMusic = useSelector(state => state.musicReducer.musicPlayer.playing.music)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const isRepeatMusic = useSelector(state => state.musicReducer.musicPlayer.playing.repeat)
  const isPlaying = useSelector(state => state.musicReducer.musicPlayer.playing.isplaying)
  const dispatch = useDispatch()

  const handleEndedMusic = () => dispatch(handleNextMusic(nextPlayMusic(playerItems, playingMusic)))

  const musicPlayer = <ReactPlayer
    style={{ opacity: 0 }}
    width="10px"
    height="10px"
    volume={100}
    controls={true}
    url={playingMusic && playingMusic.video_link}
    playing={isPlaying}
    loop={isRepeatMusic}
    // 재생이 끝나면 다음 음악재생 
    onEnded={handleEndedMusic}

  ></ReactPlayer>
  return { musicPlayer }
}

export default usePlayer
