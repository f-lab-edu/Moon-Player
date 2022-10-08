import styled from 'styled-components';
import Title from 'components/items/Title';
import MusicPageHeaderItems from './items/MusicPageHeaderItems';

const MusicHeaderLayout = styled.header`
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0px 30px;
`
const MusicHeaderTitle = styled(Title)`
  font-size:30px;
`

const MusicPageHeader = () => {
  return <MusicHeaderLayout>
    <MusicHeaderTitle>Moon Player</MusicHeaderTitle>
    <MusicPageHeaderItems />
  </MusicHeaderLayout>

}

export default MusicPageHeader