import styled from 'styled-components';
import { Title } from 'components/Common/Title';
import LoginForm from './Form';
import FlexCenterColumn from 'components/Common/FlexCenterColumn';
import Avatar from 'components/Common/Avatar';

const Layout = styled(FlexCenterColumn)`
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  height: 100vh;
`;
const Box = styled(FlexCenterColumn)`
  padding: 45px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
`;
const Header = styled(FlexCenterColumn)`
  margin-bottom: 30px;
`;
// 한개의 페이지에 여러 커스텀 훅 사용
const LoginPage = () => {
  return (
    <Layout>
      <Box>
        <Header>
          <Title size="40px" color="#6633cc">
            Moon Player
          </Title>
          <Avatar src="images/Loginlogo.png" height="100px" width="100px" />
        </Header>
        <LoginForm />
      </Box>
    </Layout>
  );
};

export default LoginPage;
