import styled from 'styled-components';
import { useAuthenticator } from 'hooks/useAuthenticator';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import useModal from 'hooks/useModal';
import LogOutConfirm from 'components/Global/UI/LogOutConfirm/LogOutConfirm';

export const Navigation = () => {
  const { onOpenPlayerUI, onOpenConfirmUI } = useModal();
  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Header>
        <AvatarImage img="logo" />
      </Header>
      <Nav direction="row">
        <IconButton name="user" color="white" size="1x" />
        <IconButton name="music" color="white" size="1x" onClick={onOpenPlayerUI} />
        <IconButton name="bracket" color="white" size="1x" onClick={onOpenConfirmUI} />
      </Nav>
      <LogOutConfirm />
    </Layout>
  );
};
const Layout = styled(Flex)`
  width: 100vw;
  padding: 24px 48px;
  background: linear-gradient(rgba(0, 0, 0, 0.64), transparent);
  position: relative;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 0 8px;
`;

const AvatarImage = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
const Nav = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;

export default Navigation;
