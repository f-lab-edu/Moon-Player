import styled from 'styled-components';
import MusicPageHeader from './components/MusicHeader/MusicPageHeader';
import MusicPageNav from './components/MusicNav/MusicPageNav';
import MusicPageMain from './components/MusicMain/MusicPageMain';
import MusicPageFooter from './components/MusicFooter/MusicFooterPage';
import Layout from 'components/items/Layout';

const MusicPageLayout = styled(Layout)`
background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`

const MusicPage = () => {
  return <MusicPageLayout>
    <MusicPageHeader />
    <MusicPageNav />
    <MusicPageMain />
    <MusicPageFooter />
  </MusicPageLayout>
};

export default MusicPage;
