import styled from 'styled-components'
import Layout from '../../components/items/Layout';
import LoginPageMain from './components/LoginPageMain';
import LoginPageHeader from './components/LoginPageHeader';

const LoginPageLayout = styled(Layout)`
  align-items: center;
  height:100vh;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginPageHeader />
      <LoginPageMain />
    </LoginPageLayout>
  )
}

export default LoginPage;
