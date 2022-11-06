// import Layout from "components/items/Layout";
import Nav from './Nav';
import styled from 'styled-components';
import Info from './Info';
import Flex from 'components/Common/Flex';

const Layout = styled(Flex)`
  height: 100vh;
`;
const UserPage = () => {
  return (
    <Layout flex-direction="row">
      <Nav></Nav>
      <Info></Info>
    </Layout>
  );
};
export default UserPage;
