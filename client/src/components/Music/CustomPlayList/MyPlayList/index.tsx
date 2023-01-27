/* eslint-disable max-len */
import DataList from './DataList/DataList';
import { useMusicPageUIControl } from 'hooks/useMusicPageUIControl';
import { MusicList } from './MusicList/MusicList';
export const MyPlayList = () => {
  // DataList를 렌더링할지 MusicList 렌더링할지 결정한다
  const { isOpenMyPlayListOptionUI } = useMusicPageUIControl();
  return <>{isOpenMyPlayListOptionUI ? <DataList /> : <MusicList />}</>;
};
export default MyPlayList;
