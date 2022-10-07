import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Layout from "components/items/Layout";
import ItemLayout from "../../../../../components/items/ItemLayout";


const MusicHeaderContentLayout = styled(Layout)`
flex-direction: row;
gap: 3px;
`

const MusicHeaderItemBox = styled(ItemLayout)`
    list-style: none;
`
const MusicHeaderItem = styled.li`
    margin-top: 5px;
    color: white;

    text-shadow: 1px 1px 1px gray;
    font-weight: 900;
`

const MusicPageHeaderItems = () => {
  const navigate = useNavigate()
  const onLogOutHandler = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate("/")
    alert("정상적으로 로그아웃 되었습니다.")
  }

  return (
    <MusicHeaderContentLayout>
      <MusicHeaderItemBox>
        <MusicHeaderItem>
          <Link onClick={onLogOutHandler}><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </MusicHeaderItem>
        <MusicHeaderItem >로그아웃</MusicHeaderItem>
      </MusicHeaderItemBox>
      <MusicHeaderItemBox>
        <MusicHeaderItem><Link><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></MusicHeaderItem>
        <MusicHeaderItem>검색</MusicHeaderItem>
      </MusicHeaderItemBox>
      <MusicHeaderItemBox>
        <MusicHeaderItem><Link><FontAwesomeIcon icon={faUser} /></Link></MusicHeaderItem>
        <MusicHeaderItem>내정보</MusicHeaderItem>
      </MusicHeaderItemBox>
    </MusicHeaderContentLayout>

  )
}

export default MusicPageHeaderItems