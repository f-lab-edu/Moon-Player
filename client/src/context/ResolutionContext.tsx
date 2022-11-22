import useResolution from 'hooks/useResolution';
import { createContext, ReactElement } from 'react';

// 1. Context생성
export const ResolutionContext = createContext({
  name: '',
});

interface Props {
  children: ReactElement;
}

export const ResolutionContextProvider = ({ children }: Props) => {
  const resolution = useResolution();
  return <ResolutionContext.Provider value={{ name: resolution }}>{children}</ResolutionContext.Provider>;
};
export default ResolutionContextProvider;
