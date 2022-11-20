import { useRef } from 'react';

const useMoveDownScroll = () => {
  const element = useRef<HTMLDivElement>(null);

  const handleScrollElement = () => {
    if (element.current === null) return;
    element.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return { element, handleScrollElement };
};

export default useMoveDownScroll;
