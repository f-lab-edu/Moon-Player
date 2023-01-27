import AlarmDialog from 'components/Global/UI/Dialog/Alarm/AlarmDialog';
import ConfirmDialog from './Confirm/ConfirmDialog';
import MusicDialog from './Music/MusicDialog';
export const DiaLog = () => {
  return (
    <>
      <AlarmDialog />
      <MusicDialog />
      <ConfirmDialog />
    </>
  );
};

export default DiaLog;
