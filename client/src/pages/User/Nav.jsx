import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Flex from 'components/Common/Flex';
const Root = styled(Flex)`
  background-color: black;
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
    <Root direction="column" justifyContent="center" alignItems="center" width="30vh">
      <Navigation onClick={() => navigate('/music')}>홈으로</Navigation>
      <Navigation onClick={() => navigate('/user/')}>소개</Navigation>
      <Navigation onClick={() => navigate('/user/report')}>버그 리포트</Navigation>
    </Root>
  );
};

export default Nav;
