import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
export const MobileHeader = () => {
  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Title>M U S I C L I S T</Title>
      <Title>P L A Y L I S T</Title>
    </Layout>
  );
};

const Layout = styled(Flex)`
  margin: 0 auto;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;

const Title = styled(Text)`
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.64);

  padding-left: 10px;
  font-weight: normal;
`;
export default MobileHeader;
