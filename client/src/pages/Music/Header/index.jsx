import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Common/Avatar';

import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';
const Root = styled(Flex)`
  width: 100vw;
  padding: 0px 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 1000px) {
    position: relative;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin: 5px;
`;

const LinkText = styled(Text)`
  text-align: center;
  margin: 10px;
`;

export const Header = () => {
  const theme = useContext(ThemeContext);
  const { signOut } = useAuthenticator();
  const handleLogout = () => {
    signOut();
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Avatar src={theme.images.Logo} width="50px" height="50px" margin={theme.margins.lg} />
        <Text fontSize={theme.fontSizes.xxxl} color={theme.colors.white}>
          Moon Player
        </Text>
      </Flex>
      <Flex direction="row" justifyContent="center" alignItems="center">
        <StyledLink to="#" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} color={theme.colors.gray} />
          <LinkText>로그아웃</LinkText>
        </StyledLink>
        <StyledLink to="/user">
          <FontAwesomeIcon icon={faUser} color={theme.colors.gray} />
          <LinkText>내정보</LinkText>
        </StyledLink>
      </Flex>
    </Root>
  );
};
export default Header;
