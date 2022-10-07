import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types"
import Layout from "../../../../components/items/Layout";
import Button from "../../../../components/items/Button";
import { Sign } from "pages/Login/utils/LoginPage";


const LoginBoxLayout = styled(Layout)``

const LoginPageButton = styled(Button)`

`


const LoginPageMainSignBox = ({ isSign, SignData }) => {
  const navigate = useNavigate();
  const LoginClickHandler = () => {
    if (!isSign) {
      Sign(SignData)
      navigate("/music")
    }
  }

  return (
    <LoginBoxLayout>
      <LoginPageButton onClick={LoginClickHandler} disabled={isSign}>로그인</LoginPageButton>
      <LoginPageButton >회원가입</LoginPageButton>
    </LoginBoxLayout>
  );
};


LoginPageMainSignBox.propTypes = {
  isSign: PropTypes.bool,
  SignData: PropTypes.object
}

export default LoginPageMainSignBox;
