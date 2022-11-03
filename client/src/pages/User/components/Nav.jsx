import styled from 'styled-components';

const Root = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 30vw;
  color: white;
  font-size: 30px;
  gap: 30px;
`;

export const Nav = () => {
  return (
    <Root>
      <div>홈으로</div>
      <div>내정보</div>
      <div>버그 리포트</div>
    </Root>
  );
};
