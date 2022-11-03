import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { persistor } from 'index';
import { FlexCenterRow } from 'components/Common/FlexCenterRow';
import { FlexCenterColumn } from 'components/Common/FlexCenterColumn';
import { Avatar } from 'components/Common/Avatar';
import { Title } from 'components/Common/Title';

const Root = styled(FlexCenterRow)`
  width: 100vw;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled(FlexCenterColumn)`
  font-size: 18px;
  gap: 5px;
  > a {
    color: white;
    text-decoration: none;
  }
  margin: 10px;
`;

export const Container = () => {
  const { signOut } = useAuthenticator();
  const handleLogout = async () => {
    signOut();
    persistor.purge();
  };

  return (
    <Root>
      <FlexCenterRow>
        <Avatar src="images/Loginlogo.png" width="50px" height="50px" style={{ margin: '20px' }} />
        <Title size="35px" color="#6633cc">
          Moon Player
        </Title>
      </FlexCenterRow>
      <FlexCenterRow style={{ fontWeight: 900, textShadow: '1px 1px 1px gray' }}>
        <IconWrapper>
          <Link to="#" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} color="#6633cc" />
          </Link>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </IconWrapper>
        <IconWrapper>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} color="#6633cc" />
          </Link>
          <Link to="/user"> 내정보</Link>
        </IconWrapper>
      </FlexCenterRow>
    </Root>
  );
};
export default Container;
