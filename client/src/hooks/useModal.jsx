import { useState, useEffect } from 'react';
export const useModal = (state) => {
  const [modal, setModal] = useState(state);
  useEffect(() => {
    setModal(state);
  }, [state]);
  const isOpen = modal.isOpen;
  const text = modal.text;
  return { isOpen, text };
};

export default useModal;
