import styled from "styled-components"
import Layout from "../../components/items/Layout";
import LoginPageMain from "./components/LoginPageMain";
import LoginPageHeader from "./components/LoginPageHeader";



const LoginPageLayout = styled(Layout)`
  align-items: center;
  height:100vh;
`



const LoginPage = () => {
  return <LoginPageLayout>
    <LoginPageHeader />
    <LoginPageMain />
  </LoginPageLayout>

}

export default LoginPage;
