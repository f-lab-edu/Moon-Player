
import ReactPlayer from 'react-player/lazy'
import { useDispatch, useSelector } from 'react-redux';
import { handleNextMusic } from 'store/feature/music/PlayerSlice';

import { nextPlayMusic } from 'utils/Player';

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

//  전역스토어에있는 값만가지고 음악을 재생시켜주는 훅
const usePlayer = () => {
  const playingItems = useSelector(state => state.musicReducer.musicPlayer.playing)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)

  const dispatch = useDispatch()

  const handleEndedMusic = () => dispatch(handleNextMusic(nextPlayMusic(playerItems, playingItems.music)))

  const musicPlayer = <ReactPlayer
    style={{ opacity: 0 }}
    width="1px"
    height="1px"
    volume={parseFloat(playingItems.volume / 100)}
    controls={true}
    url={playingItems.music && playingItems.music.video_link}
    playing={playingItems.isplaying}
    loop={playingItems.isrepeat}
    // 재생이 끝나면 다음 음악재생 
    onEnded={handleEndedMusic}

  ></ReactPlayer>
  return { musicPlayer }
}

export default usePlayer
