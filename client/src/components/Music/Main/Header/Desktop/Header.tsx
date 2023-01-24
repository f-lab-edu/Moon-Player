import Text from 'components/Global/style/Text';
import styled from 'styled-components';

// 데스크톱 화면일때 보여주는 헤더
const DesktopHeader = ({ title }) => {
  return <Root>{title}</Root>;
};

const Root = styled(Text)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
  padding-left: 10px;
  font-weight: bold;
`;
export default DesktopHeader;
