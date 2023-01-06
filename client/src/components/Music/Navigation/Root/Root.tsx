import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';

export const Root = () => {
  const { signOut } = useAuthenticator();

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Header>
        <AvatarImage img="logo" />
        <Title>Moon Player</Title>
      </Header>
      <Nav direction="row">
        <StyledLink to="/user">
          <FontAwesomeIcon icon={faUser} color="white" />
          <StyledText>내정보</StyledText>
        </StyledLink>
        <StyledLink to="#" onClick={signOut}>
          <FontAwesomeIcon icon={faRightFromBracket} color="white" />
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
  font-size: 21px;
`;
const Nav = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;

export default Root;
