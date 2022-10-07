import styled from "styled-components"
import Title from "components/items/Title"
import MusicPageNavItems from "./items/MusicPageNavItems";

const MusicNavLayout = styled.nav`
    display: flex;
    flex-direction: column;
    
`
const MusicNavTitle = styled(Title)`

  text-shadow: 1px 1px 1px gray;
  font-weight: 900;
 text-align: center;
 font-size :30px;

`


const MusicPageNav = () => {
  return (
    <MusicNavLayout>
      <MusicNavTitle>인기 차트</MusicNavTitle>
      <MusicPageNavItems />
    </MusicNavLayout>
  )
}

export default MusicPageNav