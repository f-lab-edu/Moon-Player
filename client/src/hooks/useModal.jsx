import { useState } from 'react';
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return { toggle, isOpen };
};

export default useModal;
