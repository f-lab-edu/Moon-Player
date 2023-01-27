import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import styled from 'styled-components';

export const HideButton = () => {
  const { onhandleOpenMusicFooterUI, isOpenMusicFooterUI } = useMusicPageUIControl();

  const renderHideButton = !isOpenMusicFooterUI ? (
    <IconButton name="up" color="white" size="1x" />
  ) : (
    <IconButton name="down" color="white" size="1x" />
  );
  return <Layout onClick={() => onhandleOpenMusicFooterUI(!isOpenMusicFooterUI)}>{renderHideButton}</Layout>;
};
const Layout = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0px;
  transform: translateY(-20px);
`;

export default HideButton;
