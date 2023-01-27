import styled from 'styled-components';
import { Avatar } from 'components/Global/style/Avatar';

import Flex from 'components/Global/style/Flex';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import { useContext } from 'react';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';

import { DiaLogContext } from 'context/Dialog/index';

export const Navigation = () => {
  const dialogCtx = useContext(DiaLogContext);

  const { onhandleOpenCustomPlayListUI, onhandleOpenAddPlayListUI } = useMusicPageUIControl();
  const handleLogOutButton = () => {
    dialogCtx.showConfirm('Logout');
  };
  const handleOpenCustomPlayListUI = () => {
    onhandleOpenCustomPlayListUI(true);
    onhandleOpenAddPlayListUI(true);
  };

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center">
      <Header>
        <StyledAvatar img="logo" />
      </Header>
      <Box direction="row">
        <IconButton name="user" color="white" size="1x" />
        <IconButton name="music" color="white" size="1x" onClick={handleOpenCustomPlayListUI} />
        <IconButton name="bracket" color="white" size="1x" onClick={handleLogOutButton} />
      </Box>
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
const Box = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;

export default Navigation;
