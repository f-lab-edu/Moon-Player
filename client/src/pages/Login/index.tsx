import styled from 'styled-components';
import LoginForm from 'components/Login/Form';
import Avatar from 'components/Common/UI/Avatar';
import Flex from 'components/Common/UI/Flex';
import Text from 'components/Common/UI/Text';

const LoginPage = () => {
  return (
    <Root direction="column" justifyContent="center" alignItems="center">
      <Box direction="column" justifyContent="center" alignItems="center">
        <Header direction="column" justifyContent="center" alignItems="center">
          <LoginTitle>Moon Player</LoginTitle>
          <LoginAvatar img="logo" />
        </Header>
        <LoginForm />
      </Box>
    </Root>
  );
};
const Root = styled(Flex)`
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
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
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.white};
`;
export default LoginPage;
