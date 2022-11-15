import { useEffect, useRef } from 'react';

// 이전값을 저장하고있는 커스텀 훅
const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
