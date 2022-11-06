import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import LoginForm from './Form';
import Avatar from 'components/Common/Avatar';
import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';

const Layout = styled(Flex)`
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  height: 100vh;
`;
const FlexBox = styled(Flex)`
  padding: ${({ theme }) => theme.paddings.xl};
  box-shadow: ${({ theme }) => theme.boxShadows.two};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: rgba(255, 255, 255, 0.5);
`;
const Header = styled(Flex)`
  margin-bottom: 30px;
`;

const LoginPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <FlexBox direction="column" justifyContent="center" alignItems="center">
        <Header direction="column" justifyContent="center" alignItems="center">
          <Text fontSize={theme.fontSizes.titleSize} color={theme.colors.white}>
            Moon Player
          </Text>
          <Avatar src={theme.images.Logo} height="100px" width="100px" />
        </Header>
        <LoginForm />
      </FlexBox>
    </Layout>
  );
};

export default LoginPage;
