import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../../../components/items/Layout";
import Button from "../../../../components/items/Button";


const LoginBoxLayout = styled(Layout)``

const LoginPageButton = styled(Button)`
`


const LoginPageMainSignBox = () => {
  return (
    <LoginBoxLayout>
      <LoginPageButton>
        <Link to="/music">로그인</Link>
      </LoginPageButton>
      <LoginPageButton>
        <Link to="/music">회원가입</Link>
      </LoginPageButton>
    </LoginBoxLayout>
  );
};

export default LoginPageMainSignBox;
