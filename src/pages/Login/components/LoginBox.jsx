import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  > div {
    display: flex;
    gap: 5px;
  }
`;
const Box = styled.div``;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 20px;
  margin: 10px 0px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #6633cc;
  border-radius: 6px;
  > a {
    color: white;
    text-decoration: none;
  }
`;

const LoginBox = () => {
  return (
    <Container>
      <Box>
        <Button>
          <Link to="/music">로그인</Link>
        </Button>
        <Button>회원가입</Button>
      </Box>
    </Container>
  );
};

export default LoginBox;
