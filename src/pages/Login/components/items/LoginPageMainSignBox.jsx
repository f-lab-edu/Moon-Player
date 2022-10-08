import styled from 'styled-components';
import PropTypes from 'prop-types'
import Layout from '../../../../components/items/Layout';
import Button from '../../../../components/items/Button';
import useAuthenticator from 'hooks/useAuthenticator';

const LoginBoxLayout = styled(Layout)``
const LoginPageButton = styled(Button)`

`

const LoginPageMainSignBox = () => {
  const { signIn } = useAuthenticator();

  return (
    <LoginBoxLayout>
      <LoginPageButton onClick={() => signIn()}>로그인</LoginPageButton>
      <LoginPageButton>회원가입</LoginPageButton>
    </LoginBoxLayout>
  );
};

LoginPageMainSignBox.propTypes = {
  isSignedIn: PropTypes.bool,
  SignUp: PropTypes.func
}

export default LoginPageMainSignBox;
