import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import Icon from 'components/Global/UI/Icon/Icon';

export const Navigation = () => {
  const { signOut } = useAuthenticator();

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Header>
        <AvatarImage img="logo" />
        <Title>Moon Player</Title>
      </Header>
      <Nav direction="row">
        <StyledLink to="/user">
          <Icon name="user" color="white" size="1x" />
          <StyledText>내정보</StyledText>
        </StyledLink>
        <StyledLink to="#" onClick={signOut}>
          <Icon name="bracket" color="white" size="1x" />
          <StyledText>로그아웃</StyledText>
        </StyledLink>
      </Nav>
    </Layout>
  );
};

const Layout = styled(Flex)`
  width: 100vw;
  padding: 10px 0px 10px 20px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 10px;
`;

const AvatarImage = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
const Title = styled(Text)`
  font-size: 36px;
  color: white;
`;

const StyledText = styled(Text)`
  color: white;
  margin-top: 15px;
  font-size: 20px;
`;
const Nav = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;

export default Navigation;
