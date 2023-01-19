import { useUIControl } from 'hooks/useUIControl';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import styled from 'styled-components';

export const Hide = () => {
  const { onhandleMusicFooterUI, isOpenMusicFooterUI } = useUIControl();

  const renderHideButton = isOpenMusicFooterUI ? (
    <IconButton name="up" color="white" size="1x" />
  ) : (
    <IconButton name="down" color="white" size="1x" />
  );
  return <Layout onClick={() => onhandleMusicFooterUI(!isOpenMusicFooterUI)}>{renderHideButton}</Layout>;
};
const Layout = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0px;
  transform: translateY(-20px);
`;

export default Hide;
