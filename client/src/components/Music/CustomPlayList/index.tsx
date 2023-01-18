import styled from 'styled-components';
import { useRef } from 'react';
import AddMusicList from './AddMusicList';
import Flex from 'components/Global/style/Flex';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import MyMusicList from './MyMusicList/index';
import useUIControl from 'hooks/useUIControl';

export const CustomPlayList = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { onhandleCustomPlayListUI, isOpenAddMusicListUI, onhandleAddMusicListUI, onhandleMyMusicListUi } =
    useUIControl();

  const handleCloseButton = () => {
    onhandleCustomPlayListUI(false);
    onhandleAddMusicListUI(false);
    onhandleMyMusicListUi(false);
  };
  return (
    <Overlay>
      <Layout direction="column" ref={modalRef}>
        <CloseButton onClick={handleCloseButton} name="close" color="white" size="2x" />
        {isOpenAddMusicListUI ? <AddMusicList /> : <MyMusicList />}
      </Layout>
    </Overlay>
  );
};
const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9997;
  padding: 15px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 7px;
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
`;
const Layout = styled(Flex)`
  position: relative;
  width: 500px;
  height: fit-content;
  padding: 30px;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
export default CustomPlayList;
