import styled from 'styled-components';
import Root from 'components/Global/style/Flex';
import Image from 'components/Global/style/Image';
import Text from 'components/Global/style/Text';

import { PlayerControl } from 'types/app';

interface InfoProps {
  player: PlayerControl;
}

export const Music = ({ player }: InfoProps) => {
  const image =
    player.music.video_title.length > 0 ? (
      <MusicImage img={player.music.video_img} />
    ) : (
      <MusicEmptyImage img="https://via.placeholder.com/400?text=No+Selected+Music" />
    );
  const title = player.music && player.music.video_title;

  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      {image}
      <MusicTitle>{title}</MusicTitle>
    </Root>
  );
};

const MusicTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const MusicImage = styled(Image)`
  width: 400px;
  height: auto;
`;

const MusicEmptyImage = styled(Image)`
  width: 400px;
  height: auto;
`;
export default Music;
