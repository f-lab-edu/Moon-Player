import styled from 'styled-components';
import { FlexCenterColumn } from 'components/Common/FlexCenterColumn';
const Root = styled(FlexCenterColumn)`
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
      <div>버그 리포트</div>
    </Root>
  );
};

export default Nav;
