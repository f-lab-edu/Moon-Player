import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Common/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep, faCirclePause, faRepeat, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/Common/Progressbar';
import Image from 'components/Common/Image';
import { useSelector } from 'react-redux';
import IconButton from 'components/Common/IconButton';
import { usePlayerControl } from 'hooks/usePlayerControl';

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

export const Footer = () => {
  const playingItems = useSelector(state => state.musicReducer.musicPlayer.playing)
  const { musicPlayer, handlePrev, handleNext, handleShuffle, handleRepeat, handlePlay, handleVolume } = usePlayerControl()
  const PlayButton = <IconButton onClick={handlePlay} > <FontAwesomeIcon icon={faPlayCircle} size={'3x'} /></IconButton >
  const PauseButton = <IconButton onClick={handlePlay}><FontAwesomeIcon icon={faCirclePause} size={'3x'} /></IconButton>

  return (
    <div>
      <ImageBox>
        {playingItems.music && <MusicImage img={playingItems.music.video_img} />}
      </ImageBox>
      {playingItems.music && <MusicTitle>{playingItems.music.video_title}</MusicTitle>}
      <div>
        {playingItems.music && musicPlayer}
        <IconBox>
          <IconButton isActive={playingItems.isrepeat} onClick={handleRepeat}><FontAwesomeIcon icon={faRepeat} size={'2x'} /> </IconButton>
          <div>
            <IconButton onClick={handlePrev}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} />
            </IconButton>
            {playingItems.isplaying ? PauseButton : PlayButton}
            <IconButton onClick={handleNext}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} />
            </IconButton>
          </div>
          <IconButton onClick={handleShuffle}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} />
          </IconButton>
        </IconBox>
      </div>
      <div>
        <VolumeBox>
          <FontAwesomeIcon icon={faVolumeHigh} size={'2x'} />
          <Slider onChange={handleVolume} volume={playingItems.volume} />
        </VolumeBox>
        <Progressbar />
      </div>
    </div>

  )
}
