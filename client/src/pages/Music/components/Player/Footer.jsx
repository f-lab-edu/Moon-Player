import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Common/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep, faCirclePause, faRepeat } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/Common/Progressbar';
import Image from 'components/Common/Image';
import { useSelector, useDispatch } from 'react-redux';
import SmallButton from 'components/Common/SmallButton';
import usePlayer from 'hooks/usePlayer';

import { prevPlayMusic, nextPlayMusic, shuffleMusic } from 'pages/Music/utils/Player';
import { handleNextMusic, handlePrevMusic, handleShuffleMusic, handleRepeatMusic, handlePlayerState } from 'store/feature/music/PlayerSlice';

const IconBox = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    cursor:pointer;
    >:nth-child(2){
      display: flex;
      gap:20px;
     }
`
const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    padding:10px 0px;
    align-items: center;
   
`
const MusicTitle = styled(Title)`
    font-size: 20px;
    color:white;
    text-align: center;
    font-weight: 900;
`
const MusicImage = styled(Image)`
   width: 400px;
   height: auto;
`

const Footer = () => {
  const dispatch = useDispatch()
  const playingMusic = useSelector(state => state.musicReducer.musicPlayer.playing.music)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const isRepeatMusic = useSelector(state => state.musicReducer.musicPlayer.playing.repeat)
  const isPlaying = useSelector(state => state.musicReducer.musicPlayer.playing.isplaying)
  const { musicPlayer } = usePlayer()

  const handleClickPrevButton = () => dispatch(handlePrevMusic(prevPlayMusic(playerItems, playingMusic)))
  const handleClickNextButton = () => dispatch(handleNextMusic(nextPlayMusic(playerItems, playingMusic)))
  const handleShuffleButton = () => dispatch(handleShuffleMusic(shuffleMusic(playerItems)))
  const handleRepeatButton = () => dispatch(handleRepeatMusic(!isRepeatMusic))
  const handleClickPlayButton = () => { dispatch(handlePlayerState(!isPlaying)) }

  const PlayButton = <SmallButton onClick={handleClickPlayButton} > <FontAwesomeIcon icon={faPlayCircle} size={'3x'} /></SmallButton >
  const PauseButton = <SmallButton onClick={handleClickPlayButton}><FontAwesomeIcon icon={faCirclePause} size={'3x'} /></SmallButton>

  return (
    <footer>
      <ImageBox>
        {playingMusic && <MusicImage img={playingMusic.video_img} />}
      </ImageBox>

      {playingMusic && <MusicTitle>{playingMusic.video_title}</MusicTitle>}
      <div>
        {playingMusic && musicPlayer}
        <IconBox>
          <SmallButton repeat={isRepeatMusic} onClick={handleRepeatButton}><FontAwesomeIcon icon={faRepeat} size={'2x'} /> </SmallButton>
          <div>
            <SmallButton onClick={handleClickPrevButton}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} />
            </SmallButton>
            {isPlaying ? PauseButton : PlayButton}
            <SmallButton onClick={handleClickNextButton}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} />
            </SmallButton>
          </div>
          <SmallButton onClick={handleShuffleButton}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} />
          </SmallButton>
        </IconBox>
      </div>
      <Progressbar />
    </footer>

  )
}

export default Footer