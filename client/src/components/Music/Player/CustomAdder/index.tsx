import styled from 'styled-components';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import Flex from 'components/Global/style/Flex';
import Button from 'components/Global/style/Button/Button';
import { Text } from 'components/Global/style/Text';
import { useAppSelector } from 'hooks/useAppDispatch';
import { MusicItem } from 'components/Global/UI/MusicItem/MusicItem';
import { ScrollBox } from '../../../Global/style/ScrollBox';

export const CustomAdder = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url }, index) => (
        <MusicItem name={name} img_url={img_url} key={index} id={++index} />
      ))
    ) : (
      <EmptyText>재생 목록이 비어있습니다.</EmptyText>
    );
  return (
    <Layout direction="column" justifyContent="center">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <InputBox direction="row" alignItems="center" gap="15px">
          <InputTitle>이름</InputTitle>
          <Input />
        </InputBox>
        <SaveButton>저장</SaveButton>
      </Flex>
      <MusicBox>{playerMusics}</MusicBox>
    </Layout>
  );
};
export default CustomAdder;

const MusicBox = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;
const Layout = styled(Flex)`
  img {
    width: 100px;
    height: 90px;
  }
`;
const InputBox = styled(Flex)`
  margin-bottom: 10px;
`;
const SaveButton = styled(Button)`
  color: black;
  background-color: white;
  border: none;
  font-size: 16px;
  width: 50px;
  height: 30px;
  border-radius: 7px;
  margin: 10px;
`;
const Input = styled.input`
  width: 300px;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 5px;
`;
const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;
const InputTitle = styled(Text)`
  font-size: 17px;
  width: 40px;
  padding: 5px;
`;
