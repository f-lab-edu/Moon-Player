import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import CustomAdder from './CustomAdder';
import Main from './PlayerList';
import Flex from 'components/Global/style/Flex';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import Text from 'components/Global/style/Text';
import { useModal } from 'hooks/useModal';
import { CustomPlayList } from './CustomPlayList/index';
import { MainHeader } from './Header/MainHeader/MainHeader';
import { useAppSelector } from 'hooks/useAppDispatch';

// 플레이어 메인

export const Player = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const playerUI = useAppSelector((state) => state.layout.player);
  const playerHeader =
    playerUI.header === 'main-header' ? <MainHeader name={playerUI.ui} title={playerUI.title} /> : <></>;
  const playerRenderUI =
    playerUI.ui === 'custom-PlayList' ? (
      <CustomPlayList />
    ) : playerUI.ui === 'custom-Adder' ? (
      <CustomAdder />
    ) : (
      <Main />
    );

  const { onClosePlayerUI } = useModal();
  useEffect(() => {
    document.addEventListener('mousedown', handleModalOutSide);
    return () => {
      document.removeEventListener('mousedown', handleModalOutSide);
    };
  }, []);

  const handleModalOutSide = (e) => {
    if (modalRef.current?.contains(e.target)) return;
    onClosePlayerUI();
  };

  return (
    <Overlay>
      <Layout direction="column" ref={modalRef}>
        <CloseButton onClick={onClosePlayerUI} name="close" color="white" size="2x" />
        {playerHeader}
        {playerRenderUI}
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
  z-index: 9999;
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
const Header = styled(Flex)`
  margin: 15px;
`;
const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.64);
`;
const IconButtonBox = styled(Flex)`
  margin: 10px;
`;

const StyledIconButton = styled(IconButton)`
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
export default Player;
