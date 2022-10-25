import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'

const usePlayer = (music) => {

  const [state, setState] = useState({
    playing: false,     // 재생중인지
    muted: false,      // 음소거인지
    controls: false,   // 기본으로 제공되는 컨트롤러 사용할건지
    volume: 100,       // 볼륨크기
    playbackRate: 1.0, // 배속
    played: 0,         // 재생의 정도 (value)
    seeking: false,    // 재생바를 움직이고 있는지
    duration: 0,       // 전체 시간
  })
  const { playing } = state

  const player = <ReactPlayer
    style={{ opacity: 0 }}
    width="1px"
    height="1px"
    url={`https://www.youtube.com/watch?v=${music.video_id}`}
    playing={playing}
  ></ReactPlayer>

  const handlePlay = () => {
    setState({ ...state, playing: !state.playing });
  }

  return { handlePlay, player }
}

export default usePlayer