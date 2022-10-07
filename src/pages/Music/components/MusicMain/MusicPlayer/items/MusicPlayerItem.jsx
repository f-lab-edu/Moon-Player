import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Image from "components/items/Image";

const MusicPlayerItemLayout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: inherit;
margin: 0px;
border-bottom: 1px solid rgba(0,0,0,0.1);
>:last-child{
    margin-right: 10px;
}
`
const MusicPlayerItems = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
   
`
const MusicPlayerItemTitle = styled.h3`
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
      <MusicPlayerItemLayout>
        <MusicPlayerItems>
          <MusicPlayerItemImage />
          <div>
            <MusicPlayerItemTitle>노래 : 좋은날</MusicPlayerItemTitle>
            <MusicPlayerItemTitle>가수 : 아이유 </MusicPlayerItemTitle>
          </div>
        </MusicPlayerItems>
        <FontAwesomeIcon icon={faClose} size={"2x"} color={"#6633cc"} />

      </MusicPlayerItemLayout>
    </>

  )
}

export default MusicPlayerItem