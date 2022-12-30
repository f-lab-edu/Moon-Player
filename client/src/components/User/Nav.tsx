import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Flex from 'components/Global/style/Flex';
import { Text } from 'components/Global/style/Text';

const Root = styled(Flex)`
  background-color: black;
  width: 300px;
  height: 100vh;
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
    <Root direction="column" justifyContent="center" alignItems="center">
      <Navigation onClick={() => navigate('/music')}>
        <Menu>홈으로</Menu>
      </Navigation>
      <Navigation onClick={() => navigate('/user')}>
        <Menu>버그 리포트</Menu>
      </Navigation>
    </Root>
  );
};
const Menu = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: white;
`;
export default Nav;
