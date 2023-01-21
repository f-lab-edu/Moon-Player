import styled from 'styled-components';
import LoginForm from 'components/Login/Form/Form';
import Avatar from 'components/Global/style/Avatar';
import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';

const LoginPage = () => {
  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <Box direction="column" justifyContent="center" alignItems="center">
        <Header direction="column" justifyContent="center" alignItems="center">
          <LoginTitle>Moon Player</LoginTitle>
          <LoginAvatar img="logo" />
        </Header>
        <LoginForm />
      </Box>
    </Layout>
  );
};
const Layout = styled(Flex)`
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
  height: 100vh;
`;
const Box = styled(Flex)`
  padding: 27px;
  box-shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.5);
`;
const Header = styled(Flex)`
  margin-bottom: 30px;
`;

const LoginAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
`;

const LoginTitle = styled(Text)`
  font-size: 40px;
  color: rgba(255, 255, 255, 0.64);
`;
export default LoginPage;
