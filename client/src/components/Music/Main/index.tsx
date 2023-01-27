import Flex from 'components/Global/style/Flex';
import styled from 'styled-components';

import { useResolution } from 'hooks/useResolution';
import { PlayList } from './PlayList/index';
import { MusicList } from './MusicList/index';
import { useEffect } from 'react';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';

// 데스톱일떄 모바일일떄 렌더링 할 대상을 정한다.

export const Main = () => {
  const { isOpenMusicList } = useMusicPageUIControl();
  const { resolution, setResolution } = useResolution();

  useEffect(() => {
    // 새로고침시 상태유지
    return window.innerWidth >= 1200 ? setResolution('DESKTOP') : setResolution('MOBILE');
  }, [resolution]);

  const renderUI = resolution === 'DESKTOP' ? DeskTopUI() : MobileUI(isOpenMusicList);
  return <>{renderUI}</>;
};

const DeskTopUI = () => {
  return (
    <DeskTopLayout direction="row" alignItems="center" justifyContent="center">
      <MusicList />
      <PlayList />
    </DeskTopLayout>
  );
};
const MobileUI = (isOpenMusicList) => {
  return <MobileLayout direction="column">{isOpenMusicList ? <MusicList /> : <PlayList />}</MobileLayout>;
};
const DeskTopLayout = styled(Flex)`
  padding: 0 48px 24px 48px;
`;
const MobileLayout = styled(Flex)`
  padding: 0 48px 24px 48px;
`;

export default Main;
