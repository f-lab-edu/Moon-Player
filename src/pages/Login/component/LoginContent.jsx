import styled from 'styled-components'

const LoginMainContainer=styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 50vh;
margin: 40px;
`

const BoxContainer=styled.div`
   width: 100%;

   margin-bottom: 20px;

`
const Box=styled.div`
`
const Button = styled.button`
    width: 100%;
    height: 60px;
    font-size: 20px;
    margin: 10px 0px;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius:6px;
`

const Input=styled.input`
    width: 500px;
    height: 40px;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 10px;
    margin-top: 20px;
    border-radius:6px;
    font-size: 20px;
`



const LoginContent = () => {
    return (
        <LoginMainContainer>
            <BoxContainer>
            <Box>
            <Input placeholder='Email'/>        
            </Box>
            <Box>    
            <Input placeholder='Password'/>
            </Box>
            </BoxContainer>
            
            <BoxContainer>
            <Box>
            <Button>로그인</Button>
            </Box>
            <Box>           
            <Button>회원가입</Button>
            </Box>
            <Box>
            <Button>아이디/비밀번호찾기</Button>
            </Box>
            </BoxContainer>
        </LoginMainContainer>
    )
}

export default LoginContent;