import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import { OverFlowText } from 'components/Global/style/OverFlowText';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';

export const MusicListItem = ({ title, id, onUIHandle }) => {
  // PlayListTitle 누르면 플레이어 목록들이 나오게끔 구현  //
  // 이떄 서버로부터 데이터페칭해서 전역스토어에 저장하면될듯
  //subHeader로 변경
  // 클릭시 서버로부터 데이터 페칭해서 가져오고 렌더링 현재는 mockdata 데이터 변화도 존재해야됨

  return (
    <Layout direction="row" justifyContent="space-between" alignItems="center" onClick={onUIHandle}>
      <PlayListNumber>{id}</PlayListNumber>
      <PlayListTitle>{title}</PlayListTitle>
      <IconButton color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Layout>
  );
};
const Layout = styled(Flex)`
  padding: 0px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  &:last-child {
    border-bottom: none;
  }
  height: 84px;
  overflow: hidden;
`;
const PlayListNumber = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;
const PlayListTitle = styled(OverFlowText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
`;
export default MusicListItem;
