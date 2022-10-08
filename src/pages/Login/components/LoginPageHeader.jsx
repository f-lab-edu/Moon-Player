import styled from 'styled-components';
import Title from 'components/items/Title';

const LoginPageHeaderLayout = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 10px 0px;
`
// 똑같은 중복속성인데 시맨틱 태그떄문에 어쩔수없음 상속 x

const LoginPageHeader = () => {
  return (
    <LoginPageHeaderLayout>
      <Title>Moon Player</Title>
    </LoginPageHeaderLayout>
  );
};

export default LoginPageHeader;
