import styled from "styled-components";
import Avatar from "components/items/Avatar";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";
import SignBox from "./SignBox";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const LoginMain = () => {
  return (
    <Container>
      <Avatar />
      <Wrapper>
        <SignBox />
      </Wrapper>
      <Wrapper>
        <LoginBox />
      </Wrapper>
    </Container>
  );
};

export default LoginMain;
