import styled from "styled-components";
import { Link } from "react-router-dom";
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
    color: purple;
    font-weight: 900;
`

const MusicPageHeaderItems = () => {
  return (
    <MusicHeaderContentLayout>
      <MusicHeaderItemBox>
        <MusicHeaderItem>
          <Link><FontAwesomeIcon icon={faRightFromBracket} /></Link>
        </MusicHeaderItem>
        <MusicHeaderItem>로그아웃</MusicHeaderItem>
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