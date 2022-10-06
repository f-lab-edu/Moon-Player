import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../../../components/items/Layout";
import Button from "../../../../components/items/Button";


const LoginBoxLayout = styled(Layout)``


const LoginPageMainSignBox = () => {
  return (
    <LoginBoxLayout>
      <Button>
        <Link to="/music">로그인</Link>
      </Button>
      <Button>
        <Link to="/music">회원가입</Link>
      </Button>
    </LoginBoxLayout>
  );
};

export default LoginPageMainSignBox;
