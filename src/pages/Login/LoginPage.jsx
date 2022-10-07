import styled from 'styled-components'
import LoginHeader from "./components/LoginHeader";
import LoginMain from "./components/LoginMain";



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
    <LoginMain/>
    </Container>
    )
}

export default LoginPage;
