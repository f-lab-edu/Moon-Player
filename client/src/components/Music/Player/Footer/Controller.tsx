import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { PlayerControl } from 'types/app';

interface ControllerProps {
  player: PlayerControl;
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
    <Root direction="row" justifyContent="space-between" alignItems="center">
      {isRepeat ? (
        <IconButton onClick={onRepeat} icon="repeat" size="2x" color="white" />
      ) : (
        <IconButton onClick={onRepeat} icon="repeat" size="2x" color="gray" />
      )}
      <IconButton onClick={onShuffleMusic} icon="shuffle" size="2x" color="white" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <IconButton onClick={onPrevMusic} icon="backward" size="2x" color="white" />
      {isPlaying ? (
        <IconButton onClick={onPlay} icon="pause" size="2x" color="white" />
      ) : (
        <IconButton onClick={onPlay} icon="play" size="2x" color="gray" />
      )}
      <IconButton onClick={onNextMusic} icon="forward" size="2x" color="white" />
      
    </Root>
  );
};

export default Controller;
const Root = styled(Flex)`
  padding: 20px;
  color: gray;
  cursor: pointer;
`;
