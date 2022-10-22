import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import useAuthenticator from '../../../../hooks/useAuthenticator';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  gap: 3px;
`

const Box = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    >:last-child {
      a {
        color:white;
      }
    }
`

const Wrapper = styled.li`
  color: white;
  text-shadow: 1px 1px 1px gray;
  font-weight: 900;
  > a{
    text-decoration: none;
  }
`

const Items = () => {
  const { signOut } = useAuthenticator()
  const onLogOutHandler = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <Layout>
      <Box>
        <Wrapper>
          <Link to="#" onClick={onLogOutHandler}><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </Wrapper>
        <Wrapper >
          <Link to="#" onClick={onLogOutHandler}>
            로그아웃
          </Link>
        </Wrapper>
      </Box>
      <Box>
        <Wrapper>
          <Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
        </Wrapper>
        <Wrapper>
          <Link to='/search'>검색</Link>
        </Wrapper>
      </Box>
      <Box>
        <Wrapper><Link to='/user'><FontAwesomeIcon icon={faUser} /></Link></Wrapper>
        <Wrapper>
          <Link to='/user'> 내정보</Link>
        </Wrapper>
      </Box>
    </Layout >

  )
}

export default Items