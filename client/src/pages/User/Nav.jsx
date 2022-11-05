import styled from 'styled-components';
import { FlexCenterColumn } from 'components/Common/FlexCenterColumn';
import { useNavigate } from 'react-router-dom';

const Root = styled(FlexCenterColumn)`
  background-color: black;
  width: 30vw;
  color: white;
  font-size: 30px;
  gap: 30px;
`;

const Navigation = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
export const Nav = () => {
  const navigate = useNavigate();
  return (
    // 눌렀을떄 해당 페이지로 이동`
    <Root>
      <Navigation onClick={() => navigate('/music')}>홈으로</Navigation>
      <Navigation onClick={() => navigate('/user/')}>소개</Navigation>
      <Navigation onClick={() => navigate('/user/report')}>버그 리포트</Navigation>
    </Root>
  );
};

export default Nav;
