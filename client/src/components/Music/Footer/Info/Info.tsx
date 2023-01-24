import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Image from 'components/Global/style/Image';
import Text from 'components/Global/style/Text';

import { PlayerControlModuleType } from 'types/app/player';

interface InfoProps {
  player: PlayerControlModuleType;
}

export const Info = ({ player }: InfoProps) => {
  const image =
    player.music.name.length > 0 ? (
      <StyledImage img={player.music.img_url} />
    ) : (
      <StyledImage img="https://via.placeholder.com/400?text=No+Selected+Music" />
    );
  const title = player.music && player.music.name;

  return (
    <Layout direction="row" justifyContent="flex-start" alignItems="center">
      {image}
      <Title>{title}</Title>
    </Layout>
  );
};

const Layout = styled(Flex)`
  flex: 1;
  margin-left: 48px;
`;
const Title = styled(Text)`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
  margin: 0px 16px;
`;

const StyledImage = styled(Image)`
  width: 56px;
  height: 56px;
  object-fit: cover;
`;

export default Info;
