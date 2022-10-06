import styled from "styled-components"
import Title from "components/items/Title"
import MusicPageNavItems from "./items/MusicPageNavItems";

const MusicNavLayout = styled.nav`
    display: flex;
    flex-direction: column;
    
`
const MusicNavTitle = styled(Title)`
 text-align: center;
 font-size :25px;
`


const MusicPageNav = () => {
  return (
    <MusicNavLayout>
      <MusicNavTitle>인기차트</MusicNavTitle>
      <MusicPageNavItems />
    </MusicNavLayout>
  )
}

export default MusicPageNav