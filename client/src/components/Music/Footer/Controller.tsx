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
      <IconButtonBox direction="row" gap="2px">
        {isRepeat ? (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="white" />
        ) : (
          <IconButton onClick={onRepeat} name="repeat" size="2x" color="gray" />
        )}

        <IconButton onClick={onShuffleMusic} name="shuffle" size="2x" color="white" />
      </IconButtonBox>
      <IconButtonBox direction="row" gap="3px">
        <IconButton onClick={onPrevMusic} name="backward" size="2x" color="white" />
        {isPlaying ? (
          <IconButton onClick={onPlay} name="pause" size="2x" color="white" />
        ) : (
          <IconButton onClick={onPlay} name="play" size="2x" color="gray" />
        )}
        <IconButton onClick={onNextMusic} name="forward" size="2x" color="white" />
      </IconButtonBox>
    </Layout>
  );
};

export default Controller;
const Layout = styled(Flex)`
  padding: 0px 10px;
  color: gray;
  cursor: pointer;
`;
const IconButtonBox = styled(Flex)`
  margin: 15px;
`;
