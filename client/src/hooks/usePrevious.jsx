import { useEffect, useRef } from 'react';

// 이전값을 저장하고있는 커스텀 훅
const usePrevious = (value) => {
  const ref = useRef();
  const previousValue = ref.current;

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return previousValue;
};
export default usePrevious;
