import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Adder from './Adder';
import Main from './Main';
import Flex from 'components/Global/style/Flex';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import Text from 'components/Global/style/Text';
import { useModal } from 'hooks/useModal';
import { CustomPlayList } from './CustomPlayList/index';

// 플레이어 메인

export const Player = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [isOpenPlayList, setIsOpenPlayList] = useState(true);
  const [isOpenAdder, setIsOpenAdder] = useState(false);
  const [isOpenCustomPlayList, setIsOpenCustomPlayList] = useState(false);
  const ui_name = isOpenPlayList ? 'Play List' : isOpenCustomPlayList ? 'MY PlayList' : 'ADD PlayList';

  useEffect(() => {
    document.addEventListener('mousedown', handleModalOutSide);
    return () => {
      document.removeEventListener('mousedown', handleModalOutSide);
    };
  }, []);

  const { onUIClose } = useModal();
  // UI State 세개로 관리 , => 재생목록에 대한것 ,커스텀 Addr에 대한것, 나의 재생목록에 대한것
  const handleModalOutSide = (e) => {
    if (modalRef.current?.contains(e.target)) return;
    onUIClose();
  };
  const handlePlayListUI = () => {
    setIsOpenPlayList(true);
    setIsOpenAdder(false);
    setIsOpenCustomPlayList(false);
  };
  const handleAdderUI = () => {
    setIsOpenAdder(true);
    setIsOpenPlayList(false);
    setIsOpenCustomPlayList(false);
  };
  const handleCustomPlayListUI = () => {
    setIsOpenCustomPlayList(true);
    setIsOpenPlayList(false);
    setIsOpenAdder(false);
  };

  return (
    <Overlay>
      <Layout direction="column" ref={modalRef}>
        <CloseButton onClick={onUIClose} name="close" color="white" size="2x" />
        <Header direction="row" justifyContent="space-between" alignItems="center">
          <Title>{ui_name}</Title>
          <IconButtonBox direction="row" gap="5px">
            <StyledIconButton name="plus" size="2x" color="white" onClick={handleAdderUI} active={isOpenAdder} />
            <StyledIconButton
              name="music"
              size="2x"
              color="white"
              onClick={handleCustomPlayListUI}
              active={isOpenCustomPlayList}
            />
            <StyledIconButton name="list" size="2x" color="white" onClick={handlePlayListUI} active={isOpenPlayList} />
          </IconButtonBox>
        </Header>
        {isOpenPlayList ? <Main /> : <></>}
        {isOpenAdder ? <Adder /> : <></>}
        {isOpenCustomPlayList ? <CustomPlayList /> : <></>}
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
