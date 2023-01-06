import styled from 'styled-components';

import IconButton from 'components/Global/UI/IconButton/IconButton';
import { Header } from './Header';
export const Root = () => {
  const handleClose = () => {
    console.log('close');
  };
  return (
    <Layout>
      <Box>
        <CloseButton onClick={handleClose} icon="close" color="white" size="2x" />
        <Header />
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
  background-image: linear-gradient(90deg, #000000 0%, #434343 100%);

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
