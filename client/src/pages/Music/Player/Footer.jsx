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
import Image from 'components/Common/Image';
import IconButton from 'components/Common/IconButton';
import { usePlayerControl } from 'hooks/usePlayerControl';
import Slider from 'components/Common/Slider';
import { Progressbar } from './Progressbar';
import { formatTime } from 'utils/Player';
import Flex from 'components/Common/Flex';
const IconBox = styled(Flex)`
  padding: 20px;
  color: gray;
  cursor: pointer;
  > :nth-child(2) {
    display: flex;
    gap: 20px;
  }
`;
const VolumeBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  padding: 10px 20px 20px 20px;

  > :nth-child(1) {
    margin-right: 20px;
  }
`;

export const Footer = () => {
  const { musicPlayer, playerState, handleRepeat, handlePlay, handleVolume, handleShuffle, handlePrev, handleNext } =
    usePlayerControl();
  return (
    <div>
      <Flex direction="column" justifyContent="center" alignItems="center" style={{ padding: '10px 0px' }}>
        {playerState && playerState.music ? (
          <Image src={playerState.music.video_img} />
        ) : (
          <Image src={'https://via.placeholder.com/400?text=No+Selected+Music'} width="400px" height="auto" />
        )}
      </Flex>
      {playerState.music && (
        <Title size="20px" style={{ textAlign: 'center' }}>
          {playerState.music.video_title}
        </Title>
      )}
      <div>
        {playerState.music && musicPlayer}
        <IconBox direction="row" justifyContent="space-between" alignItems="center">
          {playerState.isrepeat ? (
            <IconButton onClick={handleRepeat}>
              <FontAwesomeIcon icon={faRepeat} size={'2x'} color={'white'} />
            </IconButton>
          ) : (
            <IconButton onClick={handleRepeat}>
              <FontAwesomeIcon icon={faRepeat} size={'2x'} color={'gray'} />
            </IconButton>
          )}
          <div>
            <IconButton onClick={handlePrev}>
              <FontAwesomeIcon icon={faBackwardStep} size={'3x'} />
            </IconButton>
            {playerState.playing ? (
              <IconButton onClick={handlePlay}>
                <FontAwesomeIcon icon={faCirclePause} size={'3x'} />
              </IconButton>
            ) : (
              <IconButton onClick={handlePlay}>
                {' '}
                <FontAwesomeIcon icon={faPlayCircle} size={'3x'} color={'gray'} />
              </IconButton>
            )}
            <IconButton onClick={handleNext}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} />
            </IconButton>
          </div>
          <IconButton onClick={handleShuffle}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'white'} />
          </IconButton>
        </IconBox>
      </div>
      <div>
        <VolumeBox>
          <FontAwesomeIcon icon={faVolumeHigh} size={'2x'} color={'white'} />
          <Slider onChange={handleVolume} volume={playerState.volume} />
        </VolumeBox>
        <Progressbar
          time={{
            currentTime: formatTime(playerState.currentTime),
            endTime: formatTime(playerState.endTime),
            elapsedTime: Math.floor((playerState.currentTime / playerState.endTime) * 100),
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
