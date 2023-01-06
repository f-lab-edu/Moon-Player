import styled from 'styled-components';
import PlayerFooter from 'components/Music/Player/Footer';
import Music from 'components/Music/Player/List/Item/Item';
import Text from 'components/Global/style/Text';
import ScrollBox from 'components/Global/style/ScrollBox';
import { useAppSelector } from 'hooks/useAppDispatch';
import { Flex } from 'components/Global/style/Flex';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import { useState } from 'react';
import CustomPlayList from 'components/Music/Player/CustomPlayList/Root';

// 플레이어 메인
export const Root = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenUI = () => {
    setIsOpen(!isOpen);
  };
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
    <Layout>
      {isOpen ? <CustomPlayList onClose={handleOpenUI} /> : <></>}
      <PlayerHeader direction="row" justifyContent="space-between">
        <Title>재생 목록</Title>
        <IconButton name="list" size="2x" color="white" onClick={handleOpenUI}></IconButton>
      </PlayerHeader>
      <PlayerList>{playerMusics}</PlayerList>
      <PlayerFooter />
    </Layout>
  );
};

const Layout = styled.div`
  width: 30%;
  padding: 15px;
  border: 1px solid white;
  border-radius: 7px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 50px;
  }
`;

const PlayerHeader = styled(Flex)`
  margin-bottom: 10px;
`;

const PlayerList = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
const EmptyText = styled(Text)`
  color: white;
  font-size: 20px;
`;
export default Root;
