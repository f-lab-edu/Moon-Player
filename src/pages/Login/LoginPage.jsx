import styled from "styled-components"
import Layout from "../../components/items/Layout";
import LoginPageHeader from "./components/LoginPageHeader";
import LoginMain from "./components/LoginPageMain";



const LoginPageLayout = styled(Layout)`
  align-items: center;
  height:100vh;
`



const LoginPage = () => {
  return <LoginPageLayout>
    <LoginPageHeader />
    <LoginMain />
  </LoginPageLayout>

}

export default LoginPage;
