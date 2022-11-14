import styled from 'styled-components';
import Image from 'components/Common/Image';
import { usePlayerControl } from 'hooks/usePlayerControl';
import Slider from 'components/Common/Slider';
import { formatTime } from 'utils/Player';
import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';
import { Line } from 'rc-progress';
import FontAweSomeButton from 'components/Common/IconButton';
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
  const currentTime = formatTime(+playerState.currentTime);
  const endTime = formatTime(+playerState.endTime);
  const elapsedTime = Math.floor((+playerState.currentTime / +playerState.endTime) * 100);

  return (
    <>
      <ImageBox direction="column" justifyContent="center" alignItems="center">
        {playerState && playerState.music ? (
          <Image src={playerState.music.video_img} width="400px" height="auto" />
        ) : (
          <Image src={'https://via.placeholder.com/400?text=No+Selected+Music'} width="auto" height="auto" />
        )}
      </ImageBox>
      {playerState.music && (
        <Text fontSize="20px" align="center" color="white">
          {playerState.music.video_title}
        </Text>
      )}
      {playerState.music && musicPlayer}
      <IconBox direction="row" justifyContent="space-between" alignItems="center">
        {playerState.isrepeat ? (
          <FontAweSomeButton event={handleRepeat} icon="repeat" size="2x" color="white"></FontAweSomeButton>
        ) : (
          <FontAweSomeButton event={handleRepeat} icon="repeat" size="2x" color="gray"></FontAweSomeButton>
        )}

        <FontAweSomeButton event={handlePrevMusic} icon="backward" size="3x" color="white"></FontAweSomeButton>
        {playerState.playing ? (
          <FontAweSomeButton event={handlePlay} icon="pause" size="3x" color="white"></FontAweSomeButton>
        ) : (
          <FontAweSomeButton event={handlePlay} icon="play" size="3x" color="gray"></FontAweSomeButton>
        )}
        <FontAweSomeButton event={handleNextMusic} icon="forward" size="3x" color="white"></FontAweSomeButton>
        <FontAweSomeButton event={handleShuffleMusic} icon="shuffle" size="2x" color="white"></FontAweSomeButton>
      </IconBox>

      <VolumeBox>
        <FontAweSomeButton icon="volume" size="2x" color="white"></FontAweSomeButton>
        <Slider onChange={handleVolume} volume={playerState.volume.toString()} trackColor="gray" thumbColor="white" />
      </VolumeBox>

      <ProgressBarBox>
        <Line strokeWidth={3} percent={elapsedTime} strokeColor={'white'} />
        <Text fontSize="20px" align="center" color="white">
          {currentTime} / {endTime}
        </Text>
      </ProgressBarBox>
    </>
  );
};
const ImageBox = styled(Flex)`
  gap: '10px';
`;

const IconBox = styled(Flex)`
  padding: 20px;
  color: gray;
  cursor: pointer;
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
export default Footer;
