import { useEffect, useRef } from 'react';

// 이전값을 저장하고있는 커스텀 훅
const usePrevious = (value: number): number | undefined => {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
