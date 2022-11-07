import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Flex from 'components/Common/Flex';
import { Text } from 'components/Common/Text';

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
        <Text fontSize="25px">홈으로</Text>
      </Navigation>

      <Navigation onClick={() => navigate('/user')}>
        <Text fontSize="25px">버그 리포트</Text>
      </Navigation>
    </Root>
  );
};

export default Nav;
