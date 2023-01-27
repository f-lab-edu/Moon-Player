import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Text from 'components/Global/style/Text';
import { OverFlowText } from 'components/Global/style/OverFlowText';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';

export const DataListItem = ({ title, id }) => {
  // onClick을하면 MusicList UI로 전환시킨다.
  const { onhandleMyPlayListOptionUI } = useMusicPageUIControl();

  return (
    <Layout
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      onClick={() => {
        onhandleMyPlayListOptionUI(false);
      }}
    >
      <DataListNumber>{id}</DataListNumber>
      <DataListTitle>{title}</DataListTitle>
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
const DataListNumber = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;
const DataListTitle = styled(OverFlowText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
`;
export default DataListItem;
