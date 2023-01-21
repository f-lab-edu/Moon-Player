import styled from 'styled-components';
import { Flex } from 'components/Global/style/Flex';
import Image from 'components/Global/style/Image';
import Text from 'components/Global/style/Text';
import { IconButton } from 'components/Global/UI/IconButton/IconButton';
import { DiaLogContext } from 'context/Dialog/index';
import { useContext } from 'react';

export const MusicDialog = () => {
  const dialogCtx = useContext(DiaLogContext);
  const musicImage = dialogCtx.state.music.img_url;
  const musicName = dialogCtx.state.music.name;
  return dialogCtx.state.music.isOpen ? (
    <Layout>
      <Box direction="column" alignItems="center">
        <StyledButton name="close" color="white" size="2x" onClick={dialogCtx.closeMusicDialog} />
        <StyledImage img={musicImage} />
        <Title textAlign="center">{musicName}</Title>
      </Box>
    </Layout>
  ) : (
    <></>
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
const Box = styled(Flex)`
  position: relative;
  width: 300px;
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
`;
const StyledImage = styled(Image)`
  width: 200px;
  height: 150px;
  margin-bottom: 10px;
`;

const Title = styled(Text)``;
const StyledButton = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;

export default MusicDialog;
