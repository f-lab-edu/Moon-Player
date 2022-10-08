import styled from "styled-components";
import PropTypes from "prop-types"
import Layout from "../../../../components/items/Layout";
import Button from "../../../../components/items/Button";


const LoginBoxLayout = styled(Layout)``

const LoginPageButton = styled(Button)`

`


const LoginPageMainSignBox = ({ isSignIn, SignUp }) => {
  const LoginClickHandler = () => {

    if (!isSignIn) {
      SignUp()
    }
  }

  return (
    <LoginBoxLayout>
      <LoginPageButton onClick={LoginClickHandler} disabled={isSignIn}>로그인</LoginPageButton>
      <LoginPageButton >회원가입</LoginPageButton>
    </LoginBoxLayout>
  );
};


LoginPageMainSignBox.propTypes = {
  isSignIn: PropTypes.bool,
  SignUp: PropTypes.func
}

export default LoginPageMainSignBox;
