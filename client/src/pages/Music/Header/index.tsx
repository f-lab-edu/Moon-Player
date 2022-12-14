import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';

export const Header = () => {
  const { signOut } = useAuthenticator();

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" alignItems="center">
        <AvatarHeader img="logo" />
        <Title>Moon Player</Title>
      </Flex>
      <Flex direction="row" alignItems="center">
        <StyledLink to="#" onClick={signOut}>
          <FontAwesomeIcon icon={faRightFromBracket} color="gray" />
          <StyledText>로그아웃</StyledText>
        </StyledLink>
        <StyledLink to="/user">
          <FontAwesomeIcon icon={faUser} color="gray" />
          <StyledText>내정보</StyledText>
        </StyledLink>
      </Flex>
    </Root>
  );
};

const Root = styled(Flex)`
  width: 100vw;
  padding: 30px;
`;

const AvatarHeader = styled(Avatar)`
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
  margin: 20px;
`;

const StyledText = styled(Text)`
  margin: 10px;
  color: white;
  font-size: 20px;
  align-items: center;
`;

export default Header;
