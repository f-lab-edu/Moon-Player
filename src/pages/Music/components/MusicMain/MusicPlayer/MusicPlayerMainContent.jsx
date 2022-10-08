import styled from 'styled-components'
import MusicPlayerItem from './items/MusicPlayerItem';
import MusicPlayerHeader from './items/MusicPlayerHeader';

const MusicPlayerMainContentLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    padding-left: 0px;
    color: #6633cc;
    flex-wrap: wrap;
    height: 37vh;
    overflow: scroll;
      &::-webkit-scrollbar {
          display: none;
    }
`

const MusicPlayerMainContent = () => {
  return (
    <MusicPlayerMainContentLayout>
      <MusicPlayerHeader />
      <MusicPlayerItem />
      <MusicPlayerItem />
      <MusicPlayerItem />
      <MusicPlayerItem />
      <MusicPlayerItem />
      <MusicPlayerItem />
      <MusicPlayerItem />

    </MusicPlayerMainContentLayout>
  )
}
export default MusicPlayerMainContent