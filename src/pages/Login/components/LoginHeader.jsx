import styled from "styled-components";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
const Title = styled.h3`
  font-size: 35px;
  color: #6633cc;
  text-shadow: 2px 2px 2px gray;
`;

const LoginHeader = () => {
  return (
    <Container>
      <Title>Moon Player</Title>
    </Container>
  );
};

export default LoginHeader;
