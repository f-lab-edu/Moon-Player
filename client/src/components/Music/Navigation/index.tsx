import styled from 'styled-components';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import useModal from 'hooks/useModal';
import { ConfirmContext } from 'provider/Confirm/ConfirmContext';
import { useContext } from 'react';

export const Navigation = () => {
  const { onOpenPlayerUI } = useModal();
  const confirmCtx = useContext(ConfirmContext);

  const handleLogoutButton = () => {
    confirmCtx.showConfirm('로그아웃 하시겠습니까?', 'Logout');
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Header>
        <StyledAvatar img="logo" />
      </Header>
      <Nav direction="row">
        <IconButton name="user" color="white" size="1x" />
        <IconButton name="music" color="white" size="1x" onClick={onOpenPlayerUI} />
        <IconButton name="bracket" color="white" size="1x" onClick={handleLogoutButton} />
      </Nav>
    </Layout>
  );
};
const Layout = styled(Flex)`
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

const StyledAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
const Nav = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;

export default Navigation;
