import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';

import { FlexCenterRow } from 'components/Common/FlexCenterRow';
import { FlexCenterColumn } from 'components/Common/FlexCenterColumn';
import { Avatar } from 'components/Common/Avatar';
import { Title } from 'components/Common/Title';
import { removeStoreItems } from 'utils/app';
import FlexBetweenRow from 'components/Common/FlexBetweenRow';

const Root = styled(FlexBetweenRow)`
  width: 100vw;
`;
const IconWrapper = styled(FlexCenterColumn)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  gap: 5px;
  > a {
    color: white;
    text-decoration: none;
  }
  margin: ${({ theme }) => theme.margins.base};
`;

export const Container = () => {
  const theme = useContext(ThemeContext);
  const { signOut } = useAuthenticator();
  const handleLogout = () => {
    removeStoreItems();

    signOut();
  };

  return (
    <Root>
      <FlexCenterRow>
        <Avatar src={theme.images.Logo} width="50px" height="50px" style={{ margin: theme.margins.lg }} />
        <Title size={theme.fontSizes.xxxl} color={theme.colors.blueMagent}>
          Moon Player
        </Title>
      </FlexCenterRow>
      <FlexCenterRow style={{ fontWeight: theme.fontWeights.bold, textShadow: '1px 1px 1px gray' }}>
        <IconWrapper>
          <Link to="#" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} color={theme.colors.blueMagent} />
          </Link>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} color={theme.colors.blueMagent} />
          </Link>
          <Link to="/user"> 내정보</Link>
        </IconWrapper>
      </FlexCenterRow>
    </Root>
  );
};
export default Container;
