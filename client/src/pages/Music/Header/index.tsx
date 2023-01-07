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
      </Flex>
      <Flex direction="row" alignItems="center">
        <StyledLink to="#" onClick={signOut}>
          <FontAwesomeIcon icon={faRightFromBracket} color="gray" style={{ height: '22px'}} />
        </StyledLink>
        <StyledLink to="/user">
          <FontAwesomeIcon icon={faUser} color="gray" style={{ height: '22px'}} />
        </StyledLink>
      </Flex>
    </Root>
  );
};

const Root = styled(Flex)`
  width: 100vw;
  padding: 24px 48px;
  background: linear-gradient(rgba(0,0,0,0.64), transparent);
  position: relative;
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
  margin: 0 8px;
`;

export default Header;
