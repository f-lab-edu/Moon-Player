// import Layout from "components/items/Layout";
import UserNav from "./components/UserNav";
import UserMain from "./components/UserMain";
import styled from "styled-components";

const UserPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const UserPage = () => {
  return (
    <UserPageLayout>
      <UserNav />
      <UserMain />
    </UserPageLayout>
  )

}
export default UserPage