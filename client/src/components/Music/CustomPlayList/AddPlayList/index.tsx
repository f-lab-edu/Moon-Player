import styled from 'styled-components';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import Flex from 'components/Global/style/Flex';
import { Text } from 'components/Global/style/Text';
import { useAppSelector } from 'hooks/useAppDispatch';
import Music from 'components/Global/UI/Music/Music';
import { ScrollBox } from 'components/Global/style/ScrollBox';
import { useContext } from 'react';
import { ConfirmContext } from 'provider/Confirm';
import MainHeader from '../Header/MainHeader/MainHeader';
export const AddPlayList = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const confirmCtx = useContext(ConfirmContext);

  const handleSaveButton = () => {
    confirmCtx.showConfirm('현재 재생목록을 저장하시겠습니까?', 'Save');
  };

  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url }, index) => (
        <Music name={name} img_url={img_url} key={index} id={++index} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );

  return (
    <>
      <MainHeader title="나만의 플레이리스트 추가" />
      <Layout direction="column" justifyContent="center">
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <InputBox direction="row" alignItems="center" gap="15px">
            <Input placeholder="최소 4자~10자이내에 입력해주세요." />
            <IconButton name="save" size="2x" color="white" onClick={handleSaveButton}></IconButton>
          </InputBox>
        </Flex>
        <Title>재생목록</Title>
        <MusicList>{playerMusics}</MusicList>
      </Layout>
    </>
  );
};
export default AddPlayList;

const MusicList = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;
const Layout = styled(Flex)`
  h3 {
    font-size: 16px;
    margin-right: 10px;
  }
  div {
    font-size: 16px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;
const InputBox = styled(Flex)`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 400px;
  font-size: 18px;
  outline: none;
  border: none;
  color: white;
  background: transparent;
  padding: 5px;
`;
const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;
const Title = styled(Text)`
  font-size: 18px;
`;
