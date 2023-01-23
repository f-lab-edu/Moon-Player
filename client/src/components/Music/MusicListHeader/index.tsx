import DesktopHeader from 'components/Global/UI/MusicListHeader/Desktop/DesktopHeader';
import MobileHeader from 'components/Global/UI/MusicListHeader/Mobile/MobileHeader';

import useResolution from 'hooks/useResolution';
export const MusicListHeader = ({ title }) => {
  const { resolution } = useResolution();
  const renderHeader = resolution === 'DESKTOP' ? <DesktopHeader title={title} /> : <MobileHeader />;
  return <>{renderHeader}</>;
};
export default MusicListHeader;
