import styled from 'styled-components'
import MusicPlayerMainContent from './MusicPlayerMainContent'
import MusicPlayerMainFooter from './MusicPlayerMainFooter';

const MusicPlayerLayout = styled.div`
  margin-left: 50px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
`

const MusicPlayer = () => {
  return (
    <MusicPlayerLayout>
      <MusicPlayerMainContent />
      <MusicPlayerMainFooter />
    </MusicPlayerLayout>

  )
}

export default MusicPlayer