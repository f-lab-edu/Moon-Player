import { Provider } from 'react-redux';
export function getWrapper(store) {
  // eslint-disable-next-line react/display-name
  return ({ children }) => <Provider store={store}>{children}</Provider>;
}
