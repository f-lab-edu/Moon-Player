import styled from 'styled-components'
import LoginHeader from "./component/LoginHeader";
import LoginContent from "./component/LoginContent";



const Container = styled.div`
  display:flex;
  height:100vh;
  flex-direction: column;
  align-items: center;
`



const LoginPage = () => {
  return (
    <Container>     
    <LoginHeader />
    <LoginContent/>
    </Container>
    )
}

export default LoginPage;
