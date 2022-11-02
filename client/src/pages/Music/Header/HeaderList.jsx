import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { persistor } from 'index';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 3px;
`;

const Box = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  > :last-child {
    a {
      color: white;
    }
  }
`;

const Wrapper = styled.li`
  color: white;
  text-shadow: 1px 1px 1px gray;
  font-weight: 900;
  > a {
    text-decoration: none;
  }
`;

export const HeaderList = () => {
  const { signOut } = useAuthenticator();
  const handleLogout = async () => {
    signOut();
    persistor.purge();
  };

  return (
    <Layout>
      <Box>
        <Wrapper>
          <Link to="#" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="#" onClick={handleLogout}>
            로그아웃
          </Link>
        </Wrapper>
      </Box>

      <Box>
        <Wrapper>
          <Link to="/user">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </Wrapper>
        <Wrapper>
          <Link to="/user"> 내정보</Link>
        </Wrapper>
      </Box>
    </Layout>
  );
};
