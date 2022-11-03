// import Layout from "components/items/Layout";
import { Nav } from './components/Nav';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const UserPage = () => {
  return (
    <Layout>
      <Nav />
    </Layout>
  );
};
export default UserPage;
