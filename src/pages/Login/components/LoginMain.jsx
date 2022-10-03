import styled from "styled-components";
import Avatar from "components/items/Avatar";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);

  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin: 10px 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #6633cc;
  color: white;
  border-radius: 6px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline-width: 0;

  padding: 10px;
  margin-top: 20px;
  font-size: 20px;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  > a {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    text-decoration: none;
  }
`;

const RegisterBox = styled.div`
  > div {
    display: flex;
    gap: 5px;
  }
`;


const LoginMain = () => {
  return (
    <MainContainer>
      <Avatar />
      <Container>
        <SignBox>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <a href="#">아이디 / 비밀번호 찾기</a>
        </SignBox>
      </Container>
      <Container>
        <RegisterBox>
          <div>
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </div>
        </RegisterBox>
      </Container>
    </MainContainer>
  );
};

export default LoginMain;
