import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Common/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/Common/Progressbar';
import Image from 'components/Common/Image';
import { useSelector, useDispatch } from 'react-redux';
import SmallButton from 'components/Common/SmallButton';
import usePlayer from 'hooks/usePlayer';
import { handleNextMusic, handlePrevMusic } from 'store/feature/music/PlayerSlice';

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
const PlayingTitle = styled(Title)`
    font-size: 20px;
    color:white;
    text-align: center;
    font-weight: 900;
`
const PlayingImage = styled(Image)`
   width: 400px;
   height: auto;
`
const Footer = () => {
  const dispatch = useDispatch()
  const music = useSelector(state => state.musicReducer.musicPlayer.playing.music)
  const playerItems = useSelector(state => state.musicReducer.musicPlayer.playerItems)

  const { musicPlayer, playing, handlePlayMusic } = usePlayer(music, playerItems)

  const handleClickPrevButton = () => {
    const prevMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) - 1
    const prevMusic = prevMusicIndex < 0 ? playerItems[playerItems.length - 1] : playerItems[prevMusicIndex]
    dispatch(handlePrevMusic(prevMusic))

  }
  const handleClickNextButton = () => {
    const nextMusicIndex = playerItems.findIndex((item) => music.video_title === item.video_title) + 1
    const nextMusic = nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0]
    dispatch(handleNextMusic(nextMusic))
  }
  const handleShuffleButton = () => {
    console.log('shuffle')
  }

  const PlayButton = <SmallButton onClick={handlePlayMusic} > <FontAwesomeIcon icon={faPlayCircle} size={'3x'} color={'#6633cc'} /></SmallButton >
  const PauseButton = <SmallButton onClick={handlePlayMusic}><FontAwesomeIcon icon={faCirclePause} size={'3x'} color={'#6633cc'} /></SmallButton>

  return (
    <footer>
      <ImageBox>
        {music && <PlayingImage img={music.video_img} />}
      </ImageBox>

      {music && <PlayingTitle>{music.video_title}</PlayingTitle>}
      <div>
        <IconBox>
          {music ? musicPlayer : <div></div>}
          <div>
            <SmallButton onClick={handleClickPrevButton}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} color={'#6633cc'} />
            </SmallButton>
            {playing ? PauseButton : PlayButton}
            <SmallButton onClick={handleClickNextButton}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} color={'#6633cc'} />
            </SmallButton>
          </div>
          <div>
            <SmallButton onClick={handleShuffleButton}>
              <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'#6633cc'} />
            </SmallButton>
          </div>
        </IconBox>
      </div>
      <Progressbar />
    </footer>

  )
}

export default Footer