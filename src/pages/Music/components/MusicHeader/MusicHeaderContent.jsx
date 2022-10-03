import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
gap: 3px;
`
    

const ItemBox=styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
`
const Item=styled.li`
    margin-top: 5px;
    color: pink;
    font-weight: 900;
`

const MusicHeaderContent = () => {
    return (
        <Container>
            <ItemBox>
            <Item><Link><FontAwesomeIcon icon={faRightFromBracket} /></Link></Item>
            <Item>로그아웃</Item>    
            </ItemBox>
            <ItemBox>            
            <Item><Link><FontAwesomeIcon icon={faMagnifyingGlass} /></Link></Item>
            <Item>검색</Item>
            </ItemBox>
            <ItemBox>
            <Item><Link><FontAwesomeIcon icon={faUser} /></Link></Item>
            <Item>내정보</Item>
            </ItemBox>    
        </Container>
        
    )
}

export default MusicHeaderContent