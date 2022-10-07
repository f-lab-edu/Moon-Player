import styled from "styled-components";
import Avatar from "components/items/Avatar";
import LoginPageMainSignBox from "./items/LoginPageMainSignBox";
import LoginPagMainInputBox from "./items/LoginPageMainInputBox";

const LoginPageMainLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  >:last-child{
    width: 100%;
    margin-top: 15px;
  }
`;

const LoginPageMain = () => {
  return (
    <LoginPageMainLayout>
      <Avatar />
      <LoginPagMainInputBox />
      <LoginPageMainSignBox />
    </LoginPageMainLayout>
  );
};

export default LoginPageMain;
