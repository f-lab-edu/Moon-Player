import styled from "styled-components"
import Progressbar from "components/items/Progressbar"
import MusicPlayerFooter from "./items/MusicPlayerFooter";

const MusicPlayerListFooterLayout = styled.div``

const MusicPlayerMainFooter = () => {
  return (
    <MusicPlayerListFooterLayout>
      <Progressbar />
      <MusicPlayerFooter />
    </MusicPlayerListFooterLayout>
  )
}
export default MusicPlayerMainFooter