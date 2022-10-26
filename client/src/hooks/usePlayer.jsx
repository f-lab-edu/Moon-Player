
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import usePrevious from './usePrevious';

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

const usePlayer = (playingItems) => {
  console.log(playingItems)
  const [state, setState] = useState(DEFAULT_STATE)
  const [playIndex, setIndex] = useState(0)
  const playMusics = playingItems
  const playMusicslength = playMusics.length
  const prevMusicslength = usePrevious(playMusicslength)

  const { playing, volume } = state

  useEffect(() => {
    console.log('delelte', playMusicslength, prevMusicslength)
    if (playMusicslength < prevMusicslength) {
      console.log('delete', playIndex)
      setIndex(0)
    }
  }, [playMusicslength])

  // 1. 다음 음악으로
  const handleNextMusic = () => {
    return playIndex === playMusics.length - 1 ? setIndex(0) : setIndex(playIndex + 1)
  }
  // 2. 이전 음악으로 
  const handlePrevMusic = () => {
    return playIndex === 0 ? setIndex(playMusics.length - 1) : setIndex(playIndex - 1)
  }
  // 3. 현재 음악 재생 or 정지
  const handlePlayMusic = () => {
    setState({ ...state, playing: !state.playing });
  }

  const player = <ReactPlayer
    // style={{ opacity: 0 }}
    width="100px"
    height="100px"
    volume={volume}
    controls={true}
    url={playMusics.length > 0 && playMusics[0].video_link}
    playing={playing}
    onEnded={handleNextMusic}
  // 재생이 끝나면 다음 음악재생 
  ></ReactPlayer>

  return { player, playing, handleNextMusic, handlePrevMusic, handlePlayMusic, playIndex }
}

export default usePlayer
