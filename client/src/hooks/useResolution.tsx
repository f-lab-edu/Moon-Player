import { useState, useEffect } from 'react';

// call in Global Component and inject to Context
export const useResolution = () => {
  const [resolution, setResolution] = useState<'MOBILE' | 'TABLET' | 'DESKTOP'>('DESKTOP');
  useEffect(() => {
    const ev = () => {
      if (window.innerWidth > 768) return setResolution('MOBILE');
      if (window.innerWidth > 1024) return setResolution('TABLET');
      return setResolution('DESKTOP');
    };
    window.addEventListener('resize', ev);

    return () => {
      window.removeEventListener('resize', ev);
    };
  }, []);

  return resolution;
};

export default useResolution;
