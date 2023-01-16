import styled from 'styled-components';
import IconButton from 'components/Global/UI/IconButton/IconButton';

import Flex from 'components/Global/style/Flex';
import { Text } from 'components/Global/style/Text';
import { useAppSelector } from 'hooks/useAppDispatch';
import Music from 'components/Global/UI/Music/Music';
import { ScrollBox } from 'components/Global/style/ScrollBox';
import useModal from 'hooks/useModal';
import SaveConfirm from 'components/Global/UI/Confirm/SaveConfirm/SaveConfirm';

export const CustomAdder = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const { onOpenConfirmUI } = useModal();

  const handleSaveButton = () => {
    console.log('123');
    onOpenConfirmUI('Save');
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
    <Layout direction="column" justifyContent="center">
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <InputBox direction="row" alignItems="center" gap="15px">
          <Input placeholder="최소 4자~10자이내" />
          <IconButton name="save" size="2x" color="white" onClick={handleSaveButton}></IconButton>
        </InputBox>
      </Flex>
      <MusicBox>{playerMusics}</MusicBox>
      <SaveConfirm />
    </Layout>
  );
};
export default CustomAdder;

const MusicBox = styled(ScrollBox)`
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
  border-radius: 7px;
  padding: 5px;
`;
const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;
