import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
import { formatTime } from 'utils/Player';
import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';
import { Line } from 'rc-progress';
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

const ProgressBarBox = styled.div(
  ({ theme }) => `
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  text-align:center;
`
);

export const Footer = () => {
  const {
    musicPlayer,
    playerState,
    handleRepeat,
    handlePlay,
    handleVolume,
    handleShuffleMusic,
    handlePrevMusic,
    handleNextMusic,
  } = usePlayerControl();
  const currentTime = formatTime(playerState.currentTime);
  const endTime = formatTime(playerState.endTime);
  const elapsedTime = Math.floor((playerState.currentTime / playerState.endTime) * 100);

  return (
    <div>
      <Flex direction="column" justifyContent="center" alignItems="center">
        {playerState && playerState.music ? (
          <Image src={playerState.music.video_img} width="400px" height="auto" />
        ) : (
          <Image src={'https://via.placeholder.com/400?text=No+Selected+Music'} width="400px" height="auto" />
        )}
      </Flex>
      {playerState.music && (
        <Text fontSize="20px" align="center">
          {playerState.music.video_title}
        </Text>
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
            <IconButton onClick={handlePrevMusic}>
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
            <IconButton onClick={handleNextMusic}>
              <FontAwesomeIcon icon={faForwardStep} size={'3x'} />
            </IconButton>
          </div>
          <IconButton onClick={handleShuffleMusic}>
            <FontAwesomeIcon icon={faShuffle} size={'2x'} color={'white'} />
          </IconButton>
        </IconBox>
      </div>
      <div>
        <VolumeBox>
          <FontAwesomeIcon icon={faVolumeHigh} size={'2x'} color={'white'} />
          <Slider onChange={handleVolume} volume={playerState.volume} />
        </VolumeBox>
        <ProgressBarBox>
          <Line strokeWidth={3} percent={elapsedTime} strokeColor={'white'} />
          <Text fontSize="20px" align="center">
            {currentTime} / {endTime}
          </Text>
        </ProgressBarBox>
      </div>
    </div>
  );
};

export default Footer;
