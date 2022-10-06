import styled from "styled-components";
import MusicPageHeader from "./components/MusicHeader/MusicPageHeader";
import MusicPageNav from "./components/MusicNav/MusicPageNav";
import MusicPageMain from "./components/MusicMain/MusicPageMain";
import Layout from "components/items/Layout";

const MusicPageLayout = styled(Layout)`
  padding: 0px 15px;
  height: 100vh;

`

const MusicPage = () => {
  return <MusicPageLayout>
    <MusicPageHeader />
    <MusicPageNav />
    <MusicPageMain />
  </MusicPageLayout>
};

export default MusicPage;
