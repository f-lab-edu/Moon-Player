import Text from 'components/Global/style/Text';
import styled from 'styled-components';

const DesktopHeader = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
    </>
  );
};

const Title = styled(Text)`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.64);
  padding-left: 10px;
  font-weight: normal;
`;
export default DesktopHeader;
