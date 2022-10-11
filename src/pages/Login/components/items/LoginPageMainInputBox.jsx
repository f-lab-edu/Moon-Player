import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "components/items/Layout";

const LoginInputLayout = styled(Layout)`
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: 0;
  background: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline-width: 0;
  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
`;

const LoginPagMainInputBox = () => {
  return (
    <LoginInputLayout>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Link to="/music">아이디 / 비밀번호 찾기</Link>
    </LoginInputLayout>
  );
};
export default LoginPagMainInputBox;
