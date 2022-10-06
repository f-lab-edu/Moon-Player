import styled from "styled-components";
import Title from "components/items/Title";

const LoginHeaderLayout = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 10px 0px;
`
// 똑같은 중복속성인데 시맨틱 태그떄문에 어쩔수없음 상속 x



const LoginPageHeader = () => {
  return (
    <LoginHeaderLayout>
      <Title>Moon Player</Title>
    </LoginHeaderLayout>
  );
};

export default LoginPageHeader;
