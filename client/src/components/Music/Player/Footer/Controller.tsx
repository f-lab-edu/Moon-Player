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
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      {isRepeat ? (
        <IconButton onClick={onRepeat} name="repeat" size="2x" color="white"></IconButton>
      ) : (
        <IconButton onClick={onRepeat} name="repeat" size="2x" color="gray"></IconButton>
      )}

      <IconButton onClick={onPrevMusic} name="backward" size="3x" color="white"></IconButton>
      {isPlaying ? (
        <IconButton onClick={onPlay} name="pause" size="3x" color="white"></IconButton>
      ) : (
        <IconButton onClick={onPlay} name="play" size="3x" color="gray"></IconButton>
      )}
      <IconButton onClick={onNextMusic} name="forward" size="3x" color="white"></IconButton>
      <IconButton onClick={onShuffleMusic} name="shuffle" size="2x" color="white"></IconButton>
    </Layout>
  );
};

export default Controller;
const Layout = styled(Flex)`
  padding: 20px;
  color: gray;
  cursor: pointer;
`;
