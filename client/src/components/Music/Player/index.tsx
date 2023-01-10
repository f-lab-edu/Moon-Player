import styled from 'styled-components';
import Music from 'components/Music/Player/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';
import { Flex } from 'components/Global/style/Flex';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';

import { useModal } from 'hooks/useModal';
import CustomAdder from './Custom/Adder';
import { useState } from 'react';

// 플레이어 메인
export const Player = () => {
  const { onUIClose } = useModal();
  const [isOpenCustomAddr, setIsOpenCustomAdder] = useState(false);

  const playerSelector = useAppSelector((state) => state.music.player);
  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url, source_url }, index) => (
        <Music name={name} img_url={img_url} key={index} id={++index} source_url={source_url} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );

  return (
    <Overlay>
      {isOpenCustomAddr ? <CustomAdder onClose={() => setIsOpenCustomAdder(false)} /> : <></>}
      <Layout direction="column">
        <CloseButton onClick={onUIClose} name="close" color="white" size="2x" />
        <Header direction="row" justifyContent="space-between">
          <Title>재생 목록</Title>
          <Box>
            {/* 페이지 전환 */}
            <IconButton name="list" size="2x" color="white" />
            <IconButton
              name="plus"
              size="2x"
              color="white"
              onClick={() => {
                setIsOpenCustomAdder(!isOpenCustomAddr);
              }}
            />
          </Box>
        </Header>
        <PlayerList>{playerMusics}</PlayerList>
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

const PlayerList = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.64);
`;
const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;
const Box = styled.div`
  padding-top: 10px;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
export default Player;
