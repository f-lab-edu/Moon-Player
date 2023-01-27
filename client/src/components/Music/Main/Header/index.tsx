import DesktopHeader from 'components/Music/Main/Header/Desktop/DesktopHeader';
import MobileHeader from 'components/Music/Main/Header/Mobile/MobileHeader';

import useResolution from 'hooks/useResolution';
import { useEffect } from 'react';

// Header의 상태 값에 따라 어떤 헤더를 렌더링할지 결정한다.
export const MainHeader = ({ title }) => {
  const { resolution, setResolution } = useResolution();

  const renderHeader = resolution === 'DESKTOP' ? <DesktopHeader title={title} /> : <MobileHeader />;

  useEffect(() => {
    // 새로고침시 상태 갱신
    if (window.innerWidth >= 1200) {
      setResolution('DESKTOP');
    } else {
      setResolution('MOBILE');
    }
  }, [resolution]);

  return <>{renderHeader}</>;
};
export default MainHeader;
