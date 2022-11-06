import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Common/Avatar';
import { Title } from 'components/Common/Title';
import { removeStoreItems } from 'utils/persist';
import Flex from 'components/Common/Flex';
const Root = styled(Flex)`
  width: 100vw;
`;
const IconWrapper = styled(Flex)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  gap: 5px;
  > a {
    color: white;
    text-decoration: none;
  }
  margin: ${({ theme }) => theme.margins.base};
`;

export const Header = () => {
  const theme = useContext(ThemeContext);
  const { signOut } = useAuthenticator();
  const handleLogout = () => {
    removeStoreItems();

    signOut();
  };

  return (
    <Root direction="row" justifyContent="space-between" alignItems="center">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Avatar src={theme.images.Logo} width="50px" height="50px" style={{ margin: theme.margins.lg }} />
        <Title size={theme.fontSizes.xxxl} color={theme.colors.white}>
          Moon Player
        </Title>
      </Flex>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ fontWeight: theme.fontWeights.bold, textShadow: '1px 1px 1px gray' }}
      >
        <IconWrapper direction="column" justifyContent="center" alignItems="center">
          <Link to="#" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} color={theme.colors.gray} />
          </Link>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </IconWrapper>
        <IconWrapper direction="column" justifyContent="center" alignItems="center">
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} color={theme.colors.gray} />
          </Link>
          <Link to="/user"> 내정보</Link>
        </IconWrapper>
      </Flex>
    </Root>
  );
};
export default Header;
