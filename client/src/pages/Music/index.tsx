import styled from 'styled-components';
import Flex from 'components/Global/style/Flex';
import Navigation from 'components/Music/Navigation/';
import Genre from 'components/Music/Genre';
import Player from 'components/Music/Player';
import PlayList from 'components/Music/PlayList';
import Footer from 'components/Music/Footer';
import useModal from 'hooks/useModal';
const MusicPage = () => {
  const { isOpenPlayerUI } = useModal();
  return (
    <Layout>
      <Navigation />
      <Genre />
      <PlayList />
      <Footer />
      {isOpenPlayerUI ? <Player /> : <></>}
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
`;

// const Main = styled(Flex)`
//   height: auto;
//   padding: 0 48px 24px 48px;
//   justify-content: center;
//   overflow: hidden;

//   @media screen and (max-width: 1024px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;
export default MusicPage;
