import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy'

const usePlayer = (musics) => {
  const playList = []
  musics.forEach((music, index) => {
    playList.push({
      'music': `https://www.youtube.com/watch?v=${music.video_id}`,
      'index': index + 1
    })
  });
  // 현재 재생중인 음악에서 이전 인덱스삭제하면 문제발생

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

  const [playIndex, setplayIndex] = useState(0)
  const { playing, volume } = state

  const handlePlayMusic = () => setState({ ...state, playing: !state.playing }); // playing값 true false
  const handleNextMusic = () => playIndex === playList.length - 1 ? setplayIndex(0) : setplayIndex(playIndex + 1) //다음 음악으로 

  console.log(musics, playIndex)
  const player = <ReactPlayer
    // style={{ opacity: 0 }}
    width="250px"
    height="250px"
    volume={volume}
    controls={true}
    url={playList.length > 0 && playList[playIndex].music}
    playing={playing}
    onEnded={() => handleNextMusic()}
  // 재생이 끝나면 다음 인덱스로 
  ></ReactPlayer>

  return { handlePlayMusic, player, playIndex }
}

export default usePlayer