import styled from 'styled-components';

import IconButton from 'components/Global/UI/IconButton/IconButton';
import { Header } from './Header';
import Table from './Table';
export const Root = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Layout>
      <Box>
        <CloseButton onClick={handleClose} name="close" color="white" size="2x" />
        <Header />
        <Table />
      </Box>
    </Layout>
  );
};

const Layout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
const Box = styled.div`
  position: relative;
  width: 380px;
  height: fit-content;
  padding: 30px;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
export default Root;
