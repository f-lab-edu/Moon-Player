
import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useDispatch } from 'react-redux';
import { handleNextMusic } from 'store/feature/music/PlayerSlice';

const DEFAULT_STATE = {
  playing: false,     // 재생중인지
  ismuted: false,      // 음소거인지
  controls: false,   // 기본으로 제공되는 컨트롤러 사용할건지
  volume: 100,       // 볼륨크기
  playbackRate: 1.0, // 배속
  played: 0,         // 재생의 정도 (value)
  seeking: false,    // 재생바를 움직이고 있는지
  duration: 0,       // 전체 시간
}

const usePlayer = (music, playerItems) => {
  const dispatch = useDispatch()
  const [state, setState] = useState(DEFAULT_STATE)
  const { playing, volume } = state

  const handlePlayMusic = () => {
    setState({ ...state, playing: !state.playing });
  }
  const handleEndedMusic = () => {
    const nextMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) + 1
    const nextMusic = nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0]
    dispatch(handleNextMusic(nextMusic))
  }

  const musicPlayer = <ReactPlayer
    style={{ opacity: 0 }}
    width="10px"
    height="10px"
    volume={volume}
    controls={true}
    url={music && music.video_link}
    playing={playing}
    // 재생이 끝나면 다음 음악재생 
    onEnded={handleEndedMusic}

  ></ReactPlayer>
  return { musicPlayer, playing, handlePlayMusic }
}

export default usePlayer
