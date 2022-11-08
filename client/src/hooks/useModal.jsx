import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from 'store/feature/layout/LayoutSlice';

export const useModal = () => {
  const modal = useSelector((state) => state.layout.modal);

  const isOpen = modal.isOpen;
  const text = modal.text;
  return { isOpen, text };
};

export default useModal;
