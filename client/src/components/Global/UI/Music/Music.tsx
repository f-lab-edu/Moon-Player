import Flex from 'components/Global/style/Flex';
import Image from 'components/Global/style/Image';
import OverFlowText from 'components/Global/style/OverFlowText';
import Text from 'components/Global/style/Text';
import styled from 'styled-components';
import { ReactElement } from 'react';

interface MusicProps {
  name: string;
  img_url: string;
  id: number;
  children?: ReactElement;
}
export const Music = ({ name, img_url, id, children }: MusicProps) => {
  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Number>{id}</Number>
      <StyledImage img={img_url} />
      <Title>{name}</Title>
      {children}
    </Layout>
  );
};
const Layout = styled(Flex)`
  padding: 0px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &:last-child {
    border-bottom: none;
  }
  height: 84px;
  overflow: hidden;
`;

const Number = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;

const Title = styled(OverFlowText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
`;
const StyledImage = styled(Image)`
  width: 128px;
`;

export default Music;
