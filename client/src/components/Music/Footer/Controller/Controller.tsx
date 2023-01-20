import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { PlayerControlModuleState } from 'types/app/player';
import { Volume } from '../Volume/Volume';

interface ControllerProps {
  player: PlayerControlModuleState;
  onRepeat: React.MouseEventHandler<HTMLButtonElement>;
  onPlay: React.MouseEventHandler<HTMLButtonElement>;
  onPrevMusic: React.MouseEventHandler<HTMLButtonElement>;
  onNextMusic: React.MouseEventHandler<HTMLButtonElement>;
  onShuffleMusic: React.MouseEventHandler<HTMLButtonElement>;
}

export const Controller = ({ player, onRepeat, onPlay, onPrevMusic, onNextMusic, onShuffleMusic }: ControllerProps) => {
  const isRepeat = player.isrepeat;
  const isPlaying = player.playing;

  return (
    <Layout direction="row">
      <FlexBox direction="row" gap="2px">
        {isRepeat ? (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="white" />
        ) : (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="gray" />
        )}

        <IconButton onClick={onShuffleMusic} name="shuffle" size="2x" color="white" />
      </FlexBox>
      <FlexBox direction="row" gap="3px">
        <IconButton onClick={onPrevMusic} name="backward" size="2x" color="white" />
        {isPlaying ? (
          <IconButton onClick={onPlay} name="pause" size="2x" color="white" />
        ) : (
          <IconButton onClick={onPlay} name="play" size="2x" color="gray" />
        )}
        <IconButton onClick={onNextMusic} name="forward" size="2x" color="white" />
      </FlexBox>
    </Layout>
  );
};

export default Controller;
const Layout = styled(Flex)`
  padding: 0px 10px;
  color: gray;
  cursor: pointer;
  > :nth-child(2) {
    justify-content: center;
  }
`;
const FlexBox = styled(Flex)`
  margin: 15px;
`;
