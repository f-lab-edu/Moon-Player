import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import Title from "components/items/Title";


const MusicPlayerHeaderLayout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
border-bottom: 1px solid rgba(0,0,0,0.3);
height: 55px;

>:last-child{
    margin-right: 10px;
}
`
const MusicPlayerInfo = styled(Title)`
    font-size: 20px;
    font-weight: 900;
    color: black;
    
`


const MusicPlayerHeader = () => {
  return (
    <>
      <MusicPlayerHeaderLayout>
        <MusicPlayerInfo>셔플</MusicPlayerInfo>
        <FontAwesomeIcon icon={faShuffle} size={"2x"} color={"#6633cc"} />

      </MusicPlayerHeaderLayout>
    </>
  )
}

export default MusicPlayerHeader