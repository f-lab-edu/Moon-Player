import styled from 'styled-components';
import LoginForm from 'components/Login/Form';
import Avatar from 'components/Common/Avatar';
import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';

const LoginPage = () => {
  return (
    <Layout direction="column" justifyContent="center" alignItems="center">
      <FlexBox direction="column" justifyContent="center" alignItems="center">
        <Header direction="column" justifyContent="center" alignItems="center">
          <Text fontSize="40px" color="white">
            Moon Player
          </Text>
          <Avatar src="images/Loginlogo.png" height="100px" width="100px" />
        </Header>
        <LoginForm />
      </FlexBox>
    </Layout>
  );
};
const Layout = styled(Flex)`
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);
  height: 100vh;
`;
const FlexBox = styled(Flex)`
  padding: 27px;
  box-shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.5);
`;
const Header = styled(Flex)`
  margin-bottom: 30px;
`;
export default LoginPage;
