import styled from 'styled-components';
import Flex from 'components/Global/Flex';
import Image from 'components/Global/Image';
import Text from 'components/Global/Text';

import { PlayerControl } from 'types/app';

interface InfoProps {
  player: PlayerControl;
}

export const Info = ({ player }: InfoProps) => {
  const image =
    player.music.video_title.length > 0 ? (
      <MusicImage img={player.music.video_img} />
    ) : (
      <MusicImage img="https://via.placeholder.com/400?text=No+Selected+Music" />
    );
  const title = player.music && player.music.video_title;

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      {image}
      <MusicTitle>{title}</MusicTitle>
    </Root>
  );
};

const Root = styled(Flex)``;

const MusicTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  color: white;
`;

const MusicImage = styled(Image)`
  width: 400px;
  height: auto;
`;
export default Info;
