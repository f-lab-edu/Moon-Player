import styled from "styled-components";
import Title from "components/items/Title";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;


const LoginHeader = () => {
  return (
    <Container>
      <Title>Moon Player</Title>
    </Container>
  );
};

export default LoginHeader;
