import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title } from 'components/Common/Title';
import {
  faShuffle,
  faBackwardStep,
  faPlayCircle,
  faForwardStep,
  faCirclePause,
  faRepeat,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'components/Common/Image';
import IconButton from 'components/Common/IconButton';
import { usePlayerControl } from 'hooks/usePlayerControl';
import Slider from 'components/Common/Slider';
import { handleShuffleMusics, handlePrevMusic, handleNextMusic } from 'store/feature/music/PlayerSlice';
import { shuffleMusic, prevPlayMusic, nextPlayMusic } from 'utils/Player';
import { Progressbar } from './Progressbar';
import { FlexCenterColumn } from 'components/Common/FlexCenterColumn';

const IconBox = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  > :nth-child(2) {
    display: flex;
    gap: 20px;
  }
`;
const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  color: #6633cc;
  padding: 20px;
  > :nth-child(1) {
    margin-right: 20px;
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();
  const playItem = useSelector((state) => state.music.player.playmusic);
  const playerItems = useSelector((state) => state.music.player.playerItems);
  const { musicPlayer, playerState, handleRepeat, handlePlay, handleVolume } = usePlayerControl(playItem, playerItems);
  const PlayButton = (
    <IconButton onClick={handlePlay}>
      {' '}
      <FontAwesomeIcon icon={faPlayCircle} size={'3x'} />
    </IconButton>
  );
  const PauseButton = (
    <IconButton onClick={handlePlay}>
      <FontAwesomeIcon icon={faCirclePause} size={'3x'} />
    </IconButton>
  );

  const handleShuffle = () => dispatch(handleShuffleMusics(shuffleMusic(playerItems)));
  const handlePrev = () => dispatch(handlePrevMusic(prevPlayMusic(playerItems, playItem)));
  const handleNext = () => dispatch(handleNextMusic(nextPlayMusic(playerItems, playItem)));

  return (
    <div>
      <FlexCenterColumn style={{ padding: '10px 0px' }}>
        {playerState && playerState.music ? (
          <Image src={playerState.music.video_img} width="400px" />
        ) : (
          <Image src={'https://via.placeholder.com/400?text=No+Selected+Music'} width="400px" />
        )}
      </FlexCenterColumn>
      {playerState.music && (
        <Title size="20px" color="white" style={{ textAlign: 'center' }}>
          {playerState.music.video_title}
        </Title>
      )}
      <div>
        {playerState.music && musicPlayer}
        <IconBox>
          <IconButton isActive={playerState.isrepeat} onClick={handleRepeat}>
            <FontAwesomeIcon icon={faRepeat} size={'2x'} />{' '}
          </IconButton>
          <div>
            <IconButton onClick={handlePrev}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} />
            </IconButton>
            {playerState.playing ? PauseButton : PlayButton}
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
          <Slider onChange={handleVolume} volume={playerState.volume} />
        </VolumeBox>
        <Progressbar time={{ currentTime: playerState.currentTime, endTime: playerState.endTime }} />
      </div>
    </div>
  );
};

export default Footer;
