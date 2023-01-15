import { useModal } from 'hooks/useModal';
import IconButton from 'components/Global/UI/IconButton/IconButton';
import styled from 'styled-components';

export const Hide = () => {
  const { onhandleFooterUI, isOpenFooterUI } = useModal();

  const renderHideButton = isOpenFooterUI ? (
    <IconButton name="up" color="white" size="1x" onClick={onhandleFooterUI} />
  ) : (
    <IconButton name="down" color="white" size="1x" onClick={onhandleFooterUI} />
  );
  return <Layout onClick={onhandleFooterUI}>{renderHideButton}</Layout>;
};
const Layout = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 10px;
  margin-right: 5px;
`;

export default Hide;
