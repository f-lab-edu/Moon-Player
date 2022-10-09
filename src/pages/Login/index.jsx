import styled from 'styled-components'
import Title from 'components/items/Title';
import Avatar from 'components/items/Avatar';
import Button from 'components/items/Button';
import Layout from 'components/items/Layout';
import useAuthenticator from 'hooks/useAuthenticator';
import Form from './components/Form';

const LoginPageLayout = styled(Layout)`
  align-items: center;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  height: 100vh;
`
const HeaderLayout = styled.header`
  display: flex;
  flex-direction: column;
`
const MainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 45px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background: rgba(255,255,255,0.5);
  >:last-child{
    width: 100%;
    margin-top: 15px;
  }
  margin: 0px 0px 15px 0px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`

// 한개의 페이지에 여러 커스텀 훅 사용
const LoginPage = () => {
  const { isSignedIn, signUp, signIn } = useAuthenticator()

  return (
    <LoginPageLayout>
      <HeaderLayout>
        <Title>Moon Player</Title>
      </HeaderLayout>
      <MainLayout>
        <Avatar />
        <Form />
        <ButtonBox>
          <Button onClick={() => signIn()}>로그인</Button>
          <Button>회원가입</Button>
        </ButtonBox>
      </MainLayout>

    </LoginPageLayout>
  )
}

export default LoginPage;
