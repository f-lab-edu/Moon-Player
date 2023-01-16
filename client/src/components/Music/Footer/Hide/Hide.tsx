import { useModal } from 'hooks/useModal';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import styled from 'styled-components';

export const Hide = () => {
  const { onhandleFooterUI, isOpenFooterUI } = useModal();

  const renderHideButton = isOpenFooterUI ? (
    <IconButton name="up" color="white" size="1x" />
  ) : (
    <IconButton name="down" color="white" size="1x" />
  );
  return <Layout onClick={onhandleFooterUI}>{renderHideButton}</Layout>;
};
const Layout = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0px;
  transform: translateY(-20px);
`;

export default Hide;
