import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Common/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep, faCirclePause, faRepeat, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/Common/Progressbar';
import Image from 'components/Common/Image';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from 'components/Common/IconButton';
import usePlayer from 'hooks/usePlayer';

import { prevPlayMusic, nextPlayMusic, shuffleMusic } from 'utils/Player';

import { handleNextMusic, handlePrevMusic, handleShuffleMusic, handleRepeatMusic, handlePlayerState, handleVolumeState } from 'store/feature/music/PlayerSlice';
import Slider from 'components/Common/Slider';

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
const VolumeBox = styled.div`
display :flex;
align-items: center;
color:#6633cc;
padding: 20px;
>:nth-child(1){
  margin-right: 20px;
}


`

const Footer = () => {
  const dispatch = useDispatch()
  const playingItems = useSelector(state => state.musicReducer.musicPlayer.playing)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)
  const { musicPlayer } = usePlayer()

  const handleClickPrevButton = () => dispatch(handlePrevMusic(prevPlayMusic(playerItems, playingItems.music)))
  const handleClickNextButton = () => dispatch(handleNextMusic(nextPlayMusic(playerItems, playingItems.music)))
  const handleShuffleButton = () => dispatch(handleShuffleMusic(shuffleMusic(playerItems)))
  const handleRepeatButton = () => dispatch(handleRepeatMusic(!playingItems.isrepeat))
  const handleClickPlayButton = () => { dispatch(handlePlayerState(!playingItems.isplaying)) }
  const handleChangeVolume = (event) => { dispatch(handleVolumeState(+event.target.value)) }

  const PlayButton = <IconButton onClick={handleClickPlayButton} > <FontAwesomeIcon icon={faPlayCircle} size={'3x'} /></IconButton >
  const PauseButton = <IconButton onClick={handleClickPlayButton}><FontAwesomeIcon icon={faCirclePause} size={'3x'} /></IconButton>

  return (
    <footer>
      <ImageBox>
        {playingItems.music && <MusicImage img={playingItems.music.video_img} />}
      </ImageBox>

      {playingItems.music && <MusicTitle>{playingItems.music.video_title}</MusicTitle>}
      <div>
        {playingItems.music && musicPlayer}
        <IconBox>
          <IconButton repeat={playingItems.isrepeat} onClick={handleRepeatButton}><FontAwesomeIcon icon={faRepeat} size={'2x'} /> </IconButton>
          <div>
            <IconButton onClick={handleClickPrevButton}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} />
            </IconButton>
            {playingItems.isplaying ? PauseButton : PlayButton}
            <IconButton onClick={handleClickNextButton}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} />
            </IconButton>
          </div>
          <IconButton onClick={handleShuffleButton}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} />
          </IconButton>
        </IconBox>
      </div>
      <div>
        <VolumeBox>
          <FontAwesomeIcon icon={faVolumeHigh} size={'2x'} />
          <Slider onChange={handleChangeVolume} volume={playingItems.volume} />
        </VolumeBox>

        <Progressbar />
      </div>
    </footer>

  )
}

export default Footer