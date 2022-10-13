import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/items/Layout';
import ItemLayout from '../../../components/items/ItemLayout';
import useAuthenticator from '../../../hooks/useAuthenticator';

const HeaderItemLayout = styled(Layout)`
  flex-direction: row;
  gap: 3px;
`

const HeaderItemBox = styled(ItemLayout)`
  list-style: none;
`
const HeaderItem = styled.li`
  margin-top: 5px;
  color: white;

  text-shadow: 1px 1px 1px gray;
  font-weight: 900;
`

const HeaderItems = () => {
  const { signOut } = useAuthenticator()
  const onLogOutHandler = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <HeaderItemLayout>
      <HeaderItemBox>
        <HeaderItem>
          <Link to="#" onClick={onLogOutHandler}><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </HeaderItem>
        <HeaderItem >로그아웃</HeaderItem>
      </HeaderItemBox>
      <HeaderItemBox>
        <HeaderItem><Link to='/search'><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></HeaderItem>
        <HeaderItem>검색</HeaderItem>
      </HeaderItemBox>
      <HeaderItemBox>
        <HeaderItem><Link to='/user'><FontAwesomeIcon icon={faUser} /></Link></HeaderItem>
        <HeaderItem>내정보</HeaderItem>
      </HeaderItemBox>
    </HeaderItemLayout>

  )
}

export default HeaderItems