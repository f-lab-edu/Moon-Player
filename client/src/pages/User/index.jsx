// import Layout from "components/items/Layout";
import { Nav } from './components/Nav';
import styled from 'styled-components';
import Report from './components/Report';
const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserPage = () => {
  return (
    <Layout>
      <Nav />
      <Report></Report>
    </Layout>
  );
};
export default UserPage;
