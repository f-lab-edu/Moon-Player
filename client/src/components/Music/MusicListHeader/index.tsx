import DesktopHeader from 'components/Music/MusicListHeader/Desktop/DesktopHeader';
import MobileHeader from 'components/Music/MusicListHeader/Mobile/MobileHeader';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';

import useResolution from 'hooks/useResolution';
import { useEffect } from 'react';
export const MusicListHeader = ({ title }) => {
  const { resolution } = useResolution();

  const { onhandleOpenPlayerListUI, onhandleOpenMusicListUI } = useMusicPageUIControl();
  const renderHeader = resolution === 'DESKTOP' ? <DesktopHeader title={title} /> : <MobileHeader />;

  useEffect(() => {
    if (resolution === 'DESKTOP') {
      onhandleOpenMusicListUI(true);
      onhandleOpenPlayerListUI(true);
    }
  }, [resolution]);
  return <>{renderHeader}</>;
};
export default MusicListHeader;
