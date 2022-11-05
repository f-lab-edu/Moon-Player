import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Title } from 'components/Common/Title';
import LoginForm from './Form';
import FlexCenterColumn from 'components/Common/FlexCenterColumn';
import Avatar from 'components/Common/Avatar';

const Layout = styled(FlexCenterColumn)`
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  height: 100vh;
`;
const Box = styled(FlexCenterColumn)`
  padding: ${({ theme }) => theme.paddings.xl};
  box-shadow: ${({ theme }) => theme.boxShadows.two};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  background: rgba(255, 255, 255, 0.5);
`;
const Header = styled(FlexCenterColumn)`
  margin-bottom: 30px;
`;

const LoginPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <Layout>
      <Box>
        <Header>
          <Title size={theme.fontSizes.titleSize} color={theme.colors.white}>
            Moon Player
          </Title>
          <Avatar src={theme.images.Logo} height="100px" width="100px" />
        </Header>
        <LoginForm />
      </Box>
    </Layout>
  );
};

export default LoginPage;
