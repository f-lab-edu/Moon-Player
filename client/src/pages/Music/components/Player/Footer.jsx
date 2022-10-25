import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from 'components/Common/Title';
import { faShuffle, faBackwardStep, faPlayCircle, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import Progressbar from 'components/Common/Progressbar';
import Image from 'components/Common/Image';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SmallButton from 'components/Common/SmallButton';
import usePlayer from 'hooks/usePlayer';
import ReactPlayer from 'react-player/youtube';

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
  const music = useSelector(state => state.musicReducer.musicPlayer.playItem)
  const { handlePlay, player } = usePlayer(music)

  const handleClickPlay = () => {
    handlePlay()
  }

  return (
    <footer>

      <ImageBox>
        <PlayingImage img={music.image} />
      </ImageBox>

      <PlayingTitle>{music.title}</PlayingTitle>
      <div>
        <IconBox>
          {player}

          <div>
            <FontAwesomeIcon icon={faBackwardStep} size={'3x'} color={'#6633cc'} />
            <SmallButton onClick={handleClickPlay}>

              <FontAwesomeIcon icon={faPlayCircle} size={'3x'} color={'#6633cc'} />
            </SmallButton>
            <FontAwesomeIcon icon={faForwardStep} size={'3x'} color={'#6633cc'} />
          </div>
          <div>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'#6633cc'} />
          </div>

        </IconBox>
      </div>
      <Progressbar />
    </footer>

  )
}

export default Footer