import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "components/items/Image";

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
margin: 0px;
border-bottom: 1px solid rgba(0,0,0,0.3);
>:last-child{
    margin-right: 10px;
}
`
const MusicPlayerInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const MusicPlayerInfo = styled.h3`
    font-size: 15px;
    margin: 1px;
    font-weight: 900;
`
const MusicPlayerItemImage = styled(Image)`
    margin: 0px 10px 1px 0px;
    width: 50px;
    height: 50px;
    
`

const MusicPlayerItem = () => {
  return (
    <>
      <Container>
        <MusicPlayerInfoBox>
          <MusicPlayerItemImage />
          <div>
            <MusicPlayerInfo>노래 : 좋은날</MusicPlayerInfo>
            <MusicPlayerInfo>가수 : 아이유 </MusicPlayerInfo>
          </div>
        </MusicPlayerInfoBox>
        <FontAwesomeIcon icon={faClose} size={"2x"} color={"#6633cc"} />

      </Container>
    </>

  )
}

export default MusicPlayerItem