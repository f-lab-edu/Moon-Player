import { useRef } from 'react';

const useMoveDownScroll = () => {
  const element = useRef(null);

  const handleScrollElement = () => {
    element.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return { element, handleScrollElement };
};

export default useMoveDownScroll;
