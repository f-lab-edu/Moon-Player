import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Title } from 'components/Common/Title';
import LoginForm from './Form';
import Avatar from 'components/Common/Avatar';
import Flex from 'components/Common/Flex';

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
          <Title size={theme.fontSizes.titleSize} color={theme.colors.white}>
            Moon Player
          </Title>
          <Avatar src={theme.images.Logo} height="100px" width="100px" />
        </Header>
        <LoginForm />
      </FlexBox>
    </Layout>
  );
};

export default LoginPage;
