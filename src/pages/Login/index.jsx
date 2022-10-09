import styled from 'styled-components'
import Layout from '../../components/items/Layout';
import Title from 'components/items/Title';
import Avatar from 'components/items/Avatar';
import Button from 'components/items/Button';
import Input from 'components/items/Input';
import { Link } from 'react-router-dom';
import LoginPagMainInput from './components/LoginPageMainInput';
import useAuthenticator from 'hooks/useAuthenticator';

const LoginPageLayout = styled(Layout)`
  align-items: center;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  height: 100vh;
 
`
const LoginPageHeader = styled.header`
  display: flex;
  flex-direction: column;
`
const LoginPageMain = styled.main`
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

const LoginPageMainSignBox = styled(Layout)``
const LoginPageButton = styled(Button)``
const LoginPageMainInputBox = styled(Layout)`
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const LoginPage = () => {
  const { isSignedIn, signUp, signIn, signOut } = useAuthenticator()
  return (
    <LoginPageLayout>
      <LoginPageHeader>
        <Title>Moon Player</Title>
      </LoginPageHeader>

      <LoginPageMain>
        <Avatar />
        <LoginPageMainInputBox>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Link>아이디 / 비밀번호 찾기</Link>
        </LoginPageMainInputBox>
        <LoginPageMainSignBox>
          <LoginPageButton onClick={() => signIn()}>로그인</LoginPageButton>
          <LoginPageButton>회원가입</LoginPageButton>
        </LoginPageMainSignBox>

      </LoginPageMain>

    </LoginPageLayout>
  )
}

export default LoginPage;
