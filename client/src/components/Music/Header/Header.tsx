import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Common/Avatar';

import Flex from 'components/Common/Flex';
import Text from 'components/Common/Text';

export const Header = () => {
  const { signOut } = useAuthenticator();
  const handleLogout = () => signOut();

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" alignItems="center" margin="15px">
        <Avatar src="images/Loginlogo.png" width="50px" height="50px" />
        <Text fontSize="30px" color="white" margin="20px">
          Moon Player
        </Text>
      </Flex>
      <Flex direction="row" alignItems="center">
        <StyledLink to="#" onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightFromBracket} color="gray" />
          <Text align="center" margin="10px" color="white" fontSize="18px">
            로그아웃
          </Text>
        </StyledLink>
        <StyledLink to="/user">
          <FontAwesomeIcon icon={faUser} color="gray" />
          <Text align="center" margin="10px" color="white" fontSize="18px">
            내정보
          </Text>
        </StyledLink>
      </Flex>
    </Root>
  );
};

const Root = styled(Flex)`
  width: 100vw;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
export default Header;
